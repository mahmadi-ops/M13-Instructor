"""Why the two mixed partial derivatives agree, without any calculation.

This is the moving picture behind the Mixed Derivative Theorem
(thm-mixed-derivative): starting at P = (a,b), step h in x and k in y, and
watch the four heights of the surface over the corners of that rectangle.
The double difference

    Delta = f(a+h,b+k) - f(a+h,b) - f(a,b+k) + f(a,b)

can be grouped by the two x-edges of the rectangle, where it reads
"the change of the x-change as y increases", or by the two y-edges, where it
reads "the change of the y-change as x increases".  Same four heights, same
number, so hk*(f_x)_y and hk*(f_y)_x approximate the *same* Delta, and
letting h, k -> 0 gives f_xy = f_yx.

Renders to assets/videos/mixed_partials_commute_manim.mp4:

    manim -qh --disable_caching -o mixed_partials_commute_manim \
        assets/manim/mixed_partials_commute.py MixedPartialsCommute

The video runs in six acts:

1. the surface, the point P = (a,b), and the rectangle with sides h and k;
2. the four corner heights: dashed verticals up to the surface, and the lifted
   (warped) rectangle they frame;
3. rises along the two x-edges: Delta_bot and Delta_top, whose difference is
   about hk * d/dy(df/dx);
4. rises along the two y-edges: Delta_left and Delta_right, whose difference
   is about hk * d/dx(df/dy) -- and it comes out to the same 0.80;
5. the reason: both groupings expand to the same signed sum of the four
   corner heights (+ on one diagonal, - on the other);
6. divide by hk, shrink the rectangle to P, and conclude f_xy = f_yx while
   the camera turns.

Design notes:

* Colours follow the book's manim palette (pd_two_tangents.py,
  dirderiv_secant_tangent.py): everything about the x-direction is GREEN with
  BLUE rises, everything about the y-direction is GOLD with RED rises, and the
  surface is left grey so the coloured construction is the only saturated
  thing on screen.

* The surface is f(x,y) = 2.4 + 0.4xy - 0.08x^2 - 0.1y^2.  The xy term is the
  point: it makes (f_x)_y = 0.4 nonzero, so the lifted rectangle is visibly
  warped (its two x-edges slope in opposite directions).  A separable surface
  would have Delta = 0 and nothing to see.

* The numbers are arranged to be clean at two decimals.  With
  a = -0.7023, b = -0.4297, h = 1.6, k = 1.25 (so hk = 2.00) the four rises
  are -0.30, +0.50 along the x-edges and -0.40, +0.40 along the y-edges: both
  groupings give Delta = 0.80, and Delta/hk = 0.40, which is exactly the
  constant mixed partial of this surface.

* The vertical scale.  z is drawn at ZK times the horizontal scale, as in the
  other partial-derivative videos, so the twist of the lifted rectangle does
  not flatten away.

* All lettering lives in corners of the frame, fixed against the camera; the
  only fixed-orientation labels in the scene are the axis names, the corner
  coordinates on the ground, the side lengths h and k, and the +/- signs of
  act five.
"""

from manim import *
import numpy as np

# ---- the construction -------------------------------------------------------
P_, Q_, R_ = 0.40, 0.08, 0.10           # f = C0 + P xy - Q x^2 - R y^2
C0 = 2.4
A_, B_ = -0.7023, -0.4297               # the base point P = (a, b)
H_, K_ = 1.6, 1.25                      # the steps: hk = 2.00
XY_MIN, XY_MAX = -2.0, 2.0              # the drawn square
Z_MAX = 3.4


def f(x, y):
    return C0 + P_ * x * y - Q_ * x * x - R_ * y * y


FA = f(A_, B_)                          # the four corner heights
FB = f(A_ + H_, B_)
FC = f(A_, B_ + K_)
FD = f(A_ + H_, B_ + K_)
# rises: FB-FA = -0.30, FD-FC = +0.50, FC-FA = -0.40, FD-FB = +0.40

XY_LEN = 5.0
ZK = 0.78                               # vertical scale, relative to horizontal
Z_LEN = XY_LEN / (XY_MAX - XY_MIN) * Z_MAX * ZK

