"""The absolute extrema of f on a circle, by Lagrange multipliers.

This is the moving picture for example-lagrange-circle: maximize and minimize
f(x,y) = x^2 + y^2 - 2x + 2y + 5 subject to x^2 + y^2 = 4.  It replaces the
earlier version of this video, whose source had been lost, and it fixes what
that version said but did not show: the curve traced on the paraboloid above
the constraint circle is now drawn in light blue, the colour the narration
calls it, and the expanding level circles the caption promises are actually
animated.

Renders to assets/videos/lagrange_circle_extrema_manim.mp4:

    manim -qh --disable_caching -o lagrange_circle_extrema_manim \
        assets/manim/lagrange_circle_extrema.py CircleExtrema

The layout is the one the old video used: the formulas in the top left, a flat
inset of the constraint circle below them, and the three-dimensional picture on
the right -- the paraboloid seen from the side, standing on a plane that
carries the constraint circle, the axes, and the gradient arrows, with dashed
lines dropping from A and B on the curve to their feet on that plane.  The
values of f sit along the bottom.

The video runs in five acts:

1. the paraboloid z = f(x,y) in its completed-square form (x-1)^2 + (y+1)^2 + 3,
   with its vertex (1,-1,3): the unconstrained minimum, which sits inside the
   constraint circle and is therefore not available;
2. the constraint circle x^2 + y^2 = 4 on the plane below, lifted to the light
   blue curve on the surface -- the values f actually takes, whose highest and
   lowest points we are after;
3. the level circles of f, which are circles about (1,-1), expanding outwards:
   the first to reach the constraint circle touches it at B and gives the
   constrained minimum, the last touches it at A and gives the maximum;
4. a point running round the constraint circle carrying grad f and grad g, in
   the picture and in the inset at once: at a general point they disagree, and
   at A and B they line up, which is grad f = lambda grad g;
5. both gradient pairs together, and a slow turn to close.

Design notes:

* Colours are the book's manim palette, which is also the palette of the still
  figure this animates (prefigure-lagrange-circle): everything about the
  constraint g is GREEN, the surface, the level curves of f and grad f are RED,
  the two extremal points are YELLOW, and the unconstrained vertex is ORANGE.
  The one addition is the curve above the constraint circle, drawn in light
  blue (BLUE_B).

* The construction.  f = (x-1)^2 + (y+1)^2 + 3, so f is 3 plus the square of
  the distance to (1,-1), and on the circle of radius 2 about the origin that
  distance runs from 2 - sqrt 2 to 2 + sqrt 2.  Hence the level circle about
  (1,-1) first meets the constraint at radius 2 - sqrt 2, at
  B = (sqrt 2, -sqrt 2) where f = 9 - 4 sqrt 2, and last meets it at radius
  2 + sqrt 2, at A = (-sqrt 2, sqrt 2) where f = 9 + 4 sqrt 2.

* The gradient arrows are drawn at 0.28 times their true length, so grad f is
  visibly shorter than grad g at B (lambda = 1 - 1/sqrt 2 < 1) and visibly
  longer at A (lambda = 1 + 1/sqrt 2 > 1), as in the still figure.

* The camera.  phi = 70 degrees looks at the bowl nearly from the side, so it
  reads as a bowl rather than as a disc, and theta = 55 degrees sends the x
  axis to the lower left and the y axis to the lower right, which puts B on the
  near left of the curve and A on the far right.  The whole construction is
  then shifted along the screen-right direction, expressed in world
  coordinates, to clear the left-hand column.

* The inset is built from flat mobjects fixed in the frame, and it is driven by
  the same angle tracker as the three-dimensional picture, so the two always
  show the same point.
"""

from manim import *
import numpy as np

# ---- the construction -------------------------------------------------------
CX, CY = 1.0, -1.0                      # f = (x-CX)^2 + (y-CY)^2 + 3
F0 = 3.0                                # the value at the vertex
R_G = 2.0                               # the constraint circle x^2 + y^2 = 4
S2 = np.sqrt(2.0)

