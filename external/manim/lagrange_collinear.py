"""Why the two gradients must be collinear at a constrained extremum.

This is the moving picture behind the paragraph under (eq-lagrange-collinear)
in "The Method of Lagrange Multipliers": it animates the point that the text
asks the reader to imagine moving along the constraint curve, and shows the
component of the motion along the gradient of f dying away and changing sign
exactly at the constrained minimum.

The still figure it animates is fig-lagrange-level-curves
(prefigure-lagrange-level-curves), and it uses that figure's construction
unchanged: the level curves of f are the circles f = c, the constraint curve
g = 0 is a downward parabola tangent to the circle f = c* from outside, and
the two gradients at the point of tangency point in opposite directions.

Renders to assets/videos/lagrange_collinear_manim.mp4:

    manim -qh --disable_caching -o lagrange_collinear_manim \
        assets/manim/lagrange_collinear.py LagrangeCollinear

The video runs in six acts:

1. the level curves f = c_1 < c^* < c_3 < c_4 < c_5, then the constraint
   curve g(x,y) = 0 superposed on them;
2. a point walking from (x_1,y_1) toward (x^*,y^*), carrying the unit tangent
   T-hat, the gradient of f, and the dashed component of the gradient along
   the direction of travel -- which is negative and shrinking, so f decreases;
3. the arrival at (x^*,y^*), where that component is zero: the motion is
   perpendicular to the gradient of f;
4. the walk on to (x_2,y_2), where the component is positive and f increases,
   so (x^*,y^*) is a constrained minimum with value c^*;
5. the conclusion: T-hat is perpendicular to grad g as well (the motion stays
   on a level curve of g), and in the plane two vectors perpendicular to the
   same nonzero vector are collinear, so grad f = lambda grad g;
6. the same statement read as tangency: the level curve f = c^* and the
   constraint curve share the normal line at (x^*,y^*), so they are tangent
   there.

Design notes:

* Colours follow the book's manim palette (pd_two_tangents.py,
  mixed_partials_commute.py) and, at the same time, the colours of the
  prefigure this animates: the constraint curve and grad g are GREEN, the
  level curve f = c^* and grad f are RED, the direction of travel T-hat is
  BLUE, the other level curves are left grey, and the moving point is PINK
  (the magenta point of the chapter's static figures).

* The construction.  f(x,y) = x^2 + y^2 and g(x,y) = y + 1.5 + 0.25x^2, so the
  constraint curve is y = -1.5 - 0.25x^2 and f along it is
  F(t) = 2.25 + 1.75t^2 + 0.0625t^4, minimized at t = 0.  The five drawn
  circles are c = 1, 2.25, 4, 6.25, 9, i.e. the radii 1, 1.5, 2, 2.5, 3 of the
  prefigure, and c^* = 2.25.  At (0,-1.5) the gradients are grad f = <0,-3> and
  grad g = <0,1>: collinear, opposite, lambda = -3.

* The gauge.  A vertical scale for f stands beside the picture with the five
  level values ticked on it, and a marker rides it as the point walks.  It
  turns the sentence "the value of f decreases, then increases" into something
  visible, and it shows at a glance that the walk never reaches c_1.

* The gradient arrows are drawn at 0.28 times their true length (grad f) and
  0.8 times (grad g), the lengths the prefigure uses at (x^*,y^*); T-hat is
  drawn at 1.1.  Only the directions carry meaning, but keeping grad f
  proportional lets it visibly swing as the point travels.

* All lettering except the point names lives in the right-hand column, clear
  of the picture, as in the other animations of this chapter.
"""

from manim import *
import numpy as np

# ---- the construction -------------------------------------------------------
# f(x,y) = x^2 + y^2, so f = c is the circle of radius sqrt(c)
# g(x,y) = y + 1.5 + 0.25 x^2, so g = 0 is y = -1.5 - 0.25 x^2
C_LEVELS = [1.0, 2.25, 4.0, 6.25, 9.0]   # c_1 < c^* < c_3 < c_4 < c_5
C_STAR = 2.25                            # the constrained minimum value
T1, T2 = -1.95, 1.95                     # the parameters of (x_1,y_1), (x_2,y_2)
T_DRAW = 2.55                            # the drawn part of the constraint curve


def P(t):
    """The point of the constraint curve with x = t."""
    return np.array([t, -1.5 - 0.25 * t * t])


def GF(t):
    """grad f there."""
    x, y = P(t)
    return np.array([2.0 * x, 2.0 * y])


