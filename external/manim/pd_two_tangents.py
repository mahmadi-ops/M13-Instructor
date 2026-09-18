"""The two partial derivatives at P, built one at a time.

This is the moving version of the pair of figures in "Definition of Partial
Derivatives" (fig-pd-tangent-x and fig-pd-tangent-y), and it ends by putting
the two constructions in the same picture.

Renders to assets/videos/pd_two_tangents_manim.mp4:

    manim -qh --disable_caching -o pd_two_tangents_manim \
        assets/manim/pd_two_tangents.py TwoTangents

The video walks through the same construction the static figures show, in
three acts:

1. the surface alone, then the plane y = y0 cutting it, the parabola that cut
   leaves behind, and the tangent line to that parabola at P -- whose slope is
   df/dx;
2. the surface alone again, then the same three steps in the plane x = x0, for
   df/dy;
3. both constructions together, held while the camera turns.

Design notes:

* Colours.  They are the ones the static figures use, which are also the manim
  palette the book's other animated figures are drawn from: the trace in
  y = y0 is GREEN with a BLUE tangent, the trace in x = x0 is GOLD with a RED
  tangent, and each cutting plane is tinted like the curve it produces.  The
  surface itself is left grey, as in the figures, so that the four coloured
  objects on it are the only saturated things on screen.

* The surface.  f(x,y) = 3 - 0.25 x^2 - 0.45 y^2 and P = (0.5, 0.5) are the same
  ones the tikz figures plot, so the video and the figures show the same object
  from the same viewpoint.  The two slopes are then df/dx = -0.25 and
  df/dy = -0.45 at P: shallow, but different enough to tell apart on screen.

* The vertical scale.  z is drawn at ZK times the horizontal scale.  The surface
  only spans 0.2 <= z <= 3 over the drawn square, so without the squeeze the
  bowl looks nearly flat and both tangent lines read as horizontal.

* The readout.  Every piece of lettering except the point P lives in a corner
  of the frame, fixed against the camera: naming the traces where they lie ran
  them into the axes and into each other from this viewpoint.
"""

from manim import *
import numpy as np

# ---- the construction -------------------------------------------------------
A, B = 0.25, 0.45                       # f(x,y) = 3 - A x^2 - B y^2
X0, Y0 = 0.5, 0.5                       # the base point P
XY_MIN, XY_MAX = -2.0, 2.0              # the drawn square
Z_MAX = 3.4


def f(x, y):
    return 3.0 - A * x * x - B * y * y


Z0 = f(X0, Y0)                          # 2.825
FX = -2.0 * A * X0                      # df/dx at P, -0.25
FY = -2.0 * B * Y0                      # df/dy at P, -0.45

XY_LEN = 5.0
ZK = 0.78                               # vertical scale, relative to horizontal
Z_LEN = XY_LEN / (XY_MAX - XY_MIN) * Z_MAX * ZK

TRACE_X = GREEN                         # z = f(x, y0), cut by the plane y = y0
TANGENT_X = BLUE                        # its tangent at P, slope df/dx
TRACE_Y = GOLD                          # z = f(x0, y), cut by the plane x = x0
TANGENT_Y = RED                         # its tangent at P, slope df/dy

TAN_HALF = 1.45                         # half-length of a tangent line, in scene units
DOT_R = 0.075


