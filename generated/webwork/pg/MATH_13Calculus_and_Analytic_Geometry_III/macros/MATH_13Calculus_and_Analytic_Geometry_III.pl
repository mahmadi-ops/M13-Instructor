#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# MATH 13-Calculus and Analytic Geometry III
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
  \usepackage{tikz}
  \usepackage{amsmath}
  \usetikzlibrary{decorations.pathmorphing, arrows.meta, calc}
  \usepackage{tikz-3dplot}
  \usepackage{pgfplots}
\pgfplotsset{compat=1.17}
  
  \definecolor{mblue}{HTML}{2B6CB0}
  \definecolor{msky}{HTML}{58C4DD}
  \definecolor{mred}{HTML}{E04B4B}
  \definecolor{mpink}{HTML}{D147BD}
  \definecolor{mgreen}{HTML}{4FA84F}
  \definecolor{morange}{HTML}{E08A2B}
  \definecolor{mverm}{HTML}{D55E00}
  \definecolor{mgray}{HTML}{7F7F7F}

END_LATEX_IMAGE_PREAMBLE
}