def GG(t):
    """grad g there."""
    x, _ = P(t)
    return np.array([0.5 * x, 1.0])


def unit(v):
    return v / np.linalg.norm(v)


def That(t):
    """The unit tangent to the constraint curve, in the direction of travel."""
    return unit(np.array([1.0, -0.5 * t]))


def DT(t):
    """The directional derivative grad f . T-hat: the rate of change of f along
    the curve.  It is F'(t)/|c'(t)| with F(t) = f(P(t))."""
    return float(np.dot(GF(t), That(t)))


def COS(t):
    """The cosine of the angle between grad f and the direction of travel; this
    is what the drawn component of the (unit-length) gradient arrow measures."""
    return float(np.dot(unit(GF(t)), That(t)))


def F(t):
    """f along the constraint curve."""
    return 2.25 + 1.75 * t * t + 0.0625 * t ** 4


# ---- the drawing ------------------------------------------------------------
S = 0.80                                 # picture units per data unit
LF, LG, LT = 0.90, 0.85, 1.25            # drawn lengths: grad f, grad g, T-hat

CURVE_G = GREEN                          # the constraint curve, and grad g
CURVE_STAR = RED                         # the level curve f = c^*, and grad f
DIR_T = BLUE                             # the direction of travel
LEVEL = GREY_B                           # the other level curves
MOVER = PINK                             # the travelling point

COL_X = 1.30                             # the left edge of the text column
GAUGE_X = 0.40                           # where the f-gauge stands
F_MAX = 14.0                             # the top of the gauge
HEAD_Y = 3.25                            # the top of the text column