R_MIN = R_G - S2                        # 0.586: first contact, at B
R_MAX = R_G + S2                        # 3.414: last contact, at A
A_PT = np.array([-S2, S2])              # the constrained maximum
B_PT = np.array([S2, -S2])              # the constrained minimum
F_A, F_B = 9.0 + 4.0 * S2, 9.0 - 4.0 * S2   # 14.657 and 3.343
TH_A, TH_B = 0.75 * PI, -0.25 * PI      # their angles on the constraint circle

XY_MIN, XY_MAX = -2.6, 2.6
Z_MAX = 16.0
R_SURF = 3.5                            # drawn over the disc of this radius
                                        # about (CX,CY), the paraboloid's own
                                        # axis, so the bowl is symmetric and
                                        # wide enough to carry the whole curve
R_FLOOR = 2.6                           # the half-width of the drawn plane


def f(x, y):
    return (x - CX) ** 2 + (y - CY) ** 2 + F0


def gradf(x, y):
    return np.array([2.0 * (x - CX), 2.0 * (y - CY)])


def gradg(x, y):
    return np.array([2.0 * x, 2.0 * y])


def on_circle(s):
    return np.array([R_G * np.cos(s), R_G * np.sin(s)])


XY_LEN, Z_LEN = 3.9, 4.5

CON = GREEN                             # the constraint g, and grad g
LEV = RED                               # the surface, its level curves, grad f
CURVE = BLUE_B                          # the curve above the constraint circle
EXTREME = YELLOW                        # the two constrained extrema, A and B
VERTEX = ORANGE                         # the unconstrained minimum (1,-1,3)

KG = 0.28                               # gradient arrows, relative to true size

# ---- where things sit on the screen -----------------------------------------
PHI, THETA = 64 * DEGREES, 55 * DEGREES
# screen right and screen up, expressed in world coordinates, so the three
# dimensional construction can be pushed to the right of the frame
SR = np.array([-np.sin(THETA), np.cos(THETA), 0.0])
SU = np.array([-np.cos(PHI) * np.cos(THETA), -np.cos(PHI) * np.sin(THETA),
               np.sin(PHI)])
PLOT_AT = (2.75, -1.35)                 # where the plane's centre should land

IS_ = 0.62                              # inset units per data unit
IC = np.array([-4.75, -1.05, 0.0])      # the centre of the inset: low enough
                                        # to clear the column of lettering


