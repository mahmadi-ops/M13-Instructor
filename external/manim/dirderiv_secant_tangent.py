"""Figure 18.4: the secant through (P0, f(P0)) and (P, f(P)) rotating onto the
tangent line at P0 as s -> 0.

Renders to assets/videos/dirderiv_secant_tangent_manim.mp4:

    manim -qh --disable_caching -o dirderiv_secant_tangent_manim \
        assets/manim/dirderiv_secant_tangent.py SecantToTangent

Design notes, all of them about telling the two lines apart:

* Colours.  The secant is manim RED and the tangent manim GREEN, the same pair
  the book's other animated figure (conic-slicer-manim.html) uses, and both are
  drawn thick.  The earlier version of this video had a pale secant against a
  yellow dashed tangent, which read as one line.

* The base point.  P0 sits at (0.25, 0.25), close to the vertex of the bowl,
  where the tangent is shallow (slope 1/sqrt(2) = 0.707) while the secant out at
  s = 1.5 is steep (slope 2.207).  A ratio of about three keeps the two lines
  visibly apart for most of the animation; putting P0 further out would make
  both lines steep and near-parallel on screen.

* The vertical scale.  z is drawn at ZK times the horizontal scale.  Steep lines
  crowd towards vertical and shallow ones towards horizontal, so the angle
  between two slopes m1 < m2 is widest at k = 1/sqrt(m1*m2); ZK is set near that
  value, which is also what bends the trace curve most visibly.

* Framing.  The axes only cover the region the construction actually uses, and
  the camera is zoomed onto the midpoint of P0 and P rather than the origin.
"""

from manim import *
import numpy as np

# ---- the construction -------------------------------------------------------
X0, Y0 = 0.25, 0.25                     # P0
C = 1.0 / np.sqrt(2.0)                  # u = (C, C), a unit vector
S_START, S_END = 1.5, 0.05              # the step s runs from here to here


def f(x, y):
    return 1.0 + x * x + y * y


def ray(t):
    """The point P0 + t*u in the xy-plane."""
    return X0 + t * C, Y0 + t * C


def g(t):
    """f along the ray: 1.125 + 0.7071 t + t^2."""
    x, y = ray(t)
    return f(x, y)


DFDS = 2.0 * X0 * C + 2.0 * Y0 * C      # the directional derivative, 0.7071

T_MIN, T_MAX = -1.55, 1.62              # the drawn part of the ray
R_SURF = 1.95                           # the surface is drawn for r <= R_SURF
XY_MIN, XY_MAX = -0.75, 1.85
Z_MAX = 4.9
ZK = 0.60                               # vertical scale, relative to horizontal

XY_LEN = 4.7
Z_LEN = XY_LEN / (XY_MAX - XY_MIN) * Z_MAX * ZK

SECANT = RED
TANGENT = GREEN
TRACE = GOLD
DOT_R = 0.075                           # the points P0 and P, drawn large


