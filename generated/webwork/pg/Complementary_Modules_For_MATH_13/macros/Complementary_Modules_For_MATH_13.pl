#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Complementary Modules For MATH 13
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
  \usepackage{tikz}
  \usepackage{amsmath}
  \usetikzlibrary{decorations.pathmorphing, arrows.meta}
  \usepackage{pgfplots}
\pgfplotsset{compat=1.17}

END_LATEX_IMAGE_PREAMBLE
}