class LagrangeCollinear(Scene):
    def construct(self):
        ax = Axes(
            x_range=[-3.7, 3.7, 1], y_range=[-3.9, 3.6, 1],
            x_length=7.4 * S, y_length=7.5 * S,
            axis_config={"stroke_width": 2, "include_ticks": False,
                         "stroke_opacity": 0.5, "color": GREY_C},
            tips=False,
        ).move_to([-3.55, -0.30, 0])

        def pt(xy):
            return ax.c2p(xy[0], xy[1])

        axis_labels = VGroup(
            MathTex("x", font_size=30, color=GREY_B).move_to(pt([3.5, -0.32])),
            MathTex("y", font_size=30, color=GREY_B).move_to(pt([0.34, 3.4])),
        )

        # ---- the level curves of f ------------------------------------------
        def level(c, color, width):
            return ParametricFunction(
                lambda s, r=np.sqrt(c): pt([r * np.cos(s), r * np.sin(s)]),
                t_range=[0, TAU], color=color, stroke_width=width)

        circles = VGroup(*[level(c, LEVEL, 2.0) for c in C_LEVELS])
        circles[1].set_stroke(GREY_A, 2.4)          # f = c^*, coloured in act 6

        # the label of each circle sits just outside it, as in the still figure
        tags = ["c_1", "c^*", "c_3", "c_4", "c_5"]
        anchors = [(0.62, 1.00), (-1.32, 1.14), (0, 2.16), (-1.95, 1.95),
           (-0.88, 3.04)]
        c_texts, c_labels = VGroup(), VGroup()
        for tag, (ax_, ay_) in zip(tags, anchors):
            lab = MathTex(f"f={tag}", font_size=26, color=GREY_A)
            lab.move_to(pt([ax_, ay_]))
            back = BackgroundRectangle(lab, color=BLACK, fill_opacity=0.9,
                                       buff=0.05)
            c_texts.add(lab)
            c_labels.add(VGroup(back, lab))

        # ---- the constraint curve -------------------------------------------
        gcurve = ParametricFunction(
            lambda s: pt(P(s)), t_range=[-T_DRAW, T_DRAW],
            color=CURVE_G, stroke_width=5)
        g_label = MathTex("g(x,y)=0", font_size=28, color=CURVE_G)
        g_label.move_to(pt([-0.30, -3.62]))

        # ---- the three marked points ----------------------------------------
        end_dots = VGroup(Dot(pt(P(T1)), radius=0.06, color=WHITE),
                          Dot(pt(P(T2)), radius=0.06, color=WHITE))
        end_tags = VGroup(
            MathTex("(x_1,y_1)", font_size=26, color=GREY_A)
            .next_to(pt(P(T1)), UP, buff=0.14).shift(LEFT * 0.55),
            MathTex("(x_2,y_2)", font_size=26, color=GREY_A)
            .next_to(pt(P(T2)), RIGHT, buff=0.12).shift(UP * 0.30),
        )
        star_dot = Dot(pt(P(0.0)), radius=0.06, color=WHITE)
        star_tag = MathTex("(x^*,y^*)", font_size=26, color=GREY_A)
        star_tag.move_to(pt([-1.05, -2.28]))

        # ---- the travelling point and everything it carries ------------------
        # The gradient arrows are drawn at a fixed length: only their direction
        # carries meaning here, and the true value of grad f . T-hat is in the
        # readout.  The drawn component is then the projection of a unit arrow,
        # so it shrinks to nothing exactly where the derivative does.
        tt = ValueTracker(T1)

        def arrow(tail, head, color, width=5):
            return Arrow(tail, head, buff=0, color=color, stroke_width=width,
                         tip_length=0.2, z_index=5)

        mover = always_redraw(lambda: Dot(
            pt(P(tt.get_value())), radius=0.085, color=MOVER, z_index=6))
        # Far from (x^*,y^*) the gradient is very nearly parallel to the curve,
        # so the two arrows would sit on top of each other: T-hat is drawn long
        # and thick, grad f short and thin on top of it, and the two labels are
        # pushed off to opposite sides.
        vec_T = always_redraw(lambda: arrow(
            pt(P(tt.get_value())),
            pt(P(tt.get_value()) + LT * That(tt.get_value())), DIR_T,
            width=9).set_stroke(opacity=0.5))
        vec_f = always_redraw(lambda: arrow(
            pt(P(tt.get_value())),
            pt(P(tt.get_value()) + LF * unit(GF(tt.get_value()))), CURVE_STAR))

        def comp_point(t):
            return P(t) + LF * COS(t) * That(t)

        comp = always_redraw(lambda: Line(
            pt(P(tt.get_value())), pt(comp_point(tt.get_value())),
            color=CURVE_STAR, stroke_width=10, stroke_opacity=0.7, z_index=7))
        drop = always_redraw(lambda: DashedLine(
            pt(P(tt.get_value()) + LF * unit(GF(tt.get_value()))),
            pt(comp_point(tt.get_value())),
            color=GREY_B, stroke_width=2, dash_length=0.07))

        lab_T = MathTex(r"\hat{T}", font_size=32, color=DIR_T)
        lab_gf = MathTex(r"\nabla f", font_size=32, color=CURVE_STAR)

        def follow(m, k, vec, side):
            t = tt.get_value()
            d = unit(vec(t))
            perp = np.array([-d[1], d[0]])
            m.move_to(pt(P(t) + (k + 0.30) * d + side * 0.28 * perp))

        lab_T.add_updater(lambda m: follow(m, LT, That, -1.0))
        lab_gf.add_updater(lambda m: follow(m, LF, GF, +1.0))

        carried = VGroup(comp, drop, vec_f, vec_T, mover)

        # ---- the gauge for the value of f ------------------------------------
        gauge = NumberLine(
            x_range=[0, F_MAX, 2], length=5.6, rotation=90 * DEGREES,
            include_ticks=False, include_numbers=False,
            stroke_width=2.5, color=GREY_B,
        ).move_to([GAUGE_X, -0.30, 0])
        gauge_label = MathTex("f", font_size=32, color=GREY_A)
        gauge_label.next_to(gauge.n2p(F_MAX), UP, buff=0.12)

        gauge_ticks = VGroup()
        for c, tag in zip(C_LEVELS, tags):
            colour = CURVE_STAR if tag == "c^*" else GREY_B
            tick = Line(gauge.n2p(c) + LEFT * 0.10, gauge.n2p(c) + RIGHT * 0.10,
                        color=colour, stroke_width=3)
            lab = MathTex(tag, font_size=25, color=colour)
            lab.next_to(tick, RIGHT, buff=0.10)
            gauge_ticks.add(VGroup(tick, lab))

        gauge_dot = always_redraw(lambda: Dot(
            gauge.n2p(F(tt.get_value())), radius=0.085, color=MOVER))

        # ---- the readout ------------------------------------------------------
        r_f = MathTex("f =", font_size=32)
        n_f = DecimalNumber(F(T1), num_decimal_places=2, font_size=32)
        r_d = MathTex(r"D_{\hat{T}} f = \nabla f \cdot \hat{T} =", font_size=32)
        n_d = DecimalNumber(DT(T1), num_decimal_places=2, font_size=32,
                            include_sign=True)
        row_f = VGroup(r_f, n_f).arrange(RIGHT, buff=0.14)
        row_d = VGroup(r_d, n_d).arrange(RIGHT, buff=0.14)
        readout = VGroup(row_f, row_d).arrange(DOWN, aligned_edge=LEFT, buff=0.32)
        readout.move_to([COL_X, 0.85, 0], aligned_edge=LEFT)

        def sign_colour(v):
            return CURVE_STAR if v < -0.01 else (DIR_T if v > 0.01 else YELLOW)

        n_f.add_updater(lambda m: m.set_value(F(tt.get_value()))
                        .next_to(r_f, RIGHT, buff=0.14))
        n_d.add_updater(lambda m: m.set_value(DT(tt.get_value()))
                        .next_to(r_d, RIGHT, buff=0.14)
                        .set_color(sign_colour(DT(tt.get_value()))))

        def head(*lines, size=29):
            g = VGroup(*[MathTex(s, font_size=size) for s in lines])
            g.arrange(DOWN, aligned_edge=LEFT, buff=0.24)
            g.move_to([COL_X, HEAD_Y, 0], aligned_edge=LEFT)
            return g

        # ================= act one: the two families ==========================
        h1 = head(r"\text{the level curves } f = c \text{ of } f\text{,}",
                  r"\text{and the constraint curve } g(x,y) = 0")
        self.play(Create(ax), FadeIn(axis_labels), run_time=1.0)
        self.play(FadeIn(h1[0]), Create(circles), run_time=1.8)
        self.play(FadeIn(c_labels), run_time=0.8)
        note = MathTex(r"c_1 < c^* < c_3 < c_4 < c_5", font_size=29,
                       color=GREY_A)
        note.move_to([COL_X, 1.90, 0], aligned_edge=LEFT)
        self.play(FadeIn(gauge), FadeIn(gauge_label), FadeIn(gauge_ticks),
                  FadeIn(note), run_time=1.0)
        self.wait(0.8)
        self.play(FadeIn(h1[1]), Create(gcurve), run_time=1.6)
        self.play(FadeIn(g_label), FadeIn(end_dots), FadeIn(end_tags),
                  run_time=0.8)
        self.wait(1.4)

        # ================= act two: the walk down =============================
        h2 = head(r"\text{a point travels along } C \text{ from } (x_1,y_1)"
                  r"\text{:}",
                  r"\nabla f \cdot \hat{T} < 0\text{, so } f \text{ decreases}")
        self.play(FadeOut(h1), FadeOut(note), run_time=0.5)
        self.play(FadeIn(h2[0]), run_time=0.6)
        self.add(carried, gauge_dot, lab_T, lab_gf)
        self.wait(0.4)
        self.play(FadeIn(readout), run_time=0.7)
        self.wait(0.6)
        self.play(FadeIn(h2[1]), run_time=0.6)
        # the drawn component points backwards along T-hat, and shrinks
        self.play(tt.animate.set_value(-0.02), run_time=6.5,
                  rate_func=rate_functions.ease_in_out_sine)
        self.wait(0.6)

        # ================= act three: the stationary point ====================
        h3 = head(r"\text{at } (x^*,y^*) \text{ the component dies:}",
                  r"\text{the motion is perpendicular to } \nabla f")
        self.play(FadeOut(h2), run_time=0.4)
        self.play(tt.animate.set_value(0.0), run_time=0.6)
        self.play(FadeIn(h3), run_time=0.8)

        # the right angle between the direction of travel and grad f
        d = 0.30
        u, nf = That(0.0), unit(GF(0.0))
        sq = Polygon(pt(P(0.0)), pt(P(0.0) + d * u), pt(P(0.0) + d * (u + nf)),
                     pt(P(0.0) + d * nf), color=YELLOW, stroke_width=3)
        self.play(Create(sq), FadeIn(star_dot), FadeIn(star_tag), run_time=1.0)
        self.wait(1.8)

        # ================= act four: the walk up ==============================
        h4 = head(r"\text{past } (x^*,y^*) \text{ it turns round:}",
                  r"\nabla f \cdot \hat{T} > 0\text{, so } f \text{ increases}")
        self.play(FadeOut(h3), FadeOut(sq), run_time=0.4)
        self.play(FadeIn(h4), run_time=0.6)
        self.play(tt.animate.set_value(T2), run_time=6.5,
                  rate_func=rate_functions.ease_in_out_sine)
        self.wait(1.0)

        min_note = VGroup(
            MathTex(r"\text{so } f \text{ has a local minimum on } C",
                    font_size=29),
            MathTex(r"\text{at } (x^*,y^*)\text{, of value } c^*",
                    font_size=29),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.24)
        min_note.move_to([COL_X, -1.45, 0], aligned_edge=LEFT)
        self.play(FadeIn(min_note),
                  Flash(gauge.n2p(C_STAR), color=CURVE_STAR,
                        line_length=0.18, flash_radius=0.32),
                  run_time=1.2)
        self.wait(1.8)

        # ================= act five: the two perpendiculars ===================
        h5 = head(r"\text{the motion stays on } g = 0\text{, so}",
                  r"\hat{T} \text{ is perpendicular to } \nabla g \text{ too}")
        self.play(FadeOut(h4), FadeOut(min_note), run_time=0.5)
        self.play(tt.animate.set_value(0.0), run_time=2.0,
                  rate_func=rate_functions.ease_in_out_sine)
        comp.clear_updaters()
        drop.clear_updaters()
        self.play(FadeOut(comp), FadeOut(drop), run_time=0.5)
        self.play(FadeIn(h5), run_time=0.6)

        vec_g = arrow(pt(P(0.0)), pt(P(0.0) + LG * unit(GG(0.0))), CURVE_G)
        lab_gg = MathTex(r"\nabla g", font_size=32, color=CURVE_G)
        lab_gg.next_to(pt(P(0.0) + LG * unit(GG(0.0))), RIGHT, buff=0.10)
        sq2 = Polygon(pt(P(0.0)), pt(P(0.0) + d * u),
                      pt(P(0.0) + d * (u + unit(GG(0.0)))),
                      pt(P(0.0) + d * unit(GG(0.0))),
                      color=YELLOW, stroke_width=3)
        self.play(GrowArrow(vec_g), FadeIn(lab_gg), Create(sq2), run_time=1.2)
        self.wait(1.6)

        h6 = head(r"\text{in the plane, two vectors perpendicular}",
                  r"\text{to the same } \hat{T} \neq \mathbf{0}"
                  r"\text{ are collinear}")
        self.play(FadeOut(h5), run_time=0.4)
        self.play(FadeIn(h6), run_time=0.7)

        # the common normal line at (x^*,y^*)
        normal = DashedLine(pt(P(0.0) + 1.55 * unit(GG(0.0))),
                            pt(P(0.0) - 1.30 * unit(GG(0.0))),
                            color=YELLOW, stroke_width=2.5, dash_length=0.10)
        self.play(Create(normal), run_time=1.0)

        eqn = MathTex(r"\nabla f = \lambda\,\nabla g", font_size=42)
        box = SurroundingRectangle(eqn, color=YELLOW, buff=0.18)
        gloss = MathTex(r"\text{here } \nabla f = \langle 0,-3\rangle,\ "
                        r"\nabla g = \langle 0,1\rangle,\ \lambda = -3",
                        font_size=26, color=GREY_A)
        conclusion = VGroup(VGroup(eqn, box), gloss).arrange(DOWN, buff=0.30)
        conclusion.move_to([COL_X + 2.3, -2.00, 0])
        self.play(FadeIn(eqn), Create(box), run_time=1.0)
        self.play(FadeIn(gloss), run_time=0.7)
        self.wait(2.4)

        # ================= act six: the two curves are tangent =================
        h7 = head(r"\text{both curves are perpendicular to it,}",
                  r"\text{so they are tangent at } (x^*,y^*)")
        n_f.clear_updaters()
        n_d.clear_updaters()
        self.play(FadeOut(h6), FadeOut(readout), run_time=0.5)
        self.play(FadeIn(h7), run_time=0.6)
        self.play(circles[1].animate.set_stroke(CURVE_STAR, 5),
                  c_texts[1].animate.set_color(CURVE_STAR),
                  run_time=1.2)

        tangent_line = Line(pt(P(0.0) - 1.5 * u), pt(P(0.0) + 1.5 * u),
                            color=YELLOW, stroke_width=3)
        self.play(Create(tangent_line), run_time=1.0)
        self.play(Indicate(circles[1], scale_factor=1.0, color=CURVE_STAR),
                  Indicate(gcurve, scale_factor=1.0, color=CURVE_G),
                  run_time=1.6)
        self.wait(2.6)