class TwoTangents(ThreeDScene):
    def construct(self):
        ax = ThreeDAxes(
            x_range=[XY_MIN, XY_MAX, 1],
            y_range=[XY_MIN, XY_MAX, 1],
            z_range=[0, Z_MAX, 1],
            x_length=XY_LEN, y_length=XY_LEN, z_length=Z_LEN,
            axis_config={"stroke_width": 2, "include_ticks": False,
                         "stroke_opacity": 0.55},
        )
        # Centre the frame on the middle of the surface rather than on the origin
        # of the axes, and drop it a little so the corner readouts stay clear.
        # This has to happen before anything else is built: mobjects placed with
        # c2p do not follow the axes afterwards.
        ax.shift(ORIGIN - ax.c2p(0, 0, 0.55 * Z_MAX) + DOWN * 0.35)

        def p3(x, y, z):
            return ax.c2p(x, y, z)

        # Axis labels are placed by hand and kept facing the camera: the built-in
        # get_*_axis_label leaves them lying flat in their own plane, where the
        # viewpoint foreshortens them into a smudge.
        labels = VGroup(
            MathTex("x", font_size=40).move_to(p3(XY_MAX + 0.45, 0, 0)),
            MathTex("y", font_size=40).move_to(p3(0, XY_MAX + 0.45, 0)),
            MathTex("z", font_size=40).move_to(p3(0, 0, Z_MAX + 0.28)),
        )
        self.add_fixed_orientation_mobjects(*labels)

        def direction(dx, dy, dz):
            """A unit vector in scene coordinates, from a direction in (x,y,z)."""
            d = np.array(p3(X0 + dx, Y0 + dy, Z0 + dz)) - np.array(p3(X0, Y0, Z0))
            return d / np.linalg.norm(d)

        # ---- the surface ----------------------------------------------------
        surf = Surface(
            lambda u, v: p3(u, v, f(u, v)),
            u_range=[XY_MIN, XY_MAX], v_range=[XY_MIN, XY_MAX],
            resolution=(20, 20), stroke_width=0.6, stroke_opacity=0.3,
        )
        surf.set_fill_by_checkerboard(GREY_C, GREY_D, opacity=0.38)
        surf_label = MathTex("z = f(x,y)", font_size=38, color=GREY_A)

        # ---- P, on the surface and on the ground below it --------------------
        p_surf = Dot3D(p3(X0, Y0, Z0), radius=DOT_R, color=WHITE)
        p_ground = Dot3D(p3(X0, Y0, 0), radius=DOT_R * 0.85, color=WHITE)
        p_drop = DashedLine(p3(X0, Y0, 0), p3(X0, Y0, Z0),
                            color=GREY_B, stroke_width=2.5, dash_length=0.09)
        p_tag = MathTex("P", font_size=40, color=WHITE)
        p_tag.move_to(p3(X0 + 0.30, Y0 + 0.30, Z0 + 0.28))

        # ---- the two cuts ----------------------------------------------------
        # Each plane is drawn only over the square the surface covers, and only
        # up to z = Z_MAX, so it reads as a slice of the picture rather than a
        # wall behind it.
        plane_y0 = Polygon(
            p3(XY_MIN, Y0, 0), p3(XY_MAX, Y0, 0),
            p3(XY_MAX, Y0, Z_MAX), p3(XY_MIN, Y0, Z_MAX),
            stroke_color=TRACE_X, stroke_width=2, stroke_opacity=0.45,
            fill_color=TRACE_X, fill_opacity=0.12,
        )
        plane_x0 = Polygon(
            p3(X0, XY_MIN, 0), p3(X0, XY_MAX, 0),
            p3(X0, XY_MAX, Z_MAX), p3(X0, XY_MIN, Z_MAX),
            stroke_color=TRACE_Y, stroke_width=2, stroke_opacity=0.45,
            fill_color=TRACE_Y, fill_opacity=0.12,
        )

        trace_x = ParametricFunction(
            lambda t: p3(t, Y0, f(t, Y0)),
            t_range=[XY_MIN, XY_MAX], color=TRACE_X, stroke_width=7,
        )
        trace_y = ParametricFunction(
            lambda t: p3(X0, t, f(X0, t)),
            t_range=[XY_MIN, XY_MAX], color=TRACE_Y, stroke_width=7,
        )

        base = np.array(p3(X0, Y0, Z0))
        dx_dir = direction(1.0, 0.0, FX)
        dy_dir = direction(0.0, 1.0, FY)
        tangent_x = Line(base - TAN_HALF * dx_dir, base + TAN_HALF * dx_dir,
                         color=TANGENT_X, stroke_width=9)
        tangent_y = Line(base - TAN_HALF * dy_dir, base + TAN_HALF * dy_dir,
                         color=TANGENT_Y, stroke_width=9)


        # ---- the camera: the viewpoint of the static figure -------------------
        self.set_camera_orientation(phi=70 * DEGREES, theta=-55 * DEGREES)

        # ================= the surface ========================================
        self.play(Create(ax), FadeIn(labels), run_time=1.2)
        self.play(Create(surf), run_time=2.0)
        self.add_fixed_in_frame_mobjects(surf_label)
        surf_label.to_corner(UR, buff=0.45)
        self.play(FadeIn(surf_label), run_time=0.6)

        self.play(FadeIn(p_ground, scale=0.5), run_time=0.5)
        self.add_fixed_orientation_mobjects(p_tag)
        self.play(Create(p_drop), FadeIn(p_surf, scale=0.5), FadeIn(p_tag),
                  run_time=0.9)
        self.wait(0.6)

        # ================= act one: df/dx =====================================
        head_x = VGroup(
            MathTex(r"\text{hold } y = y_0", font_size=34, color=TRACE_X),
            MathTex("z = f(x,y_0)", font_size=34, color=TRACE_X),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.22)
        slope_x = MathTex(
            r"\left.\frac{\partial f}{\partial x}\right|_{P} = -0.25",
            font_size=36, color=TANGENT_X,
        )
        self.add_fixed_in_frame_mobjects(head_x)
        head_x.to_corner(UL, buff=0.45)

        self.play(FadeIn(plane_y0), FadeIn(head_x[0]), run_time=1.2)
        self.play(Create(trace_x), FadeIn(head_x[1]), run_time=1.6)
        self.wait(0.5)
        self.add_fixed_in_frame_mobjects(slope_x)
        slope_x.next_to(head_x, DOWN, aligned_edge=LEFT, buff=0.3)
        self.play(Create(tangent_x), FadeIn(slope_x), run_time=1.3)
        self.wait(1.6)

        # ---- back to the surface alone ---------------------------------------
        self.play(FadeOut(plane_y0), FadeOut(trace_x), FadeOut(tangent_x),
                  FadeOut(head_x), FadeOut(slope_x), run_time=1.0)
        self.wait(0.5)

        # ================= act two: df/dy =====================================
        head_y = VGroup(
            MathTex(r"\text{hold } x = x_0", font_size=34, color=TRACE_Y),
            MathTex("z = f(x_0,y)", font_size=34, color=TRACE_Y),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.22)
        slope_y = MathTex(
            r"\left.\frac{\partial f}{\partial y}\right|_{P} = -0.45",
            font_size=36, color=TANGENT_Y,
        )
        self.add_fixed_in_frame_mobjects(head_y)
        head_y.to_corner(UL, buff=0.45)

        self.play(FadeIn(plane_x0), FadeIn(head_y[0]), run_time=1.2)
        self.play(Create(trace_y), FadeIn(head_y[1]), run_time=1.6)
        self.wait(0.5)
        self.add_fixed_in_frame_mobjects(slope_y)
        slope_y.next_to(head_y, DOWN, aligned_edge=LEFT, buff=0.3)
        self.play(Create(tangent_y), FadeIn(slope_y), run_time=1.3)
        self.wait(1.6)

        # ================= act three: both at once ============================
        # The second construction is already on screen; the first comes back
        # beside it, and the two slope readouts end up one above the other.
        self.play(FadeOut(head_y), FadeOut(slope_y), run_time=0.5)
        self.add_fixed_in_frame_mobjects(slope_x, slope_y)
        slope_x.to_corner(UL, buff=0.45)
        slope_y.next_to(slope_x, DOWN, aligned_edge=LEFT, buff=0.3)

        self.play(FadeIn(plane_y0), FadeIn(slope_x), FadeIn(slope_y),
                  run_time=1.0)
        self.play(Create(trace_x), run_time=1.4)
        self.play(Create(tangent_x), run_time=1.0)
        self.wait(1.2)

        # a slow turn at the end, to place the two tangent lines in space
        self.move_camera(theta=-25 * DEGREES, run_time=4.0)
        self.wait(1.5)