class CircleExtrema(ThreeDScene):
    def construct(self):
        ax = ThreeDAxes(
            x_range=[XY_MIN, XY_MAX, 1], y_range=[XY_MIN, XY_MAX, 1],
            z_range=[0, Z_MAX, 4],
            x_length=XY_LEN, y_length=XY_LEN, z_length=Z_LEN,
            axis_config={"stroke_width": 2, "include_ticks": False,
                         "stroke_opacity": 0.5},
        )
        ax.shift(ORIGIN - ax.c2p(0, 0, 0))
        ax.shift(SR * PLOT_AT[0] + SU * PLOT_AT[1])

        def p3(x, y, z=0.0):
            return ax.c2p(x, y, z)

        names = VGroup(
            MathTex("x", font_size=32).move_to(p3(XY_MAX + 0.5, 0, 0)),
            MathTex("y", font_size=32).move_to(p3(0, XY_MAX + 0.5, 0)),
            MathTex("z", font_size=32).move_to(p3(0, 0, Z_MAX + 1.3)),
        )
        self.add_fixed_orientation_mobjects(*names)

        # ---- the plane the construction stands on ----------------------------
        floor = Polygon(
            p3(-R_FLOOR, -R_FLOOR, 0), p3(R_FLOOR, -R_FLOOR, 0),
            p3(R_FLOOR, R_FLOOR, 0), p3(-R_FLOOR, R_FLOOR, 0),
            stroke_width=0, fill_color=GREY_E, fill_opacity=0.55,
        )

        # ---- the paraboloid, drawn as a mesh you can see the plane through ---
        surf = Surface(
            lambda u, v: p3(CX + u * np.cos(v), CY + u * np.sin(v),
                            f(CX + u * np.cos(v), CY + u * np.sin(v))),
            u_range=[0.0, R_SURF], v_range=[0.0, TAU],
            resolution=(14, 44), stroke_width=1.0,
        )
        surf.set_style(fill_color=RED_E, fill_opacity=0.20,
                       stroke_color=RED_C, stroke_opacity=0.45)

        # ---- the vertex, the unconstrained minimum ----------------------------
        vtx = Dot3D(p3(CX, CY, F0), radius=0.075, color=VERTEX)
        vtx_drop = DashedLine(p3(CX, CY, 0.0), p3(CX, CY, F0),
                              color=VERTEX, stroke_width=2, dash_length=0.07)
        vtx_foot = Dot3D(p3(CX, CY, 0.0), radius=0.05, color=VERTEX)

        # ---- the constraint circle, and the curve it lifts to ------------------
        gcircle = DashedVMobject(
            ParametricFunction(lambda t: p3(*on_circle(t), 0.0),
                               t_range=[0, TAU]),
            num_dashes=64, dashed_ratio=0.55)
        gcircle.set_stroke(CON, 4.5)

        def lifted(t):
            x, y = on_circle(t)
            return p3(x, y, f(x, y))

        curve = ParametricFunction(lifted, t_range=[0, TAU],
                                   color=CURVE, stroke_width=6)

        # ---- the two extrema ---------------------------------------------------
        def extreme(pt):
            x, y = pt
            return (Dot3D(p3(x, y, f(x, y)), radius=0.085, color=EXTREME),
                    Dot3D(p3(x, y, 0.0), radius=0.055, color=EXTREME),
                    DashedLine(p3(x, y, 0.0), p3(x, y, f(x, y)),
                               color=EXTREME, stroke_width=2, dash_length=0.07))

        a_dot, a_foot, a_drop = extreme(A_PT)
        b_dot, b_foot, b_drop = extreme(B_PT)
        a_tag = MathTex("A", font_size=36, color=EXTREME)
        a_tag.move_to(p3(*A_PT, F_A) + SR * 0.34 + SU * 0.30)
        b_tag = MathTex("B", font_size=36, color=EXTREME)
        b_tag.move_to(p3(*B_PT, F_B) - SR * 0.36 + SU * 0.28)

        # ---- the expanding level circles of f ----------------------------------
        rt = ValueTracker(0.06)

        def lvl_circle(r, width=3.5):
            return ParametricFunction(
                lambda t: p3(CX + r * np.cos(t), CY + r * np.sin(t), 0.0),
                t_range=[0, TAU], color=LEV, stroke_width=width)

        live_lvl = always_redraw(lambda: lvl_circle(rt.get_value()))

        # ---- the gradients, on the plane ---------------------------------------
        st = ValueTracker(-0.62 * PI)    # the angle on the constraint circle

        def arrow_at(s, vec, colour):
            x, y = on_circle(s)
            v = vec(x, y)
            return Arrow3D(p3(x, y, 0.0), p3(x + KG * v[0], y + KG * v[1], 0.0),
                           color=colour, thickness=0.016,
                           height=0.15, base_radius=0.05)

        run_dot = always_redraw(lambda: Dot3D(
            p3(*on_circle(st.get_value()), 0.0), radius=0.065, color=WHITE))
        vec_f = always_redraw(lambda: arrow_at(st.get_value(), gradf, LEV))
        vec_g = always_redraw(lambda: arrow_at(st.get_value(), gradg, CON))

        # ---- the flat inset of the constraint circle ---------------------------
        def q2(x, y):
            return IC + IS_ * np.array([x, y, 0.0])

        ins_axes = VGroup(
            Line(q2(-2.4, 0), q2(2.4, 0), stroke_width=1.8, color=GREY_C),
            Line(q2(0, -2.4), q2(0, 2.4), stroke_width=1.8, color=GREY_C),
        )
        ins_circle = DashedVMobject(
            Circle(radius=R_G * IS_).move_to(IC), num_dashes=48,
            dashed_ratio=0.55).set_stroke(CON, 3.5)
        ins_A = Dot(q2(*A_PT), radius=0.055, color=EXTREME)
        ins_B = Dot(q2(*B_PT), radius=0.055, color=EXTREME)
        ins_tag = MathTex("x^2+y^2=4", font_size=25, color=CON)
        ins_tag.move_to(IC + DOWN * (R_G * IS_ + 0.40))
        inset = VGroup(ins_axes, ins_circle, ins_tag, ins_A, ins_B)
        self.add_fixed_in_frame_mobjects(inset)
        self.remove(inset)

        ins_dot = Dot(q2(*on_circle(st.get_value())), radius=0.06, color=WHITE)
        ins_f = Arrow(IC, IC + RIGHT, buff=0, color=LEV, stroke_width=4,
                      tip_length=0.15)
        ins_g = Arrow(IC, IC + RIGHT, buff=0, color=CON, stroke_width=4,
                      tip_length=0.15)

        def ins_update(m, vec):
            s = st.get_value()
            x, y = on_circle(s)
            v = vec(x, y)
            m.put_start_and_end_on(q2(x, y),
                                   q2(x + KG * v[0], y + KG * v[1]))

        ins_dot.add_updater(lambda m: m.move_to(q2(*on_circle(st.get_value()))))
        ins_f.add_updater(lambda m: ins_update(m, gradf))
        ins_g.add_updater(lambda m: ins_update(m, gradg))
        ins_live = VGroup(ins_dot, ins_g, ins_f)
        self.add_fixed_in_frame_mobjects(ins_live)
        self.remove(ins_live)

        # ---- the lettering -----------------------------------------------------
        # a far focal distance makes the projection all but orthographic, so
        # the bowl stays symmetric about the z axis even though the whole
        # construction is pushed to the right of the frame
        self.set_camera_orientation(phi=PHI, theta=THETA, focal_distance=200)

        formulas = VGroup(
            MathTex(r"f(x,y) = x^2+y^2-2x+2y+5", font_size=27),
            MathTex(r"\phantom{f(x,y)} = (x-1)^2+(y+1)^2+3", font_size=27),
            MathTex(r"g(x,y) = x^2+y^2-4 = 0", font_size=27),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.20)
        self.add_fixed_in_frame_mobjects(formulas)
        formulas.to_corner(UL, buff=0.38)
        self.remove(formulas)

        def caption(s, size=28):
            m = MathTex(s, font_size=size)
            self.add_fixed_in_frame_mobjects(m)
            m.move_to([0.9, -3.72, 0])
            self.remove(m)
            return m

        note_v = MathTex(r"\text{min with no constraint: } f(1,-1) = 3",
                         font_size=25, color=VERTEX)
        self.add_fixed_in_frame_mobjects(note_v)
        note_v.move_to([0.9, -2.92, 0])
        self.remove(note_v)

        values = VGroup(
            MathTex(r"\max:\ f(-\sqrt2,\sqrt2) = 9+4\sqrt2 \approx 14.66",
                    font_size=26, color=EXTREME),
            MathTex(r"\min:\ f(\sqrt2,-\sqrt2) = 9-4\sqrt2 \approx 3.34",
                    font_size=26, color=EXTREME),
        ).arrange(RIGHT, buff=0.75)
        self.add_fixed_in_frame_mobjects(values)
        values.move_to([0.9, -3.30, 0])
        self.remove(values)

        lam = MathTex(r"\nabla f = \lambda\,\nabla g", font_size=30)
        self.add_fixed_in_frame_mobjects(lam)
        lam.next_to(formulas, DOWN, aligned_edge=LEFT, buff=0.24)
        self.remove(lam)

        # ================= act one: the paraboloid and its vertex ==============
        self.play(FadeIn(floor), Create(ax), FadeIn(names), run_time=1.2)
        self.play(FadeIn(formulas[0]), FadeIn(formulas[1]), Create(surf),
                  run_time=2.2)
        self.play(FadeIn(formulas[2]), run_time=0.6)

        cap1 = caption(r"\text{with no constraint, } f \text{ would be least "
                       r"at its vertex}")
        self.play(FadeIn(cap1), Create(vtx_drop), FadeIn(vtx),
                  FadeIn(vtx_foot), FadeIn(note_v), run_time=1.5)
        self.wait(1.3)

        # ================= act two: the constraint, and the blue curve =========
        cap2 = caption(r"\text{but } (1,-1) \text{ lies inside the circle } "
                       r"x^2+y^2=4")
        self.play(FadeOut(cap1), run_time=0.4)
        self.play(FadeIn(cap2), Create(gcircle), FadeIn(inset), run_time=1.8)
        self.wait(1.4)

        cap3 = caption(r"\text{over that circle, } f \text{ traces the blue "
                       r"curve on the surface}")
        self.play(FadeOut(cap2), FadeIn(cap3), run_time=0.6)
        self.play(Create(curve), run_time=2.4)
        self.wait(1.0)

        cap4 = caption(r"\text{we want the highest and lowest points of the "
                       r"blue curve}")
        self.play(FadeOut(cap3), FadeIn(cap4), run_time=0.8)
        self.wait(1.4)

        # ================= act three: the level circles expand =================
        cap5 = caption(r"\text{the level curves } f = c \text{ are circles "
                       r"about } (1,-1)")
        self.play(FadeOut(cap4), FadeOut(vtx), FadeOut(vtx_drop), run_time=0.5)
        self.add(live_lvl)
        self.play(FadeIn(cap5), run_time=0.6)
        self.play(rt.animate.set_value(R_MIN), run_time=2.2,
                  rate_func=rate_functions.ease_in_out_sine)

        cap6 = caption(r"\text{the first to reach it touches at } B"
                       r"\text{: the minimum}")
        first = lvl_circle(R_MIN)
        self.add(first)
        self.play(FadeOut(cap5), FadeIn(cap6), run_time=0.6)
        self.add_fixed_orientation_mobjects(b_tag)
        self.remove(b_tag)
        self.play(FadeIn(b_foot), Create(b_drop), FadeIn(b_dot),
                  FadeIn(b_tag), FadeIn(values[1]), run_time=1.5)
        self.wait(1.4)

        cap7 = caption(r"\text{and the last touches at } A"
                       r"\text{: the maximum}")
        self.play(FadeOut(cap6), FadeIn(cap7), run_time=0.6)
        self.play(rt.animate.set_value(R_MAX), run_time=2.8,
                  rate_func=rate_functions.ease_in_out_sine)
        last = lvl_circle(R_MAX)
        self.add(last)
        self.remove(live_lvl)
        self.add_fixed_orientation_mobjects(a_tag)
        self.remove(a_tag)
        self.play(FadeIn(a_foot), Create(a_drop), FadeIn(a_dot),
                  FadeIn(a_tag), FadeIn(values[0]), run_time=1.5)
        self.wait(1.6)

        # ================= act four: the two gradients =========================
        cap8 = caption(r"\text{at a general point } \nabla f \text{ and } "
                       r"\nabla g \text{ disagree}")
        self.play(FadeOut(cap7), run_time=0.5)
        self.add(run_dot, vec_f, vec_g, ins_live)
        lab_f = MathTex(r"\nabla f", font_size=27, color=LEV)
        lab_g = MathTex(r"\nabla g", font_size=27, color=CON)
        self.add_fixed_orientation_mobjects(lab_f, lab_g)
        self.remove(lab_f, lab_g)

        def tip_label(m, vec, side):
            s = st.get_value()
            x, y = on_circle(s)
            v = vec(x, y)
            m.move_to(p3(x + KG * v[0], y + KG * v[1], 0.0)
                      + SU * 0.28 + SR * side * 0.14)

        lab_f.add_updater(lambda m: tip_label(m, gradf, 1.0))
        lab_g.add_updater(lambda m: tip_label(m, gradg, -1.0))
        legend = VGroup(lab_f, lab_g)
        self.play(FadeIn(cap8), FadeIn(legend), run_time=0.9)
        self.wait(0.8)
        self.play(st.animate.set_value(-0.40 * PI), run_time=1.8,
                  rate_func=linear)
        self.wait(0.7)

        cap9 = caption(r"\text{at } A \text{ and } B \text{ they line up: } "
                       r"\nabla f = \lambda\,\nabla g")
        self.play(FadeOut(cap8), FadeIn(cap9), run_time=0.6)
        self.play(st.animate.set_value(TH_B), run_time=1.4,
                  rate_func=rate_functions.ease_in_out_sine)
        self.play(FadeIn(lam), run_time=0.7)
        lam_b = MathTex(r"\text{at } B:\ \lambda = 1 - \tfrac{1}{\sqrt2}",
                        font_size=25, color=GREY_A)
        self.add_fixed_in_frame_mobjects(lam_b)
        lam_b.next_to(lam, DOWN, aligned_edge=LEFT, buff=0.22)
        self.remove(lam_b)
        self.play(FadeIn(lam_b), run_time=0.6)
        self.wait(1.4)

        self.play(st.animate.set_value(TH_A), run_time=2.8,
                  rate_func=rate_functions.ease_in_out_sine)
        lam_a = MathTex(r"\text{at } A:\ \lambda = 1 + \tfrac{1}{\sqrt2}",
                        font_size=25, color=GREY_A)
        self.add_fixed_in_frame_mobjects(lam_a)
        lam_a.next_to(lam_b, DOWN, aligned_edge=LEFT, buff=0.18)
        self.remove(lam_a)
        self.play(FadeIn(lam_a), run_time=0.6)
        self.wait(1.6)

        # ================= act five: both pairs, and a turn ====================
        cap10 = caption(r"\text{tangency of the two circles is exactly } "
                        r"\nabla f = \lambda\,\nabla g")
        for m in (run_dot, vec_f, vec_g, ins_dot, ins_f, ins_g,
                  lab_f, lab_g):
            m.clear_updaters()
        both = VGroup(arrow_at(TH_B, gradf, LEV), arrow_at(TH_B, gradg, CON),
                      Dot3D(p3(*B_PT, 0.0), radius=0.065, color=WHITE))
        ins_both = VGroup(
            Arrow(q2(*B_PT), q2(*(B_PT + KG * gradf(*B_PT))), buff=0,
                  color=LEV, stroke_width=4, tip_length=0.15),
            Arrow(q2(*B_PT), q2(*(B_PT + KG * gradg(*B_PT))), buff=0,
                  color=CON, stroke_width=4, tip_length=0.15),
            Dot(q2(*B_PT), radius=0.06, color=WHITE),
        )
        self.add_fixed_in_frame_mobjects(ins_both)
        self.remove(ins_both)
        self.play(FadeOut(cap9), FadeIn(cap10), FadeIn(both),
                  FadeIn(ins_both), run_time=1.0)
        self.wait(1.2)
        self.move_camera(theta=THETA + 34 * DEGREES, run_time=5.0)
        self.wait(1.8)