class SecantToTangent(ThreeDScene):
    def construct(self):
        ax = ThreeDAxes(
            x_range=[XY_MIN, XY_MAX, 1],
            y_range=[XY_MIN, XY_MAX, 1],
            z_range=[0, Z_MAX, 1],
            x_length=XY_LEN, y_length=XY_LEN, z_length=Z_LEN,
            axis_config={"stroke_width": 2, "include_ticks": False,
                         "stroke_opacity": 0.55},
        )
        # Put the construction in the right-hand two thirds of the frame and keep
        # the left third clear for the readout. Shifting the axes (rather than
        # aiming the camera) means c2p reports the moved points, so everything
        # built below lands in the right place; it has to happen before anything
        # else is built, since mobjects do not follow the axes afterwards.
        ax.shift(ORIGIN - ax.c2p(0, 0, 0.46 * Z_MAX) + RIGHT * 2.1)

        labels = VGroup(
            ax.get_x_axis_label(MathTex("x", font_size=34)),
            ax.get_y_axis_label(MathTex("y", font_size=34)),
            ax.get_z_axis_label(MathTex("z", font_size=34)),
        )

        def p3(x, y, z):
            return ax.c2p(x, y, z)

        # ---- the surface ----------------------------------------------------
        # A round patch, r <= R_SURF, rather than a rectangle: the rim then sits at
        # a single height (z = Z_MAX) instead of having corners that poke out of
        # the top of the frame.
        surf = Surface(
            lambda r, th: p3(r * np.cos(th), r * np.sin(th), 1.0 + r * r),
            u_range=[0.001, R_SURF], v_range=[0, TAU],
            resolution=(16, 48), stroke_width=0.6, stroke_opacity=0.25,
        )
        surf.set_fill_by_checkerboard(BLUE_D, BLUE_E, opacity=0.45)
        surf_label = MathTex("z = f(x,y)", font_size=38, color=BLUE_B)

        # ---- the vertical plane through P0 in the direction u ---------------
        a, b = ray(T_MIN), ray(T_MAX)
        plane = Polygon(
            p3(a[0], a[1], 0), p3(b[0], b[1], 0),
            p3(b[0], b[1], Z_MAX), p3(a[0], a[1], Z_MAX),
            stroke_color=GOLD_E, stroke_width=2, stroke_opacity=0.45,
            fill_color=GOLD_E, fill_opacity=0.12,
        )

        # ---- the trace of the surface in that plane -------------------------
        trace = ParametricFunction(
            lambda t: p3(*ray(t), g(t)),
            t_range=[T_MIN, T_MAX], color=TRACE, stroke_width=7,
        )

        # ---- the camera: nearly face-on to the cutting plane -----------------
        # the plane runs along 45 degrees, so its normal is at -45; a little off
        # that keeps the picture three-dimensional without foreshortening the
        # two lines we are comparing
        self.set_camera_orientation(phi=74 * DEGREES, theta=-52 * DEGREES)

        self.play(Create(ax), FadeIn(labels), run_time=1.2)
        self.play(Create(surf), run_time=1.6)
        self.add_fixed_in_frame_mobjects(surf_label)
        surf_label.to_corner(UR, buff=0.45)
        self.play(FadeIn(surf_label), run_time=0.6)
        self.play(FadeIn(plane), Create(trace), run_time=1.6)

        # ---- P0, on the ground and lifted to the surface ---------------------
        z0 = g(0.0)
        p0_ground = Dot3D(p3(X0, Y0, 0), radius=DOT_R * 0.85, color=WHITE)
        p0_surf = Dot3D(p3(X0, Y0, z0), radius=DOT_R, color=WHITE)
        p0_drop = DashedLine(p3(X0, Y0, 0), p3(X0, Y0, z0),
                             color=GREY_B, stroke_width=2.5, dash_length=0.09)
        p0_tag = MathTex("P_0", font_size=40, color=WHITE)
        p0_tag.move_to(p3(X0 - 0.42, Y0 - 0.42, 0.16))
        self.add_fixed_orientation_mobjects(p0_tag)

        self.play(FadeIn(p0_ground, scale=0.5), FadeIn(p0_tag), run_time=0.7)
        self.play(Create(p0_drop), FadeIn(p0_surf, scale=0.5), run_time=0.9)

        # ---- the unit vector u ----------------------------------------------
        uvec = Arrow3D(
            start=p3(X0, Y0, 0.02), end=p3(*ray(1.0), 0.02),
            color=YELLOW, thickness=0.012, height=0.16, base_radius=0.05,
        )
        u_tag = MathTex(r"\mathbf u,\ \|\mathbf u\| = 1", font_size=34, color=YELLOW)
        u_tag.move_to(p3(*ray(1.34), 0.42))
        self.add_fixed_orientation_mobjects(u_tag)
        self.play(GrowFromPoint(uvec, p3(X0, Y0, 0)), FadeIn(u_tag), run_time=0.9)

        # ---- P, which moves with s ------------------------------------------
        s = ValueTracker(S_START)

        def p_ground():
            x, y = ray(s.get_value())
            return Dot3D(p3(x, y, 0), radius=DOT_R * 0.85, color=SECANT)

        def p_surf():
            x, y = ray(s.get_value())
            return Dot3D(p3(x, y, g(s.get_value())), radius=DOT_R, color=SECANT)

        def p_drop():
            x, y = ray(s.get_value())
            return DashedLine(p3(x, y, 0), p3(x, y, g(s.get_value())),
                              color=SECANT, stroke_width=2.5,
                              dash_length=0.09).set_opacity(0.75)

        def secant_line():
            sv = s.get_value()
            x1, y1 = ray(sv)
            start, end = np.array(p3(X0, Y0, g(0.0))), np.array(p3(x1, y1, g(sv)))
            d = end - start
            n = np.linalg.norm(d)
            d = d / n if n > 1e-9 else d
            return Line(start - 1.15 * d, end + 0.45 * d,
                        color=SECANT, stroke_width=9)

        p_g = always_redraw(p_ground)
        p_s = always_redraw(p_surf)
        p_d = always_redraw(p_drop)
        sec = always_redraw(secant_line)

        p_tag = MathTex("P", font_size=40, color=SECANT)

        def place_p_tag(m):
            x, y = ray(s.get_value())
            m.move_to(p3(x + 0.34, y + 0.34, g(s.get_value()) + 0.30))

        place_p_tag(p_tag)
        p_tag.add_updater(place_p_tag)
        self.add_fixed_orientation_mobjects(p_tag)

        self.play(FadeIn(p_g, scale=0.5), FadeIn(p_tag), run_time=0.7)
        self.play(Create(p_d), FadeIn(p_s, scale=0.5), run_time=0.9)
        self.add(p_d, p_s, p_g)

        # ---- the readout, held flat against the screen -----------------------
        head = MathTex(
            r"\text{secant slope} = \frac{f(P)-f(P_0)}{s} =",
            font_size=32, color=SECANT,
        )
        val = DecimalNumber(DFDS + S_START, num_decimal_places=3,
                            font_size=36, color=SECANT)
        def keep_flat(m, value, anchor):
            m.set_value(value)
            self.add_fixed_in_frame_mobjects(m)
            m.next_to(anchor, RIGHT, buff=0.22)

        val.add_updater(lambda m: keep_flat(m, DFDS + s.get_value(), head))
        s_read = VGroup(MathTex("s =", font_size=32), DecimalNumber(
            S_START, num_decimal_places=2, font_size=36))
        s_read[1].add_updater(lambda m: keep_flat(m, s.get_value(), s_read[0]))
        s_read.arrange(RIGHT, buff=0.18)

        bar = VGroup(head, val).arrange(RIGHT, buff=0.22)
        # fixed-in-frame mobjects are laid out in the camera's frame, so they are
        # positioned after being handed to the camera, not before
        self.add_fixed_in_frame_mobjects(bar, s_read)
        bar.to_corner(UL, buff=0.4)
        s_read.next_to(bar, DOWN, aligned_edge=LEFT, buff=0.25)

        self.play(Create(sec), FadeIn(bar), FadeIn(s_read), run_time=1.4)
        self.add(sec)
        self.wait(1.0)

        # ---- the limit -------------------------------------------------------
        limit_note = MathTex(
            r"s \to 0:\quad (D_{\mathbf u} f)_{P_0} =",
            font_size=32, color=TANGENT,
        )
        limit_val = DecimalNumber(DFDS, num_decimal_places=3,
                                  font_size=36, color=TANGENT)
        limit = VGroup(limit_note, limit_val).arrange(RIGHT, buff=0.22)

        # the tangent, drawn once and left in place as the secant closes on it
        d = np.array(p3(*ray(1.0), g(0.0) + DFDS)) - np.array(p3(X0, Y0, g(0.0)))
        d = d / np.linalg.norm(d)
        base = np.array(p3(X0, Y0, g(0.0)))
        tangent = Line(base - 1.2 * d, base + 1.9 * d,
                       color=TANGENT, stroke_width=11)
        t_tag = MathTex(r"\text{tangent}", font_size=34, color=TANGENT)
        t_tag.move_to(p3(*ray(1.30), g(0.0) + DFDS * 1.30 - 0.40))
        self.add_fixed_orientation_mobjects(t_tag)

        self.play(Create(tangent), FadeIn(t_tag), run_time=1.1)
        self.add_fixed_in_frame_mobjects(limit)
        limit.next_to(s_read, DOWN, aligned_edge=LEFT, buff=0.3)
        self.play(FadeIn(limit), run_time=0.5)

        self.play(s.animate.set_value(S_END), run_time=6.5,
                  rate_func=rate_functions.ease_in_out_sine)
        self.wait(1.4)

        # a slow turn at the end, to place the picture in space
        self.move_camera(theta=-32 * DEGREES, run_time=3.0)
        self.wait(1.2)