EDGE_X = GREEN                          # the two edges in the x-direction
RISE_X = BLUE                           # their rises: Delta_bot, Delta_top
EDGE_Y = GOLD                           # the two edges in the y-direction
RISE_Y = RED                            # their rises: Delta_left, Delta_right

DOT_R = 0.07


class MixedPartialsCommute(ThreeDScene):
    def construct(self):
        ax = ThreeDAxes(
            x_range=[XY_MIN, XY_MAX, 1],
            y_range=[XY_MIN, XY_MAX, 1],
            z_range=[0, Z_MAX, 1],
            x_length=XY_LEN, y_length=XY_LEN, z_length=Z_LEN,
            axis_config={"stroke_width": 2, "include_ticks": False,
                         "stroke_opacity": 0.55},
        )
        # Centre the frame on the middle of the surface, as in the other
        # partial-derivative videos; must happen before anything is placed
        # with c2p.
        ax.shift(ORIGIN - ax.c2p(0, 0, 0.55 * Z_MAX) + DOWN * 0.35)

        def p3(x, y, z):
            return ax.c2p(x, y, z)

        labels = VGroup(
            MathTex("x", font_size=40).move_to(p3(XY_MAX + 0.45, 0, 0)),
            MathTex("y", font_size=40).move_to(p3(0, XY_MAX + 0.45, 0)),
            MathTex("z", font_size=40).move_to(p3(0, 0, Z_MAX + 0.28)),
        )
        self.add_fixed_orientation_mobjects(*labels)

        # ---- the surface ----------------------------------------------------
        surf = Surface(
            lambda u, v: p3(u, v, f(u, v)),
            u_range=[XY_MIN, XY_MAX], v_range=[XY_MIN, XY_MAX],
            resolution=(20, 20), stroke_width=0.6, stroke_opacity=0.3,
        )
        surf.set_fill_by_checkerboard(GREY_C, GREY_D, opacity=0.38)
        surf_label = MathTex("z = f(x,y)", font_size=38, color=GREY_A)

        # ---- the rectangle on the ground -------------------------------------
        corners = {
            "A": (A_, B_), "B": (A_ + H_, B_),
            "C": (A_, B_ + K_), "D": (A_ + H_, B_ + K_),
        }
        rect = Polygon(
            p3(*corners["A"], 0), p3(*corners["B"], 0),
            p3(*corners["D"], 0), p3(*corners["C"], 0),
            stroke_color=WHITE, stroke_width=3.5,
            fill_color=GREY_B, fill_opacity=0.15,
        )
        ground_dots = VGroup(*[
            Dot3D(p3(*corners[c], 0), radius=DOT_R * 0.8, color=WHITE)
            for c in "ABCD"
        ])
        corner_tags = VGroup(
            MathTex("(a,b)", font_size=28, color=GREY_A)
            .move_to(p3(A_ - 0.42, B_ - 0.34, 0)),
            MathTex("(a{+}h,\\,b)", font_size=28, color=GREY_A)
            .move_to(p3(A_ + H_ + 0.62, B_ - 0.30, 0)),
            MathTex("(a,\\,b{+}k)", font_size=28, color=GREY_A)
            .move_to(p3(A_ - 0.58, B_ + K_ + 0.34, 0)),
            MathTex("(a{+}h,\\,b{+}k)", font_size=28, color=GREY_A)
            .move_to(p3(A_ + H_ + 0.72, B_ + K_ + 0.34, 0)),
        )
        side_h = MathTex("h", font_size=36, color=EDGE_X)
        side_h.move_to(p3(A_ + H_ / 2, B_ - 0.34, 0))
        side_k = MathTex("k", font_size=36, color=EDGE_Y)
        side_k.move_to(p3(A_ - 0.30, B_ + K_ / 2, 0))

        # ---- the lift: corner heights and the warped rectangle ----------------
        drops = VGroup(*[
            DashedLine(p3(*corners[c], 0), p3(*corners[c], f(*corners[c])),
                       color=GREY_B, stroke_width=2.5, dash_length=0.09)
            for c in "ABCD"
        ])
        surf_dots = VGroup(*[
            Dot3D(p3(*corners[c], f(*corners[c])), radius=DOT_R, color=WHITE)
            for c in "ABCD"
        ])

        def x_edge(y, **kw):
            return ParametricFunction(
                lambda t: p3(t, y, f(t, y)),
                t_range=[A_, A_ + H_], color=EDGE_X, stroke_width=6, **kw)

        def y_edge(x, **kw):
            return ParametricFunction(
                lambda t: p3(x, t, f(x, t)),
                t_range=[B_, B_ + K_], color=EDGE_Y, stroke_width=6, **kw)

        edge_bot, edge_top = x_edge(B_), x_edge(B_ + K_)
        edge_left, edge_right = y_edge(A_), y_edge(A_ + H_)
        x_edges = VGroup(edge_bot, edge_top)
        y_edges = VGroup(edge_left, edge_right)

        # ---- rise indicators: a level dashed reference, then the rise ---------
        def rise(x0, y0, x1, y1, color):
            """From the corner (x0,y0) to (x1,y1): a dashed level line at the
            starting height, and the vertical gap down/up to the surface."""
            z0, z1 = f(x0, y0), f(x1, y1)
            ref = DashedLine(p3(x0, y0, z0), p3(x1, y1, z0),
                             color=GREY_B, stroke_width=2.5, dash_length=0.09)
            gap = Arrow3D(p3(x1, y1, z0), p3(x1, y1, z1),
                          color=color, thickness=0.02,
                          height=0.2, base_radius=0.07)
            return VGroup(ref, gap)

        rise_bot = rise(A_, B_, A_ + H_, B_, RISE_X)
        rise_top = rise(A_, B_ + K_, A_ + H_, B_ + K_, RISE_X)
        rise_left = rise(A_, B_, A_, B_ + K_, RISE_Y)
        rise_right = rise(A_ + H_, B_, A_ + H_, B_ + K_, RISE_Y)

        # ---- the +/- signs of act five ---------------------------------------
        signs = VGroup(
            MathTex("+", font_size=60, color=YELLOW)
            .move_to(p3(A_, B_, FA + 0.30)),
            MathTex("-", font_size=60, color=YELLOW)
            .move_to(p3(A_ + H_, B_, FB + 0.30)),
            MathTex("-", font_size=60, color=YELLOW)
            .move_to(p3(A_ - 0.22, B_ + K_ + 0.18, FC + 0.30)),
            MathTex("+", font_size=60, color=YELLOW)
            .move_to(p3(A_ + H_, B_ + K_, FD + 0.30)),
        )

        # ---- the camera -------------------------------------------------------
        self.set_camera_orientation(phi=68 * DEGREES, theta=-50 * DEGREES)

        # ================= act one: the surface and the rectangle =============
        self.play(Create(ax), FadeIn(labels), run_time=1.2)
        self.play(Create(surf), run_time=2.0)
        self.add_fixed_in_frame_mobjects(surf_label)
        surf_label.to_corner(UR, buff=0.45)
        self.play(FadeIn(surf_label), run_time=0.6)

        head1 = MathTex(
            r"\text{start at } (a,b)\text{, step } h \text{ in } x,\ "
            r"k \text{ in } y",
            font_size=34,
        )
        self.add_fixed_in_frame_mobjects(head1)
        head1.to_corner(UL, buff=0.45)
        self.add_fixed_orientation_mobjects(*corner_tags, side_h, side_k)
        self.remove(*corner_tags, side_h, side_k)
        self.play(FadeIn(head1), Create(rect), FadeIn(ground_dots),
                  run_time=1.4)
        self.play(FadeIn(corner_tags), FadeIn(side_h), FadeIn(side_k),
                  run_time=0.9)
        self.wait(1.2)

        # ================= act two: the four heights ==========================
        head2 = MathTex(r"\text{the four heights of } f "
                        r"\text{ over the corners}", font_size=34)
        self.play(FadeOut(head1), run_time=0.4)
        self.add_fixed_in_frame_mobjects(head2)
        head2.to_corner(UL, buff=0.45)
        self.play(FadeIn(head2), Create(drops), run_time=1.4)
        self.play(FadeIn(surf_dots, scale=0.5), run_time=0.7)
        self.play(Create(edge_bot), Create(edge_top),
                  Create(edge_left), Create(edge_right), run_time=1.6)
        self.wait(1.2)

        # ================= act three: group by the x-edges ====================
        head3 = VGroup(
            MathTex(r"\Delta_{\mathrm{bot}} = f(a{+}h,b) - f(a,b)"
                    r" = -0.30", font_size=30, color=RISE_X),
            MathTex(r"\Delta_{\mathrm{top}} = f(a{+}h,b{+}k) - f(a,b{+}k)"
                    r" = +0.50", font_size=30, color=RISE_X),
            MathTex(r"\Delta_{\mathrm{top}} - \Delta_{\mathrm{bot}}"
                    r" \approx hk\,\frac{\partial}{\partial y}\!"
                    r"\left(\frac{\partial f}{\partial x}\right)"
                    r" = 0.80", font_size=30),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.24)
        self.play(FadeOut(head2), y_edges.animate.set_stroke(opacity=0.22),
                  run_time=0.6)
        self.add_fixed_in_frame_mobjects(head3)
        head3.to_corner(UL, buff=0.45)
        self.remove(head3)

        self.play(Create(rise_bot), FadeIn(head3[0]), run_time=1.3)
        self.wait(0.7)
        self.play(Create(rise_top), FadeIn(head3[1]), run_time=1.3)
        self.wait(0.7)
        # each x-rise is about h*f_x at its own y; comparing them is a
        # y-derivative of f_x
        self.play(FadeIn(head3[2]), run_time=0.9)
        self.wait(2.2)

        # ================= act four: group by the y-edges =====================
        head4 = VGroup(
            MathTex(r"\Delta_{\mathrm{left}} = f(a,b{+}k) - f(a,b)"
                    r" = -0.40", font_size=30, color=RISE_Y),
            MathTex(r"\Delta_{\mathrm{right}} = f(a{+}h,b{+}k) - f(a{+}h,b)"
                    r" = +0.40", font_size=30, color=RISE_Y),
            MathTex(r"\Delta_{\mathrm{right}} - \Delta_{\mathrm{left}}"
                    r" \approx hk\,\frac{\partial}{\partial x}\!"
                    r"\left(\frac{\partial f}{\partial y}\right)"
                    r" = 0.80", font_size=30),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.24)
        self.play(FadeOut(head3), FadeOut(rise_bot), FadeOut(rise_top),
                  x_edges.animate.set_stroke(opacity=0.22),
                  y_edges.animate.set_stroke(opacity=1.0),
                  run_time=0.8)
        self.add_fixed_in_frame_mobjects(head4)
        head4.to_corner(UL, buff=0.45)
        self.remove(head4)

        self.play(Create(rise_left), FadeIn(head4[0]), run_time=1.3)
        self.wait(0.7)
        self.play(Create(rise_right), FadeIn(head4[1]), run_time=1.3)
        self.wait(0.7)
        self.play(FadeIn(head4[2]), run_time=0.9)
        self.wait(2.2)

        # ================= act five: the same four heights ====================
        head5 = MathTex(r"\text{the same number, both times: why?}",
                        font_size=34)
        delta_line = MathTex(
            r"\Delta = f(a{+}h,b{+}k) - f(a{+}h,b) - f(a,b{+}k) + f(a,b)"
            r" = 0.80",
            font_size=32,
        )
        self.play(FadeOut(head4), FadeOut(rise_left), FadeOut(rise_right),
                  x_edges.animate.set_stroke(opacity=1.0),
                  run_time=0.8)
        self.add_fixed_in_frame_mobjects(head5, delta_line)
        head5.to_corner(UL, buff=0.45)
        delta_line.to_edge(DOWN, buff=0.5)
        self.remove(head5, delta_line)

        self.play(FadeIn(head5), run_time=0.8)
        self.add_fixed_orientation_mobjects(*signs)
        self.remove(*signs)
        self.play(FadeIn(signs, scale=0.6), run_time=1.0)
        self.play(Write(delta_line), run_time=1.6)
        self.wait(2.4)

        # ================= act six: shrink and conclude =======================
        head6 = MathTex(
            r"\frac{\Delta}{hk} = \frac{0.80}{2.00} = 0.40"
            r"\quad\text{approximates both mixed partials}",
            font_size=32,
        )
        self.play(FadeOut(head5), FadeOut(delta_line), FadeOut(signs),
                  FadeOut(corner_tags), FadeOut(side_h), FadeOut(side_k),
                  FadeOut(drops), run_time=0.8)
        self.add_fixed_in_frame_mobjects(head6)
        head6.to_corner(UL, buff=0.45)
        self.remove(head6)
        self.play(FadeIn(head6), run_time=0.8)
        self.wait(1.4)

        # the shrinking rectangle: everything keyed to the scale tracker
        s = ValueTracker(1.0)

        def sc(c):
            x, y = corners[c]
            return A_ + (x - A_) * s.get_value(), B_ + (y - B_) * s.get_value()

        live_rect = always_redraw(lambda: Polygon(
            p3(*sc("A"), 0), p3(*sc("B"), 0), p3(*sc("D"), 0), p3(*sc("C"), 0),
            stroke_color=WHITE, stroke_width=3.5,
            fill_color=GREY_B, fill_opacity=0.15,
        ))
        live_dots = always_redraw(lambda: VGroup(*[
            Dot3D(p3(*sc(c), f(*sc(c))), radius=DOT_R, color=WHITE)
            for c in "ABCD"
        ]))
        live_x_edges = always_redraw(lambda: VGroup(*[
            ParametricFunction(
                lambda t, y=B_ + dy * s.get_value(): p3(t, y, f(t, y)),
                t_range=[A_, A_ + H_ * s.get_value()],
                color=EDGE_X, stroke_width=6)
            for dy in (0.0, K_)
        ]))
        live_y_edges = always_redraw(lambda: VGroup(*[
            ParametricFunction(
                lambda t, x=A_ + dx * s.get_value(): p3(x, t, f(x, t)),
                t_range=[B_, B_ + K_ * s.get_value()],
                color=EDGE_Y, stroke_width=6)
            for dx in (0.0, H_)
        ]))
        self.remove(rect, ground_dots, surf_dots, edge_bot, edge_top,
                    edge_left, edge_right)
        self.add(live_rect, live_dots, live_x_edges, live_y_edges)

        limit_tag = MathTex(r"h,\,k \to 0", font_size=34, color=YELLOW)
        self.add_fixed_in_frame_mobjects(limit_tag)
        limit_tag.next_to(head6, DOWN, aligned_edge=LEFT, buff=0.3)
        self.remove(limit_tag)
        self.play(FadeIn(limit_tag), run_time=0.5)
        self.play(s.animate.set_value(0.10), run_time=3.5,
                  rate_func=rate_functions.ease_in_out_sine)

        conclusion = VGroup(
            MathTex(r"\frac{\partial}{\partial y}\!"
                    r"\left(\frac{\partial f}{\partial x}\right)\!(a,b)"
                    r" = \frac{\partial}{\partial x}\!"
                    r"\left(\frac{\partial f}{\partial y}\right)\!(a,b)",
                    font_size=36),
            MathTex(r"f_{xy}(a,b) = f_{yx}(a,b)", font_size=40),
        ).arrange(DOWN, buff=0.3)
        box = SurroundingRectangle(conclusion[1], color=YELLOW, buff=0.18)
        # a dark backing so the formulas stay legible over the axes
        backing = BackgroundRectangle(VGroup(conclusion, box),
                                      color=BLACK, fill_opacity=0.8, buff=0.2)
        final = VGroup(backing, conclusion, box)
        self.add_fixed_in_frame_mobjects(final)
        final.to_edge(DOWN, buff=0.5)
        self.remove(final)
        self.play(FadeIn(backing), FadeIn(conclusion[0]), run_time=0.9)
        self.play(FadeIn(conclusion[1]), Create(box), run_time=1.0)

        # a slow turn to close
        self.move_camera(theta=-22 * DEGREES, run_time=4.0)
        self.wait(1.8)
