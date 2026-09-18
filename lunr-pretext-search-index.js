var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book covers the same mathematics as a traditional printed text for the third quarter of calculus hyperbolic functions, sequences, series and Taylor approximation, vectors and the geometry of three-dimensional space, and the differential calculus of functions of several variables up to Lagrange multipliers but it was written from the start as an interactive, accessible web book rather than a printed page. It grew out of a project at Santa Clara University with two aims: to strengthen conceptual understanding of these ideas through explicit connections to physical phenomena, and to build materials that support diverse learners, including readers who use screen readers or tactile graphics. This preface points out what that makes possible, and what you will find here that a conventional textbook cannot offer.   Special features of this book      Mathematics tied to the physical world. The ideas are introduced through the things they describe: the catenary of a hanging chain and the Gateway Arch, whispering galleries, the LORAN navigation system and the orbit of an interstellar comet, parabolic antennas and the Hubble mirror, cooling towers, projectile motion and collisions, the torque on a wrench, the electric field of a dipole, the isobars around a low-pressure system, the drainage of a field. The applications are not decoration at the end of a section; they are where the mathematics is worked out.     Figures you can move. More than thirty figures are live, three-dimensional interactives: you can slice a quadric surface with your own hands and watch the cross-sections change, swing a vertical plane through a surface to see a directional derivative appear as a slope, tilt a tangent plane against its surface, or walk a point along a level curve while a barometer or a voltmeter reads out what the function is doing instead of staring at one frozen perspective drawing.     Ideas that move. Nearly sixty short animations run through the book: a curve tracing itself out as its parameter runs, Taylor polynomials converging on a function, a plane slicing a cone into every conic section, a saddle surface being cut along two directions, a marble finding stable and unstable equilibria. Each shows a construction the way an instructor would build it up at the board.     A Socratic tutor that will not tell you the answer. Every assignment page carries a tutor button in the corner. It knows the problems on that page and coaches you the way a good office hour does with questions and small hints, never with the answer handed over. It stays docked as you scroll, so you can read a problem and talk about it at the same time. See for how to set it up. The review sets deliberately do not have it: those are rehearsal for exams, where you are on your own.     Solutions that arrive where you need them. The ten assignments and the four review problem sets are gathered in . After an assignment's due date, a complete worked solution appears directly beneath every one of its problems on the same page where you worked them rather than in a separate solutions manual. The review problem sets get their solutions the same way, and several of their problems check your answer the moment you enter it.     Nothing is a page-flip away. Every reference to a definition, theorem, equation, or figure opens where you are standing, so checking what a symbol meant never costs you your place. A search box on every page finds any word in the book.     Free, current, and everywhere. The book costs nothing, opens on a phone, a tablet, or a laptop, and can be corrected and improved continuously a fixed typo or a clearer example reaches every reader the same day, with no second edition to buy.       Accessibility  Accessibility is a design goal of this book, not an afterthought. The book is built with PreTeXt, which produces web pages designed to support diverse learners, including readers who use assistive technology:      Mathematics a screen reader can speak. Every formula is real mathematical notation, not a picture of one. Screen readers can read expressions aloud piece by piece, and readers can magnify or explore any formula without it turning into a blur.     Figures built to be described, explored, and touched. Most diagrams are generated from descriptions of their mathematical content, so the same figure carries a spoken description of each of its parts, can be explored piece by piece from the keyboard, and can be produced as tactile graphics for readers who are blind or have low vision. A number of graphs can also be heard, their curves traced out as sound.     Navigation without a mouse. The book has a consistent structure chapters, sections, and a table of contents on every page that can be traversed entirely from the keyboard.     Type and layout that adapt to the reader. Text reflows to fit any screen and any zoom level, so enlarging the type never forces sideways scrolling, and the reading experience is the same on a phone as on a desktop monitor.     If any part of this book does not work well with the tools you use to read it, please let the author know, so it can be fixed for you and for every reader after you.   "
},
{
  "id": "sec-hyp-definitions",
  "level": "1",
  "url": "sec-hyp-definitions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions and Derivatives",
  "body": " Definitions and Derivatives  The hyperbolic cosine is defined as   and the hyperbolic sine is defined as   The derivatives are given as follows.   Both formulas follow directly from the definitions, since and .  "
},
{
  "id": "sec-hyp-definitions-2",
  "level": "2",
  "url": "sec-hyp-definitions.html#sec-hyp-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cosine "
},
{
  "id": "sec-hyp-definitions-3",
  "level": "2",
  "url": "sec-hyp-definitions.html#sec-hyp-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic sine "
},
{
  "id": "sec-hyp-graphs",
  "level": "1",
  "url": "sec-hyp-graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph, Domain, and Range of <span class=\"process-math\">\\(\\cosh x\\)<\/span> and <span class=\"process-math\">\\(\\sinh x\\)<\/span>",
  "body": " Graph, Domain, and Range of and  Since and are built from the two exponentials and , their graphs are easiest to understand by sketching those exponentials first. See and .   The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}                The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1                From the graphs we can read off the following facts.     The domain of and is .    The range of is , whereas the range of is .    Notice that is an odd function, i.e. , whereas is an even function, i.e. .     "
},
{
  "id": "fig-hyp-sinh-graph",
  "level": "2",
  "url": "sec-hyp-graphs.html#fig-hyp-sinh-graph",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}              "
},
{
  "id": "fig-hyp-cosh-graph",
  "level": "2",
  "url": "sec-hyp-graphs.html#fig-hyp-cosh-graph",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1               "
},
{
  "id": "sec-hyp-identities",
  "level": "1",
  "url": "sec-hyp-identities.html",
  "type": "Section",
  "number": "1.3",
  "title": "Identities and Other Hyperbolic Functions",
  "body": " Identities and Other Hyperbolic Functions  A similar identity to the trigonometric identity holds for the hyperbolic functions:   As you already know, any point on the circumference of the unit circle can be described in terms of sine and cosine of an angle , i.e. and , which results in the trigonometric identity . See .   Any point on the unit circle can be written as .     circ(t) = (cos(t), sin(t))           P(\\cos t, \\sin t)    x    y    1    O    x^2+y^2=1               Similarly, any point on the right branch of the hyperbola can be represented as and , where . This follows directly from identity , i.e. . See .   Any point on the right branch of the hyperbola can be written as .     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)          P(\\cosh t, \\sinh t)    0    x^2-y^2=1               Parametrizing the Left Branch   Both branches of are drawn in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?    The identity is unaffected if you change the sign of the first coordinate.     for .    Every point of the hyperbola satisfies , so ; the left branch is the part where .  Start with a point on that branch. Since is one-to-one and onto, there is exactly one with . For that , so , and forces . Hence every point of the left branch has the form .  Conversely, each such point does lie on the left branch: and . Therefore parametrizes the left branch exactly once, and geometrically it is the mirror image across the -axis of the parametrization of the right branch.  Note that is also correct: it sweeps out the same branch, only downward instead of upward as increases.    As you might have guessed, the rest of the hyperbolic functions are defined as follows.   "
},
{
  "id": "fig-hyp-circle",
  "level": "2",
  "url": "sec-hyp-identities.html#fig-hyp-circle",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Any point on the unit circle can be written as .     circ(t) = (cos(t), sin(t))           P(\\cos t, \\sin t)    x    y    1    O    x^2+y^2=1              "
},
{
  "id": "fig-hyp-hyperbola",
  "level": "2",
  "url": "sec-hyp-identities.html#fig-hyp-hyperbola",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Any point on the right branch of the hyperbola can be written as .     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)          P(\\cosh t, \\sinh t)    0    x^2-y^2=1             "
},
{
  "id": "checkpoint-hyp-left-branch",
  "level": "2",
  "url": "sec-hyp-identities.html#checkpoint-hyp-left-branch",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Parametrizing the Left Branch.",
  "body": " Parametrizing the Left Branch   Both branches of are drawn in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?    The identity is unaffected if you change the sign of the first coordinate.     for .    Every point of the hyperbola satisfies , so ; the left branch is the part where .  Start with a point on that branch. Since is one-to-one and onto, there is exactly one with . For that , so , and forces . Hence every point of the left branch has the form .  Conversely, each such point does lie on the left branch: and . Therefore parametrizes the left branch exactly once, and geometrically it is the mirror image across the -axis of the parametrization of the right branch.  Note that is also correct: it sweeps out the same branch, only downward instead of upward as increases.   "
},
{
  "id": "sec-hyp-identity-list",
  "level": "1",
  "url": "sec-hyp-identity-list.html",
  "type": "Section",
  "number": "1.4",
  "title": "Hyperbolic Identities",
  "body": " Hyperbolic Identities  Below are some identities that you may find useful in some problems, however, you are not expected to memorize them. We will prove some of them as an exercise later.    Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as     Since is even, it becomes one-to-one only after we restrict it to , where it increases from to . Set and solve for . Multiplying the numerator and the denominator by gives   Clearing the denominator gives , and the substitution turns this into a quadratic equation in :   By the quadratic formula, that is, . Interchanging the names of the two variables, so that is the inverse function, we get   It remains to decide which sign to take, and the convention is to choose , matching the restriction made above. Note that so the minus sign would give . Since we are looking for , we choose the plus sign:      An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .    We substitute , :   The last line uses from , which lets us state the answer without any inverse hyperbolic function.  Along the way, we have also used the following:     "
},
{
  "id": "example-hyp-arccosh",
  "level": "2",
  "url": "sec-hyp-identity-list.html#example-hyp-arccosh",
  "type": "Example",
  "number": "1.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\cosh^{-1}(x)\\)<\/span>.",
  "body": " Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as     Since is even, it becomes one-to-one only after we restrict it to , where it increases from to . Set and solve for . Multiplying the numerator and the denominator by gives   Clearing the denominator gives , and the substitution turns this into a quadratic equation in :   By the quadratic formula, that is, . Interchanging the names of the two variables, so that is the inverse function, we get   It remains to decide which sign to take, and the convention is to choose , matching the restriction made above. Note that so the minus sign would give . Since we are looking for , we choose the plus sign:    "
},
{
  "id": "example-hyp-integral",
  "level": "2",
  "url": "sec-hyp-identity-list.html#example-hyp-integral",
  "type": "Example",
  "number": "1.4.2",
  "title": "An integral via a hyperbolic substitution.",
  "body": " An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .    We substitute , :   The last line uses from , which lets us state the answer without any inverse hyperbolic function.  Along the way, we have also used the following:    "
},
{
  "id": "subsec-hyp-catenary",
  "level": "1",
  "url": "subsec-hyp-catenary.html",
  "type": "Subsection",
  "number": "1.5.1",
  "title": "Hanging Cables and the Catenary",
  "body": " Hanging Cables and the Catenary  If a heavy flexible cable (such as a telephone line, a power line, or a chain) hangs freely from two supports, it settles into a curve called a catenary . Contrary to a common guess, this curve is not a parabola; it is the graph of a hyperbolic cosine, where is measured horizontally from the lowest point of the cable, so that the -axis is the axis of symmetry and the lowest point sits at height . Sliding the curve up or down, as in , only changes where we draw the -axis.  The shape comes out of a balance of forces. Look at the piece of cable running from the lowest point to a point where the cable makes an angle with the horizontal, and let be the arc length of that piece. Three forces act on it: the tension at the lowest point, which is horizontal; the tension along the cable at the other end; and the weight of the piece, where is the mass per unit length; see . Balancing the horizontal and the vertical components gives    The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                 The quantity has units of length, and dividing the second equation by the first eliminates and leaves . Since the cable makes the angle with the horizontal, is its slope, so Now use the arc length element and separate the variables: where the constant of integration vanishes because at .  Solving for gives , and therefore One last integration, together with , produces the catenary equation .  Two things are worth noticing. First, is a pure scale factor: written as , the equation shows that every catenary is a scaled copy of the single curve , in exactly the same way that every circle is a scaled copy of the unit circle; shows four of them. Second, is fixed by the cable itself. If the cable has half-length and its two supports are a distance apart, then putting at in gives which determines (numerically) from the two lengths. Since , a cable pulled tight has a large and hangs almost flat, while a slack one has a small and sags sharply.   The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4                A worked example of a hanging cable, in which we find the slope of the cable and the angle at which it meets its pole, appears in .  The derivation above follows F. Behroozi, In Praise of the Catenary , The Physics Teacher  56 , 214 217 (2018), which also discusses the sense in which all catenaries are similar to one another and suggests simple classroom demonstrations.  "
},
{
  "id": "subsec-hyp-catenary-2",
  "level": "2",
  "url": "subsec-hyp-catenary.html#subsec-hyp-catenary-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "catenary "
},
{
  "id": "fig-hyp-catenary-forces",
  "level": "2",
  "url": "subsec-hyp-catenary.html#fig-hyp-catenary-forces",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                "
},
{
  "id": "fig-hyp-catenary-family",
  "level": "2",
  "url": "subsec-hyp-catenary.html#fig-hyp-catenary-family",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4               "
},
{
  "id": "subsec-hyp-catenary-10",
  "level": "2",
  "url": "subsec-hyp-catenary.html#subsec-hyp-catenary-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "56 "
},
{
  "id": "subsec-hyp-celestial",
  "level": "1",
  "url": "subsec-hyp-celestial.html",
  "type": "Subsection",
  "number": "1.5.2",
  "title": "Celestial Mechanics",
  "body": " Celestial Mechanics  If a comet has enough speed, it can escape the gravitational pull of the sun, in which case one possible trajectory is a hyperbolic trajectory. The comet 2I\/Borisov , discovered in 2019, is the first comet known to have come from outside our solar system. It was moving too fast for the sun to capture it, so its path is a hyperbola rather than an ellipse: it swung around the sun once and is now on its way back out. See .   The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.    "
},
{
  "id": "fig-hyp-comet-borisov",
  "level": "2",
  "url": "subsec-hyp-celestial.html#fig-hyp-comet-borisov",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.   "
},
{
  "id": "subsec-hyp-gateway-arch",
  "level": "1",
  "url": "subsec-hyp-gateway-arch.html",
  "type": "Subsection",
  "number": "1.5.3",
  "title": "The Gateway Arch",
  "body": " The Gateway Arch   The Gateway Arch in St. Louis, Missouri (designed in 1963 and completed in 1965) is a catenary turned upside down: flipping the curve converts the tension carried by a hanging chain into pure compression, which is what masonry and steel carry best. The geometric form of the gateway was set by Hannskari Bandel (structural engineer) and was expressed in the blueprints by the equation where , , and are constants. The arch is slightly flattened compared with a uniform hanging chain, because it is thicker at the base than at the top. It stands 630 feet tall and 630 feet wide at the base; the National Park Service describes its construction and its geometry at Gateway Arch National Park . See .   The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.    "
},
{
  "id": "subsec-hyp-gateway-arch-2",
  "level": "2",
  "url": "subsec-hyp-gateway-arch.html#subsec-hyp-gateway-arch-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Gateway Arch in St. Louis, Missouri "
},
{
  "id": "fig-hyp-gateway-arch",
  "level": "2",
  "url": "subsec-hyp-gateway-arch.html#fig-hyp-gateway-arch",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.   "
},
{
  "id": "sec-hyp-more-examples",
  "level": "1",
  "url": "sec-hyp-more-examples.html",
  "type": "Section",
  "number": "1.6",
  "title": "Further Examples",
  "body": " Further Examples   A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.          The function is plotted in . To find the slope at the right pole, we differentiate the function with respect to and evaluate it at :     We know that and hence radians.      The telephone line between the two poles at and . The angle is measured between the line and the right pole.     cat(t) = (t, 20*(exp(t\/20) + exp(-t\/20))\/2 - 15)         \\theta    5    -7    7                  Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .          We note that and and hence      First Method: We can use the fraction derived in part A together with the quotient rule as follows.    Second Method: We can use the chain rule as follows.         A double-angle identity   Prove that .    Starting from the definition,   For the last equality, we have used and .     Solving a hyperbolic equation   Consider the equation and solve for .    We begin by substituting the definitions of hyperbolic functions. so that or .  Since the exponential function can only be positive, the only solution is     "
},
{
  "id": "example-hyp-catenary",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-catenary",
  "type": "Example",
  "number": "1.6.1",
  "title": "A hanging telephone line.",
  "body": " A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.          The function is plotted in . To find the slope at the right pole, we differentiate the function with respect to and evaluate it at :     We know that and hence radians.      The telephone line between the two poles at and . The angle is measured between the line and the right pole.     cat(t) = (t, 20*(exp(t\/20) + exp(-t\/20))\/2 - 15)         \\theta    5    -7    7                "
},
{
  "id": "example-hyp-sinh-ln",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-sinh-ln",
  "type": "Example",
  "number": "1.6.3",
  "title": "Rewriting <span class=\"process-math\">\\(\\sinh(\\ln(x))\\)<\/span>.",
  "body": " Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .          We note that and and hence      First Method: We can use the fraction derived in part A together with the quotient rule as follows.    Second Method: We can use the chain rule as follows.       "
},
{
  "id": "example-hyp-double-angle",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-double-angle",
  "type": "Example",
  "number": "1.6.4",
  "title": "A double-angle identity.",
  "body": " A double-angle identity   Prove that .    Starting from the definition,   For the last equality, we have used and .   "
},
{
  "id": "example-hyp-equation",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-equation",
  "type": "Example",
  "number": "1.6.5",
  "title": "Solving a hyperbolic equation.",
  "body": " Solving a hyperbolic equation   Consider the equation and solve for .    We begin by substituting the definitions of hyperbolic functions. so that or .  Since the exponential function can only be positive, the only solution is    "
},
{
  "id": "sec-series-definitions",
  "level": "1",
  "url": "sec-series-definitions.html",
  "type": "Subsection",
  "number": "2.1.1",
  "title": "Definitions",
  "body": " Definitions   Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.     A Sequence of Halves   The numbers form an infinite sequence; its th term is .     Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.     An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. The above sum corresponds to the area of a square of side one. See .     The sum fills up a square of side one, so the sum is .               1\/2    1\/4    1\/8    1\/16                "
},
{
  "id": "def-sequence",
  "level": "2",
  "url": "sec-series-definitions.html#def-sequence",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.   "
},
{
  "id": "ex-halving-sequence",
  "level": "2",
  "url": "sec-series-definitions.html#ex-halving-sequence",
  "type": "Example",
  "number": "2.1.2",
  "title": "A Sequence of Halves.",
  "body": " A Sequence of Halves   The numbers form an infinite sequence; its th term is .   "
},
{
  "id": "def-infinite-series",
  "level": "2",
  "url": "sec-series-definitions.html#def-infinite-series",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Infinite Series.",
  "body": " Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.   "
},
{
  "id": "ex-halving-series",
  "level": "2",
  "url": "sec-series-definitions.html#ex-halving-series",
  "type": "Example",
  "number": "2.1.4",
  "title": "An Infinite Series with a Finite Sum.",
  "body": " An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. The above sum corresponds to the area of a square of side one. See .   "
},
{
  "id": "fig-series-square",
  "level": "2",
  "url": "sec-series-definitions.html#fig-series-square",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": " The sum fills up a square of side one, so the sum is .               1\/2    1\/4    1\/8    1\/16               "
},
{
  "id": "sec-series-partial-sums",
  "level": "1",
  "url": "sec-series-partial-sums.html",
  "type": "Subsection",
  "number": "2.1.2",
  "title": "Partial Sums",
  "body": " Partial Sums  Consider the infinite sequence . Let us denote the sum of the first terms in this sequence by , which are known as partial sums . Can we find a pattern in the sequence of partial sums?   From the pattern in , we can compute the result of the infinite series by taking the limit of the partial sum as .   Note that this is the same answer that we found using our geometric analysis (using the square).  Note that in the above example, the sequence of the partial sums converged to . In general, if the sequence of the partial sums converges to a number, we say that the series converges , otherwise we say that the series diverges .  "
},
{
  "id": "sec-series-partial-sums-2",
  "level": "2",
  "url": "sec-series-partial-sums.html#sec-series-partial-sums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial sums "
},
{
  "id": "sec-series-partial-sums-5",
  "level": "2",
  "url": "sec-series-partial-sums.html#sec-series-partial-sums-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges diverges "
},
{
  "id": "sec-series-geometric",
  "level": "1",
  "url": "sec-series-geometric.html",
  "type": "Subsection",
  "number": "2.1.3",
  "title": "Geometric Series",
  "body": " Geometric Series  An important example of infinite series is the geometric series. The geometric series is of the form where are real numbers and . Note that we can re-write the series as .  Let us compute the partial sum for the geometric series. The partial sum is   If we multiply equation by , we get a similar expression.   Then deducting from we get   Next, to compute the result of the geometric series, we take the limit of the partial sum as in the previous example.   Note that if , we have and hence , whereas if , diverges and therefore the geometric series diverges. That leaves the two cases with . When , the partial sum is   limit of which diverges.   What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?    The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.    Putting all of the cases together, we can say that if , the geometric series is divergent.   Summary  The geometric series converges to if , i.e. and diverges if .   Next, as an application of the geometric series, we will go through the following example, which is from our textbook.   A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.    As can be seen in , the total vertical distance travelled by the ball can be written as the infinite series   which can be re-written and then summed with , since here.    The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3                  "
},
{
  "id": "sec-series-geometric-2",
  "level": "2",
  "url": "sec-series-geometric.html#sec-series-geometric-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "exercise-geometric-r-negative-one",
  "level": "2",
  "url": "sec-series-geometric.html#exercise-geometric-r-negative-one",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "What Happens When <span class=\"process-math\">\\(r = -1\\text{?}\\)<\/span>",
  "body": " What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?    The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.   "
},
{
  "id": "example-series-ball",
  "level": "2",
  "url": "sec-series-geometric.html#example-series-ball",
  "type": "Example",
  "number": "2.1.7",
  "title": "A bouncing ball.",
  "body": " A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.    As can be seen in , the total vertical distance travelled by the ball can be written as the infinite series   which can be re-written and then summed with , since here.    The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3                 "
},
{
  "id": "sec-series-nth-term",
  "level": "1",
  "url": "sec-series-nth-term.html",
  "type": "Subsection",
  "number": "2.1.4",
  "title": "The <span class=\"process-math\">\\(n\\)<\/span>th Term Test",
  "body": " The th Term Test    If converges, then .     Important note: If , we cannot conclude that converges. See parts D and E in the example below.  The following test is a consequence of the above theorem.   The th Term Test  If does not exist or , then diverges.    Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                                   , so by the th Term Test, is divergent.     does not exist, so by the th Term Test, is divergent.     , so by the th Term Test, is divergent.    Note that in this case , which means we cannot use the th term test . Instead let us write the partial sum.      We begin by writing the infinite series in the sigma notation. Note that the th Term Test is not conclusive for this one, since . However, this is a geometric series with and , so and applies.        "
},
{
  "id": "thm-series-nth-term",
  "level": "2",
  "url": "sec-series-nth-term.html#thm-series-nth-term",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "",
  "body": "  If converges, then .   "
},
{
  "id": "sec-series-nth-term-3",
  "level": "2",
  "url": "sec-series-nth-term.html#sec-series-nth-term-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important note: "
},
{
  "id": "example-series-convergence",
  "level": "2",
  "url": "sec-series-nth-term.html#example-series-convergence",
  "type": "Example",
  "number": "2.1.10",
  "title": "Testing series for convergence.",
  "body": " Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                                   , so by the th Term Test, is divergent.     does not exist, so by the th Term Test, is divergent.     , so by the th Term Test, is divergent.    Note that in this case , which means we cannot use the th term test . Instead let us write the partial sum.      We begin by writing the infinite series in the sigma notation. Note that the th Term Test is not conclusive for this one, since . However, this is a geometric series with and , so and applies.       "
},
{
  "id": "sec-series-combining",
  "level": "1",
  "url": "sec-series-combining.html",
  "type": "Subsection",
  "number": "2.1.5",
  "title": "Combining Series",
  "body": " Combining Series    If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).        Using the difference rule   Evaluate .    Note that in and we already found that   Hence, we can simply use the difference rule to conclude that      A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.    We begin by writing the partial sum .   Note that , and hence the series diverges.    "
},
{
  "id": "thm-series-combining",
  "level": "2",
  "url": "sec-series-combining.html#thm-series-combining",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "",
  "body": "  If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).      "
},
{
  "id": "example-series-difference",
  "level": "2",
  "url": "sec-series-combining.html#example-series-difference",
  "type": "Example",
  "number": "2.1.12",
  "title": "Using the difference rule.",
  "body": " Using the difference rule   Evaluate .    Note that in and we already found that   Hence, we can simply use the difference rule to conclude that    "
},
{
  "id": "example-series-telescoping-ln",
  "level": "2",
  "url": "sec-series-combining.html#example-series-telescoping-ln",
  "type": "Example",
  "number": "2.1.13",
  "title": "A telescoping series with logarithms.",
  "body": " A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.    We begin by writing the partial sum .   Note that , and hence the series diverges.   "
},
{
  "id": "sec-taylor-definitions",
  "level": "1",
  "url": "sec-taylor-definitions.html",
  "type": "Subsection",
  "number": "2.2.1",
  "title": "Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials",
  "body": " Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials  In this section we will answer the following question:    If all we know about a function is information at , i.e. , how can we approximate with a polynomial ?    Throughout, let be a function with derivatives of all orders throughout some interval containing as an interior point.  Before stating the definitions, let us see where the coefficients of such a polynomial have to come from. Suppose the only things we know about are its readings at : the value , the slope , the second derivative , and so on. We look for a polynomial written in terms of , and we pin down the unknown coefficients by requiring to agree with at in as many derivatives as it has coefficients. Writing it in terms of rather than is what makes this manageable: every term after the first vanishes at .   Start with a line. Take . It has two coefficients, so we may impose two conditions: that it pass through the right point and leave it with the right slope. Differentiating and evaluating at , which gives , the tangent line to at .   Then a parabola. Allow one more coefficient, , and impose one more condition: that the second derivative match too. Differentiating twice, and evaluating each line at gives , , and , so that .  Notice what did not happen: and came out exactly as before. Each new condition is the first one in which the next coefficient appears, so it determines that coefficient and leaves the earlier ones untouched. That is why is the tangent line with a single new term added to it, rather than a fresh approximation built from scratch.   Then a cubic. With , the third derivative is the constant , so matching it against gives . The pattern in the denominators is now visible:   One computation settles every coefficient at once. Differentiate exactly times and evaluate at . Each term of degree below has been differentiated away to zero; each term of degree above still carries a factor of and so vanishes at ; and the one surviving term has become the constant . Hence and requiring forces   So there is nothing to choose. Once we ask a polynomial to match and its first derivatives at , its coefficients are determined, and they are the numbers . Reading as and as , the first coefficient fits the same formula. Letting grow without bound leads to the following definitions.   Taylor Series   The Taylor series generated by at is      Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial      Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is     Approximating near   Write down the Taylor polynomials of orders , , and generated by at .    Every derivative of is again, so , and the coefficients of are just . With this gives   The first of these is the tangent line to at . As shows, each additional term keeps the polynomial close to the curve over a wider stretch.   The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)=1+x    p_2(x)=1+x+\\frac{x^2}{2!}    p_3(x)=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}                   The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .     puts all three of these on one screen for . The centre slider is the of the definitions: left at it builds the Maclaurin polynomials, and moved anywhere else it rebuilds the same construction at a new point, where again touches the curve. The order slider is the of , and stepping it up adds exactly one term, . That term vanishes at , which is why raising the order changes the shape of the polynomial everywhere else but never moves it off the point .  The green band in the figure is worth watching on its own. It marks the interval on which stays within of , and it widens with every term: about for , about for , and wider than the picture by . So the Taylor polynomials do not merely improve at the centre; the region where they are usable grows. Whether that region eventually covers everything, and how large the error is at a given , are the questions of the next section.  "
},
{
  "id": "def-taylor-series",
  "level": "2",
  "url": "sec-taylor-definitions.html#def-taylor-series",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Taylor Series.",
  "body": " Taylor Series   The Taylor series generated by at is    "
},
{
  "id": "def-taylor-polynomial",
  "level": "2",
  "url": "sec-taylor-definitions.html#def-taylor-polynomial",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Taylor Polynomial of Order <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial    "
},
{
  "id": "remark-maclaurin-series",
  "level": "2",
  "url": "sec-taylor-definitions.html#remark-maclaurin-series",
  "type": "Remark",
  "number": "2.2.3",
  "title": "Maclaurin Series.",
  "body": " Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is   "
},
{
  "id": "example-taylor-exp",
  "level": "2",
  "url": "sec-taylor-definitions.html#example-taylor-exp",
  "type": "Example",
  "number": "2.2.4",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> near <span class=\"process-math\">\\(x = 0\\)<\/span>.",
  "body": " Approximating near   Write down the Taylor polynomials of orders , , and generated by at .    Every derivative of is again, so , and the coefficients of are just . With this gives   The first of these is the tangent line to at . As shows, each additional term keeps the polynomial close to the curve over a wider stretch.   The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)=1+x    p_2(x)=1+x+\\frac{x^2}{2!}    p_3(x)=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}                 "
},
{
  "id": "fig-taylor-order-animation",
  "level": "2",
  "url": "sec-taylor-definitions.html#fig-taylor-order-animation",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .   "
},
{
  "id": "sec-taylor-example",
  "level": "1",
  "url": "sec-taylor-example.html",
  "type": "Subsection",
  "number": "2.2.2",
  "title": "More Examples",
  "body": " More Examples   The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.          Let us begin by calculating the derivatives . Evaluating at : We can summarize as , for . Hence, for the Taylor series at , we have     The first four non-zero Taylor polynomials are     The function and the four polynomials are plotted in . As the order increases, the polynomial follows the sine curve over a wider interval.      The function together with the Taylor polynomials , , , and at .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)=x    p_3(x)=x-\\frac{x^3}{3!}    p_5(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}    p_7(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}                     Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        A. Write , so that , and build the Maclaurin series of straight from . Differentiating repeatedly, and in general . Each differentiation brings down one more factor of from the chain rule and one more factor from the exponent, which is exactly the that the definition divides by. Evaluating at gives , so the coefficients are and therefore   The same series comes out with no differentiation at all, because is the sum of a geometric series. Taking and in , which agrees term by term with what the derivatives gave. The shortcut is worth noticing: whenever a function can be recognised as the sum of a geometric series, its Maclaurin series can be read off without computing a single derivative.  Multiplying by the factor of in front of now answers the question,    B. The geometric series above converges exactly when , that is . At either endpoint the terms do not shrink to zero: at every term equals , and at the terms alternate between and . By the th Term Test ( ) the series diverges at both endpoints, so the interval of convergence is       Compute the Taylor series of at .     Method 1: from the definition. The series is centred at , so what we need are the derivatives . Differentiating a few times, and leaving the factors of that the chain rule produces on display rather than multiplying them out,   The pattern is now readable. Each differentiation flips the sign, brings down one more factor of from the chain rule, raises the power in the denominator by one, and multiplies the factorial up by one. So for the th derivative,   At the centre, , so The from the derivative cancels the that divides by, which is what makes the coefficients so simple here. Substituting them in,    Method 2: as a geometric series. Rewrite the denominator in terms of : . Factoring out the ,   The last expression is the sum of a geometric series with and , so by ,   This is the same series as Method 1, reached without differentiating anything. It also comes with its interval for free: a geometric series converges exactly when , which here says , that is .    "
},
{
  "id": "example-taylor-sin",
  "level": "2",
  "url": "sec-taylor-example.html#example-taylor-sin",
  "type": "Example",
  "number": "2.2.7",
  "title": "The Maclaurin series of <span class=\"process-math\">\\(\\sin(x)\\)<\/span>.",
  "body": " The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.          Let us begin by calculating the derivatives . Evaluating at : We can summarize as , for . Hence, for the Taylor series at , we have     The first four non-zero Taylor polynomials are     The function and the four polynomials are plotted in . As the order increases, the polynomial follows the sine curve over a wider interval.      The function together with the Taylor polynomials , , , and at .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)=x    p_3(x)=x-\\frac{x^3}{3!}    p_5(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}    p_7(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}                  "
},
{
  "id": "exercise-taylor-geometric",
  "level": "2",
  "url": "sec-taylor-example.html#exercise-taylor-geometric",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        A. Write , so that , and build the Maclaurin series of straight from . Differentiating repeatedly, and in general . Each differentiation brings down one more factor of from the chain rule and one more factor from the exponent, which is exactly the that the definition divides by. Evaluating at gives , so the coefficients are and therefore   The same series comes out with no differentiation at all, because is the sum of a geometric series. Taking and in , which agrees term by term with what the derivatives gave. The shortcut is worth noticing: whenever a function can be recognised as the sum of a geometric series, its Maclaurin series can be read off without computing a single derivative.  Multiplying by the factor of in front of now answers the question,    B. The geometric series above converges exactly when , that is . At either endpoint the terms do not shrink to zero: at every term equals , and at the terms alternate between and . By the th Term Test ( ) the series diverges at both endpoints, so the interval of convergence is    "
},
{
  "id": "exercise-taylor-shifted",
  "level": "2",
  "url": "sec-taylor-example.html#exercise-taylor-shifted",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": "  Compute the Taylor series of at .     Method 1: from the definition. The series is centred at , so what we need are the derivatives . Differentiating a few times, and leaving the factors of that the chain rule produces on display rather than multiplying them out,   The pattern is now readable. Each differentiation flips the sign, brings down one more factor of from the chain rule, raises the power in the denominator by one, and multiplies the factorial up by one. So for the th derivative,   At the centre, , so The from the derivative cancels the that divides by, which is what makes the coefficients so simple here. Substituting them in,    Method 2: as a geometric series. Rewrite the denominator in terms of : . Factoring out the ,   The last expression is the sum of a geometric series with and , so by ,   This is the same series as Method 1, reached without differentiating anything. It also comes with its interval for free: a geometric series converges exactly when , which here says , that is .   "
},
{
  "id": "subsection-1",
  "level": "1",
  "url": "subsection-1.html",
  "type": "Subsection",
  "number": "2.3.1",
  "title": "Taylor’s Formula and The Remainder Estimation Theorem",
  "body": " Taylor's Formula and The Remainder Estimation Theorem   Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and     To see a visual representation of Taylor's formula, watch the following animation.   Taylor's Formula Animation     Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)                 The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.     Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .    The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .     The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., . Taking absolute values in then gives:    "
},
{
  "id": "Taylor-Formula",
  "level": "2",
  "url": "subsection-1.html#Taylor-Formula",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Taylor’s Formula.",
  "body": " Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and    "
},
{
  "id": "vid-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#vid-taylor-formula",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " Taylor's Formula Animation   "
},
{
  "id": "fig-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#fig-taylor-formula",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)               "
},
{
  "id": "subsection-1-6",
  "level": "2",
  "url": "subsection-1.html#subsection-1-6",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.   "
},
{
  "id": "rmk-error-upper-bound",
  "level": "2",
  "url": "subsection-1.html#rmk-error-upper-bound",
  "type": "Remark",
  "number": "2.3.4",
  "title": "Finding an upper bound for the error term without knowing the value of <span class=\"process-math\">\\(c\\)<\/span>.",
  "body": " Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .  "
},
{
  "id": "thm-remainder-theorem",
  "level": "2",
  "url": "subsection-1.html#thm-remainder-theorem",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "The Remainder Estimation Theorem.",
  "body": " The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .   "
},
{
  "id": "subsection-1-9",
  "level": "2",
  "url": "subsection-1.html#subsection-1-9",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., . Taking absolute values in then gives:   "
},
{
  "id": "subsection-2",
  "level": "1",
  "url": "subsection-2.html",
  "type": "Subsection",
  "number": "2.3.2",
  "title": "An example of a Taylor series that converges",
  "body": " An example of a Taylor series that converges  Consider the function . We know that for all . Therefore, the Taylor series generated by at is given by:   We will show that this series converges to for all . To do this, we will use the remainder theorem. Putting and into , we have:   First, we consider the case when . As in , we do not need the exact value of , only an upper bound for . Since is between and , we have , so works; see . Therefore, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as , keeping in mind that is fixed and only is changing Why is for every fixed ? Write the quotient as a product of factors, . The numerators never change, but the denominators keep growing, so eventually every new factor is small. Precisely, fix an integer with . The first factors contribute the fixed number , and each factor after that satisfies for . Hence for we get , and the right-hand side tends to as , so the squeeze theorem gives the limit . In short, the factorial in the denominator eventually outgrows any fixed power in the numerator, no matter how large is. :   This shows that the Taylor series converges to for all .   Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                      The second case is when . In this case, since is between and , we have , so this time is an upper bound for ; see again. Hence, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as :   This shows that the Taylor series converges to for all . Therefore, we conclude that the Taylor series converges to for all .  The animation below illustrates this convergence geometrically. As the degree increases, the Taylor polynomials hug the graph of over a wider and wider interval, matching the fact that the remainder for every .   The Taylor polynomials of about converging to , followed by the remainder-theorem argument.    "
},
{
  "id": "fig-exp-taylor",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                     "
},
{
  "id": "fig-exp-taylor-video",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor-video",
  "type": "Figure",
  "number": "2.3.7",
  "title": "",
  "body": " The Taylor polynomials of about converging to , followed by the remainder-theorem argument.   "
},
{
  "id": "subsection-3",
  "level": "1",
  "url": "subsection-3.html",
  "type": "Subsection",
  "number": "2.3.3",
  "title": "The error in using a Taylor polynomial",
  "body": " The error in using a Taylor polynomial  In this subsection, we will discuss how to estimate the error in using a Taylor polynomial to approximate a function. We will use the remainder theorem to bound the error term .  Suppose we want to approximate using the Taylor polynomial of degree at . The error in this approximation is given by , which is rearranged. By the remainder theorem , we have:   To bound the error term, we need to find an upper bound for on the interval between and , as explained in . The examples below carry out this step in several different settings.   Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .     Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .       Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .     "
},
{
  "id": "ex-error-bound-exp",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-exp",
  "type": "Example",
  "number": "2.3.8",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> using a Taylor polynomial.",
  "body": " Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .   "
},
{
  "id": "ex-error-bound-sin-range",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-range",
  "type": "Example",
  "number": "2.3.9",
  "title": "Given a desired error bound, find values of <span class=\"process-math\">\\(x\\)<\/span> for which the approximation is guaranteed to be valid.",
  "body": " Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .     "
},
{
  "id": "ex-error-bound-sin-degree",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-degree",
  "type": "Example",
  "number": "2.3.10",
  "title": "Finding the value of <span class=\"process-math\">\\(n\\)<\/span> such that the error is less than a given tolerance.",
  "body": " Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .    "
},
{
  "id": "section-taylor-7",
  "level": "1",
  "url": "section-taylor-7.html",
  "type": "Subsection",
  "number": "2.3.4",
  "title": "Applications of Taylor Series and Remainder Theorem",
  "body": " Applications of Taylor Series and Remainder Theorem   Physicists often use Taylor series to approximate functions in order to simplify calculations. The first example is the kinetic energy of an object in relativistic mechanics. The second example is the approximation of the period of a pendulum. We will discuss the error in using these approximations and when it is valid to use them. Additionally, we will discuss how to use the taylor series to estimate value of in the last example.    Approximating Relativistic Kinetic Energy  In relativistic mechanics, the mass of an object moving with velocity is given by: where is the rest mass of the object and is the speed of light. Then the kinetic energy of an object of mass moving with velocity is:   In the case when , we can use the Taylor series to approximate the kinetic energy. In example we will show that the kinetic energy can be approximated by the formula when . See for a comparison of the relativistic kinetic energy and its Newtonian approximation.   Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}                  Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    Substituting into , we can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Subtracting the from , we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:      Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are keeping only the degree- term of , i.e. we are using the Taylor polynomial of degree at to approximate . Therefore, by the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .      Small-Angle Approximation for a Pendulum  We begin this section by briefly reviewing the forces acting on a simple pendulum and how the small-angle approximation allows us to treat its motion as simple harmonic motion.  The bob moves along the arc, so only the component of gravity tangent to that arc drives the motion. Resolving the weight into a component along the string ( , balanced by the string tension ) and a component tangent to the arc, as shown in , gives the restoring force   The minus sign indicates that the force always points back toward the equilibrium (straight-down) position. This is not Hooke's law: the force is proportional to , not to the displacement itself, so the motion is not exactly simple harmonic. Writing the arc displacement as , we would need to be proportional to that is, to for the motion to be simple harmonic.  The small-angle approximation bridges this gap. From the Taylor series when is small (in radians) the higher-order terms are negligible and . The restoring force then becomes which is Hooke's law with effective spring constant .  This is exactly what fixes the period. Newton's second law turns Hooke's law into the equation of motion Notice that the mass cancels. The equation says that is a function whose second derivative is a negative multiple of itself, and the functions with that property are the sines and cosines: writing , every solution has the form which you can verify by differentiating twice. The number is the angular frequency, and and repeat when increases by . So the motion repeats after a time with , giving   Thus, for small swings the pendulum behaves as a simple harmonic oscillator, with the period , which is independent of both the amplitude and the mass. Taylor's Remainder Theorem (see ) enables us to quantify how small must be for this approximation .   Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m                 Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .     Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , which is , carried one term further:   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative. By , for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with the period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .        Approximating the value of using Taylor series  In this subsection, we will discuss how to approximate the value of using Taylor series. We will use the Taylor series for arctan(x) to approximate .   Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply : if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.        As we saw in the previous example, Taylor series approached very slowly. In the project below, we will see how to use the so-called Euler's formula to approximate much faster. As you may know, there are many other methods to approximate , which we will not cover here.   Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply by and replace each arctangent by its Taylor polynomial.    By , . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that     Apply with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.     with gives Writing by and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .        "
},
{
  "id": "fig-ke-cartoon",
  "level": "2",
  "url": "section-taylor-7.html#fig-ke-cartoon",
  "type": "Figure",
  "number": "2.3.11",
  "title": "",
  "body": " Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}               "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-taylor-7.html#example-1",
  "type": "Example",
  "number": "2.3.12",
  "title": "Newtonian kinetic energy as an approximation to relativistic kinetic energy when <span class=\"process-math\">\\(v \\ll c\\)<\/span>.",
  "body": " Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    Substituting into , we can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Subtracting the from , we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:    "
},
{
  "id": "ex-error-newtonian-ke",
  "level": "2",
  "url": "section-taylor-7.html#ex-error-newtonian-ke",
  "type": "Example",
  "number": "2.3.13",
  "title": "Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy.",
  "body": " Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are keeping only the degree- term of , i.e. we are using the Taylor polynomial of degree at to approximate . Therefore, by the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .   "
},
{
  "id": "fig-pendulum-forces",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces",
  "type": "Figure",
  "number": "2.3.14",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m               "
},
{
  "id": "fig-pendulum-forces-video",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces-video",
  "type": "Figure",
  "number": "2.3.15",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .   "
},
{
  "id": "ex-small-angle-pendulum",
  "level": "2",
  "url": "section-taylor-7.html#ex-small-angle-pendulum",
  "type": "Example",
  "number": "2.3.16",
  "title": "Simple Harmonic Motion of a Pendulum as an Approximation.",
  "body": " Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , which is , carried one term further:   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative. By , for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with the period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .     "
},
{
  "id": "ex-approx-pi-arctan",
  "level": "2",
  "url": "section-taylor-7.html#ex-approx-pi-arctan",
  "type": "Example",
  "number": "2.3.19",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span> using the Taylor series for <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply : if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.     "
},
{
  "id": "proj-euler-pi",
  "level": "2",
  "url": "section-taylor-7.html#proj-euler-pi",
  "type": "Project",
  "number": "2.3.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\pi\\)<\/span> with Euler’s identity.",
  "body": " Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply by and replace each arctangent by its Taylor polynomial.    By , . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that     Apply with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.     with gives Writing by and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .     "
},
{
  "id": "subsection-5",
  "level": "1",
  "url": "subsection-5.html",
  "type": "Subsection",
  "number": "2.3.5",
  "title": "Proof of the remainder theorem",
  "body": " Proof of the remainder theorem  In this subsection, we will provide a proof of the remainder theorem.  Let be a function that has continuous derivatives on an open interval containing . We want to show that for each and for each positive integer , there exists a number between and such that where and   To prove this, we will first prove the following lemma:    Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .     The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .    The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .   Now, assume that . We can construct the function such that and for . Therefore, by the lemma and considering , there exists a number between and such that . After computing , we have . Since , we have . This completes the proof of the remainder theorem.  "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "subsection-5.html#lemma-1",
  "type": "Lemma",
  "number": "2.3.22",
  "title": "",
  "body": "  Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .   "
},
{
  "id": "subsection-5-6",
  "level": "2",
  "url": "subsection-5.html#subsection-5-6",
  "type": "Proof",
  "number": "2.3.5.1",
  "title": "",
  "body": " The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .  "
},
{
  "id": "rmk-zero-error-function",
  "level": "2",
  "url": "subsection-5.html#rmk-zero-error-function",
  "type": "Remark",
  "number": "2.3.23",
  "title": "The error function and its derivatives are zero at the point of expansion.",
  "body": " The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .  "
},
{
  "id": "sec-binomial-series",
  "level": "1",
  "url": "sec-binomial-series.html",
  "type": "Subsection",
  "number": "2.4.1",
  "title": "Binomial Series",
  "body": " Binomial Series  Before we try powers such as or , let us look at what happens when the exponent is an ordinary positive integer, where nothing beyond multiplication is needed. Multiplying out by hand,   Two features stand out. First, each expansion stops : the power gives a polynomial with exactly terms. Second, the coefficients are far from random. Stripping them out and stacking one row per exponent gives the array in .   Pascal's triangle. Row holds the coefficients of . Every row begins and ends with , and each remaining entry is the sum of the two entries above it; the arrows show the of the last row.       1    1  1    1  2  1    1  3  3  1    1  4  6  4  1                      This array is called Pascal's triangle . Every row starts and ends with , and each remaining entry is the sum of the two entries just above it the in the bottom row, for instance, is . That rule alone produces the next expansion with no multiplying at all: the following row is , and therefore .  The triangle tells us what the coefficients are, but not yet why . For that, look at where a term of the expansion actually comes from. Written out in full, the fourth power is and multiplying this out means walking through the four factors, picking either the or the out of each one, and multiplying the four picks together. Every term of the expansion arises that way, from one such set of picks. So to land on we must take the from exactly three of the four factors, and the from the single factor left over. The question what is the coefficient of ? has turned into a counting question: in how many ways can we choose of the factors to hand us an ?    The four ways to produce from . Each row picks one term out of every factor: an from three of them (colored arrows) and the from the fourth (gray arrow). Four rows, so the coefficient of is .       (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot x\\cdot x\\cdot 1 = x^3    (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot x\\cdot 1\\cdot x = x^3    (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot 1\\cdot x\\cdot x = x^3    (1+x)  (1+x)  (1+x)  (1+x)      1\\cdot x\\cdot x\\cdot x = x^3                There are four such choices and no others, so multiplying out produces four times and its coefficient is  exactly the entry sitting in the row . Nothing here was special to or to the fourth power. In the coefficient of counts the ways of choosing of the factors to supply an , the remaining factors supplying a . That count is written and read n choose k , and counting the choices gives the formula The addition rule we noticed in the triangle is a consequence of the same count. Sort the four rows of by what the last factor contributes. In three of them it hands over its , so the two remaining 's come from the first three factors; there are ways to pick which two, namely , and , and these are precisely the second, third and fourth rows of the figure. In the row left over the last factor hands over its , so all three 's come from the first three factors, and there is only way to do that. Hence , which is why the in the row sits directly below the and the above it. Nothing depended on the particular numbers: a choice of factors out of either uses the last factor or it does not, so in general.   Putting the count together with the expansion gives the Binomial Theorem :   But what if the exponent is not a positive integer? Could we expand something like , or , in the same spirit? At first the idea seems doomed: the factorial formula makes no sense when . However, the equivalent falling product form asks only that we start at and multiply numbers, each one less than the previous and that recipe works for any real number . It also explains why the Binomial Theorem terminates: when is a non-negative integer, the factor eventually appears in the product, killing every coefficient from on. When is negative or fractional, no factor is ever zero, so the expansion never stops: instead of a polynomial we obtain an infinite power series. This bold step beyond the Binomial Theorem goes back to Newton, and Taylor series give us exactly the right framework to justify it.  Indeed, the Taylor series generated by at is with precisely the coefficients that predicts. The series is known as the binomial series .   Binomial Series  For , where and     Remark: The binomial series converges for . We will not prove this in these notes.   The power is a positive integer   Use binomial series to write the function as a series.    We apply the binomial series with :   Note that for , in fact for any , it is true that and therefore      The power is a negative integer   Use binomial series to write the function as a series.    We apply the binomial series with :   The first coefficients are   and for general ,   Hence   Note that this series converges if .     The power is not an integer   Use binomial series to write the function as a series. Compute the five non-zero terms.    We apply the binomial series with :   The coefficients are   Hence the five non-zero terms are    shows the function together with the partial sums of this series on the interval of convergence .   The function and the partial sums of its binomial series with two, three, and five terms. On the interval the partial sums approach the function.     f(t) = (t, (1 + t)^(1\/2))  q1(t) = (t, 1 + t\/2)  q2(t) = (t, 1 + t\/2 - t^2\/8)  q4(t) = (t, 1 + t\/2 - t^2\/8 + t^3\/16 - 5*t^4\/128)         y=\\sqrt{1+x}    1+\\frac{x}{2}    1+\\frac{x}{2}-\\frac{x^2}{8}    \\text{five terms}                  "
},
{
  "id": "fig-pascals-triangle",
  "level": "2",
  "url": "sec-binomial-series.html#fig-pascals-triangle",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " Pascal's triangle. Row holds the coefficients of . Every row begins and ends with , and each remaining entry is the sum of the two entries above it; the arrows show the of the last row.       1    1  1    1  2  1    1  3  3  1    1  4  6  4  1                     "
},
{
  "id": "sec-binomial-series-5",
  "level": "2",
  "url": "sec-binomial-series.html#sec-binomial-series-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pascal's triangle "
},
{
  "id": "fig-binomial-choose-x3",
  "level": "2",
  "url": "sec-binomial-series.html#fig-binomial-choose-x3",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " The four ways to produce from . Each row picks one term out of every factor: an from three of them (colored arrows) and the from the fourth (gray arrow). Four rows, so the coefficient of is .       (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot x\\cdot x\\cdot 1 = x^3    (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot x\\cdot 1\\cdot x = x^3    (1+x)  (1+x)  (1+x)  (1+x)      x\\cdot 1\\cdot x\\cdot x = x^3    (1+x)  (1+x)  (1+x)  (1+x)      1\\cdot x\\cdot x\\cdot x = x^3               "
},
{
  "id": "sec-binomial-series-9",
  "level": "2",
  "url": "sec-binomial-series.html#sec-binomial-series-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binomial Theorem "
},
{
  "id": "sec-binomial-series-11",
  "level": "2",
  "url": "sec-binomial-series.html#sec-binomial-series-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial series "
},
{
  "id": "sec-binomial-series-13",
  "level": "2",
  "url": "sec-binomial-series.html#sec-binomial-series-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Remark: "
},
{
  "id": "example-binomial-positive",
  "level": "2",
  "url": "sec-binomial-series.html#example-binomial-positive",
  "type": "Example",
  "number": "2.4.3",
  "title": "The power is a positive integer.",
  "body": " The power is a positive integer   Use binomial series to write the function as a series.    We apply the binomial series with :   Note that for , in fact for any , it is true that and therefore    "
},
{
  "id": "example-binomial-negative",
  "level": "2",
  "url": "sec-binomial-series.html#example-binomial-negative",
  "type": "Example",
  "number": "2.4.4",
  "title": "The power is a negative integer.",
  "body": " The power is a negative integer   Use binomial series to write the function as a series.    We apply the binomial series with :   The first coefficients are   and for general ,   Hence   Note that this series converges if .   "
},
{
  "id": "example-binomial-fractional",
  "level": "2",
  "url": "sec-binomial-series.html#example-binomial-fractional",
  "type": "Example",
  "number": "2.4.5",
  "title": "The power is not an integer.",
  "body": " The power is not an integer   Use binomial series to write the function as a series. Compute the five non-zero terms.    We apply the binomial series with :   The coefficients are   Hence the five non-zero terms are    shows the function together with the partial sums of this series on the interval of convergence .   The function and the partial sums of its binomial series with two, three, and five terms. On the interval the partial sums approach the function.     f(t) = (t, (1 + t)^(1\/2))  q1(t) = (t, 1 + t\/2)  q2(t) = (t, 1 + t\/2 - t^2\/8)  q4(t) = (t, 1 + t\/2 - t^2\/8 + t^3\/16 - 5*t^4\/128)         y=\\sqrt{1+x}    1+\\frac{x}{2}    1+\\frac{x}{2}-\\frac{x^2}{8}    \\text{five terms}                 "
},
{
  "id": "sec-binomial-applications",
  "level": "1",
  "url": "sec-binomial-applications.html",
  "type": "Subsection",
  "number": "2.4.2",
  "title": "Applications",
  "body": " Applications  Many integrals that arise in practice cannot be expressed in terms of elementary functions. Replacing the integrand by its Taylor series and integrating term by term produces a series for the integral, and the partial sums of that series give numerical estimates whose accuracy we can control. Taylor series also give an efficient way to evaluate limits of indeterminate form, often faster than repeated applications of l'Hôpital's rule.   Estimating a non-elementary integral   Use the binomial series to estimate and compute an upper bound for the error of your estimate.    The antiderivative of is not an elementary function, so we replace the integrand by its binomial series. We apply the binomial series with , substituting for :   The first coefficients are so that for ,   Integrating term by term,   Using the first two terms,    Upper bound for the error. All the terms of the series are positive, so the error of the estimate is exactly the sum of the omitted terms, beginning with . Each term of the series contains a factor more than the one before it, and on our interval ; since the remaining factors in the ratio of consecutive terms are all less than , each omitted term is less than times the previous one. Comparing with a geometric series with ratio , Therefore the two-term estimate is correct to within .     Evaluating a limit   Use series to evaluate     From we have the binomial series Near the quantity is small, so we may substitute in :   Now replace by its Maclaurin series , so that and every later term involves powers and higher. Collecting powers of ,   Hence the numerator is and dividing by gives   Notice that the constant terms and the terms cancel exactly; the limit is decided by the coefficient of in the series for . Evaluating the same limit by l'Hôpital's rule would require differentiating the numerator twice, a much longer computation.    "
},
{
  "id": "example-binomial-integral-estimate",
  "level": "2",
  "url": "sec-binomial-applications.html#example-binomial-integral-estimate",
  "type": "Example",
  "number": "2.4.7",
  "title": "Estimating a non-elementary integral.",
  "body": " Estimating a non-elementary integral   Use the binomial series to estimate and compute an upper bound for the error of your estimate.    The antiderivative of is not an elementary function, so we replace the integrand by its binomial series. We apply the binomial series with , substituting for :   The first coefficients are so that for ,   Integrating term by term,   Using the first two terms,    Upper bound for the error. All the terms of the series are positive, so the error of the estimate is exactly the sum of the omitted terms, beginning with . Each term of the series contains a factor more than the one before it, and on our interval ; since the remaining factors in the ratio of consecutive terms are all less than , each omitted term is less than times the previous one. Comparing with a geometric series with ratio , Therefore the two-term estimate is correct to within .   "
},
{
  "id": "example-binomial-limit",
  "level": "2",
  "url": "sec-binomial-applications.html#example-binomial-limit",
  "type": "Example",
  "number": "2.4.8",
  "title": "Evaluating a limit.",
  "body": " Evaluating a limit   Use series to evaluate     From we have the binomial series Near the quantity is small, so we may substitute in :   Now replace by its Maclaurin series , so that and every later term involves powers and higher. Collecting powers of ,   Hence the numerator is and dividing by gives   Notice that the constant terms and the terms cancel exactly; the limit is decided by the coefficient of in the series for . Evaluating the same limit by l'Hôpital's rule would require differentiating the numerator twice, a much longer computation.   "
},
{
  "id": "sec-3d-coordinate-system",
  "level": "1",
  "url": "sec-3d-coordinate-system.html",
  "type": "Subsection",
  "number": "3.1.1",
  "title": "The Rectangular Coordinate System",
  "body": " The Rectangular Coordinate System  To locate a point in the plane we need two numbers; to locate a point in space we need three. In this section we set up the rectangular coordinate system in space, which is the setting for everything that follows. We then measure distance, describe spheres, and practice translating between an equation and the surface or region it represents.  We will study the Cartesian coordinate system, which is also known as the rectangular coordinate system . We choose a point in space, called the origin , and three mutually perpendicular lines through it, called the coordinate axes and labelled the -, -, and -axis. A point in space is then described by an ordered triple , where , , and are the signed distances from the origin along the three axes, as in .   The point in the rectangular coordinate system. Starting at the origin, we move units along the -axis, then units parallel to the -axis, then units parallel to the -axis.    Three mutually perpendicular axes labelled x, y, and z meet at the origin O. A path drawn in magenta goes from the origin a units along the x axis, then b units parallel to the y axis, then c units straight up parallel to the z axis, ending at the point P with coordinates a, b, c.      The three axes must follow the right-hand rule : if the index finger of the right hand points along the positive -axis and the middle finger points along the positive -axis, then the thumb points along the positive -axis. illustrates this convention; the square corner marks in that figure are a reminder that the three axes are mutually orthogonal, so each pair of axes meets at a right angle. Every coordinate system in this course is arranged this way.  The right-hand rule will return in , where we use it in a second form to determine the direction of the cross product of two vectors.   The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.      As an example, shows the point . Because the first coordinate is negative we move in the direction opposite the positive -axis, and because the third coordinate is negative the point lies below the -plane.   The point . The box drawn with dashed edges shows how the three coordinates locate the point relative to the origin.    The coordinate axes with a rectangular box whose top back corner is at the origin. Edges of length 4 along the negative x direction, 3 along the positive y direction, and 5 straight down locate the point with coordinates negative 4, 3, negative 5 at the far bottom corner of the box.      "
},
{
  "id": "sec-3d-coordinate-system-3",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#sec-3d-coordinate-system-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular coordinate system origin coordinate axes "
},
{
  "id": "fig-3d-point-abc",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-point-abc",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " The point in the rectangular coordinate system. Starting at the origin, we move units along the -axis, then units parallel to the -axis, then units parallel to the -axis.    Three mutually perpendicular axes labelled x, y, and z meet at the origin O. A path drawn in magenta goes from the origin a units along the x axis, then b units parallel to the y axis, then c units straight up parallel to the z axis, ending at the point P with coordinates a, b, c.     "
},
{
  "id": "sec-3d-coordinate-system-5",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#sec-3d-coordinate-system-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "fig-3d-right-hand",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-right-hand",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.     "
},
{
  "id": "fig-3d-point-example",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-point-example",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " The point . The box drawn with dashed edges shows how the three coordinates locate the point relative to the origin.    The coordinate axes with a rectangular box whose top back corner is at the origin. Edges of length 4 along the negative x direction, 3 along the positive y direction, and 5 straight down locate the point with coordinates negative 4, 3, negative 5 at the far bottom corner of the box.     "
},
{
  "id": "sec-3d-planes-octants",
  "level": "1",
  "url": "sec-3d-planes-octants.html",
  "type": "Subsection",
  "number": "3.1.2",
  "title": "Coordinate Planes and Octants",
  "body": " Coordinate Planes and Octants  The three coordinate axes determine three coordinate planes . The -plane is the plane containing the - and -axes, and it is described by the single equation ; similarly the -plane is and the -plane is . These three planes are shown in .   The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.      In the plane the two axes create four quadrants; in space the three coordinate planes create eight octants . The first octant is the one in which , , and are all positive.  More generally, equations such as , , and represent planes parallel to the -, -, and -planes respectively. Each of these equations places one restriction on a point of space and leaves the other two coordinates free, so each describes a plane. Consequently a point can be thought of as the intersection of three such planes: the point of is the intersection of the planes , , and .   A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.      "
},
{
  "id": "sec-3d-planes-octants-2",
  "level": "2",
  "url": "sec-3d-planes-octants.html#sec-3d-planes-octants-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "fig-3d-coordinate-planes",
  "level": "2",
  "url": "sec-3d-planes-octants.html#fig-3d-coordinate-planes",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": " The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.     "
},
{
  "id": "sec-3d-planes-octants-4",
  "level": "2",
  "url": "sec-3d-planes-octants.html#sec-3d-planes-octants-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants first octant "
},
{
  "id": "fig-3d-three-planes",
  "level": "2",
  "url": "sec-3d-planes-octants.html#fig-3d-three-planes",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.     "
},
{
  "id": "sec-3d-distance",
  "level": "1",
  "url": "sec-3d-distance.html",
  "type": "Subsection",
  "number": "3.1.3",
  "title": "Distance Between Two Points",
  "body": " Distance Between Two Points  The distance between two points and is denoted by and can be computed with the Pythagorean theorem. As shows, the segment is the diagonal of a rectangular box whose edges are parallel to the coordinate axes, and applying the Pythagorean theorem twice gives    The distance between and is the length of the diagonal of a box with edges parallel to the axes. The helper corners are and ; applying the Pythagorean theorem first in the triangle , with its right angle at , and then in the vertical triangle , with its right angle at , gives .    A rectangular box with edges parallel to the coordinate axes. The point P one sits at the near lower corner and P two at the opposite upper corner, joined by a violet diagonal. Two intermediate corners are marked: A, reached from P one along a blue edge of length the absolute value of x two minus x one, and B, reached from A along an orange edge of length the absolute value of y two minus y one. A green vertical edge of length the absolute value of z two minus z one rises from B to P two. A red segment joins P one to B across the base, and small squares mark the right angles at A and at B.      The video in builds this box one edge at a time and applies the Pythagorean theorem twice, in the same two steps and with the same colors as . Step 1 works in the base, where the right angle at gives ; step 2 goes up the vertical edge, where the right angle at gives . Substituting the first equation into the second gives .   Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .    "
},
{
  "id": "fig-3d-distance",
  "level": "2",
  "url": "sec-3d-distance.html#fig-3d-distance",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " The distance between and is the length of the diagonal of a box with edges parallel to the axes. The helper corners are and ; applying the Pythagorean theorem first in the triangle , with its right angle at , and then in the vertical triangle , with its right angle at , gives .    A rectangular box with edges parallel to the coordinate axes. The point P one sits at the near lower corner and P two at the opposite upper corner, joined by a violet diagonal. Two intermediate corners are marked: A, reached from P one along a blue edge of length the absolute value of x two minus x one, and B, reached from A along an orange edge of length the absolute value of y two minus y one. A green vertical edge of length the absolute value of z two minus z one rises from B to P two. A red segment joins P one to B across the base, and small squares mark the right angles at A and at B.     "
},
{
  "id": "fig-video-distance-formula",
  "level": "2",
  "url": "sec-3d-distance.html#fig-video-distance-formula",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .   "
},
{
  "id": "sec-3d-spheres",
  "level": "1",
  "url": "sec-3d-spheres.html",
  "type": "Subsection",
  "number": "3.1.4",
  "title": "Spheres",
  "body": " Spheres  A sphere of radius is the set of all points whose distance from a fixed center equals . Writing that condition with the distance formula and squaring both sides gives the equation of the sphere,    A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.       Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.     We begin by completing the squares in and in : Comparing with , this is the equation of a sphere with center and radius .    "
},
{
  "id": "sec-3d-spheres-2",
  "level": "2",
  "url": "sec-3d-spheres.html#sec-3d-spheres-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sphere "
},
{
  "id": "fig-3d-sphere",
  "level": "2",
  "url": "sec-3d-spheres.html#fig-3d-sphere",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": " A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.     "
},
{
  "id": "example-3d-complete-square",
  "level": "2",
  "url": "sec-3d-spheres.html#example-3d-complete-square",
  "type": "Example",
  "number": "3.1.9",
  "title": "Recognizing a Sphere by Completing the Square.",
  "body": " Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.     We begin by completing the squares in and in : Comparing with , this is the equation of a sphere with center and radius .   "
},
{
  "id": "sec-3d-describing-regions",
  "level": "1",
  "url": "sec-3d-describing-regions.html",
  "type": "Subsection",
  "number": "3.1.5",
  "title": "Describing Regions in Space",
  "body": " Describing Regions in Space  A single equation in , , and normally describes a surface, two simultaneous equations describe the curve where two surfaces meet, and inequalities describe solid regions. The next example collects several of these situations.   Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the equation of the set of all points whose -coordinate equals , that is . Geometrically it is a plane parallel to the -plane, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the y z plane, offset from it in the positive x direction, representing the plane x equals 1.       B. This is the intersection of the two planes and , which is a line. The line is parallel to the -axis, since is unrestricted, as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for x equals 1 and one for y equals 2, crossing each other. Their intersection is a vertical red line parallel to the z axis.       C. By this is a sphere of radius one centered at the origin , shown in .   Part C : the sphere , of radius one centered at the origin.    A shaded sphere of radius one centered at the origin, with a dashed ellipse marking its equator.       D. You can think of as the set of all points whose distance from the origin is at least and at most . Therefore it represents the region trapped between the two spheres centered at the origin with radii and . Then there is the extra constraint , which restricts us to the region below the -plane. The result, shown in , is a half of a thick spherical shell.   Part D : the region between the spheres of radius and , cut by the condition to leave only the half below the -plane.    A hemispherical shell sitting below the x y plane. Its outer surface is the sphere of radius two and its inner surface, visible as a smaller hemisphere hollowed out of it, is the sphere of radius one.       E. In the plane, is a circle. In space the variable is unrestricted, so the equation represents an infinitely long cylinder of radius one whose axis is the -axis, as in .   Part E : the infinite cylinder . The dashed lines indicate that it extends without bound in both directions along the -axis.    A cylinder of radius one centered on the z axis, with dashed lines extending past its top and bottom rims to indicate it continues indefinitely in both directions.       F. This is the intersection of the plane and the cylinder , which is a circle of radius one lying in the plane and centered at .   G. The difference between this part and part E is that , which means the cylinder is cut down to a piece of height two. shows the surfaces of parts F and G together.   Parts F and G . On the left, the finite cylinder with . On the right, the same cylinder extended, cut by the plane ; the solution to part F , the circle where they meet, is highlighted in red.    Two pictures side by side. On the left a short cylinder of radius one standing on the z axis between z equals negative one and z equals one. On the right a taller cylinder crossed by a horizontal plane at height three, meeting it in a circle.        "
},
{
  "id": "example-3d-describe",
  "level": "2",
  "url": "sec-3d-describing-regions.html#example-3d-describe",
  "type": "Example",
  "number": "3.1.10",
  "title": "Describing Equations and Inequalities Geometrically.",
  "body": " Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the equation of the set of all points whose -coordinate equals , that is . Geometrically it is a plane parallel to the -plane, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the y z plane, offset from it in the positive x direction, representing the plane x equals 1.       B. This is the intersection of the two planes and , which is a line. The line is parallel to the -axis, since is unrestricted, as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for x equals 1 and one for y equals 2, crossing each other. Their intersection is a vertical red line parallel to the z axis.       C. By this is a sphere of radius one centered at the origin , shown in .   Part C : the sphere , of radius one centered at the origin.    A shaded sphere of radius one centered at the origin, with a dashed ellipse marking its equator.       D. You can think of as the set of all points whose distance from the origin is at least and at most . Therefore it represents the region trapped between the two spheres centered at the origin with radii and . Then there is the extra constraint , which restricts us to the region below the -plane. The result, shown in , is a half of a thick spherical shell.   Part D : the region between the spheres of radius and , cut by the condition to leave only the half below the -plane.    A hemispherical shell sitting below the x y plane. Its outer surface is the sphere of radius two and its inner surface, visible as a smaller hemisphere hollowed out of it, is the sphere of radius one.       E. In the plane, is a circle. In space the variable is unrestricted, so the equation represents an infinitely long cylinder of radius one whose axis is the -axis, as in .   Part E : the infinite cylinder . The dashed lines indicate that it extends without bound in both directions along the -axis.    A cylinder of radius one centered on the z axis, with dashed lines extending past its top and bottom rims to indicate it continues indefinitely in both directions.       F. This is the intersection of the plane and the cylinder , which is a circle of radius one lying in the plane and centered at .   G. The difference between this part and part E is that , which means the cylinder is cut down to a piece of height two. shows the surfaces of parts F and G together.   Parts F and G . On the left, the finite cylinder with . On the right, the same cylinder extended, cut by the plane ; the solution to part F , the circle where they meet, is highlighted in red.    Two pictures side by side. On the left a short cylinder of radius one standing on the z axis between z equals negative one and z equals one. On the right a taller cylinder crossed by a horizontal plane at height three, meeting it in a circle.       "
},
{
  "id": "sec-vec-definitions",
  "level": "1",
  "url": "sec-vec-definitions.html",
  "type": "Subsection",
  "number": "3.2.1",
  "title": "Definitions, Terminology, and Notation",
  "body": " Definitions, Terminology, and Notation  Some quantities can be described using real numbers alone, such as time or temperature. To describe other quantities we need a direction as well as a magnitude. Consider the velocity of a car: we need to know both the speed of the car and its direction of motion to specify its velocity completely. For instance, we might say that the car is moving with speed miles per hour in the direction of north. Such quantities are referred to as vector quantities , and they are the subject of this section.  A vector is a directed line segment from an initial point  to a terminal point  , and is denoted by . We denote the length of a vector by . See .   A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}               Two vectors are equal if they have the same direction and the same magnitude. Notice that this definition says nothing about where a vector is located: a vector may be moved around the plane freely, and as long as its direction and length are unchanged it is the same vector. The vectors shown in are all equal to each other, .   Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F                Only one of the vectors in starts from the origin. We say that is in standard position , and we denote it by a bold letter such as , which is also referred to as the standard position vector .  In 2D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is . In 3D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is .  In we have . Also , , and . This means we have    The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.      The magnitude of is the same as the distance between the two points and , that is    Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.        A. By , the length of the vector is    B. By , the standard position vector is As a check, , which agrees with part A , as it must, since and are the same vector.    "
},
{
  "id": "sec-vec-definitions-2",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector quantities "
},
{
  "id": "sec-vec-definitions-3",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector initial point terminal point "
},
{
  "id": "fig-vec-directed-segment",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-directed-segment",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}              "
},
{
  "id": "sec-vec-definitions-5",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal "
},
{
  "id": "fig-vec-equal",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-equal",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F               "
},
{
  "id": "sec-vec-definitions-7",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard position standard position vector "
},
{
  "id": "sec-vec-definitions-8",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "component form "
},
{
  "id": "fig-vec-components",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-components",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.     "
},
{
  "id": "example-vec-length",
  "level": "2",
  "url": "sec-vec-definitions.html#example-vec-length",
  "type": "Example",
  "number": "3.2.4",
  "title": "Length and Standard Position Vector.",
  "body": " Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.        A. By , the length of the vector is    B. By , the standard position vector is As a check, , which agrees with part A , as it must, since and are the same vector.   "
},
{
  "id": "sec-vec-algebra",
  "level": "1",
  "url": "sec-vec-algebra.html",
  "type": "Subsection",
  "number": "3.2.2",
  "title": "Vector Algebra Operations",
  "body": " Vector Algebra Operations   Vector Addition   Let and . The sum of and is the vector      Parallelogram law. The parallelogram law tells us how to add two vectors geometrically, and is described in . Placing the tail of at the head of produces the sum as the third side of a triangle; equivalently, drawing both vectors from a common initial point makes the sum the diagonal of the parallelogram they span.   The parallelogram law. On the left, the components add head to tail. On the right, is the diagonal of the parallelogram spanned by and .               x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v   u_1  u_2  v_1  v_2   \\langle u_1+v_1,\\; u_2+v_2\\rangle           x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v                    Adding Two Vectors   Add the following two vectors geometrically and algebraically.     Algebraically, by we have For the geometrical part we use the parallelogram law, as shown in .   Adding and with the parallelogram law. The diagonal of the parallelogram is .             \\mathbf u=\\langle 1,1\\rangle    \\mathbf v=\\langle -2,1\\rangle    \\mathbf u+\\mathbf v=\\langle -1,2\\rangle                    Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector     Note that both definitions can be reduced to the 2D case simply by removing the last components of the vectors.  Let and . Then the length of the vector is , where is the absolute value of and is the length of . It is easy to see why this is the case:   The vector has the same length as ; however, the two vectors point in opposite directions. In general the length of is times the length of , and if the two vectors point in the same direction, whereas if they point in opposite directions. shows several examples.   Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u                 Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.     Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.    For the sum we complete the parallelogram spanned by and . For the difference we use : we first draw and then add it to , which gives . Both constructions are shown in .   The sum is the diagonal of the parallelogram spanned by and . The difference is obtained by adding to ; equivalently, it points from the head of to the head of .                 \\mathbf u    \\mathbf v    -\\mathbf v    \\mathbf u+\\mathbf v    \\mathbf u-\\mathbf v                   The operations satisfy the familiar algebraic rules collected in .   Properties of Vector Operations   Let , , be vectors and , be scalars. Then     "
},
{
  "id": "def-vec-addition",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-addition",
  "type": "Definition",
  "number": "3.2.5",
  "title": "Vector Addition.",
  "body": " Vector Addition   Let and . The sum of and is the vector    "
},
{
  "id": "sec-vec-algebra-3",
  "level": "2",
  "url": "sec-vec-algebra.html#sec-vec-algebra-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parallelogram law. "
},
{
  "id": "fig-vec-parallelogram",
  "level": "2",
  "url": "sec-vec-algebra.html#fig-vec-parallelogram",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The parallelogram law. On the left, the components add head to tail. On the right, is the diagonal of the parallelogram spanned by and .               x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v   u_1  u_2  v_1  v_2   \\langle u_1+v_1,\\; u_2+v_2\\rangle           x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v                  "
},
{
  "id": "example-vec-add",
  "level": "2",
  "url": "sec-vec-algebra.html#example-vec-add",
  "type": "Example",
  "number": "3.2.7",
  "title": "Adding Two Vectors.",
  "body": " Adding Two Vectors   Add the following two vectors geometrically and algebraically.     Algebraically, by we have For the geometrical part we use the parallelogram law, as shown in .   Adding and with the parallelogram law. The diagonal of the parallelogram is .             \\mathbf u=\\langle 1,1\\rangle    \\mathbf v=\\langle -2,1\\rangle    \\mathbf u+\\mathbf v=\\langle -1,2\\rangle                  "
},
{
  "id": "def-vec-scalar",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-scalar",
  "type": "Definition",
  "number": "3.2.9",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector    "
},
{
  "id": "fig-vec-scalar",
  "level": "2",
  "url": "sec-vec-algebra.html#fig-vec-scalar",
  "type": "Figure",
  "number": "3.2.10",
  "title": "",
  "body": " Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u               "
},
{
  "id": "def-vec-subtraction",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-subtraction",
  "type": "Definition",
  "number": "3.2.11",
  "title": "Vector Subtraction.",
  "body": " Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.   "
},
{
  "id": "example-vec-add-subtract",
  "level": "2",
  "url": "sec-vec-algebra.html#example-vec-add-subtract",
  "type": "Example",
  "number": "3.2.12",
  "title": "Adding and Subtracting Geometrically.",
  "body": " Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.    For the sum we complete the parallelogram spanned by and . For the difference we use : we first draw and then add it to , which gives . Both constructions are shown in .   The sum is the diagonal of the parallelogram spanned by and . The difference is obtained by adding to ; equivalently, it points from the head of to the head of .                 \\mathbf u    \\mathbf v    -\\mathbf v    \\mathbf u+\\mathbf v    \\mathbf u-\\mathbf v                  "
},
{
  "id": "thm-vec-properties",
  "level": "2",
  "url": "sec-vec-algebra.html#thm-vec-properties",
  "type": "Theorem",
  "number": "3.2.14",
  "title": "Properties of Vector Operations.",
  "body": " Properties of Vector Operations   Let , , be vectors and , be scalars. Then    "
},
{
  "id": "sec-vec-unit",
  "level": "1",
  "url": "sec-vec-unit.html",
  "type": "Subsection",
  "number": "3.2.3",
  "title": "Unit Vectors",
  "body": " Unit Vectors  Vectors of length one are referred to as unit vectors . The standard unit vectors are the ones pointing in the positive direction of , , and , and they are denoted by , , and respectively, as in .   The standard unit vectors , , and , and the decomposition of a vector into components along the axes.    A three dimensional coordinate system showing three short magenta arrows of length one along the positive x, y and z axes, labelled i, j and k. A longer magenta arrow a runs from the origin to the point with coordinates a one, a two, a three, and blue arrows along the axes show its three components a one i, a two j and a three k.      Combining and , any vector can be written as a linear combination of , , and as   To find a unit vector pointing in the same direction as a nonzero vector , we divide by its own length. We write , read a hat , for the resulting unit vector: By this vector has length , as required. From now on a hat always marks a vector of length one, as it does for the standard unit vectors , , and .   Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .        A. We have and , and hence, using and ,    B. The length of is , and hence by we find the unit vector by dividing by its length:     "
},
{
  "id": "sec-vec-unit-2",
  "level": "2",
  "url": "sec-vec-unit.html#sec-vec-unit-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vectors standard unit vectors "
},
{
  "id": "fig-vec-ijk",
  "level": "2",
  "url": "sec-vec-unit.html#fig-vec-ijk",
  "type": "Figure",
  "number": "3.2.15",
  "title": "",
  "body": " The standard unit vectors , , and , and the decomposition of a vector into components along the axes.    A three dimensional coordinate system showing three short magenta arrows of length one along the positive x, y and z axes, labelled i, j and k. A longer magenta arrow a runs from the origin to the point with coordinates a one, a two, a three, and blue arrows along the axes show its three components a one i, a two j and a three k.     "
},
{
  "id": "example-vec-unit",
  "level": "2",
  "url": "sec-vec-unit.html#example-vec-unit",
  "type": "Example",
  "number": "3.2.16",
  "title": "Standard Unit Vectors and a Unit Direction.",
  "body": " Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .        A. We have and , and hence, using and ,    B. The length of is , and hence by we find the unit vector by dividing by its length:    "
},
{
  "id": "sec-dot-product",
  "level": "1",
  "url": "sec-dot-product.html",
  "type": "Subsection",
  "number": "3.3.1",
  "title": "The Dot Product and the Angle between Two Vectors",
  "body": " The Dot Product and the Angle between Two Vectors  Consider two vectors and , and let , as shown in . By the law of cosines,    The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta                 Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .     Writing and , note that , and hence   Also, from the law of cosines in we have   From and , it follows that , and therefore the angle between the two vectors and can be evaluated using the following equation.   Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then      Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .        Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :      Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.       A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\overrightarrow{CA}    \\overrightarrow{CB}                     The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have      Properties of the Dot Product    If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .       "
},
{
  "id": "fig-law-of-cosines",
  "level": "2",
  "url": "sec-dot-product.html#fig-law-of-cosines",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta               "
},
{
  "id": "sec-dot-product-4",
  "level": "2",
  "url": "sec-dot-product.html#sec-dot-product-4",
  "type": "Proof",
  "number": "3.3.1.1",
  "title": "",
  "body": " Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .    "
},
{
  "id": "thm-angle-formula",
  "level": "2",
  "url": "sec-dot-product.html#thm-angle-formula",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Angle between Two Vectors.",
  "body": " Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then    "
},
{
  "id": "def-dot-product",
  "level": "2",
  "url": "sec-dot-product.html#def-dot-product",
  "type": "Definition",
  "number": "3.3.4",
  "title": "Dot Product.",
  "body": " Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .      "
},
{
  "id": "example-dot-product-compute",
  "level": "2",
  "url": "sec-dot-product.html#example-dot-product-compute",
  "type": "Example",
  "number": "3.3.5",
  "title": "Computing a dot product.",
  "body": " Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :    "
},
{
  "id": "remark-orthogonal",
  "level": "2",
  "url": "sec-dot-product.html#remark-orthogonal",
  "type": "Remark",
  "number": "3.3.6",
  "title": "Orthogonal vectors.",
  "body": " Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.     "
},
{
  "id": "example-right-triangle",
  "level": "2",
  "url": "sec-dot-product.html#example-right-triangle",
  "type": "Example",
  "number": "3.3.7",
  "title": "A right triangle detected with the dot product.",
  "body": " A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\overrightarrow{CA}    \\overrightarrow{CB}                   "
},
{
  "id": "example-remaining-angles",
  "level": "2",
  "url": "sec-dot-product.html#example-remaining-angles",
  "type": "Example",
  "number": "3.3.9",
  "title": "The remaining angles of the triangle.",
  "body": " The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have    "
},
{
  "id": "fact-properties",
  "level": "2",
  "url": "sec-dot-product.html#fact-properties",
  "type": "Fact",
  "number": "3.3.10",
  "title": "",
  "body": "  If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .     "
},
{
  "id": "sec-projection",
  "level": "1",
  "url": "sec-projection.html",
  "type": "Subsection",
  "number": "3.3.2",
  "title": "Projection of <span class=\"process-math\">\\(\\mathbf u\\)<\/span> in the Direction of <span class=\"process-math\">\\(\\mathbf v\\)<\/span>",
  "body": " Projection of in the Direction of  The dot product measures how much two vectors point in the same direction. This section turns that measurement into a vector: given and , we ask how much of lies along . The answer is the projection of onto , and it lets us split any vector into a part that points along and a part perpendicular to it. That decomposition is what makes the dot product useful in practice—it is how we find the component of a force along a direction of motion, as in , or the component of gravity down a slope.  The projection of in the direction of is denoted , and is shown in .   The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                   The length of is , and since its direction is the same as , we have    Projection Formula         Writing as Two Vectors, One Parallel and One Perpendicular to  As can be seen in , is parallel to , and the vector is perpendicular to it. Also, the sum of these two vectors equals . This means we can write as    The projection of onto as a shadow cast by light from above.     Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.       Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .     "
},
{
  "id": "sec-projection-2",
  "level": "2",
  "url": "sec-projection.html#sec-projection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "fig-projection",
  "level": "2",
  "url": "sec-projection.html#fig-projection",
  "type": "Figure",
  "number": "3.3.11",
  "title": "",
  "body": " The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                  "
},
{
  "id": "fact-projection-formula",
  "level": "2",
  "url": "sec-projection.html#fact-projection-formula",
  "type": "Fact",
  "number": "3.3.12",
  "title": "Projection Formula.",
  "body": " Projection Formula       "
},
{
  "id": "fig-projection-shadow",
  "level": "2",
  "url": "sec-projection.html#fig-projection-shadow",
  "type": "Figure",
  "number": "3.3.13",
  "title": "",
  "body": " The projection of onto as a shadow cast by light from above.   "
},
{
  "id": "example-decomposition",
  "level": "2",
  "url": "sec-projection.html#example-decomposition",
  "type": "Example",
  "number": "3.3.14",
  "title": "Decomposing a vector into parallel and perpendicular parts.",
  "body": " Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.     "
},
{
  "id": "check-projection-decomposition",
  "level": "2",
  "url": "sec-projection.html#check-projection-decomposition",
  "type": "Checkpoint",
  "number": "3.3.16",
  "title": "Concept Check.",
  "body": " Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .   "
},
{
  "id": "sec-work",
  "level": "1",
  "url": "sec-work.html",
  "type": "Subsection",
  "number": "3.3.3",
  "title": "Application in Physics: Work",
  "body": " Application in Physics: Work  Consider the scenario in which a constant force causes an object to move from point to point , as shown in . The vector is often denoted and is referred to as the displacement vector . The work done by the force is then   Work    where is the magnitude of the force in the direction of motion, as computed in .     A constant force acting on an object causing a displacement from to .     A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                    Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is       Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:     "
},
{
  "id": "sec-work-2",
  "level": "2",
  "url": "sec-work.html#sec-work-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacement vector "
},
{
  "id": "def-work",
  "level": "2",
  "url": "sec-work.html#def-work",
  "type": "Definition",
  "number": "3.3.17",
  "title": "Work.",
  "body": " Work    where is the magnitude of the force in the direction of motion, as computed in .   "
},
{
  "id": "fig-work-force",
  "level": "2",
  "url": "sec-work.html#fig-work-force",
  "type": "Figure",
  "number": "3.3.18",
  "title": "",
  "body": " A constant force acting on an object causing a displacement from to .   "
},
{
  "id": "fig-work",
  "level": "2",
  "url": "sec-work.html#fig-work",
  "type": "Figure",
  "number": "3.3.19",
  "title": "",
  "body": " A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                  "
},
{
  "id": "example-work",
  "level": "2",
  "url": "sec-work.html#example-work",
  "type": "Example",
  "number": "3.3.20",
  "title": "Computing work done by a force.",
  "body": " Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is    "
},
{
  "id": "ex-inclined-plane",
  "level": "2",
  "url": "sec-work.html#ex-inclined-plane",
  "type": "Example",
  "number": "3.3.22",
  "title": "",
  "body": "  Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:    "
},
{
  "id": "sec-data-science",
  "level": "1",
  "url": "sec-data-science.html",
  "type": "Subsection",
  "number": "3.3.4",
  "title": "Application in Data Science: Measuring Similarity in Tastes",
  "body": " Application in Data Science: Measuring Similarity in Tastes  Every time a streaming service tells you because you watched Sinners … , some piece of software has decided that your taste resembles the taste of other people in its database. Deciding whose taste resembles whose can be framed as a geometry problem, and one tool that can help us decide is the dot product.  The first step is to turn taste into a vector. Fix a list of movies and ask each person to rate every one of them on a scale from to , where means loved it , means I want those two hours back , and means indifference. Reading the ratings off in the same order for everybody turns each person into a vector, and the question do these two people have similar taste? becomes a question about the angle between two vectors, which by is exactly what the dot product measures.   Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.    Angular distance asks how nearly do these two vectors point the same way? Notice that it is completely blind to the lengths of and : multiplying either vector by a positive number leaves untouched. We will come back to what that means for moviegoers.   Two Movies at a Time  Two movies give vectors in , which we can draw. Take two of the ten films nominated for Best Picture at the 2026 Academy Awards, Sinners and Hamnet , and record each person's rating of Sinners as the first component and of Hamnet as the second. Mehdi, Norm, and Popcorn rate them as follows: Mehdi and Norm both enjoyed the two films; Popcorn sat through both of them and regretted it. shows the three taste vectors.   The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn                 Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.      Angular Distance Ignores Enthusiasm  Suppose Ray, Vera, and Gus rate the same two films as in . Since , the vectors and point in exactly the same direction, so : as far as angular distance is concerned, Ray and Gus have identical taste. Vera sits about away from that shared direction, since    Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus               This is the scale invariance noted after , seen from the moviegoers' side. Ray is a cautious rater and Gus is an enthusiastic one, but they ranked the two films the same way and in the same proportion, and angular distance sees only that shared direction. If you regard a lukewarm reviewer and a euphoric one who agree about every film as having the same taste, this is exactly the behavior you want.    More Movies, More Dimensions  Nothing above depended on there being exactly two movies. With movies, a person's taste vector is in , the dot product of becomes a sum of products, , and the length of a vector becomes . The angular distance of carries over verbatim:   We can no longer draw the picture, but every formula still applies, and the language of still means something: two taste vectors with are orthogonal, an angular distance of , which here says that knowing one person's ratings tells you nothing about the other's. This is what makes the dot product useful in practice. A streaming service with titles works in , and finding the users nearest to you is still nothing more than the arithmetic in .   All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.    Ten components are a lot to handle by hand, and a real recommender system deals with thousands. The cell below carries out the computation of . Press Evaluate to run it, then edit the ratings and run it again to see whose taste your own vector is closest to.    "
},
{
  "id": "def-angular-distance",
  "level": "2",
  "url": "sec-data-science.html#def-angular-distance",
  "type": "Definition",
  "number": "3.3.25",
  "title": "Angular Distance and Cosine Similarity.",
  "body": " Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.   "
},
{
  "id": "fig-taste-vectors-2d",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-vectors-2d",
  "type": "Figure",
  "number": "3.3.26",
  "title": "",
  "body": " The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn               "
},
{
  "id": "example-taste-2d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-2d",
  "type": "Example",
  "number": "3.3.27",
  "title": "Who should watch a movie together?",
  "body": " Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.   "
},
{
  "id": "fig-taste-disagree",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-disagree",
  "type": "Figure",
  "number": "3.3.29",
  "title": "",
  "body": " Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus              "
},
{
  "id": "example-taste-10d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-10d",
  "type": "Example",
  "number": "3.3.30",
  "title": "All ten nominees.",
  "body": " All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.   "
},
{
  "id": "sec-cross-definition",
  "level": "1",
  "url": "sec-cross-definition.html",
  "type": "Subsection",
  "number": "3.4.1",
  "title": "Definition and Properties of the Cross Product",
  "body": " Definition and Properties of the Cross Product   The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.    The magnitude of is equal to the area of the parallelogram built on the two vectors and , as shown in .   The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta                 Area of the Parallelogram        Note that is the length of the cross product . Since can be negative, we need to include its absolute value.  The vector is the unit vector that determines the direction of using the right-hand rule. Note that is orthogonal (perpendicular) to both vectors, as shown in .   The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .     Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.       Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.        Properties of the Cross Product   If , , and are any vectors and , are scalars, then              Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .     Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so      Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along , so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of .    "
},
{
  "id": "def-cross-product",
  "level": "2",
  "url": "sec-cross-definition.html#def-cross-product",
  "type": "Definition",
  "number": "3.4.1",
  "title": "The Cross Product (First Definition).",
  "body": " The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.   "
},
{
  "id": "fig-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fig-parallelogram-area",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta               "
},
{
  "id": "fact-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallelogram-area",
  "type": "Fact",
  "number": "3.4.3",
  "title": "Area of the Parallelogram.",
  "body": " Area of the Parallelogram       "
},
{
  "id": "fig-cross-product-video",
  "level": "2",
  "url": "sec-cross-definition.html#fig-cross-product-video",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .   "
},
{
  "id": "fig-right-hand-rule-illustration",
  "level": "2",
  "url": "sec-cross-definition.html#fig-right-hand-rule-illustration",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.     "
},
{
  "id": "fact-parallel-vectors",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallel-vectors",
  "type": "Fact",
  "number": "3.4.6",
  "title": "Parallel Vectors.",
  "body": " Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.      "
},
{
  "id": "thm-cross-properties",
  "level": "2",
  "url": "sec-cross-definition.html#thm-cross-properties",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product   If , , and are any vectors and , are scalars, then            "
},
{
  "id": "sec-cross-definition-12",
  "level": "2",
  "url": "sec-cross-definition.html#sec-cross-definition-12",
  "type": "Proof",
  "number": "3.4.1.1",
  "title": "",
  "body": " Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .  "
},
{
  "id": "exercise-cross-identity",
  "level": "2",
  "url": "sec-cross-definition.html#exercise-cross-identity",
  "type": "Checkpoint",
  "number": "3.4.8",
  "title": "",
  "body": "  Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so    "
},
{
  "id": "example-cross-geometric",
  "level": "2",
  "url": "sec-cross-definition.html#example-cross-geometric",
  "type": "Example",
  "number": "3.4.9",
  "title": "Computing a cross product using the first definition.",
  "body": " Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along , so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of .   "
},
{
  "id": "sec-cross-components",
  "level": "1",
  "url": "sec-cross-components.html",
  "type": "Subsection",
  "number": "3.4.2",
  "title": "Second Definition of the Cross Product",
  "body": " Second Definition of the Cross Product  Writing the vectors in components gives another definition for the cross product.   The Cross Product (Second Definition)   If and , then     One way to remember the second definition of the cross product is to write it as a determinant: where    Computing a cross product   Calculate the cross product if and .    By and ,      Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .       Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by . By ,    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\overrightarrow{AC}    \\overrightarrow{AB}                 "
},
{
  "id": "def-cross-components",
  "level": "2",
  "url": "sec-cross-components.html#def-cross-components",
  "type": "Definition",
  "number": "3.4.10",
  "title": "The Cross Product (Second Definition).",
  "body": " The Cross Product (Second Definition)   If and , then    "
},
{
  "id": "example-cross-compute",
  "level": "2",
  "url": "sec-cross-components.html#example-cross-compute",
  "type": "Example",
  "number": "3.4.11",
  "title": "Computing a cross product.",
  "body": " Computing a cross product   Calculate the cross product if and .    By and ,    "
},
{
  "id": "example-perpendicular-vector",
  "level": "2",
  "url": "sec-cross-components.html#example-perpendicular-vector",
  "type": "Example",
  "number": "3.4.12",
  "title": "Computing a vector perpendicular to two other vectors.",
  "body": " Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .     "
},
{
  "id": "example-triangle-area",
  "level": "2",
  "url": "sec-cross-components.html#example-triangle-area",
  "type": "Example",
  "number": "3.4.14",
  "title": "Computing the area of a triangle.",
  "body": " Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by . By ,    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\overrightarrow{AC}    \\overrightarrow{AB}                "
},
{
  "id": "sec-true-false",
  "level": "1",
  "url": "sec-true-false.html",
  "type": "Subsection",
  "number": "3.4.3",
  "title": "True or False?",
  "body": " True or False?   True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .     True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:     "
},
{
  "id": "exercise-true-false-1",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-1",
  "type": "Checkpoint",
  "number": "3.4.16",
  "title": "True or False.",
  "body": " True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .   "
},
{
  "id": "exercise-true-false-2",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-2",
  "type": "Checkpoint",
  "number": "3.4.17",
  "title": "True or False.",
  "body": " True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:    "
},
{
  "id": "sec-torque",
  "level": "1",
  "url": "sec-torque.html",
  "type": "Subsection",
  "number": "3.4.4",
  "title": "Application: Torque",
  "body": " Application: Torque  One of the well known physical applications of the cross product is torque , the rotational analog of force. A force makes an object accelerate; a torque makes it rotate . How effective a force is at producing rotation depends not only on its magnitude, but also on where it is applied and in what direction . Think of pushing a door: pushing hard near the hinge barely moves it, while a light push at the doorknob swings it open easily. Pushing at the doorknob but toward the hinge does nothing at all. The cross product captures all three scenarios and more.   Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector      Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.    Everything we know about the cross product now translates into physics. By , the magnitude of the torque is where is the angle between and , and the direction of is given by the right-hand rule: points along the axis of rotation, and curling the fingers of the right hand from toward gives the sense of the rotation. Torque has units of meter-newtons ( ) in SI.  The quantity in can be grouped in two useful ways:    The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                    The first grouping, shown in , says the torque is the force times the lever arm  , the perpendicular distance from the axis to the line along which the force acts. The second, shown in , says it is the distance times , the component of the force perpendicular to ; the parallel component points straight at the axis and produces no rotation.   Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.     Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.    "
},
{
  "id": "sec-torque-2",
  "level": "2",
  "url": "sec-torque.html#sec-torque-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "def-torque",
  "level": "2",
  "url": "sec-torque.html#def-torque",
  "type": "Definition",
  "number": "3.4.18",
  "title": "Torque.",
  "body": " Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector    "
},
{
  "id": "fig-int-torque",
  "level": "2",
  "url": "sec-torque.html#fig-int-torque",
  "type": "Figure",
  "number": "3.4.19",
  "title": "",
  "body": " Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.   "
},
{
  "id": "fig-torque-two-groupings",
  "level": "2",
  "url": "sec-torque.html#fig-torque-two-groupings",
  "type": "Figure",
  "number": "3.4.20",
  "title": "",
  "body": " The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                   "
},
{
  "id": "sec-torque-8",
  "level": "2",
  "url": "sec-torque.html#sec-torque-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lever arm "
},
{
  "id": "fact-zero-torque",
  "level": "2",
  "url": "sec-torque.html#fact-zero-torque",
  "type": "Fact",
  "number": "3.4.21",
  "title": "Zero Torque.",
  "body": " Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.   "
},
{
  "id": "example-biceps-torque",
  "level": "2",
  "url": "sec-torque.html#example-biceps-torque",
  "type": "Example",
  "number": "3.4.22",
  "title": "Biceps torque.",
  "body": " Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.   "
},
{
  "id": "sec-circular-motion",
  "level": "1",
  "url": "sec-circular-motion.html",
  "type": "Subsection",
  "number": "3.4.5",
  "title": "Application: Circular Motion: Velocity and Angular Velocity",
  "body": " Application: Circular Motion: Velocity and Angular Velocity   A second physical application of the cross product describes the motion of an object travelling in a circle: a rider on a circular track, a ball whirled on a string, a point on a spinning wheel, or the moon on its (nearly circular) orbit. In each case the object turns about a fixed centre, and the natural way to keep track of where it is at time is not by its coordinates and but by the single angle it has swung through. Our goal is to study how the velocity and the rate of change of that angle are related.  Throughout this section we write unit vectors with hats, so that , and are the usual fixed unit vectors , and along the coordinate axes.    A Frame that Turns with the Particle  Let an object move on a circle of radius centred at the origin of the -plane, and let be the angle its position makes with the positive -axis at time , as in . At the point where the particle sits we attach two unit vectors:    , pointing radially outward, away from the centre, and     , perpendicular to and tangent to the circle, pointing in the direction of increasing .   Reading their components off the figure, The position of the particle is then simply   The pair , is fixed once and for all, while the pair , rides along with the particle and turns as it goes; this is exactly what makes the second pair convenient. Note that together with the moving pair forms a right-handed frame, since    The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y                  The Velocity in Circular Motion  Because the particle moves, the angle depends on , and so do the two moving unit vectors. Differentiating and with the chain rule gives Each unit vector has constant length, so it can only turn; and turning a unit vector moves its tip perpendicular to itself, which is exactly what and say.  Now differentiate the position . The radius is constant on a circle, so only the unit vector needs differentiating: The velocity has no -component at all: it points purely along , tangent to the circle. Its -component is called the tangential component of the velocity . It is positive when the particle turns counterclockwise and negative when it turns clockwise.   Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by     It is worth seeing where comes from geometrically, without any differentiation of unit vectors. In a short time interval the particle moves from to , turning through a small angle , as in . The two position vectors have the same length , so they form an isosceles triangle whose third side is the displacement . Splitting that triangle down the middle gives   For a small angle the power series is dominated by its first term, so and the chord is very nearly the arc it cuts off: . Dividing by and letting , which is again. The direction comes out of the same picture: as the chord lines up with the tangent line to the circle, so is perpendicular to , in agreement with .   The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\overrightarrow{r}\\|}{\\Delta t} = r\\,\\omega                    Angular Velocity as a Vector  So far the rate of turning has been a number, . But a rotation has a direction as well as a rate: the plane of the circle can be tilted any which way, and the particle can go around it either way. Both pieces of information can be carried by a single vector, provided we point it along the axis of rotation rather than along the motion.  We always choose a right-handed coordinate system, with increasing in the counterclockwise direction when viewed from the positive -axis.   Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .    The sign of records which way the object goes around, and the right-hand rule turns that sign into a direction in space: curl the fingers of your right hand in the direction of the motion and your thumb points along . If the particle circulates counterclockwise as seen from above, then and points in the -direction; if it circulates clockwise, then and points in the -direction. The two cases are shown in .   The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                      Velocity as a Cross Product  We now have two vectors attached to the motion: the angular velocity , along the axis, and the position , in the plane of the circle. The velocity is perpendicular to both, which is precisely the job of the cross product.   Velocity and Angular Velocity   For an object in circular motion about the origin,     To verify this, first compute using : Therefore, using and , by . See .  The geometry of the cross product delivers all three features of the velocity at once, with no computation:    Magnitude. Since is perpendicular to the plane of the circle, it is perpendicular to , so , recovering .     Direction. The cross product is perpendicular to , so the velocity is tangent to the circle; and it is perpendicular to , so the motion stays in the plane of the orbit.     Sense. The right-hand rule applied to automatically sends the particle counterclockwise when and clockwise when , since reversing reverses the cross product.     There is a bonus. A piece of running along the axis is parallel to and so contributes nothing to the cross product, since . Consequently remains true when is measured from any point on the axis of rotation, not just from the centre of the circle.   The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r} = \\dfrac{d\\theta}{dt}\\,\\hat{k} \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\overrightarrow{v}\\| = \\omega r \\sin 90^\\circ = \\omega r                   Examples   Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.     A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .     A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .     "
},
{
  "id": "fig-polar-frame",
  "level": "2",
  "url": "sec-circular-motion.html#fig-polar-frame",
  "type": "Figure",
  "number": "3.4.24",
  "title": "",
  "body": " The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y               "
},
{
  "id": "subsec-circular-velocity-3",
  "level": "2",
  "url": "sec-circular-motion.html#subsec-circular-velocity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential component of the velocity "
},
{
  "id": "def-angular-speed",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-speed",
  "type": "Definition",
  "number": "3.4.25",
  "title": "Angular Speed.",
  "body": " Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by    "
},
{
  "id": "fig-circular-chord",
  "level": "2",
  "url": "sec-circular-motion.html#fig-circular-chord",
  "type": "Figure",
  "number": "3.4.26",
  "title": "",
  "body": " The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\overrightarrow{r}\\|}{\\Delta t} = r\\,\\omega                 "
},
{
  "id": "def-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-velocity",
  "type": "Definition",
  "number": "3.4.27",
  "title": "Angular Velocity Vector.",
  "body": " Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .   "
},
{
  "id": "fig-angular-velocity-sign",
  "level": "2",
  "url": "sec-circular-motion.html#fig-angular-velocity-sign",
  "type": "Figure",
  "number": "3.4.28",
  "title": "",
  "body": " The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                   "
},
{
  "id": "fact-velocity-cross-product",
  "level": "2",
  "url": "sec-circular-motion.html#fact-velocity-cross-product",
  "type": "Fact",
  "number": "3.4.29",
  "title": "Velocity and Angular Velocity.",
  "body": " Velocity and Angular Velocity   For an object in circular motion about the origin,    "
},
{
  "id": "fig-omega-cross-r",
  "level": "2",
  "url": "sec-circular-motion.html#fig-omega-cross-r",
  "type": "Figure",
  "number": "3.4.30",
  "title": "",
  "body": " The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r} = \\dfrac{d\\theta}{dt}\\,\\hat{k} \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\overrightarrow{v}\\| = \\omega r \\sin 90^\\circ = \\omega r                "
},
{
  "id": "example-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#example-angular-velocity",
  "type": "Example",
  "number": "3.4.31",
  "title": "Angular velocity from an angle function.",
  "body": " Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.   "
},
{
  "id": "example-turntable",
  "level": "2",
  "url": "sec-circular-motion.html#example-turntable",
  "type": "Example",
  "number": "3.4.32",
  "title": "A turntable.",
  "body": " A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .   "
},
{
  "id": "exercise-carousel-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#exercise-carousel-velocity",
  "type": "Checkpoint",
  "number": "3.4.33",
  "title": "A carousel.",
  "body": " A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .   "
},
{
  "id": "sec-parametric-equations",
  "level": "1",
  "url": "sec-parametric-equations.html",
  "type": "Subsection",
  "number": "3.5.1",
  "title": "Parametric Equations",
  "body": " Parametric Equations  Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion, as shown in . Mathematically, we will need two equations to demonstrate how the - and -coordinates evolve in time , which are known as the parametric equations .   Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.     A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.     The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                 As an example, consider and . Let us calculate some of the points .   Points on the curve ,                 Plotting these points and connecting them, we recognize the parabola , traced from left to right as increases from to . See and .   The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .     The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                       As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter , as in , in such a way that by varying the value of we can reconstruct the circle . Remember that , so one way to achieve our goal is to write where . The parametrization is illustrated in and .   Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .     Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                      Question   Can you think of another way to write a parametric form of the circle ?    "
},
{
  "id": "sec-parametric-equations-2",
  "level": "2",
  "url": "sec-parametric-equations.html#sec-parametric-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric equations "
},
{
  "id": "def-parametric-equations",
  "level": "2",
  "url": "sec-parametric-equations.html#def-parametric-equations",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Parametric Equations.",
  "body": " Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.   "
},
{
  "id": "fig-parametric-motion-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion-video",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.   "
},
{
  "id": "fig-parametric-motion",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                "
},
{
  "id": "table-parabola-points",
  "level": "2",
  "url": "sec-parametric-equations.html#table-parabola-points",
  "type": "Table",
  "number": "3.5.4",
  "title": "Points on the curve <span class=\"process-math\">\\(x=t\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=t^2\\)<\/span>",
  "body": " Points on the curve ,                "
},
{
  "id": "fig-parabola-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param-video",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .   "
},
{
  "id": "fig-parabola-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                      "
},
{
  "id": "fig-unit-circle-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param-video",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": " Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .   "
},
{
  "id": "fig-unit-circle-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": " Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                    "
},
{
  "id": "question-another-parametrization",
  "level": "2",
  "url": "sec-parametric-equations.html#question-another-parametrization",
  "type": "Checkpoint",
  "number": "3.5.9",
  "title": "Question.",
  "body": " Question   Can you think of another way to write a parametric form of the circle ?   "
},
{
  "id": "sec-parametrizing-examples",
  "level": "1",
  "url": "sec-parametrizing-examples.html",
  "type": "Subsection",
  "number": "3.5.2",
  "title": "Some Examples of Parametrizing Curves",
  "body": " Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .       Solution   Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See and .   The line segment from to , traced by , as increases from to .     Part A: the segment , , , which starts at when and ends at when .           t=0    t=1                 Part B. Guided by the unit circle, we take   To verify, note that   See and .   The ellipse , traced counterclockwise by , , with the points at , , , and marked.     Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                   Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See and .   The circle of radius centered at , traced by , .     Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                    "
},
{
  "id": "ex-parametrizing-curves",
  "level": "2",
  "url": "sec-parametrizing-examples.html#ex-parametrizing-curves",
  "type": "Example",
  "number": "3.5.10",
  "title": "Parametrizing Curves.",
  "body": " Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .     "
},
{
  "id": "fig-segment-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param-video",
  "type": "Figure",
  "number": "3.5.11",
  "title": "",
  "body": " The line segment from to , traced by , as increases from to .   "
},
{
  "id": "fig-segment-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param",
  "type": "Figure",
  "number": "3.5.12",
  "title": "",
  "body": " Part A: the segment , , , which starts at when and ends at when .           t=0    t=1               "
},
{
  "id": "fig-ellipse-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param-video",
  "type": "Figure",
  "number": "3.5.13",
  "title": "",
  "body": " The ellipse , traced counterclockwise by , , with the points at , , , and marked.   "
},
{
  "id": "fig-ellipse-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param",
  "type": "Figure",
  "number": "3.5.14",
  "title": "",
  "body": " Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                 "
},
{
  "id": "fig-shifted-circle-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param-video",
  "type": "Figure",
  "number": "3.5.15",
  "title": "",
  "body": " The circle of radius centered at , traced by , .   "
},
{
  "id": "fig-shifted-circle-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param",
  "type": "Figure",
  "number": "3.5.16",
  "title": "",
  "body": " Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                  "
},
{
  "id": "sec-projectile-motion",
  "level": "1",
  "url": "sec-projectile-motion.html",
  "type": "Subsection",
  "number": "3.5.3",
  "title": "Projectile Motion",
  "body": " Projectile Motion  A type of parametric equation you may have already seen is the equation of motion for a projectile. Here the parameter is time, and gives the position of the projectile at time .  Recall two basic facts about motion in one dimension from your introductory physics course. For motion along a straight line at constant speed , the position is For motion with uniform acceleration , the position is   Now consider an object moving under the influence of gravity alone, ignoring air resistance. No horizontal force acts on it, so it moves at constant speed in the -direction; in the -direction it moves with constant acceleration , directed downward. Resolving the initial velocity into its horizontal component and vertical component , and applying and , gives the equations of motion for a projectile: where is the initial speed, is the launch angle, and is the acceleration due to gravity. For simplicity, we take the initial position to be the origin .  To find the trajectory of the projectile, we can solve for and substitute into the equation . Solving for in the equation gives   Substituting into the equation gives   As expected, the trajectory equation shows that the trajectory of a projectile is a parabola. Also, note that differentiating the equations of motion gives the velocity of the projectile: the horizontal component stays constant, since nothing accelerates the projectile horizontally, while the vertical component decreases steadily under gravity, so it is positive while the projectile rises, zero at the apex, and negative as it falls. shows these components at five instants along the path.   The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                              animates this motion: the projectile follows the parabolic path while its horizontal velocity stays constant and its vertical velocity is steadily turned around by gravity.   A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.     Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.    "
},
{
  "id": "fig-projectile-velocity",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-velocity",
  "type": "Figure",
  "number": "3.5.17",
  "title": "",
  "body": " The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                            "
},
{
  "id": "fig-projectile-motion-video",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-motion-video",
  "type": "Figure",
  "number": "3.5.18",
  "title": "",
  "body": " A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.   "
},
{
  "id": "activity-projectile-incline",
  "level": "2",
  "url": "sec-projectile-motion.html#activity-projectile-incline",
  "type": "Activity",
  "number": "3.5.3.1",
  "title": "Projectiles on an Inclined Plane.",
  "body": " Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.   "
},
{
  "id": "sec-intersection-collision",
  "level": "1",
  "url": "sec-intersection-collision.html",
  "type": "Subsection",
  "number": "3.5.4",
  "title": "Intersection Points versus Collision Points",
  "body": " Intersection Points versus Collision Points  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant. Every collision point is automatically an intersection point, but, as the next two examples show, an intersection point need not be a collision point.  In practice this dictates how we set up the equations.   To find intersection points, give the two curves different parameter names, as in , and solve , for the pair . Equivalently, eliminate the parameters and intersect the two Cartesian curves.    To find collision points, use the same parameter in both curves and solve , for .     In the next two examples the two paths are always the same: the parabola and the line . Setting gives , so the paths meet at the two points Only the schedule of the second particle will change.   The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. By , a collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .     The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.     The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                     The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .     With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .     The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                    Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.    "
},
{
  "id": "def-intersection-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#def-intersection-collision",
  "type": "Definition",
  "number": "3.5.20",
  "title": "Intersection Points and Collision Points.",
  "body": " Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with    "
},
{
  "id": "ex-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-no-collision",
  "type": "Example",
  "number": "3.5.21",
  "title": "The paths cross, but the particles never meet.",
  "body": " The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. By , a collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .   "
},
{
  "id": "fig-no-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision-video",
  "type": "Figure",
  "number": "3.5.22",
  "title": "",
  "body": " The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.   "
},
{
  "id": "fig-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision",
  "type": "Figure",
  "number": "3.5.23",
  "title": "",
  "body": " The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                   "
},
{
  "id": "ex-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-collision",
  "type": "Example",
  "number": "3.5.24",
  "title": "The same paths, a different schedule—now they collide.",
  "body": " The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .   "
},
{
  "id": "fig-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision-video",
  "type": "Figure",
  "number": "3.5.25",
  "title": "",
  "body": " With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .   "
},
{
  "id": "fig-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision",
  "type": "Figure",
  "number": "3.5.26",
  "title": "",
  "body": " The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                  "
},
{
  "id": "insight-collision-vs-intersection",
  "level": "2",
  "url": "sec-intersection-collision.html#insight-collision-vs-intersection",
  "type": "Insight",
  "number": "3.5.27",
  "title": "Every Collision Is an Intersection, but Not Conversely.",
  "body": " Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.  "
},
{
  "id": "checkpoint-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#checkpoint-collision",
  "type": "Checkpoint",
  "number": "3.5.28",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.   "
},
{
  "id": "sec-lines-vector-eq",
  "level": "1",
  "url": "sec-lines-vector-eq.html",
  "type": "Subsection",
  "number": "3.6.1",
  "title": "Vector Equation for a Line in Space",
  "body": " Vector Equation for a Line in Space  Consider a line that passes through the point and is parallel to the vector . Then any arbitrary point on the line can be obtained by adding a scalar multiple of to the position vector of that we will denote by . This way we can write the vector equation of the line as   where is the position vector of an arbitrary point on the line. See .   The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.      "
},
{
  "id": "fig-lines-vector-eq",
  "level": "2",
  "url": "sec-lines-vector-eq.html#fig-lines-vector-eq",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.     "
},
{
  "id": "sec-lines-parametric",
  "level": "1",
  "url": "sec-lines-parametric.html",
  "type": "Subsection",
  "number": "3.6.2",
  "title": "Parametric Equations for a Line",
  "body": " Parametric Equations for a Line  The vector equation can be interpreted as the following parametric equations, where :    The line through two points   Find the vector equation and the parametric equations of the line that passes through the points and .    We begin by finding a vector parallel to the line by using the two given points:   By , the vector equation of the line is   where and , hence   Equivalently, . By , the parametric equations of the line are    The line through and . The vector is parallel to the line.    A three dimensional coordinate system with a blue line passing through the point P zero at two comma zero comma zero on the x axis and climbing toward the upper left. A short green vector from P zero along the line represents the direction vector P zero P equals negative one comma negative one comma one.        "
},
{
  "id": "example-lines-two-points",
  "level": "2",
  "url": "sec-lines-parametric.html#example-lines-two-points",
  "type": "Example",
  "number": "3.6.2",
  "title": "The line through two points.",
  "body": " The line through two points   Find the vector equation and the parametric equations of the line that passes through the points and .    We begin by finding a vector parallel to the line by using the two given points:   By , the vector equation of the line is   where and , hence   Equivalently, . By , the parametric equations of the line are    The line through and . The vector is parallel to the line.    A three dimensional coordinate system with a blue line passing through the point P zero at two comma zero comma zero on the x axis and climbing toward the upper left. A short green vector from P zero along the line represents the direction vector P zero P equals negative one comma negative one comma one.       "
},
{
  "id": "sec-lines-distance",
  "level": "1",
  "url": "sec-lines-distance.html",
  "type": "Subsection",
  "number": "3.6.3",
  "title": "The Distance from a Point to a Line",
  "body": " The Distance from a Point to a Line  Our goal is to find the distance of the point from the line . As shown in , if is any point on the line and is the angle between and the direction vector , then   which can be written in terms of the cross product as    The distance of the point from the line is , where is any point on the line.             S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                  Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .    The vector parallel to the line is which has length . We also need a point on the line. For , we have and hence .  Hence, by ,     "
},
{
  "id": "fig-lines-dist-line",
  "level": "2",
  "url": "sec-lines-distance.html#fig-lines-dist-line",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": " The distance of the point from the line is , where is any point on the line.             S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                "
},
{
  "id": "example-lines-distance",
  "level": "2",
  "url": "sec-lines-distance.html#example-lines-distance",
  "type": "Example",
  "number": "3.6.5",
  "title": "Distance from a point to a line.",
  "body": " Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .    The vector parallel to the line is which has length . We also need a point on the line. For , we have and hence .  Hence, by ,    "
},
{
  "id": "sec-planes-equation",
  "level": "1",
  "url": "sec-planes-equation.html",
  "type": "Subsection",
  "number": "3.6.4",
  "title": "Equation of a Plane in Space",
  "body": " Equation of a Plane in Space  In the past, we learned how to compute the normal vector to a plane. Let us assume that we have computed this vector and that we have a point on the plane. We know that a normal vector is perpendicular to the plane and hence it is perpendicular to any vector in the plane. Let us denote an arbitrary point on the plane by , then    The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.      If , and , then the above equation gives us   which can also be re-written in the form   where .   Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.    Substituting into the point-normal form :   Setting two of the variables equal to zero at a time gives the intercepts: the -intercept is , the -intercept is , and the -intercept is . The portion of the plane in the first octant is sketched in .   The plane meets the coordinate axes at , , and .    A three dimensional coordinate system in which a shaded triangle represents the portion of the plane two x plus three y plus four z equals twelve in the first octant. The triangle's vertices are the intercepts six comma zero comma zero on the x axis, zero comma four comma zero on the y axis, and zero comma zero comma three on the z axis, with dashed lines marking the triangle's edges along the coordinate planes.        "
},
{
  "id": "fig-planes-normal",
  "level": "2",
  "url": "sec-planes-equation.html#fig-planes-normal",
  "type": "Figure",
  "number": "3.6.6",
  "title": "",
  "body": " The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.     "
},
{
  "id": "example-planes-equation",
  "level": "2",
  "url": "sec-planes-equation.html#example-planes-equation",
  "type": "Example",
  "number": "3.6.7",
  "title": "Finding the equation of a plane.",
  "body": " Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.    Substituting into the point-normal form :   Setting two of the variables equal to zero at a time gives the intercepts: the -intercept is , the -intercept is , and the -intercept is . The portion of the plane in the first octant is sketched in .   The plane meets the coordinate axes at , , and .    A three dimensional coordinate system in which a shaded triangle represents the portion of the plane two x plus three y plus four z equals twelve in the first octant. The triangle's vertices are the intercepts six comma zero comma zero on the x axis, zero comma four comma zero on the y axis, and zero comma zero comma three on the z axis, with dashed lines marking the triangle's edges along the coordinate planes.       "
},
{
  "id": "sec-planes-intersection",
  "level": "1",
  "url": "sec-planes-intersection.html",
  "type": "Subsection",
  "number": "3.6.5",
  "title": "Lines of Intersection",
  "body": " Lines of Intersection  Suppose we would like to find the line of intersection of two planes with normal vectors and . To write down the equation of we need a direction vector for it, and the two normal vectors are enough to produce one.  First, notice that each normal vector is perpendicular to . By , the normal vector is orthogonal to every line in the first plane. The line lies in that plane, and therefore . The line lies in the second plane as well, so the same argument with gives . These two right angles are marked in .  So we are looking for a vector orthogonal to both and  and by that is exactly what the cross product delivers. Provided the planes are not parallel, the normal vectors are not parallel either, so . A direction vector is only determined up to a nonzero scalar multiple, so we may take   Then, we can use it together with any common point to the two planes to find the equation of the line of intersection. See .   The cross product of the normal vectors gives the direction vector of the line of intersection.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. Both normal vectors leave the same marked point on the line where the planes meet. The blue vector n one points straight up, perpendicular to the blue horizontal plane; the pink vector n two points up and to the side, perpendicular to the pink slanted plane. A black vector runs along the crease where the planes meet. A legend in the upper right names the three vectors: n one, n two, and v equals n one cross n two. A square corner mark on either side of the common point, drawn in the colour of its normal, shows that each normal makes a right angle with that line.       The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .    The two normal vectors are and , so by ,   We have found the direction of the line so far and now we need to find a common point between the two planes. After substituting into the equations of the planes we get   Adding the last pair of equations gives , hence   Hence, the point is in common between the two planes. Finally, by , the parametric equations of the line of intersection are     "
},
{
  "id": "fig-planes-intersection",
  "level": "2",
  "url": "sec-planes-intersection.html#fig-planes-intersection",
  "type": "Figure",
  "number": "3.6.9",
  "title": "",
  "body": " The cross product of the normal vectors gives the direction vector of the line of intersection.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. Both normal vectors leave the same marked point on the line where the planes meet. The blue vector n one points straight up, perpendicular to the blue horizontal plane; the pink vector n two points up and to the side, perpendicular to the pink slanted plane. A black vector runs along the crease where the planes meet. A legend in the upper right names the three vectors: n one, n two, and v equals n one cross n two. A square corner mark on either side of the common point, drawn in the colour of its normal, shows that each normal makes a right angle with that line.     "
},
{
  "id": "example-planes-intersection",
  "level": "2",
  "url": "sec-planes-intersection.html#example-planes-intersection",
  "type": "Example",
  "number": "3.6.10",
  "title": "The line of intersection of two planes.",
  "body": " The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .    The two normal vectors are and , so by ,   We have found the direction of the line so far and now we need to find a common point between the two planes. After substituting into the equations of the planes we get   Adding the last pair of equations gives , hence   Hence, the point is in common between the two planes. Finally, by , the parametric equations of the line of intersection are    "
},
{
  "id": "sec-planes-distance",
  "level": "1",
  "url": "sec-planes-distance.html",
  "type": "Subsection",
  "number": "3.6.6",
  "title": "Distance of a Point from a Plane",
  "body": " Distance of a Point from a Plane  Our goal here is to find the distance of the point from the plane. To do so we need a point on the plane and the normal vector to the plane . As shown in , the distance can be found by projecting the vector in the direction of and then finding its magnitude:    Distance from a point to a plane       The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane.       Distance from a point to a plane   Find the distance from the point to the plane with equation .    We need a point on the plane. We choose , which when substituted into the equation of the plane , gives . Hence, we have a point on the plane. We then compute the vector . Note that we also can extract the normal vector , from the equation of the plane, which is in the standard form . Substituting into gives     "
},
{
  "id": "fig-planes-distance",
  "level": "2",
  "url": "sec-planes-distance.html#fig-planes-distance",
  "type": "Figure",
  "number": "3.6.11",
  "title": "",
  "body": " The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane.     "
},
{
  "id": "example-planes-distance",
  "level": "2",
  "url": "sec-planes-distance.html#example-planes-distance",
  "type": "Example",
  "number": "3.6.12",
  "title": "Distance from a point to a plane.",
  "body": " Distance from a point to a plane   Find the distance from the point to the plane with equation .    We need a point on the plane. We choose , which when substituted into the equation of the plane , gives . Hence, we have a point on the plane. We then compute the vector . Note that we also can extract the normal vector , from the equation of the plane, which is in the standard form . Substituting into gives    "
},
{
  "id": "subsec-parabola",
  "level": "1",
  "url": "subsec-parabola.html",
  "type": "Subsection",
  "number": "3.7.1",
  "title": "Parabola",
  "body": " Parabola    A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).    The standard equation follows from that definition and nothing else. Choose coordinates that make the picture symmetric: put the focus at and the directrix at , so the two sit on opposite sides of the origin at equal distances. A point lies on the parabola exactly when its distance to equals its distance to the directrix, and that second distance is measured straight down to the foot :   Both sides are non-negative, so squaring loses nothing:   The and terms cancel from both sides, leaving the standard form of the parabola:   So for the standard parabola the vertex is at the origin, the focus is at , and the directrix is the line . The vertex sits halfway between focus and directrix, which is why both are a distance from it. If the same algebra applies unchanged and the curve opens downward; interchanging the roles of and gives the sideways parabola    The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py                 Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.     From equation to focus and directrix   Find the focus and the directrix of .    We begin by completing the square:   Comparing with gives , so . The graph is the standard parabola shifted right by one unit, so the vertex is at . Therefore the focus is at and the directrix is the horizontal line .   The parabola , opening downward with focus and directrix .     g(x) = -0.5*(x-1)^2      \\text{directrix } y=\\tfrac12   \\text{Focus }\\left(1,-\\tfrac12\\right)   (x-1)^2=-2y                  From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?    Here we run in reverse. A point lies on the parabola exactly when its distance to the focus equals its distance to the directrix:   Squaring both sides and expanding,   The and constant terms cancel, leaving   Because the directrix is vertical and the focus lies to its right, the parabola opens to the right . Comparing with gives , so , consistent with the focus at . This is the same equidistance idea as the previous example, but with a horizontal axis of symmetry.   The parabola opens to the right; is equidistant from the focus and the directrix .     P(x,y) = y^2 - 8*x  yP = 4      x=-2   \\text{Focus }(2,0)   \\text{vertex}    P      y^2 = 8x                  "
},
{
  "id": "def-parabola",
  "level": "2",
  "url": "subsec-parabola.html#def-parabola",
  "type": "Definition",
  "number": "3.7.1",
  "title": "",
  "body": "  A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).   "
},
{
  "id": "fig-parabola-def",
  "level": "2",
  "url": "subsec-parabola.html#fig-parabola-def",
  "type": "Figure",
  "number": "3.7.2",
  "title": "",
  "body": " The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py               "
},
{
  "id": "vid-parabola-focus",
  "level": "2",
  "url": "subsec-parabola.html#vid-parabola-focus",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": " Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.   "
},
{
  "id": "ex-parabola-1",
  "level": "2",
  "url": "subsec-parabola.html#ex-parabola-1",
  "type": "Example",
  "number": "3.7.4",
  "title": "From equation to focus and directrix.",
  "body": " From equation to focus and directrix   Find the focus and the directrix of .    We begin by completing the square:   Comparing with gives , so . The graph is the standard parabola shifted right by one unit, so the vertex is at . Therefore the focus is at and the directrix is the horizontal line .   The parabola , opening downward with focus and directrix .     g(x) = -0.5*(x-1)^2      \\text{directrix } y=\\tfrac12   \\text{Focus }\\left(1,-\\tfrac12\\right)   (x-1)^2=-2y                "
},
{
  "id": "ex-parabola-2",
  "level": "2",
  "url": "subsec-parabola.html#ex-parabola-2",
  "type": "Example",
  "number": "3.7.6",
  "title": "From focus and directrix to equation (a sideways parabola).",
  "body": " From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?    Here we run in reverse. A point lies on the parabola exactly when its distance to the focus equals its distance to the directrix:   Squaring both sides and expanding,   The and constant terms cancel, leaving   Because the directrix is vertical and the focus lies to its right, the parabola opens to the right . Comparing with gives , so , consistent with the focus at . This is the same equidistance idea as the previous example, but with a horizontal axis of symmetry.   The parabola opens to the right; is equidistant from the focus and the directrix .     P(x,y) = y^2 - 8*x  yP = 4      x=-2   \\text{Focus }(2,0)   \\text{vertex}    P      y^2 = 8x                 "
},
{
  "id": "subsec-ellipse",
  "level": "1",
  "url": "subsec-ellipse.html",
  "type": "Subsection",
  "number": "3.7.2",
  "title": "Ellipse",
  "body": " Ellipse    An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.    An ellipse centred at the origin with its foci on the -axis has the standard form The segment joining and is the semi-major axis , the segment joining and is the semi-minor axis , and the foci satisfy .   An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1                Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .    Where do the formulas for come from? Two facts do all the work. First, evaluating at the vertex shows that the two focal radii there are and , so their sum is which identifies the constant in the definition as ; equivalently . Second, evaluating at the co-vertex forces by symmetry, and that radius is the hypotenuse of a right triangle with legs and . Pythagoras then gives   So for the ellipse in , is the hypotenuse of that triangle, which is why is the largest of the three lengths and why carries a minus sign.   Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .     Horizontal ellipse   Sketch the graph of and locate the foci.    Dividing through by puts the equation in the standard form :   The larger denominator sits under , so the major axis is horizontal with and . Then, by , so the foci are and .   The ellipse with foci at .     E(x,y) = x^2\/9 + y^2\/4  cc = sqrt(5)             F_1  F_2  \\frac{x^2}{9}+\\frac{y^2}{4}=1               Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.       A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.    Dividing by ,   This time the larger denominator, , sits under , so the major axis is vertical . The semi-major axis is (along the -axis) and the semi-minor axis is (along the -axis). Hence, by ,   Because the major axis is vertical, the foci lie on the -axis: and . The lesson of the twist: read off the larger denominator first, since it decides which axis carries the foci.   The vertical ellipse ; the foci sit on the major axis, and each segment from to a focus has length .     E(x,y) = x^2\/16 + y^2\/25         a=5      F_1(0,3)  F_2(0,-3)   (0,5)  (4,0)  \\frac{x^2}{16}+\\frac{y^2}{25}=1                 "
},
{
  "id": "def-ellipse",
  "level": "2",
  "url": "subsec-ellipse.html#def-ellipse",
  "type": "Definition",
  "number": "3.7.8",
  "title": "",
  "body": "  An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "subsec-ellipse-3",
  "level": "2",
  "url": "subsec-ellipse.html#subsec-ellipse-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semi-major axis semi-minor axis "
},
{
  "id": "fig-ellipse-def",
  "level": "2",
  "url": "subsec-ellipse.html#fig-ellipse-def",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": " An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-ellipse-sum",
  "level": "2",
  "url": "subsec-ellipse.html#vid-ellipse-sum",
  "type": "Figure",
  "number": "3.7.10",
  "title": "",
  "body": " Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .   "
},
{
  "id": "vid-ellipse-formula-a",
  "level": "2",
  "url": "subsec-ellipse.html#vid-ellipse-formula-a",
  "type": "Figure",
  "number": "3.7.11",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .   "
},
{
  "id": "ex-ellipse-1",
  "level": "2",
  "url": "subsec-ellipse.html#ex-ellipse-1",
  "type": "Example",
  "number": "3.7.12",
  "title": "Horizontal ellipse.",
  "body": " Horizontal ellipse   Sketch the graph of and locate the foci.    Dividing through by puts the equation in the standard form :   The larger denominator sits under , so the major axis is horizontal with and . Then, by , so the foci are and .   The ellipse with foci at .     E(x,y) = x^2\/9 + y^2\/4  cc = sqrt(5)             F_1  F_2  \\frac{x^2}{9}+\\frac{y^2}{4}=1               Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.     "
},
{
  "id": "ex-ellipse-2",
  "level": "2",
  "url": "subsec-ellipse.html#ex-ellipse-2",
  "type": "Example",
  "number": "3.7.15",
  "title": "A vertical ellipse (foci on the <span class=\"process-math\">\\(y\\)<\/span>-axis).",
  "body": " A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.    Dividing by ,   This time the larger denominator, , sits under , so the major axis is vertical . The semi-major axis is (along the -axis) and the semi-minor axis is (along the -axis). Hence, by ,   Because the major axis is vertical, the foci lie on the -axis: and . The lesson of the twist: read off the larger denominator first, since it decides which axis carries the foci.   The vertical ellipse ; the foci sit on the major axis, and each segment from to a focus has length .     E(x,y) = x^2\/16 + y^2\/25         a=5      F_1(0,3)  F_2(0,-3)   (0,5)  (4,0)  \\frac{x^2}{16}+\\frac{y^2}{25}=1                "
},
{
  "id": "subsec-hyperbola",
  "level": "1",
  "url": "subsec-hyperbola.html",
  "type": "Subsection",
  "number": "3.7.3",
  "title": "Hyperbola",
  "body": " Hyperbola    A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.    A hyperbola centred at the origin with its foci on the -axis has the standard form Its vertices are , the foci satisfy , and the asymptotes are .   A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1                Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.    The formulas for arise exactly as they did for the ellipse, with sums replaced by differences. Evaluating at the vertex , the two focal radii are and , so identifying the constant as , or . For the second relation, draw the central box whose half-width is and half-height is . Its corner lies at distance from the center, so the right triangle with legs and has hypotenuse , and   Notice the contrast with the ellipse: there was the hypotenuse , so ; here is a leg , so . That single difference is the source of the sign change between the two formulas.   Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .    The same box explains the asymptotes. Solving for gives   The whole difference between the hyperbola and the pair of lines is that square root. As grows, , so the root tends to and the curve tends to those lines. The gap closes but never shuts: since for every finite , each branch stays strictly inside its asymptotes, approaching without ever touching. That is exactly the behavior of an asymptote and it is why and , which never appear as distances to a focus, nonetheless control the shape at infinity.  Geometrically the lines are just the extended diagonals of the central box, as shows: the diagonal through the corner rises over a run of , so its slope is , and the one through has slope . So drawing the box gives the asymptotes for free, and the box plus the two vertices is enough to sketch the curve. For a vertical hyperbola the box is the same, but the transverse axis is vertical and the slopes become .   The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                   Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.    Dividing by gives the standard form :   Since the -term is positive, the hyperbola opens left and right. Then, by , so the foci are , the vertices are , and the asymptotes are .   The hyperbola with foci , vertices , and asymptotes .     H(x,y) = x^2\/16 - y^2\/9         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(5,0)  F_2(-5,0)      V_1  V_2  \\frac{x^2}{16}-\\frac{y^2}{9}=1                Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.       A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.    Dividing by and being careful with signs,   Now the -term is the positive one, so the hyperbola opens up and down . In this orientation is the denominator under , giving (measured along the -axis) and . Still using ,   So the vertices are and the foci are , both on the -axis. For a vertical hyperbola the asymptotes are note the slope uses here, not . The transverse axis has simply rotated from horizontal to vertical.   The vertical hyperbola : it opens up and down, with vertices , foci , and asymptotes .     H(x,y) = y^2\/9 - x^2\/16         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(0,5)  F_2(0,-5)      V_1  V_2  \\frac{y^2}{9}-\\frac{x^2}{16}=1                 "
},
{
  "id": "def-hyperbola",
  "level": "2",
  "url": "subsec-hyperbola.html#def-hyperbola",
  "type": "Definition",
  "number": "3.7.17",
  "title": "",
  "body": "  A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "fig-hyperbola-def",
  "level": "2",
  "url": "subsec-hyperbola.html#fig-hyperbola-def",
  "type": "Figure",
  "number": "3.7.18",
  "title": "",
  "body": " A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-hyperbola-diff",
  "level": "2",
  "url": "subsec-hyperbola.html#vid-hyperbola-diff",
  "type": "Figure",
  "number": "3.7.19",
  "title": "",
  "body": " Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.   "
},
{
  "id": "vid-hyperbola-formula-a",
  "level": "2",
  "url": "subsec-hyperbola.html#vid-hyperbola-formula-a",
  "type": "Figure",
  "number": "3.7.20",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .   "
},
{
  "id": "fig-hyperbola-box",
  "level": "2",
  "url": "subsec-hyperbola.html#fig-hyperbola-box",
  "type": "Figure",
  "number": "3.7.21",
  "title": "",
  "body": " The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                 "
},
{
  "id": "ex-hyperbola-1",
  "level": "2",
  "url": "subsec-hyperbola.html#ex-hyperbola-1",
  "type": "Example",
  "number": "3.7.22",
  "title": "Horizontal hyperbola.",
  "body": " Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.    Dividing by gives the standard form :   Since the -term is positive, the hyperbola opens left and right. Then, by , so the foci are , the vertices are , and the asymptotes are .   The hyperbola with foci , vertices , and asymptotes .     H(x,y) = x^2\/16 - y^2\/9         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(5,0)  F_2(-5,0)      V_1  V_2  \\frac{x^2}{16}-\\frac{y^2}{9}=1                Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.     "
},
{
  "id": "ex-hyperbola-2",
  "level": "2",
  "url": "subsec-hyperbola.html#ex-hyperbola-2",
  "type": "Example",
  "number": "3.7.25",
  "title": "A vertical hyperbola (opens up and down).",
  "body": " A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.    Dividing by and being careful with signs,   Now the -term is the positive one, so the hyperbola opens up and down . In this orientation is the denominator under , giving (measured along the -axis) and . Still using ,   So the vertices are and the foci are , both on the -axis. For a vertical hyperbola the asymptotes are note the slope uses here, not . The transverse axis has simply rotated from horizontal to vertical.   The vertical hyperbola : it opens up and down, with vertices , foci , and asymptotes .     H(x,y) = y^2\/9 - x^2\/16         y=\\tfrac34 x  y=-\\tfrac34 x      F_1(0,5)  F_2(0,-5)      V_1  V_2  \\frac{y^2}{9}-\\frac{x^2}{16}=1                "
},
{
  "id": "subsec-app-reflector",
  "level": "1",
  "url": "subsec-app-reflector.html",
  "type": "Subsection",
  "number": "3.7.4",
  "title": "Application: Parabolic Reflectors",
  "body": " Application: Parabolic Reflectors  Satellite dishes, radio telescopes, headlights, and solar cookers are all parabolic in cross-section, and for one reason: a parabola has a reflection property . Every ray travelling parallel to the axis of the parabola reflects off the curve and passes through the focus . Run the argument backwards and a source placed at the focus emits a perfectly parallel beam which is why a headlight is shaped this way too.  This is not a coincidence of the shape; it follows from the equidistance definition ( ). For the tangent at the point has slope , and a short computation shows that the incoming vertical ray and the segment from that point to make equal angles with the normal. The law of reflection then sends every such ray straight to the focus, so that is where the receiver goes.   A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}               Animation: parallel rays strike the dish at different points and all reflect through the single focus.     Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?    Put the vertex at the origin with the dish opening upward, so the cross-section is . The dish is feet wide and foot deep, so the rim passes through the point . Substituting,   The receiver belongs at the focus , that is, foot above the vertex which here happens to be exactly level with the rim.    "
},
{
  "id": "subsec-app-reflector-2",
  "level": "2",
  "url": "subsec-app-reflector.html#subsec-app-reflector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection property "
},
{
  "id": "fig-parabola-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#fig-parabola-reflector",
  "type": "Figure",
  "number": "3.7.27",
  "title": "",
  "body": " A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}             "
},
{
  "id": "vid-parabolic-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#vid-parabolic-reflector",
  "type": "Figure",
  "number": "3.7.28",
  "title": "",
  "body": " Animation: parallel rays strike the dish at different points and all reflect through the single focus.   "
},
{
  "id": "ex-app-reflector",
  "level": "2",
  "url": "subsec-app-reflector.html#ex-app-reflector",
  "type": "Example",
  "number": "3.7.29",
  "title": "Placing the receiver.",
  "body": " Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?    Put the vertex at the origin with the dish opening upward, so the cross-section is . The dish is feet wide and foot deep, so the rim passes through the point . Substituting,   The receiver belongs at the focus , that is, foot above the vertex which here happens to be exactly level with the rim.   "
},
{
  "id": "subsec-app-whisper",
  "level": "1",
  "url": "subsec-app-whisper.html",
  "type": "Subsection",
  "number": "3.7.5",
  "title": "Application: Whispering Galleries",
  "body": " Application: Whispering Galleries  An ellipse has a reflection property of its own: a ray leaving one focus reflects off the ellipse and passes through the other focus. In a room whose ceiling is a half-ellipse the dome of St. Paul's Cathedral, or Statuary Hall in the U.S. Capitol a whisper released at one focus is gathered up by the whole ceiling and delivered to a listener standing at the other focus, while people in between hear nothing.  The constant-sum definition ( ) explains why it works so well. Every path from one focus to the wall and on to the other focus has total length the same length, no matter where it strikes. So the reflected sound does not merely arrive at the far focus: it arrives from every direction at the same instant , in phase, and the pieces reinforce one another instead of smearing out. That is what makes a whisper audible across the room.   The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.      A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}                Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .     Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?    Model the room as with center at the origin. The room is feet long and feet wide, so and , giving and . Then, by ,   The two people should stand at the foci , that is, feet from the center along the long axis, or feet apart. Whatever point of the wall the sound bounces off, it travels a total of feet the same distance every way round, which is exactly why it arrives in phase.    "
},
{
  "id": "fig-stpauls-1809",
  "level": "2",
  "url": "subsec-app-whisper.html#fig-stpauls-1809",
  "type": "Figure",
  "number": "3.7.30",
  "title": "",
  "body": " The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.    "
},
{
  "id": "fig-ellipse-whisper",
  "level": "2",
  "url": "subsec-app-whisper.html#fig-ellipse-whisper",
  "type": "Figure",
  "number": "3.7.31",
  "title": "",
  "body": " A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}              "
},
{
  "id": "vid-whispering-gallery",
  "level": "2",
  "url": "subsec-app-whisper.html#vid-whispering-gallery",
  "type": "Figure",
  "number": "3.7.32",
  "title": "",
  "body": " Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .   "
},
{
  "id": "ex-app-whisper",
  "level": "2",
  "url": "subsec-app-whisper.html#ex-app-whisper",
  "type": "Example",
  "number": "3.7.33",
  "title": "Where should the listener stand?",
  "body": " Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?    Model the room as with center at the origin. The room is feet long and feet wide, so and , giving and . Then, by ,   The two people should stand at the foci , that is, feet from the center along the long axis, or feet apart. Whatever point of the wall the sound bounces off, it travels a total of feet the same distance every way round, which is exactly why it arrives in phase.   "
},
{
  "id": "subsec-app-loran",
  "level": "1",
  "url": "subsec-app-loran.html",
  "type": "Subsection",
  "number": "3.7.6",
  "title": "Application: Hyperbolic Navigation (LORAN)",
  "body": " Application: Hyperbolic Navigation (LORAN)  Progress in electrical engineering enabled navigation systems based on the transmission of electromagnetic waves. One example is LORAN-C marine navigation, developed in the United States during World War II. A vessel receives a synchronized signal from a pair of transmitters; the signal from the more distant transmitter arrives later, so the measured delay determines the difference between the vessel's distances to the two transmitters, where is the signal speed. The set of points with a constant difference of distances from two fixed points is precisely a hyperbola with those points as foci, so one measurement tells the vessel which hyperbola it is on the one with and the sign of the delay (which pulse arrived first) tells it which branch. A delay measured against another pair of stations places the vessel on a second curve, and since its true position must satisfy both measurements at once, the vessel sits where the two curves cross.   Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                  Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.     Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                 We first translate the two timing facts into geometry. The signal reaches and simultaneously, so Emma is equidistant from them: he lies on the perpendicular bisector of the segment . The signal reaches  microseconds after , so Emma is farther from than from . He therefore also lies on the branch nearer of the hyperbola with foci and whose constant distance difference is km.  Now we choose coordinates so that has the simplest possible equation. Place the origin at the midpoint of , point the positive -axis along , and choose the positive -axis so that has positive second coordinate. Since every given length is a multiple of , let one unit on each axis be km. Then    The coordinate system: origin at the midpoint of , one unit km.          O   P_2   P_1   P_3               Let denote Emma's unknown position, and let be the perpendicular bisector of . The line passes through the midpoint of the segment, and since , the direction is perpendicular to the segment. Parametrically,   For the hyperbola, the foci are and , so the center is and . The constant difference units equals , so , and then . Hence and since is closer to , it lies on the right branch: .  It remains to intersect with . Substituting the parametric equations into :   The discriminant is , so   Substituting into the parametric equations gives that is, . Substituting gives and , that is, .  The point fails the branch condition , and the physics says why: lies on the left branch, km closer to than to , so a signal sent from would reach  earlier than the opposite of what was measured. Emma's position is therefore about in kilometers from . As a check, the distances come out exactly: units and units, so units km, as required. In kilometers, Emma is km from and .   The solution: is the intersection of the bisector with the right branch of . The second intersection , on the left branch, is rejected.     H(x,y) = x^2 - y^2\/3  Ax = 19\/13  Ay = 24\/13      o  h    \\tfrac{19}{13}  \\tfrac{24}{13}   A   A_2\\ \\text{(rejected)}   S   P_2   P_1   P_3                   What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating him would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.    Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                   "
},
{
  "id": "fig-hyperbola-loran",
  "level": "2",
  "url": "subsec-app-loran.html#fig-hyperbola-loran",
  "type": "Figure",
  "number": "3.7.34",
  "title": "",
  "body": " Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                "
},
{
  "id": "vid-hyperbolic-navigation",
  "level": "2",
  "url": "subsec-app-loran.html#vid-hyperbolic-navigation",
  "type": "Figure",
  "number": "3.7.35",
  "title": "",
  "body": " Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.   "
},
{
  "id": "ex-app-loran",
  "level": "2",
  "url": "subsec-app-loran.html#ex-app-loran",
  "type": "Example",
  "number": "3.7.36",
  "title": "Locating a hiker from three receivers.",
  "body": " Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                 We first translate the two timing facts into geometry. The signal reaches and simultaneously, so Emma is equidistant from them: he lies on the perpendicular bisector of the segment . The signal reaches  microseconds after , so Emma is farther from than from . He therefore also lies on the branch nearer of the hyperbola with foci and whose constant distance difference is km.  Now we choose coordinates so that has the simplest possible equation. Place the origin at the midpoint of , point the positive -axis along , and choose the positive -axis so that has positive second coordinate. Since every given length is a multiple of , let one unit on each axis be km. Then    The coordinate system: origin at the midpoint of , one unit km.          O   P_2   P_1   P_3               Let denote Emma's unknown position, and let be the perpendicular bisector of . The line passes through the midpoint of the segment, and since , the direction is perpendicular to the segment. Parametrically,   For the hyperbola, the foci are and , so the center is and . The constant difference units equals , so , and then . Hence and since is closer to , it lies on the right branch: .  It remains to intersect with . Substituting the parametric equations into :   The discriminant is , so   Substituting into the parametric equations gives that is, . Substituting gives and , that is, .  The point fails the branch condition , and the physics says why: lies on the left branch, km closer to than to , so a signal sent from would reach  earlier than the opposite of what was measured. Emma's position is therefore about in kilometers from . As a check, the distances come out exactly: units and units, so units km, as required. In kilometers, Emma is km from and .   The solution: is the intersection of the bisector with the right branch of . The second intersection , on the left branch, is rejected.     H(x,y) = x^2 - y^2\/3  Ax = 19\/13  Ay = 24\/13      o  h    \\tfrac{19}{13}  \\tfrac{24}{13}   A   A_2\\ \\text{(rejected)}   S   P_2   P_1   P_3                 "
},
{
  "id": "rem-loran-two-hyperbolas",
  "level": "2",
  "url": "subsec-app-loran.html#rem-loran-two-hyperbolas",
  "type": "Remark",
  "number": "3.7.40",
  "title": "What if Emma were not equidistant from <span class=\"process-math\">\\(P_1\\)<\/span> and <span class=\"process-math\">\\(P_3\\text{?}\\)<\/span>",
  "body": " What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating him would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.  "
},
{
  "id": "fig-hyperbola-loran-fix",
  "level": "2",
  "url": "subsec-app-loran.html#fig-hyperbola-loran-fix",
  "type": "Figure",
  "number": "3.7.41",
  "title": "",
  "body": " Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                  "
},
{
  "id": "subsec-elliptical-paraboloid",
  "level": "1",
  "url": "subsec-elliptical-paraboloid.html",
  "type": "Subsection",
  "number": "3.8.1",
  "title": "Elliptical Paraboloid",
  "body": " Elliptical Paraboloid  We begin with the case in which and appear squared with coefficients of the same sign, while appears only to the first power. In equation , take , , , , and . Equation then reduces to the surface known as an elliptical paraboloid .  By fixing the value of , , or , we cut the surface with a plane and obtain traces that are conic sections. For example, setting , , and in turn gives the following traces, as shown in :    The traces of the elliptical paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening upward.    f(t) = (t, 1 + t^2\/9)       x=2:\\ \\ z = 1 + \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 + 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} + 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the elliptical paraboloid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .    With traces of two parabolas and one ellipse, it is natural to call this quadric surface and elliptical paraboloid.  "
},
{
  "id": "subsec-elliptical-paraboloid-2",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#subsec-elliptical-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptical paraboloid "
},
{
  "id": "fig-elliptical-paraboloid-traces",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-traces",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": " The traces of the elliptical paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening upward.    f(t) = (t, 1 + t^2\/9)       x=2:\\ \\ z = 1 + \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 + 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} + 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-elliptical-paraboloid-slices",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-slices",
  "type": "Figure",
  "number": "3.8.2",
  "title": "",
  "body": " Slicing the elliptical paraboloid with planes , , and .   "
},
{
  "id": "fig-elliptical-paraboloid-video",
  "level": "2",
  "url": "subsec-elliptical-paraboloid.html#fig-elliptical-paraboloid-video",
  "type": "Figure",
  "number": "3.8.3",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-hyperbolic-paraboloid",
  "level": "1",
  "url": "subsec-hyperbolic-paraboloid.html",
  "type": "Subsection",
  "number": "3.8.2",
  "title": "Hyperbolic Paraboloid",
  "body": " Hyperbolic Paraboloid  Now change a single sign: keep to the first power, but let the squared terms in and carry opposite signs. In equation , take , , , , and . Equation becomes a hyperbolic paraboloid . That one sign is enough to change the surface completely.  As in the previous example ( ), fixing the value of , , or produces traces that are conic sections. Again setting , , and in turn gives the following traces, as shown in :    The traces of the hyperbolic paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening downward.    f(t) = (t, 1 - t^2\/9)       x=2:\\ \\ z = 1 - \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 - 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} - 1            The trace in the plane z = 1: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 3*sinh(t))  fb(t) = (-2*cosh(t), 3*sinh(t))          z=1:\\ \\ \\tfrac{x^2}{4} - \\tfrac{y^2}{9} = 1              Slicing the hyperbolic paraboloid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .    Similar to the elliptical paraboloid, with traces of two parabolas, but with one hyperbola, it is natural to call this quadric surface a hyperbolic paraboloid.  "
},
{
  "id": "subsec-hyperbolic-paraboloid-2",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#subsec-hyperbolic-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic paraboloid "
},
{
  "id": "fig-hyperbolic-paraboloid-traces",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-traces",
  "type": "Figure",
  "number": "3.8.4",
  "title": "",
  "body": " The traces of the hyperbolic paraboloid in the planes , , and .    The trace in the plane x = 2: a parabola opening downward.    f(t) = (t, 1 - t^2\/9)       x=2:\\ \\ z = 1 - \\tfrac{y^2}{9}            The trace in the plane y = -3: a parabola opening upward.    f(t) = (t, t^2\/4 - 1)       y=-3:\\ \\ z = \\tfrac{x^2}{4} - 1            The trace in the plane z = 1: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 3*sinh(t))  fb(t) = (-2*cosh(t), 3*sinh(t))          z=1:\\ \\ \\tfrac{x^2}{4} - \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-hyperbolic-paraboloid-slices",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-slices",
  "type": "Figure",
  "number": "3.8.5",
  "title": "",
  "body": " Slicing the hyperbolic paraboloid with planes , , and .   "
},
{
  "id": "fig-hyperbolic-paraboloid-video",
  "level": "2",
  "url": "subsec-hyperbolic-paraboloid.html#fig-hyperbolic-paraboloid-video",
  "type": "Figure",
  "number": "3.8.6",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-ellipsoid",
  "level": "1",
  "url": "subsec-ellipsoid.html",
  "type": "Subsection",
  "number": "3.8.3",
  "title": "Ellipsoid",
  "body": " Ellipsoid  Suppose next that all three variables appear squared with coefficients of the same sign, and that no linear term is present at all. In equation , take , , , , and . Equation reduces to an ellipsoid .  By allowing fixed values of surface to intersect the coordinate planes ( , , and ), we find the following traces, as shown in :    The traces of the ellipsoid in the coordinate planes , , and .    The trace in the plane x = 0: an ellipse with semi-axes 3 and 4.    f(t) = (3*cos(t), 4*sin(t))       x=0:\\ \\ \\tfrac{y^2}{9} + \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: an ellipse with semi-axes 2 and 4.    f(t) = (2*cos(t), 4*sin(t))       y=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse with semi-axes 2 and 3.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the ellipsoid with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .      "
},
{
  "id": "subsec-ellipsoid-2",
  "level": "2",
  "url": "subsec-ellipsoid.html#subsec-ellipsoid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ellipsoid "
},
{
  "id": "fig-ellipsoid-traces",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-traces",
  "type": "Figure",
  "number": "3.8.7",
  "title": "",
  "body": " The traces of the ellipsoid in the coordinate planes , , and .    The trace in the plane x = 0: an ellipse with semi-axes 3 and 4.    f(t) = (3*cos(t), 4*sin(t))       x=0:\\ \\ \\tfrac{y^2}{9} + \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: an ellipse with semi-axes 2 and 4.    f(t) = (2*cos(t), 4*sin(t))       y=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse with semi-axes 2 and 3.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-ellipsoid-slices",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-slices",
  "type": "Figure",
  "number": "3.8.8",
  "title": "",
  "body": " Slicing the ellipsoid with planes , , and .   "
},
{
  "id": "fig-ellipsoid-video",
  "level": "2",
  "url": "subsec-ellipsoid.html#fig-ellipsoid-video",
  "type": "Figure",
  "number": "3.8.9",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-elliptic-cone",
  "level": "1",
  "url": "subsec-elliptic-cone.html",
  "type": "Subsection",
  "number": "3.8.4",
  "title": "Elliptic Cone",
  "body": " Elliptic Cone  Finally, keep all three squared terms, but let the coefficient of be negative and set the constant on the right-hand side to zero. In equation , take , , , , and . Equation becomes an elliptic cone .  Note that this looks similar to the equation of an elliptical paraboloid but has the same degree as and . Consequently, since has the same degree as and , the traces would behave linearly instead of quadratically. Structurally, from the traces, two hyperbolas and an ellipse. We can see the traces through the intersection of the planes , , and , as shown in :    The traces of the elliptic cone in the planes , , and .    The trace in the plane x = 2: a hyperbola opening up and down.    fa(t) = (3*sinh(t), cosh(t))  fb(t) = (3*sinh(t), -cosh(t))          x=2:\\ \\ z^2 - \\tfrac{y^2}{9} = 1            The trace in the plane y = -3: a hyperbola opening up and down.    fa(t) = (2*sinh(t), cosh(t))  fb(t) = (2*sinh(t), -cosh(t))          y=-3:\\ \\ z^2 - \\tfrac{x^2}{4} = 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the elliptic cone with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .      "
},
{
  "id": "subsec-elliptic-cone-2",
  "level": "2",
  "url": "subsec-elliptic-cone.html#subsec-elliptic-cone-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic cone "
},
{
  "id": "fig-elliptic-cone-traces",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-traces",
  "type": "Figure",
  "number": "3.8.10",
  "title": "",
  "body": " The traces of the elliptic cone in the planes , , and .    The trace in the plane x = 2: a hyperbola opening up and down.    fa(t) = (3*sinh(t), cosh(t))  fb(t) = (3*sinh(t), -cosh(t))          x=2:\\ \\ z^2 - \\tfrac{y^2}{9} = 1            The trace in the plane y = -3: a hyperbola opening up and down.    fa(t) = (2*sinh(t), cosh(t))  fb(t) = (2*sinh(t), -cosh(t))          y=-3:\\ \\ z^2 - \\tfrac{x^2}{4} = 1            The trace in the plane z = 1: an ellipse.    f(t) = (2*cos(t), 3*sin(t))       z=1:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1            "
},
{
  "id": "fig-elliptic-cone-slices",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-slices",
  "type": "Figure",
  "number": "3.8.11",
  "title": "",
  "body": " Slicing the elliptic cone with planes , , and .   "
},
{
  "id": "fig-elliptic-cone-video",
  "level": "2",
  "url": "subsec-elliptic-cone.html#fig-elliptic-cone-video",
  "type": "Figure",
  "number": "3.8.12",
  "title": "",
  "body": " Slicing with planes , , and .   "
},
{
  "id": "subsec-hyperboloids",
  "level": "1",
  "url": "subsec-hyperboloids.html",
  "type": "Subsection",
  "number": "3.8.5",
  "title": "Hyperboloids",
  "body": " Hyperboloids  The two remaining quadric surfaces are left for you to explore. The aim of this section is to practice the slicing method of the previous sections on a new pair of surfaces and, in doing so, to see what separates a hyperboloid of one sheet from a hyperboloid of two sheets.   Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.    Slicing with the plane gives Since the right-hand side is positive for every value of , every horizontal plane meets the surface in an ellipse. The smallest one, in the plane , is the waist of the surface, and the ellipses grow as increases. In the coordinate planes we find hyperbolas: The traces are shown in , and lets you slice the surface yourself.   The traces of the hyperboloid of one sheet in the coordinate planes , , and .    The trace in the plane x = 0: a hyperbola opening left and right.    fa(t) = (3*cosh(t), 4*sinh(t))  fb(t) = (-3*cosh(t), 4*sinh(t))          x=0:\\ \\ \\tfrac{y^2}{9} - \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 4*sinh(t))  fb(t) = (-2*cosh(t), 4*sinh(t))          y=0:\\ \\ \\tfrac{x^2}{4} - \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse, the smallest horizontal trace.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the hyperboloid of one sheet with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?    Slicing with the plane now gives and this time the sign of the right-hand side matters. For the right-hand side is negative, so the plane misses the surface entirely; there is no trace at all . For the trace is the single point , and only for do we get ellipses, which grow as increases. In the coordinate planes we again find hyperbolas, both opening up and down: The traces are shown in , and lets you watch the plane pass through the gap without touching the surface.   The traces of the hyperboloid of two sheets in the planes , , and .    The trace in the plane x = 0: a hyperbola opening up and down.    fa(t) = (3*sinh(t), 4*cosh(t))  fb(t) = (3*sinh(t), -4*cosh(t))          x=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{y^2}{9} = 1            The trace in the plane y = 0: a hyperbola opening up and down.    fa(t) = (2*sinh(t), 4*cosh(t))  fb(t) = (2*sinh(t), -4*cosh(t))          y=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{x^2}{4} = 1            The trace in the plane z = 5: an ellipse. Planes with the absolute value of z less than 4 miss the surface entirely.    f(t) = (1.5*cos(t), 2.25*sin(t))       z=5:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = \\tfrac{9}{16}              Slicing the hyperboloid of two sheets with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?    The horizontal traces tell the two surfaces apart. For the first surface the plane produces an ellipse for every value of : the ellipses stack on top of one another without interruption, so the surface is a single connected piece  one sheet . For the second surface there is no trace at all when : the surface has a gap around the origin and splits into two separate pieces, one with and one with   two sheets .  The signs in the equation predict this without any graphing. With the equation written with on the right-hand side, count the negative squared terms: one negative term gives a hyperboloid of one sheet, and two negative terms give a hyperboloid of two sheets. The axis of the hyperboloid is the axis of the variable that appears with the minority sign: for the first surface the -term is the lone negative, and for the second the -term is the lone positive, so both hyperboloids have the -axis as their axis.     "
},
{
  "id": "activity-hyperboloids",
  "level": "2",
  "url": "subsec-hyperboloids.html#activity-hyperboloids",
  "type": "Activity",
  "number": "3.8.5.1",
  "title": "Slicing the Hyperboloids.",
  "body": " Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.    Slicing with the plane gives Since the right-hand side is positive for every value of , every horizontal plane meets the surface in an ellipse. The smallest one, in the plane , is the waist of the surface, and the ellipses grow as increases. In the coordinate planes we find hyperbolas: The traces are shown in , and lets you slice the surface yourself.   The traces of the hyperboloid of one sheet in the coordinate planes , , and .    The trace in the plane x = 0: a hyperbola opening left and right.    fa(t) = (3*cosh(t), 4*sinh(t))  fb(t) = (-3*cosh(t), 4*sinh(t))          x=0:\\ \\ \\tfrac{y^2}{9} - \\tfrac{z^2}{16} = 1            The trace in the plane y = 0: a hyperbola opening left and right.    fa(t) = (2*cosh(t), 4*sinh(t))  fb(t) = (-2*cosh(t), 4*sinh(t))          y=0:\\ \\ \\tfrac{x^2}{4} - \\tfrac{z^2}{16} = 1            The trace in the plane z = 0: an ellipse, the smallest horizontal trace.    f(t) = (2*cos(t), 3*sin(t))       z=0:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = 1              Slicing the hyperboloid of one sheet with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?    Slicing with the plane now gives and this time the sign of the right-hand side matters. For the right-hand side is negative, so the plane misses the surface entirely; there is no trace at all . For the trace is the single point , and only for do we get ellipses, which grow as increases. In the coordinate planes we again find hyperbolas, both opening up and down: The traces are shown in , and lets you watch the plane pass through the gap without touching the surface.   The traces of the hyperboloid of two sheets in the planes , , and .    The trace in the plane x = 0: a hyperbola opening up and down.    fa(t) = (3*sinh(t), 4*cosh(t))  fb(t) = (3*sinh(t), -4*cosh(t))          x=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{y^2}{9} = 1            The trace in the plane y = 0: a hyperbola opening up and down.    fa(t) = (2*sinh(t), 4*cosh(t))  fb(t) = (2*sinh(t), -4*cosh(t))          y=0:\\ \\ \\tfrac{z^2}{16} - \\tfrac{x^2}{4} = 1            The trace in the plane z = 5: an ellipse. Planes with the absolute value of z less than 4 miss the surface entirely.    f(t) = (1.5*cos(t), 2.25*sin(t))       z=5:\\ \\ \\tfrac{x^2}{4} + \\tfrac{y^2}{9} = \\tfrac{9}{16}              Slicing the hyperboloid of two sheets with planes , , and .    The animation in shows these slices being taken one at a time.   Slicing with planes , , and .        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?    The horizontal traces tell the two surfaces apart. For the first surface the plane produces an ellipse for every value of : the ellipses stack on top of one another without interruption, so the surface is a single connected piece  one sheet . For the second surface there is no trace at all when : the surface has a gap around the origin and splits into two separate pieces, one with and one with   two sheets .  The signs in the equation predict this without any graphing. With the equation written with on the right-hand side, count the negative squared terms: one negative term gives a hyperboloid of one sheet, and two negative terms give a hyperboloid of two sheets. The axis of the hyperboloid is the axis of the variable that appears with the minority sign: for the first surface the -term is the lone negative, and for the second the -term is the lone positive, so both hyperboloids have the -axis as their axis.    "
},
{
  "id": "subsec-quadric-summary",
  "level": "1",
  "url": "subsec-quadric-summary.html",
  "type": "Subsection",
  "number": "3.8.6",
  "title": "Summary of the Quadric Surfaces",
  "body": " Summary of the Quadric Surfaces  We collect the six surfaces of this section in . For each one the table gives its equation, a picture of the surface, and the equation and type of the cross-section cut by the planes , , and ; a cell also notes any value of for which that slice is just a point or a pair of lines. Each trace is worked out in the subsections above, beginning with and continued in the hyperboloid activity, . A printable copy of the whole table is available as a PDF .   The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.     "
},
{
  "id": "fig-quadric-summary",
  "level": "2",
  "url": "subsec-quadric-summary.html#fig-quadric-summary",
  "type": "Figure",
  "number": "3.8.19",
  "title": "",
  "body": " The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.    "
},
{
  "id": "subsec-quadric-applications",
  "level": "1",
  "url": "subsec-quadric-applications.html",
  "type": "Subsection",
  "number": "3.8.7",
  "title": "Quadric Surfaces in the World",
  "body": " Quadric Surfaces in the World  The surfaces of this section are more than abstract shapes. Each one appears in the physical world, and often it appears because of the very geometric properties we have been discovering by slicing.   Elliptical paraboloid. A paraboloid has a striking reflective property: every ray travelling parallel to its axis bounces off the surface and passes through a single point, the focus. This is why the dishes of radio telescopes and satellite receivers, and the reflectors behind car headlights and solar concentrators, are shaped like paraboloids they gather parallel incoming rays to one point, or, run in reverse, send rays out in a single parallel beam. The benefit is sensitivity: because parallel rays converge on the focus no matter where they strike the surface, enlarging the dish simply gathers more of a faint signal onto the same receiver, letting a radio telescope detect fainter and more distant objects. The National Radio Astronomy Observatory explains how a parabolic dish bounces incoming radio waves to a focus .   The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.     Hyperbolic paraboloid. The saddle is doubly ruled : through every point pass two straight lines that lie entirely on the surface, just like the flat traces the two crossing lines in the plane  that appear when we slice it in . A doubly curved roof can therefore be built out of straight beams, or poured over straight formwork, which makes the hyperbolic paraboloid both strong and inexpensive to build. It is the shape of many saddle roofs and of Félix Candela's thin concrete shells and, on a smaller scale, of a Pringles potato chip. The benefit is efficiency: a thin shell of this shape carries its load by compression and tension acting within the surface rather than by bending, so it can roof a very wide span with only a few inches of material. Encyclopaedia Britannica's article on shell structures describes how such curved roofs are engineered from straight lines.   The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.     Ellipsoid. An ellipsoid has two focal points, and a wave leaving one focus reflects off the surface straight toward the other. In a whispering gallery a whisper at one focus is heard clearly across the room at the other; in medical lithotripsy a shock wave generated at one focus is focused onto a kidney stone placed at the other, breaking it apart without surgery. On the largest scale, the Earth itself is modeled as a slightly flattened ellipsoid the reference ellipsoid against which GPS coordinates are measured. The benefit of this two-focus focusing is precision without contact: a lithotripter can concentrate its energy on a stone deep inside the body while sparing the surrounding tissue. Modeling the Earth as an ellipsoid brings a different benefit a single smooth equation captures its slight flattening, giving GPS a far more accurate reference than a sphere would. NOAA's National Geodetic Survey describes the reference ellipsoids that anchor those coordinates.   The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.     Elliptic cone. When an aircraft flies faster than sound, the pressure waves it creates pile up into a cone that trails behind it, the Mach cone. The sonic boom you hear is the instant this cone of compressed air sweeps past you. This cone is not a design choice but an unavoidable consequence of the motion; even so, its geometry is informative: the sine of its half-angle equals , where is the Mach number, so a narrower cone means a faster aircraft. NASA's Glenn Research Center describes how supersonic disturbances stay confined within this cone .   A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.     Hyperboloid of one sheet. Like the saddle, this surface is ruled  recall the two straight-line traces we found in the planes in . Because straight members can be arranged to sweep out its double curvature, it can be built cheaply from straight beams or straight formwork while remaining very stiff. This is exactly why the cooling towers of power plants, and open lattice towers such as Vladimir Shukhov's, are hyperboloids of one sheet. The benefit is that stiffness and wind resistance come almost for free: because the surface is ruled, the whole tower is assembled from straight, easily fabricated members, so it reaches great height with remarkably little material. The University of Houston's Engines of Our Ingenuity tells the story of Shukhov and these ruled towers.   A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.     Hyperboloid of two sheets. Like the ellipse, a hyperbola has two foci, and a ray aimed at one focus reflects toward the other. Reflecting telescopes of the Cassegrain and Ritchey Chrétien type including the Hubble Space Telescope use mirrors ground to hyperboloidal shapes to fold a long optical path into a short tube. The same two-focus idea drives hyperbolic navigation : comparing the arrival times of two signals places a receiver on a hyperboloid, and intersecting several such surfaces is how systems from LORAN to GPS pin down a location. The benefit is sharpness in a compact instrument: the paired hyperboloidal mirrors fold a long focal length into a short tube and cancel the aberrations that would blur a simpler design, keeping Hubble's images crisp across its whole field of view. NASA explains how these curved mirrors gather starlight in its overview of the Hubble Space Telescope's optics .   The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.    "
},
{
  "id": "subsec-quadric-applications-3",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptical paraboloid. "
},
{
  "id": "fig-app-paraboloid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-paraboloid",
  "type": "Figure",
  "number": "3.8.20",
  "title": "",
  "body": " The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.   "
},
{
  "id": "subsec-quadric-applications-5",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperbolic paraboloid. doubly ruled "
},
{
  "id": "fig-app-hyperbolic-paraboloid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperbolic-paraboloid",
  "type": "Figure",
  "number": "3.8.21",
  "title": "",
  "body": " The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.   "
},
{
  "id": "subsec-quadric-applications-7",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ellipsoid. lithotripsy "
},
{
  "id": "fig-app-ellipsoid",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-ellipsoid",
  "type": "Figure",
  "number": "3.8.22",
  "title": "",
  "body": " The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.   "
},
{
  "id": "subsec-quadric-applications-9",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptic cone. sonic boom "
},
{
  "id": "fig-app-cone",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-cone",
  "type": "Figure",
  "number": "3.8.23",
  "title": "",
  "body": " A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.   "
},
{
  "id": "subsec-quadric-applications-11",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of one sheet. ruled "
},
{
  "id": "fig-app-hyperboloid-one-sheet",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperboloid-one-sheet",
  "type": "Figure",
  "number": "3.8.24",
  "title": "",
  "body": " A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.   "
},
{
  "id": "subsec-quadric-applications-13",
  "level": "2",
  "url": "subsec-quadric-applications.html#subsec-quadric-applications-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of two sheets. hyperbolic navigation "
},
{
  "id": "fig-app-hyperboloid-two-sheets",
  "level": "2",
  "url": "subsec-quadric-applications.html#fig-app-hyperboloid-two-sheets",
  "type": "Figure",
  "number": "3.8.25",
  "title": "",
  "body": " The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.   "
},
{
  "id": "sec-fsv-functions-two-variables",
  "level": "1",
  "url": "sec-fsv-functions-two-variables.html",
  "type": "Subsection",
  "number": "4.1.1",
  "title": "Functions of Two Variables",
  "body": " Functions of Two Variables  As an example consider . This function takes a pair of real numbers as its input and as an output gives a real number . For instance, consider the point , which is inside the disk . For as an input, the output is  shows this as a mapping: each point of the disk is sent to a number on the -axis.   The function takes a point of the disk and returns the single number . The point is sent to .     bt(t) = ((1-t)^2*1.05 + 2*t*(1-t)*4.0 + t^2*7.0, (1-t)^2*1.25 + 2*t*(1-t)*3.15 + t^2*0.42)  bb(t) = ((1-t)^2*0.28 + 2*t*(1-t)*3.3 + t^2*6.55, (1-t)^2*(-0.62) + 2*t*(1-t)*(-2.05) + t^2*0.05)                x^2+y^2\\le 1   x  y  z   P_0(0.5,0.5)    P(x,y)    f(0.5,0.5)=0.5    z=f(x,y)    f    f                 If we repeat this process for all the points inside the disk, we have a set of points in 3D of the form , which represent a surface known as a paraboloid . The surface is the graph of the function, and it is drawn in . Notice that the point of the domain sits in the -plane, while the corresponding point of the graph is , directly above it.   The graph of over the disk . The point of the domain lies in the -plane and the corresponding point lies on the surface directly above it.    A dome shaped surface, the graph of z equals one minus x squared minus y squared, sitting above a shaded disk in the x y plane. A dashed vertical segment joins the point P nought in the disk to the point P on the surface directly above it.      "
},
{
  "id": "fig-fsv-mapping",
  "level": "2",
  "url": "sec-fsv-functions-two-variables.html#fig-fsv-mapping",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " The function takes a point of the disk and returns the single number . The point is sent to .     bt(t) = ((1-t)^2*1.05 + 2*t*(1-t)*4.0 + t^2*7.0, (1-t)^2*1.25 + 2*t*(1-t)*3.15 + t^2*0.42)  bb(t) = ((1-t)^2*0.28 + 2*t*(1-t)*3.3 + t^2*6.55, (1-t)^2*(-0.62) + 2*t*(1-t)*(-2.05) + t^2*0.05)                x^2+y^2\\le 1   x  y  z   P_0(0.5,0.5)    P(x,y)    f(0.5,0.5)=0.5    z=f(x,y)    f    f                "
},
{
  "id": "sec-fsv-functions-two-variables-4",
  "level": "2",
  "url": "sec-fsv-functions-two-variables.html#sec-fsv-functions-two-variables-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paraboloid graph "
},
{
  "id": "fig-fsv-paraboloid",
  "level": "2",
  "url": "sec-fsv-functions-two-variables.html#fig-fsv-paraboloid",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " The graph of over the disk . The point of the domain lies in the -plane and the corresponding point lies on the surface directly above it.    A dome shaped surface, the graph of z equals one minus x squared minus y squared, sitting above a shaded disk in the x y plane. A dashed vertical segment joins the point P nought in the disk to the point P on the surface directly above it.     "
},
{
  "id": "sec-fsv-level-curves",
  "level": "1",
  "url": "sec-fsv-level-curves.html",
  "type": "Subsection",
  "number": "4.1.2",
  "title": "Level Curves and Contour Maps",
  "body": " Level Curves and Contour Maps  Functions of two variables can be visualized by means of level curves . These are curves that connect points where the function takes on a given value . As an example, consider our previous example of . Setting gives so by each level curve is a circle centered at the origin, of radius . Taking the equally spaced values gives  shows these curves drawn on the surface itself: each one is the intersection of the graph with a horizontal plane .   Level curves of drawn on the surface at the equally spaced heights . The curve at height is the intersection of the graph with the horizontal plane ; higher values of give smaller circles.    A dome shaped surface with several horizontal circles drawn on it at different heights, each in a different colour. The circles are small near the top of the dome and grow larger further down.      From the projection of the level curves into the -plane we derive the so-called contour map (or contour plot ) of the function, as shown in . A contour map is a flat picture that still records the shape of the surface: where the contours are close together the surface is steep, and where they are far apart it is gentle.   The contour map of , obtained by projecting the level curves of down into the -plane. The contour interval is constant, ; the legend gives the value of along each circle.     c1(t) = (0.7071*cos(t), 0.7071*sin(t))  c2(t) = (1*cos(t), 1*sin(t))  c3(t) = (1.2247*cos(t), 1.2247*sin(t))  c4(t) = (1.4142*cos(t), 1.4142*sin(t))  c5(t) = (1.5811*cos(t), 1.5811*sin(t))          c=\\tfrac12  c=0  c=-\\tfrac12  c=-1  c=-\\tfrac32                  Sketching Level Curves   Sketch some level curves of the function .    Setting gives which for is an ellipse centered at the origin. For instance, for we have , which is an ellipse with and : it meets the -axis at and the -axis at . In general the level curve is the ellipse with semi-axes in the -direction and in the -direction, so the curves are stretched twice as far along the -axis as along the -axis. shows the level curves for several values of .  The surface itself is shown in . It is known as an elliptic paraboloid , since its intersections with the planes and are parabolas, whereas its intersections with the planes are ellipses.   Level curves of for the equally spaced values . Each is an ellipse twice as long in the -direction as in the -direction.     e1(t) = (0.4472*cos(t), 0.8944*sin(t))  e2(t) = (0.6325*cos(t), 1.2649*sin(t))  e3(t) = (0.7746*cos(t), 1.5492*sin(t))  e4(t) = (0.8944*cos(t), 1.7889*sin(t))  e5(t) = (1*cos(t), 2*sin(t))          c=0.2  c=0.4  c=0.6  c=0.8  c=1.0                The elliptic paraboloid . Slicing it with a horizontal plane produces the ellipses of ; the rings drawn here are at the same equally spaced heights .    A bowl shaped surface opening upwards, wider in the y direction than in the x direction, with several horizontal elliptical rings drawn on it at different heights.        "
},
{
  "id": "sec-fsv-level-curves-2",
  "level": "2",
  "url": "sec-fsv-level-curves.html#sec-fsv-level-curves-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "level curves "
},
{
  "id": "fig-fsv-level-curves-3d",
  "level": "2",
  "url": "sec-fsv-level-curves.html#fig-fsv-level-curves-3d",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " Level curves of drawn on the surface at the equally spaced heights . The curve at height is the intersection of the graph with the horizontal plane ; higher values of give smaller circles.    A dome shaped surface with several horizontal circles drawn on it at different heights, each in a different colour. The circles are small near the top of the dome and grow larger further down.     "
},
{
  "id": "sec-fsv-level-curves-4",
  "level": "2",
  "url": "sec-fsv-level-curves.html#sec-fsv-level-curves-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contour map contour plot "
},
{
  "id": "fig-fsv-contour-map",
  "level": "2",
  "url": "sec-fsv-level-curves.html#fig-fsv-contour-map",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": " The contour map of , obtained by projecting the level curves of down into the -plane. The contour interval is constant, ; the legend gives the value of along each circle.     c1(t) = (0.7071*cos(t), 0.7071*sin(t))  c2(t) = (1*cos(t), 1*sin(t))  c3(t) = (1.2247*cos(t), 1.2247*sin(t))  c4(t) = (1.4142*cos(t), 1.4142*sin(t))  c5(t) = (1.5811*cos(t), 1.5811*sin(t))          c=\\tfrac12  c=0  c=-\\tfrac12  c=-1  c=-\\tfrac32                "
},
{
  "id": "example-fsv-level-curves",
  "level": "2",
  "url": "sec-fsv-level-curves.html#example-fsv-level-curves",
  "type": "Example",
  "number": "4.1.5",
  "title": "Sketching Level Curves.",
  "body": " Sketching Level Curves   Sketch some level curves of the function .    Setting gives which for is an ellipse centered at the origin. For instance, for we have , which is an ellipse with and : it meets the -axis at and the -axis at . In general the level curve is the ellipse with semi-axes in the -direction and in the -direction, so the curves are stretched twice as far along the -axis as along the -axis. shows the level curves for several values of .  The surface itself is shown in . It is known as an elliptic paraboloid , since its intersections with the planes and are parabolas, whereas its intersections with the planes are ellipses.   Level curves of for the equally spaced values . Each is an ellipse twice as long in the -direction as in the -direction.     e1(t) = (0.4472*cos(t), 0.8944*sin(t))  e2(t) = (0.6325*cos(t), 1.2649*sin(t))  e3(t) = (0.7746*cos(t), 1.5492*sin(t))  e4(t) = (0.8944*cos(t), 1.7889*sin(t))  e5(t) = (1*cos(t), 2*sin(t))          c=0.2  c=0.4  c=0.6  c=0.8  c=1.0                The elliptic paraboloid . Slicing it with a horizontal plane produces the ellipses of ; the rings drawn here are at the same equally spaced heights .    A bowl shaped surface opening upwards, wider in the y direction than in the x direction, with several horizontal elliptical rings drawn on it at different heights.       "
},
{
  "id": "sec-fsv-level-surfaces",
  "level": "1",
  "url": "sec-fsv-level-surfaces.html",
  "type": "Subsection",
  "number": "4.1.3",
  "title": "More Than Two Variables: Level Surfaces",
  "body": " More Than Two Variables: Level Surfaces  It is not possible to draw the graph of a function of more than two variables. The graph of a function would consist of the set of points in four-dimensional space . However, it is possible to draw the level surfaces of a function of three variables . These are the surfaces with equation   For example, taking with gives the spheres with equation , drawn in for . Each sphere collects the points at which takes one fixed value; as grows the spheres grow with it. For functions of four or more variables we can no longer visualize the graph or the level surfaces, and we must rely on intuition developed through the study of functions of two and three variables.   The level surfaces of are spheres. Shown here are , , and , cut away so the inner ones are visible.    Three concentric spheres of radii one, two and three, drawn cut away so that the smaller spheres inside can be seen. Each sphere is a level surface on which the function x squared plus y squared plus z squared is constant.       Level Surfaces of a Function of Three Variables   Describe the level surfaces of .    The level surface for is which is a cone: solving for gives , a double cone with vertex at the origin.  For , the level surfaces are the hyperboloids The hyperboloid has one sheet if , since then is satisfied for every value of , and the surface is connected. It has two sheets if , since then forces , so no point of the surface lies in the slab between the two sheets. The three cases are drawn in .   Level surfaces of . For the surface is a hyperboloid of one sheet, for it is a cone, and for it is a hyperboloid of two sheets.    Three surfaces side by side. On the left a hyperboloid of one sheet, a connected surface pinched in at the middle like a cooling tower. In the middle a double cone meeting at a point at the origin. On the right a hyperboloid of two sheets, consisting of two separate bowls, one opening upwards above the origin and one opening downwards below it.       The same three cases, animated. As passes through zero the hyperboloid of two sheets closes up into the cone and then opens out into the hyperboloid of one sheet.      "
},
{
  "id": "sec-fsv-level-surfaces-2",
  "level": "2",
  "url": "sec-fsv-level-surfaces.html#sec-fsv-level-surfaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "level surfaces "
},
{
  "id": "fig-fsv-level-spheres",
  "level": "2",
  "url": "sec-fsv-level-surfaces.html#fig-fsv-level-spheres",
  "type": "Figure",
  "number": "4.1.8",
  "title": "",
  "body": " The level surfaces of are spheres. Shown here are , , and , cut away so the inner ones are visible.    Three concentric spheres of radii one, two and three, drawn cut away so that the smaller spheres inside can be seen. Each sphere is a level surface on which the function x squared plus y squared plus z squared is constant.     "
},
{
  "id": "example-fsv-level-surfaces",
  "level": "2",
  "url": "sec-fsv-level-surfaces.html#example-fsv-level-surfaces",
  "type": "Example",
  "number": "4.1.9",
  "title": "Level Surfaces of a Function of Three Variables.",
  "body": " Level Surfaces of a Function of Three Variables   Describe the level surfaces of .    The level surface for is which is a cone: solving for gives , a double cone with vertex at the origin.  For , the level surfaces are the hyperboloids The hyperboloid has one sheet if , since then is satisfied for every value of , and the surface is connected. It has two sheets if , since then forces , so no point of the surface lies in the slab between the two sheets. The three cases are drawn in .   Level surfaces of . For the surface is a hyperboloid of one sheet, for it is a cone, and for it is a hyperboloid of two sheets.    Three surfaces side by side. On the left a hyperboloid of one sheet, a connected surface pinched in at the middle like a cooling tower. In the middle a double cone meeting at a point at the origin. On the right a hyperboloid of two sheets, consisting of two separate bowls, one opening upwards above the origin and one opening downwards below it.       The same three cases, animated. As passes through zero the hyperboloid of two sheets closes up into the cone and then opens out into the hyperboloid of one sheet.     "
},
{
  "id": "sec-lim-two-variable",
  "level": "1",
  "url": "sec-lim-two-variable.html",
  "type": "Subsection",
  "number": "4.2.1",
  "title": "Limits of Two-Variable Functions",
  "body": " Limits of Two-Variable Functions  For , we could ask what value the function approaches when approaches , and there were two possible directions (from the left and from the right) to approach , which we denoted by and . If , then .   For there are only two ways to approach : from the left and from the right. When both one-sided limits agree, their common value is .     f(x) = 1.8 + 0.42*(x-2.2) - 0.18*(x-2.2)^2  curve(t) = (t, f(t))   left(t) = (2.2 - 1.05*(1-t), f(2.2 - 1.05*(1-t)))  right(t) = (2.2 + 1.15*(1-t), f(2.2 + 1.15*(1-t)))   xleft(t) = (1.15 + 0.93*t, 0)  xright(t) = (3.35 - 1.03*t, 0)             f(x) \\to L    f(x) \\to L    x \\to a^-    x \\to a^+   a  L   y=f(x)                  In two variables the situation is richer, because there are infinitely many directions, and indeed infinitely many curved paths, along which a point can approach . This section makes that precise and develops the tools for computing such limits, and for showing that a limit fails to exist.  Consider the function that we studied in the previous section. Below are some key points regarding the limit of such a function.   I. There are infinitely many ways of approaching a point . A few such paths are drawn in green in .   A few of the infinitely many paths along which a point can approach . The paths may be straight lines or curves, and they may arrive from any direction.      p1(t) = (1.55 + 0.38*(1-t)*sin(4*(1-t)), 1.0 + 1.65*(1-t))  p2(t) = (1.55 - 1.45*(1-t), 1.0 + 0.85*(1-t)^2)  p3(t) = (1.55 + 1.85*(1-t), 1.0 + 0.80*(1-t)^2)  p4(t) = (1.55 + 1.55*(1-t) - 0.30*(1-t)^2, 1.0 - 0.95*(1-t))            (a,b)    a    b                  II. The limit exists if, regardless of the path taken to approach the point , the value of the function approaches the same value.   III. To show that does not exist, it suffices to show that the value of the function approaches two different values for two different paths taken to move towards .   IV. Some useful properties of limits are stated in .   Properties of Limits   The following rules hold if , , and are real numbers and    1. Sum Rule:     2. Difference Rule:     3. Product Rule:     4. Constant Multiple Rule:  for any number    5. Quotient Rule:  , provided    6. Power Rule: If and are integers with no common factors and , then , provided is a real number. (If is even, we assume that .)     Evaluating a Limit by Direct Substitution   Evaluate     Note that we can use the direct substitution property to write Then we use the sum rule to write      A Limit That Does Not Exist   Consider the function . Does exist?    We begin by approaching the point along the line . Note that along the line , we have and hence Similarly,   Let us next see what happens when approaching the point along the line . We have and hence   As was shown above and is depicted in , when approaching along different paths the function's value approaches different values: zero along and , and along . Therefore we can conclude that the limit does not exist.   Three paths of approach to the origin for . The function is constantly along the two axes and constantly along the line , so no single value is approached and the limit does not exist.     diag(t) = (t, t)         y=x    f=\\tfrac12    f=0    f=0   x  y                puts the same three paths on the surface itself. Click a path on the floor of the figure — or the matching button beneath it — and the piece of the surface above that path is drawn in. The surface is built so that its height depends only on the direction of approach, which is why each lifted path is a level line: whichever of the three you follow in, the height you arrive at is the one your path started with.   The three paths of , lifted onto the surface . Choosing or lifts to a path at height , while lifts to one at height , so the two approaches deliver two different numbers and the limit cannot exist.        Evaluating a Limit by Simplifying   Evaluate     We begin by simplifying the fraction. The numerator is and the denominator factors as , so The cancellation is legitimate because along the approach, and the final limit is evaluated by direct substitution, giving .    "
},
{
  "id": "fig-lim-one-variable",
  "level": "2",
  "url": "sec-lim-two-variable.html#fig-lim-one-variable",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " For there are only two ways to approach : from the left and from the right. When both one-sided limits agree, their common value is .     f(x) = 1.8 + 0.42*(x-2.2) - 0.18*(x-2.2)^2  curve(t) = (t, f(t))   left(t) = (2.2 - 1.05*(1-t), f(2.2 - 1.05*(1-t)))  right(t) = (2.2 + 1.15*(1-t), f(2.2 + 1.15*(1-t)))   xleft(t) = (1.15 + 0.93*t, 0)  xright(t) = (3.35 - 1.03*t, 0)             f(x) \\to L    f(x) \\to L    x \\to a^-    x \\to a^+   a  L   y=f(x)                 "
},
{
  "id": "fig-lim-paths",
  "level": "2",
  "url": "sec-lim-two-variable.html#fig-lim-paths",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " A few of the infinitely many paths along which a point can approach . The paths may be straight lines or curves, and they may arrive from any direction.      p1(t) = (1.55 + 0.38*(1-t)*sin(4*(1-t)), 1.0 + 1.65*(1-t))  p2(t) = (1.55 - 1.45*(1-t), 1.0 + 0.85*(1-t)^2)  p3(t) = (1.55 + 1.85*(1-t), 1.0 + 0.80*(1-t)^2)  p4(t) = (1.55 + 1.55*(1-t) - 0.30*(1-t)^2, 1.0 - 0.95*(1-t))            (a,b)    a    b                "
},
{
  "id": "thm-lim-properties",
  "level": "2",
  "url": "sec-lim-two-variable.html#thm-lim-properties",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "Properties of Limits.",
  "body": " Properties of Limits   The following rules hold if , , and are real numbers and    1. Sum Rule:     2. Difference Rule:     3. Product Rule:     4. Constant Multiple Rule:  for any number    5. Quotient Rule:  , provided    6. Power Rule: If and are integers with no common factors and , then , provided is a real number. (If is even, we assume that .)   "
},
{
  "id": "example-lim-substitution",
  "level": "2",
  "url": "sec-lim-two-variable.html#example-lim-substitution",
  "type": "Example",
  "number": "4.2.4",
  "title": "Evaluating a Limit by Direct Substitution.",
  "body": " Evaluating a Limit by Direct Substitution   Evaluate     Note that we can use the direct substitution property to write Then we use the sum rule to write    "
},
{
  "id": "example-lim-dne",
  "level": "2",
  "url": "sec-lim-two-variable.html#example-lim-dne",
  "type": "Example",
  "number": "4.2.5",
  "title": "A Limit That Does Not Exist.",
  "body": " A Limit That Does Not Exist   Consider the function . Does exist?    We begin by approaching the point along the line . Note that along the line , we have and hence Similarly,   Let us next see what happens when approaching the point along the line . We have and hence   As was shown above and is depicted in , when approaching along different paths the function's value approaches different values: zero along and , and along . Therefore we can conclude that the limit does not exist.   Three paths of approach to the origin for . The function is constantly along the two axes and constantly along the line , so no single value is approached and the limit does not exist.     diag(t) = (t, t)         y=x    f=\\tfrac12    f=0    f=0   x  y                puts the same three paths on the surface itself. Click a path on the floor of the figure — or the matching button beneath it — and the piece of the surface above that path is drawn in. The surface is built so that its height depends only on the direction of approach, which is why each lifted path is a level line: whichever of the three you follow in, the height you arrive at is the one your path started with.   The three paths of , lifted onto the surface . Choosing or lifts to a path at height , while lifts to one at height , so the two approaches deliver two different numbers and the limit cannot exist.      "
},
{
  "id": "example-lim-simplify",
  "level": "2",
  "url": "sec-lim-two-variable.html#example-lim-simplify",
  "type": "Example",
  "number": "4.2.8",
  "title": "Evaluating a Limit by Simplifying.",
  "body": " Evaluating a Limit by Simplifying   Evaluate     We begin by simplifying the fraction. The numerator is and the denominator factors as , so The cancellation is legitimate because along the approach, and the final limit is evaluated by direct substitution, giving .   "
},
{
  "id": "sec-lim-continuity",
  "level": "1",
  "url": "sec-lim-continuity.html",
  "type": "Subsection",
  "number": "4.2.2",
  "title": "Continuity",
  "body": " Continuity   Continuity at a Point and on the Domain   A function is continuous at the point  if   1.  is defined at ,   2.  exists,   3.  .  A function is continuous if it is continuous at every point of its domain.     Continuity Everywhere Except at the Origin   Show that the function is continuous everywhere except at .    The function is continuous at any point . This is because, at such points, it is a rational function whose denominator is non-zero, and therefore, using the quotient rule of , the limit of is equal to the value of .  To show that is discontinuous at , we will show that its limit does not exist at this point. Let us first consider the limiting behavior of along . Since along such a line we have , we can say that Next we consider the limiting behavior of along . Since along such a line we have , we can say that From and , we conclude that does not exist, and hence the function is discontinuous at .     A Discontinuity Detected by a Curved Path   Show that the function is discontinuous at .    To show that is discontinuous at , we will show that its limit does not exist at this point.  Let us first consider the limiting behavior of along , where . Since along such a line we have , which simplifies to , we can say that Notice that this holds for every slope : approaching along any straight line gives the limit .  Next, we consider the limiting behavior of along the curve , which gives , and we can say that From and , we conclude that does not exist and hence the function is discontinuous at .  This example is worth pausing over: checking every straight line through the origin is not enough to establish that a limit exists. shows the family of straight paths together with the parabola that detects the discontinuity.   Every straight line through the origin gives the limit , but along the parabola the function is constantly . A limit must agree along all paths, not merely all straight ones.     par(t) = (t^2, t)             x=y^2:\\; f=\\tfrac12    y=mx:\\; f\\to 0   x  y               Alternative method. Alternatively, we can show that as along the curve , and since , we can conclude that the function is not continuous at the origin by condition 3 of : even if the limit existed, it would have to equal .    "
},
{
  "id": "def-continuity-two-variables",
  "level": "2",
  "url": "sec-lim-continuity.html#def-continuity-two-variables",
  "type": "Definition",
  "number": "4.2.9",
  "title": "Continuity at a Point and on the Domain.",
  "body": " Continuity at a Point and on the Domain   A function is continuous at the point  if   1.  is defined at ,   2.  exists,   3.  .  A function is continuous if it is continuous at every point of its domain.   "
},
{
  "id": "example-cont-2xy",
  "level": "2",
  "url": "sec-lim-continuity.html#example-cont-2xy",
  "type": "Example",
  "number": "4.2.10",
  "title": "Continuity Everywhere Except at the Origin.",
  "body": " Continuity Everywhere Except at the Origin   Show that the function is continuous everywhere except at .    The function is continuous at any point . This is because, at such points, it is a rational function whose denominator is non-zero, and therefore, using the quotient rule of , the limit of is equal to the value of .  To show that is discontinuous at , we will show that its limit does not exist at this point. Let us first consider the limiting behavior of along . Since along such a line we have , we can say that Next we consider the limiting behavior of along . Since along such a line we have , we can say that From and , we conclude that does not exist, and hence the function is discontinuous at .   "
},
{
  "id": "example-cont-xy2",
  "level": "2",
  "url": "sec-lim-continuity.html#example-cont-xy2",
  "type": "Example",
  "number": "4.2.11",
  "title": "A Discontinuity Detected by a Curved Path.",
  "body": " A Discontinuity Detected by a Curved Path   Show that the function is discontinuous at .    To show that is discontinuous at , we will show that its limit does not exist at this point.  Let us first consider the limiting behavior of along , where . Since along such a line we have , which simplifies to , we can say that Notice that this holds for every slope : approaching along any straight line gives the limit .  Next, we consider the limiting behavior of along the curve , which gives , and we can say that From and , we conclude that does not exist and hence the function is discontinuous at .  This example is worth pausing over: checking every straight line through the origin is not enough to establish that a limit exists. shows the family of straight paths together with the parabola that detects the discontinuity.   Every straight line through the origin gives the limit , but along the parabola the function is constantly . A limit must agree along all paths, not merely all straight ones.     par(t) = (t^2, t)             x=y^2:\\; f=\\tfrac12    y=mx:\\; f\\to 0   x  y               Alternative method. Alternatively, we can show that as along the curve , and since , we can conclude that the function is not continuous at the origin by condition 3 of : even if the limit existed, it would have to equal .   "
},
{
  "id": "sec-pd-definition",
  "level": "1",
  "url": "sec-pd-definition.html",
  "type": "Subsection",
  "number": "4.3.1",
  "title": "Definition of Partial Derivatives",
  "body": " Definition of Partial Derivatives  Consider the point on the surface .  The slope of the tangent line in the plane at the point to the curve can be computed by keeping the fixed at the value , changing to , and taking the limit of . This is known as the partial derivative of with respect to and is defined as  shows this curve and its tangent line.   The curve cut from the surface by the vertical plane , and its tangent line at . The slope of that tangent line is .    A grey surface with a green curve drawn on it through a magenta point P. The curve is the trace of the surface in the plane y equals y nought, and a blue tangent line touches it at P. A legend in the top left corner names the surface, the curve, the tangent line and the point P.      The slope of the tangent line in the plane at the point to the curve can be computed by keeping the fixed at the value , changing to , and taking the limit of . This is known as the partial derivative of with respect to and is defined as  shows the matching picture in the plane .   The curve cut from the surface by the vertical plane , and its tangent line at . The slope of that tangent line is .    A grey surface with an amber curve drawn on it through a magenta point P. The curve is the trace of the surface in the plane x equals x nought, and a dark red tangent line touches it at P. A legend in the top left corner names the surface, the curve, the tangent line and the point P.       builds both pictures up one piece at a time: the surface on its own, then the plane slicing it, the parabola that slice cuts out, and the tangent line to that parabola at , whose slope is . The surface then returns on its own and the same three steps are repeated in the plane , giving , and the video closes with both traces and both tangent lines in place.   The two partial derivatives at , built one at a time: the cut by with its green parabola and blue tangent line of slope , then the cut by with its amber parabola and red tangent line of slope , and finally the two together.    To calculate the partial derivative of with respect to , we treat as a constant and differentiate normally with respect to , i.e. Similarly, to calculate the partial derivative of with respect to , we treat as a constant and differentiate normally with respect to , i.e.   Here are some common notations for the partial derivative with respect to : Note that similar notation can be used for the partial derivative with respect to any variable such as and .  "
},
{
  "id": "sec-pd-definition-3",
  "level": "2",
  "url": "sec-pd-definition.html#sec-pd-definition-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative of with respect to "
},
{
  "id": "fig-pd-tangent-x",
  "level": "2",
  "url": "sec-pd-definition.html#fig-pd-tangent-x",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " The curve cut from the surface by the vertical plane , and its tangent line at . The slope of that tangent line is .    A grey surface with a green curve drawn on it through a magenta point P. The curve is the trace of the surface in the plane y equals y nought, and a blue tangent line touches it at P. A legend in the top left corner names the surface, the curve, the tangent line and the point P.     "
},
{
  "id": "sec-pd-definition-5",
  "level": "2",
  "url": "sec-pd-definition.html#sec-pd-definition-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative of with respect to "
},
{
  "id": "fig-pd-tangent-y",
  "level": "2",
  "url": "sec-pd-definition.html#fig-pd-tangent-y",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " The curve cut from the surface by the vertical plane , and its tangent line at . The slope of that tangent line is .    A grey surface with an amber curve drawn on it through a magenta point P. The curve is the trace of the surface in the plane x equals x nought, and a dark red tangent line touches it at P. A legend in the top left corner names the surface, the curve, the tangent line and the point P.     "
},
{
  "id": "fig-pd-two-tangents-video",
  "level": "2",
  "url": "sec-pd-definition.html#fig-pd-two-tangents-video",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " The two partial derivatives at , built one at a time: the cut by with its green parabola and blue tangent line of slope , then the cut by with its amber parabola and red tangent line of slope , and finally the two together.   "
},
{
  "id": "sec-pd-examples",
  "level": "1",
  "url": "sec-pd-examples.html",
  "type": "Subsection",
  "number": "4.3.2",
  "title": "Examples",
  "body": " Examples   Partial Derivatives of   Consider the function and evaluate the following partial derivatives at the point .         A. We first work straight from the definition , which freezes at and moves from to . The numerator of the difference quotient is so that    B. The definition works the same way, this time freezing at and moving from to : and therefore    The shortcut. Neither limit had to be computed. By , treating as a constant gives , and by , treating as a constant gives . Evaluating at , which is what the two limits above gave.     A Quotient with a Trigonometric Term   Consider the function and evaluate the following partial derivatives at the point .         A. Treating as a constant, we have and therefore .   B. Treating as a constant, we have and therefore .     Partial Derivatives as Slopes on a Surface   Consider the elliptic paraboloid . Evaluate and and explain what these numbers represent.    We compute , so Note that the intersection of the surface and the plane is the parabola , and is the slope of the tangent line to the curve located in the plane. This is the curve in .   The trace cut from by the plane is the parabola . Its tangent line at has slope .    A tall dome shaped surface cut by the vertical plane y equals one. The curve of intersection is drawn in dark blue and labelled C one, and a magenta tangent line touches it at the point 1, 1, 1. A two-line legend across the top names the surface, the cutting plane, the curve, the tangent line and the point.      Similarly, , so The intersection of the surface and the plane is the parabola , and is the slope of the tangent line to that curve, located in the plane. This is the curve in . The tangent line is steeper than the one in , which matches .   The trace cut from by the plane is the parabola . Its tangent line at has slope .    The same dome shaped surface, now cut by the vertical plane x equals one. The curve of intersection is drawn in dark blue and labelled C two, and a magenta tangent line touches it at the point 1, 1, 1. This tangent line is noticeably steeper than the one in the previous figure. A two-line legend across the top names the surface, the cutting plane, the curve, the tangent line and the point.       puts the two slices in one picture that you can cut open yourself: choose a plane, watch the parabola it leaves on the dome, and see the tangent line to that parabola appear at . Showing both at once makes the comparison the numbers already report — that the surface falls away twice as fast in the direction as it does in the direction.    and , to cut open. The slice leaves the parabola with tangent slope at ; the slice leaves with tangent slope .      "
},
{
  "id": "example-pd-paraboloid",
  "level": "2",
  "url": "sec-pd-examples.html#example-pd-paraboloid",
  "type": "Example",
  "number": "4.3.4",
  "title": "Partial Derivatives of <span class=\"process-math\">\\(1-x^2-y^2\\)<\/span>.",
  "body": " Partial Derivatives of   Consider the function and evaluate the following partial derivatives at the point .         A. We first work straight from the definition , which freezes at and moves from to . The numerator of the difference quotient is so that    B. The definition works the same way, this time freezing at and moving from to : and therefore    The shortcut. Neither limit had to be computed. By , treating as a constant gives , and by , treating as a constant gives . Evaluating at , which is what the two limits above gave.   "
},
{
  "id": "example-pd-quotient",
  "level": "2",
  "url": "sec-pd-examples.html#example-pd-quotient",
  "type": "Example",
  "number": "4.3.5",
  "title": "A Quotient with a Trigonometric Term.",
  "body": " A Quotient with a Trigonometric Term   Consider the function and evaluate the following partial derivatives at the point .         A. Treating as a constant, we have and therefore .   B. Treating as a constant, we have and therefore .   "
},
{
  "id": "example-pd-elliptic",
  "level": "2",
  "url": "sec-pd-examples.html#example-pd-elliptic",
  "type": "Example",
  "number": "4.3.6",
  "title": "Partial Derivatives as Slopes on a Surface.",
  "body": " Partial Derivatives as Slopes on a Surface   Consider the elliptic paraboloid . Evaluate and and explain what these numbers represent.    We compute , so Note that the intersection of the surface and the plane is the parabola , and is the slope of the tangent line to the curve located in the plane. This is the curve in .   The trace cut from by the plane is the parabola . Its tangent line at has slope .    A tall dome shaped surface cut by the vertical plane y equals one. The curve of intersection is drawn in dark blue and labelled C one, and a magenta tangent line touches it at the point 1, 1, 1. A two-line legend across the top names the surface, the cutting plane, the curve, the tangent line and the point.      Similarly, , so The intersection of the surface and the plane is the parabola , and is the slope of the tangent line to that curve, located in the plane. This is the curve in . The tangent line is steeper than the one in , which matches .   The trace cut from by the plane is the parabola . Its tangent line at has slope .    The same dome shaped surface, now cut by the vertical plane x equals one. The curve of intersection is drawn in dark blue and labelled C two, and a magenta tangent line touches it at the point 1, 1, 1. This tangent line is noticeably steeper than the one in the previous figure. A two-line legend across the top names the surface, the cutting plane, the curve, the tangent line and the point.       puts the two slices in one picture that you can cut open yourself: choose a plane, watch the parabola it leaves on the dome, and see the tangent line to that parabola appear at . Showing both at once makes the comparison the numbers already report — that the surface falls away twice as fast in the direction as it does in the direction.    and , to cut open. The slice leaves the parabola with tangent slope at ; the slice leaves with tangent slope .     "
},
{
  "id": "sec-pd-second-derivatives",
  "level": "1",
  "url": "sec-pd-second-derivatives.html",
  "type": "Subsection",
  "number": "4.3.3",
  "title": "Second Derivatives and the Mixed Derivative Theorem",
  "body": " Second Derivatives and the Mixed Derivative Theorem  We also define second derivatives such as by which we mean that we first differentiate with respect to and then with respect to . We can alternatively denote such a second derivative by . Likewise means that we differentiate with respect to twice, and we can alternatively denote such a second derivative by .   Computing Second Partial Derivatives   Consider the function and evaluate the following partial derivatives.          A.     B.     C.       The Mixed Derivative Theorem (Clairaut's Theorem)   If and its partial derivatives , , , and are defined throughout an open region containing a point and are all continuous at , then     Why should the order of differentiation not matter? The animation below gives the geometric reason, and no computation with derivative rules is involved. Start at a point , step by in the -direction and by in the -direction, and look at the four heights of the surface above the corners of the resulting rectangle. The rises along the two edges in the -direction are approximately and , so their difference measures how changes as increases: it is approximately . Grouping the same four heights by the two edges in the -direction instead measures how changes as increases, which is approximately . But both groupings expand to exactly the same number, in which each corner height appears with a sign on one diagonal and a sign on the other, a pattern that treats and identically. So the two mixed partials approximate the same quantity , and letting forces .   Why : the four heights of the surface over the corners of a small rectangle with sides and . Differencing along the two -edges (green, with blue rises) gives approximately ; differencing along the two -edges (amber, with red rises) gives approximately . Both are the same four-corner sum , so shrinking the rectangle to the point gives .    Consider again from . We computed and , and if you compare the two results, you can see that the order of differentiation does not matter, which clearly follows from the mixed derivative theorem.  The practical value of is that we may choose whichever order makes the computation easier, as the next example shows.   Choosing the Convenient Order   Consider and calculate .    We notice that the mixed derivative theorem applies, so , and that it is faster to compute . The reason is that differentiating with respect to first annihilates the entire second term, which depends on alone and is unpleasant to differentiate: Hence     "
},
{
  "id": "example-pd-second",
  "level": "2",
  "url": "sec-pd-second-derivatives.html#example-pd-second",
  "type": "Example",
  "number": "4.3.10",
  "title": "Computing Second Partial Derivatives.",
  "body": " Computing Second Partial Derivatives   Consider the function and evaluate the following partial derivatives.          A.     B.     C.     "
},
{
  "id": "thm-mixed-derivative",
  "level": "2",
  "url": "sec-pd-second-derivatives.html#thm-mixed-derivative",
  "type": "Theorem",
  "number": "4.3.11",
  "title": "The Mixed Derivative Theorem (Clairaut’s Theorem).",
  "body": " The Mixed Derivative Theorem (Clairaut's Theorem)   If and its partial derivatives , , , and are defined throughout an open region containing a point and are all continuous at , then    "
},
{
  "id": "fig-pd-mixed-commute-video",
  "level": "2",
  "url": "sec-pd-second-derivatives.html#fig-pd-mixed-commute-video",
  "type": "Figure",
  "number": "4.3.12",
  "title": "",
  "body": " Why : the four heights of the surface over the corners of a small rectangle with sides and . Differencing along the two -edges (green, with blue rises) gives approximately ; differencing along the two -edges (amber, with red rises) gives approximately . Both are the same four-corner sum , so shrinking the rectangle to the point gives .   "
},
{
  "id": "example-pd-mixed-shortcut",
  "level": "2",
  "url": "sec-pd-second-derivatives.html#example-pd-mixed-shortcut",
  "type": "Example",
  "number": "4.3.13",
  "title": "Choosing the Convenient Order.",
  "body": " Choosing the Convenient Order   Consider and calculate .    We notice that the mixed derivative theorem applies, so , and that it is faster to compute . The reason is that differentiating with respect to first annihilates the entire second term, which depends on alone and is unpleasant to differentiate: Hence    "
},
{
  "id": "sec-cr-one-independent",
  "level": "1",
  "url": "sec-cr-one-independent.html",
  "type": "Subsection",
  "number": "4.4.1",
  "title": "One Independent Variable",
  "body": " One Independent Variable   Chain Rule for Functions of Two Independent Variables   Consider the two-variable function . If the following conditions are satisfied:   1.  has continuous partial derivatives and ,   2.  and are differentiable functions of ,  then the function is a differentiable function of and      provides an easy way to remember the chain rule. Note that is the dependent variable since it depends on and , and and are known as the intermediate variables , whereas is the independent variable . To use the diagram, read every path from down to , multiply the derivatives along each path, and add the results.   Tree diagram for . There are two paths from down to , one through and one through , and the chain rule adds one term for each.               w=f(x,y)    x    y    t    \\frac{\\partial f}{\\partial x}    \\frac{\\partial f}{\\partial y}    \\frac{dx}{dt}    \\frac{dy}{dt}                   Chain Rule for Functions of Three Independent Variables   Consider the three-variable function . If the following conditions are satisfied:   1.  has continuous partial derivatives , , and ,   2.  , , and are differentiable functions of ,  then the function is a differentiable function of and     Again the tree diagram of provides an easy way to remember the chain rule: now there are three paths from down to , so the formula has three terms.   Tree diagram for . Each of the three intermediate variables contributes one term to .                  w=f(x,y,z)    x    y    z    t    \\frac{\\partial f}{\\partial x}    \\frac{\\partial f}{\\partial y}    \\frac{\\partial f}{\\partial z}    \\frac{dx}{dt}    \\frac{dy}{dt}    \\frac{dz}{dt}                Differentiating Along a Circle   Consider the function , where and . Evaluate .     Method 1: using the chain rule. By , and therefore    Method 2: without using the chain rule. We can substitute first and then differentiate: so again Note that the two results agree with each other.  Geometrically, the constraint , confines the point to the unit circle , so the composition traces a curve on the saddle , as shown in . The derivative is the rate at which the height of that curve changes.   The curve traced on the surface as runs around the unit circle . Marked are the points at , , and .    A saddle shaped surface, the graph of z equals x y, shaded blue where it dips below the x y plane and gold where it rises above it. A closed green curve is drawn on the surface, lying above the unit circle in the x y plane, which is drawn in dark purple. Three points on the curve are marked in magenta, red and black, corresponding to t equals zero, t equals pi over four, and t equals pi over two. A legend above the axes names the surface, the circle, the curve and the three marked points.       sets that picture moving. As runs from to the point travels once round the circle while the curve above it climbs and falls twice, and the readout carries both the height and the rate the chain rule predicts. At that rate reads , the answer computed above.    , set moving. Send the point round the circle with the slider, or jump to , and : the legend gives the height of the curve and the rate at which that height is changing, which is the number the chain rule computes.       A Second Application of the Chain Rule   Consider the function , where and . Evaluate .    By , with and , At we have and , so the surviving terms are and , giving     "
},
{
  "id": "thm-chain-rule-two-intermediate",
  "level": "2",
  "url": "sec-cr-one-independent.html#thm-chain-rule-two-intermediate",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "Chain Rule for Functions of Two Independent Variables.",
  "body": " Chain Rule for Functions of Two Independent Variables   Consider the two-variable function . If the following conditions are satisfied:   1.  has continuous partial derivatives and ,   2.  and are differentiable functions of ,  then the function is a differentiable function of and    "
},
{
  "id": "sec-cr-one-independent-3",
  "level": "2",
  "url": "sec-cr-one-independent.html#sec-cr-one-independent-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable intermediate variables independent variable "
},
{
  "id": "fig-cr-tree-two",
  "level": "2",
  "url": "sec-cr-one-independent.html#fig-cr-tree-two",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Tree diagram for . There are two paths from down to , one through and one through , and the chain rule adds one term for each.               w=f(x,y)    x    y    t    \\frac{\\partial f}{\\partial x}    \\frac{\\partial f}{\\partial y}    \\frac{dx}{dt}    \\frac{dy}{dt}                 "
},
{
  "id": "thm-chain-rule-three-intermediate",
  "level": "2",
  "url": "sec-cr-one-independent.html#thm-chain-rule-three-intermediate",
  "type": "Theorem",
  "number": "4.4.3",
  "title": "Chain Rule for Functions of Three Independent Variables.",
  "body": " Chain Rule for Functions of Three Independent Variables   Consider the three-variable function . If the following conditions are satisfied:   1.  has continuous partial derivatives , , and ,   2.  , , and are differentiable functions of ,  then the function is a differentiable function of and    "
},
{
  "id": "fig-cr-tree-three",
  "level": "2",
  "url": "sec-cr-one-independent.html#fig-cr-tree-three",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " Tree diagram for . Each of the three intermediate variables contributes one term to .                  w=f(x,y,z)    x    y    z    t    \\frac{\\partial f}{\\partial x}    \\frac{\\partial f}{\\partial y}    \\frac{\\partial f}{\\partial z}    \\frac{dx}{dt}    \\frac{dy}{dt}    \\frac{dz}{dt}              "
},
{
  "id": "example-cr-xy-circle",
  "level": "2",
  "url": "sec-cr-one-independent.html#example-cr-xy-circle",
  "type": "Example",
  "number": "4.4.5",
  "title": "Differentiating Along a Circle.",
  "body": " Differentiating Along a Circle   Consider the function , where and . Evaluate .     Method 1: using the chain rule. By , and therefore    Method 2: without using the chain rule. We can substitute first and then differentiate: so again Note that the two results agree with each other.  Geometrically, the constraint , confines the point to the unit circle , so the composition traces a curve on the saddle , as shown in . The derivative is the rate at which the height of that curve changes.   The curve traced on the surface as runs around the unit circle . Marked are the points at , , and .    A saddle shaped surface, the graph of z equals x y, shaded blue where it dips below the x y plane and gold where it rises above it. A closed green curve is drawn on the surface, lying above the unit circle in the x y plane, which is drawn in dark purple. Three points on the curve are marked in magenta, red and black, corresponding to t equals zero, t equals pi over four, and t equals pi over two. A legend above the axes names the surface, the circle, the curve and the three marked points.       sets that picture moving. As runs from to the point travels once round the circle while the curve above it climbs and falls twice, and the readout carries both the height and the rate the chain rule predicts. At that rate reads , the answer computed above.    , set moving. Send the point round the circle with the slider, or jump to , and : the legend gives the height of the curve and the rate at which that height is changing, which is the number the chain rule computes.     "
},
{
  "id": "example-cr-second",
  "level": "2",
  "url": "sec-cr-one-independent.html#example-cr-second",
  "type": "Example",
  "number": "4.4.8",
  "title": "A Second Application of the Chain Rule.",
  "body": " A Second Application of the Chain Rule   Consider the function , where and . Evaluate .    By , with and , At we have and , so the surviving terms are and , giving    "
},
{
  "id": "sec-cr-two-independent",
  "level": "1",
  "url": "sec-cr-two-independent.html",
  "type": "Subsection",
  "number": "4.4.2",
  "title": "Two Independent Variables",
  "body": " Two Independent Variables   Chain Rule for Two Independent and Two Intermediate Variables   Consider the two-variable function . If , , and are differentiable functions, then the partial derivatives of the function are given by     The tree diagram now has two variables at the bottom, so we read it once for and once for , as shown in . In each case we follow only the branches leading down to the variable we are differentiating with respect to.   Two readings of the same tree for two independent variables. On the left, the branches leading to give ; on the right, the branches leading to give .                  w=f(x,y)  x  y  r  s   \\frac{\\partial w}{\\partial r}=\\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r}+\\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r}               w=f(x,y)  x  y  r  s   \\frac{\\partial w}{\\partial s}=\\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial s}+\\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial s}                Two Independent Variables   Consider the function , where and , and evaluate and .    Here the independent variables are and . We have and , together with , , , and . By , and     "
},
{
  "id": "thm-chain-rule-rs",
  "level": "2",
  "url": "sec-cr-two-independent.html#thm-chain-rule-rs",
  "type": "Theorem",
  "number": "4.4.9",
  "title": "Chain Rule for Two Independent and Two Intermediate Variables.",
  "body": " Chain Rule for Two Independent and Two Intermediate Variables   Consider the two-variable function . If , , and are differentiable functions, then the partial derivatives of the function are given by    "
},
{
  "id": "fig-cr-tree-rs",
  "level": "2",
  "url": "sec-cr-two-independent.html#fig-cr-tree-rs",
  "type": "Figure",
  "number": "4.4.10",
  "title": "",
  "body": " Two readings of the same tree for two independent variables. On the left, the branches leading to give ; on the right, the branches leading to give .                  w=f(x,y)  x  y  r  s   \\frac{\\partial w}{\\partial r}=\\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r}+\\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r}               w=f(x,y)  x  y  r  s   \\frac{\\partial w}{\\partial s}=\\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial s}+\\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial s}              "
},
{
  "id": "example-cr-exp-sin",
  "level": "2",
  "url": "sec-cr-two-independent.html#example-cr-exp-sin",
  "type": "Example",
  "number": "4.4.11",
  "title": "Two Independent Variables.",
  "body": " Two Independent Variables   Consider the function , where and , and evaluate and .    Here the independent variables are and . We have and , together with , , , and . By , and    "
},
{
  "id": "sec-cr-applications",
  "level": "1",
  "url": "sec-cr-applications.html",
  "type": "Subsection",
  "number": "4.4.3",
  "title": "More Examples",
  "body": " More Examples   The Temperature Experienced by a Moving Ant   Suppose that the temperature on a metal plate is given by the function with where the temperature is measured in degrees Fahrenheit and and are each measured in feet. Now suppose that an ant is walking on the metal plate in such a way that it walks in a straight line from the point to the point .   Find parametric equations for the ant's coordinates as it walks the line from to .    What can you say about and for every value of ?    Determine the instantaneous rate of change in temperature with respect to that the ant is experiencing at the moment it is halfway from to , using your parametric equations for and . Include units on your answer.        a. The slope of the line is so the line is . Choosing , that is , gives At the ant is at and at it is at , as required.   b. Differentiating , for every value of . Both are constant, which reflects the fact that the ant walks along a straight line at a steady rate.   c. The tree diagram for this composition is the one in , with in place of . By , The halfway point is and therefore   Alternatively, can be written in terms of : Also notice that at the ant is at , and hence in agreement with the first computation. The temperature is falling as the ant walks, which makes sense: it is moving away from the origin, where is largest.     Proving an Identity with the Chain Rule   Suppose that , where is a differentiable function. Show that     Let us name the intermediate variables so that with and each depending on , , and . The tree diagram is shown in .   Tree diagram for with and . Note that appears under both intermediate variables, which is why collects two terms while and collect one each.                  w   u=xz    v=yz   x  z  y   \\frac{\\partial w}{\\partial u}    \\frac{\\partial w}{\\partial v}    z    x    y    z                 Reading the branches that lead down to , and using and , we get   Only one branch leads down to , namely the one through , and , so Similarly, only one branch leads down to , through , and , so   Substituting and into gives and multiplying both sides by yields which is the identity we wanted to prove.    "
},
{
  "id": "example-cr-ant",
  "level": "2",
  "url": "sec-cr-applications.html#example-cr-ant",
  "type": "Example",
  "number": "4.4.12",
  "title": "The Temperature Experienced by a Moving Ant.",
  "body": " The Temperature Experienced by a Moving Ant   Suppose that the temperature on a metal plate is given by the function with where the temperature is measured in degrees Fahrenheit and and are each measured in feet. Now suppose that an ant is walking on the metal plate in such a way that it walks in a straight line from the point to the point .   Find parametric equations for the ant's coordinates as it walks the line from to .    What can you say about and for every value of ?    Determine the instantaneous rate of change in temperature with respect to that the ant is experiencing at the moment it is halfway from to , using your parametric equations for and . Include units on your answer.        a. The slope of the line is so the line is . Choosing , that is , gives At the ant is at and at it is at , as required.   b. Differentiating , for every value of . Both are constant, which reflects the fact that the ant walks along a straight line at a steady rate.   c. The tree diagram for this composition is the one in , with in place of . By , The halfway point is and therefore   Alternatively, can be written in terms of : Also notice that at the ant is at , and hence in agreement with the first computation. The temperature is falling as the ant walks, which makes sense: it is moving away from the origin, where is largest.   "
},
{
  "id": "example-cr-identity",
  "level": "2",
  "url": "sec-cr-applications.html#example-cr-identity",
  "type": "Example",
  "number": "4.4.13",
  "title": "Proving an Identity with the Chain Rule.",
  "body": " Proving an Identity with the Chain Rule   Suppose that , where is a differentiable function. Show that     Let us name the intermediate variables so that with and each depending on , , and . The tree diagram is shown in .   Tree diagram for with and . Note that appears under both intermediate variables, which is why collects two terms while and collect one each.                  w   u=xz    v=yz   x  z  y   \\frac{\\partial w}{\\partial u}    \\frac{\\partial w}{\\partial v}    z    x    y    z                 Reading the branches that lead down to , and using and , we get   Only one branch leads down to , namely the one through , and , so Similarly, only one branch leads down to , through , and , so   Substituting and into gives and multiplying both sides by yields which is the identity we wanted to prove.   "
},
{
  "id": "sec-dirderiv-definition",
  "level": "1",
  "url": "sec-dirderiv-definition.html",
  "type": "Subsection",
  "number": "4.5.1",
  "title": "The Definition of the Directional Derivative",
  "body": " The Definition of the Directional Derivative   Directional Derivative   The derivative of at in the direction of the unit vector is the number provided the limit exists. It can alternatively be denoted by .    The geometry behind this definition is best seen in a picture. Starting at the point , we move a distance in the direction of the unit vector to reach the point , and we compare the values of the surface above the two points. As , the point slides back along toward . The four figures that follow show this from complementary angles: lets you explore the construction in space, records the displacement in the -plane, animates the secant line rotating onto the tangent line, and reports the difference quotient itself as shrinks, so that the limit can be watched rather than only read.   Interactive view of the definition of the directional derivative. The point moves the distance from along , and the secant slope approaches as .     The two points and used in the definition of the directional derivative. As , the point slides along the direction back toward .            P_0(x_0,y_0)    P(x_0+su_1,\\,y_0+su_2)    s\\hat{u}    su_1\\hat{\\imath}    su_2\\hat{\\jmath}                   Animation of the definition of the directional derivative. The vertical plane through in the direction cuts the surface in a curve, and the point moves on this plane. The secant line through and has slope , and as it rotates onto the tangent line, whose slope is the directional derivative .     The difference quotient for at , as functions of the direction angle and the step .    Before developing any shortcuts, we evaluate a directional derivative straight from . Working through the limit once makes the definition concrete, and it gives us a value to check against later: recovers the same number in a couple of lines, once the gradient is available.   Example I   Consider the function , the point , and the unit vector . Use the definition of directional derivative to compute .    We substitute and in the definition:   The computation has a useful geometric picture, illustrated in the interactive 3D figure below. Along the ray through in the direction , the values of are the single-variable function and the difference quotient in the limit above is the slope of the secant line of through and . As the secant lines approach the tangent line at , whose slope is .    The secant through and on the surface , rotating onto the tangent line at as , with slope .       The Partial Derivatives Are Directional Derivatives    measures the rate of change of in an arbitrary direction . Two directions are already familiar from and . In this activity you will check that the definition reproduces exactly those two derivatives when points along a coordinate axis. Use only ; nothing beyond the definition is needed.     Take , so that and . Substitute these into and simplify. Which single-variable limit is left, and what is its value?    Ask yourself which of the two inputs of actually changes as varies.    Substituting and leaves the second slot of fixed at :   Only the first variable moves, so this is precisely the limit that defines the partial derivative with respect to . That is, .      Repeat the computation with , and state the conclusion.    Now and , so the first slot is held at : so . The partial derivatives are the directional derivatives in the two coordinate directions, and is the common generalization of both.      Test this on the function of . With and , compute straight from the definition, then compute in the usual way and compare.    From the definition,   Differentiating instead, , so . The two agree. By symmetry as well. Note that both are smaller than the value found in : the function climbs faster along the diagonal than along either axis.      Finally, take . Show that , and say in a sentence why this is what you should expect.    Here and , so   Putting turns this into . Walking the opposite way along the same line makes change at the same rate with the opposite sign, so reversing reverses the sign of .     Every partial derivative is a directional derivative, so nothing already known about and is lost. What the definition adds is the freedom to point anywhere. Keep in mind that this depends on being a unit vector: the parameter measures actual distance travelled in the -plane only when .    "
},
{
  "id": "def-directional-derivative",
  "level": "2",
  "url": "sec-dirderiv-definition.html#def-directional-derivative",
  "type": "Definition",
  "number": "4.5.1",
  "title": "Directional Derivative.",
  "body": " Directional Derivative   The derivative of at in the direction of the unit vector is the number provided the limit exists. It can alternatively be denoted by .   "
},
{
  "id": "fig-int-dirderiv-setup-3d",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-int-dirderiv-setup-3d",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " Interactive view of the definition of the directional derivative. The point moves the distance from along , and the secant slope approaches as .   "
},
{
  "id": "fig-dirderiv-setup-prefigure",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-dirderiv-setup-prefigure",
  "type": "Figure",
  "number": "4.5.3",
  "title": "",
  "body": " The two points and used in the definition of the directional derivative. As , the point slides along the direction back toward .            P_0(x_0,y_0)    P(x_0+su_1,\\,y_0+su_2)    s\\hat{u}    su_1\\hat{\\imath}    su_2\\hat{\\jmath}                 "
},
{
  "id": "fig-dirderiv-setup-video",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-dirderiv-setup-video",
  "type": "Figure",
  "number": "4.5.4",
  "title": "",
  "body": " Animation of the definition of the directional derivative. The vertical plane through in the direction cuts the surface in a curve, and the point moves on this plane. The secant line through and has slope , and as it rotates onto the tangent line, whose slope is the directional derivative .   "
},
{
  "id": "fig-int-dirderiv-definition",
  "level": "2",
  "url": "sec-dirderiv-definition.html#fig-int-dirderiv-definition",
  "type": "Figure",
  "number": "4.5.5",
  "title": "",
  "body": " The difference quotient for at , as functions of the direction angle and the step .   "
},
{
  "id": "example-dirderiv-definition",
  "level": "2",
  "url": "sec-dirderiv-definition.html#example-dirderiv-definition",
  "type": "Example",
  "number": "4.5.6",
  "title": "Example I.",
  "body": " Example I   Consider the function , the point , and the unit vector . Use the definition of directional derivative to compute .    We substitute and in the definition:   The computation has a useful geometric picture, illustrated in the interactive 3D figure below. Along the ray through in the direction , the values of are the single-variable function and the difference quotient in the limit above is the slope of the secant line of through and . As the secant lines approach the tangent line at , whose slope is .    The secant through and on the surface , rotating onto the tangent line at as , with slope .     "
},
{
  "id": "activity-dirderiv-partials",
  "level": "2",
  "url": "sec-dirderiv-definition.html#activity-dirderiv-partials",
  "type": "Activity",
  "number": "4.5.1.1",
  "title": "The Partial Derivatives Are Directional Derivatives.",
  "body": " The Partial Derivatives Are Directional Derivatives    measures the rate of change of in an arbitrary direction . Two directions are already familiar from and . In this activity you will check that the definition reproduces exactly those two derivatives when points along a coordinate axis. Use only ; nothing beyond the definition is needed.     Take , so that and . Substitute these into and simplify. Which single-variable limit is left, and what is its value?    Ask yourself which of the two inputs of actually changes as varies.    Substituting and leaves the second slot of fixed at :   Only the first variable moves, so this is precisely the limit that defines the partial derivative with respect to . That is, .      Repeat the computation with , and state the conclusion.    Now and , so the first slot is held at : so . The partial derivatives are the directional derivatives in the two coordinate directions, and is the common generalization of both.      Test this on the function of . With and , compute straight from the definition, then compute in the usual way and compare.    From the definition,   Differentiating instead, , so . The two agree. By symmetry as well. Note that both are smaller than the value found in : the function climbs faster along the diagonal than along either axis.      Finally, take . Show that , and say in a sentence why this is what you should expect.    Here and , so   Putting turns this into . Walking the opposite way along the same line makes change at the same rate with the opposite sign, so reversing reverses the sign of .     Every partial derivative is a directional derivative, so nothing already known about and is lost. What the definition adds is the freedom to point anywhere. Keep in mind that this depends on being a unit vector: the parameter measures actual distance travelled in the -plane only when .   "
},
{
  "id": "sec-gradient-vector",
  "level": "1",
  "url": "sec-gradient-vector.html",
  "type": "Subsection",
  "number": "4.5.2",
  "title": "The Gradient Vector",
  "body": " The Gradient Vector  Note that we can write the equation of the line through the point with the direction as   We can use the above relation between , , and and the chain rule, whose dependency diagram is shown in , to compute the directional derivative as follows:   The vector in the first set of parentheses is known as the gradient vector .   Gradient Vector   The gradient vector of the function at is the vector   The gradient vector and the directional derivative of at in the direction are related via the following dot product:      The chain rule dependency diagram: multiplying down each branch and adding the two products gives .       z=f(x,y)    x    y    s        \\dfrac{\\partial f}{\\partial x}    \\dfrac{\\partial f}{\\partial y}    \\dfrac{dx}{ds}    \\dfrac{dy}{ds}                  A fundamental geometric property of the gradient is that, at every point, it is perpendicular to the level curve of passing through that point, as the interactive figure below lets you verify. We state and prove this fact now.   The Gradient is Perpendicular to the Level Curves   Let be a differentiable function, and let be the level curve for a constant . At every point of where , the gradient vector is perpendicular to the level curve .    Suppose the level curve is parametrized by a differentiable vector function and let denote its velocity vector. Because every point of lies on the level curve, its coordinates satisfy   The left-hand side is constant in , so its derivative is zero. Differentiating both sides with respect to and applying the chain rule gives   We recognize the middle expression as the dot product of the gradient vector with the velocity vector:   Therefore, at each point of , the gradient is orthogonal to the velocity vector , as shown in . Since the velocity vector points in the direction of motion along the curve, it is tangent to ; hence being orthogonal to means precisely that is perpendicular to the level curve . This holds at every point where .     The gradient meets the level curve at a right angle: it is perpendicular to the velocity vector , which is tangent to .     ce(t) = (2.4*cos(t), 1.6*sin(t))  ci(t) = (1.63*cos(t), 1.09*sin(t))  co(t) = (3.12*cos(t), 2.08*sin(t))           P    \\nabla f    \\mathbf v(t)    C\\colon f=c    f=c+\\Delta c    f=c-\\Delta c                 Checking that the Gradient Meets Level Curves at Right Angles    claims that is perpendicular to the level curve through a point. This activity asks you to verify that claim by hand at one point, and then to test it at many points using the interactive figure that follows.     Let . Find the level curve of through , and give a vector tangent to that curve at .    Level curves of this are circles centred at the origin. A tangent to a circle is perpendicular to its radius.    Since , the level curve is , that is the circle of radius . The radius at points along , so a tangent vector is .      Compute and then the dot product of that gradient with your tangent vector. What does the result say?     gives , and   A zero dot product between non-zero vectors means the two are orthogonal, so meets the level curve at a right angle at , exactly as asserts.      Repeat the argument at an arbitrary point to show the right angle is not a coincidence of the point .    The level curve through is the circle , whose tangent there is . Since , so the gradient is perpendicular to the level curve at every point other than the origin, where and no direction is singled out.      Now drag the red point in to several locations, including points on the axes and points far from the origin. Confirm that the gradient arrow always meets the level curve at a right angle, and describe how the length of the arrow changes as the point moves away from the origin. Can you place the point where the gradient vanishes?   The gradient of at a movable point, shown with the level curve through that point, illustrating that is perpendicular to the level curves.      The right angle persists everywhere. The arrow lengthens as the point moves outward, since grows with the distance from the origin; correspondingly the level curves are spaced more closely there, because is climbing faster. At the origin : the level curve degenerates to a single point and there is no direction of steepest ascent.     With in hand, the limit that defined the directional derivative can be set aside: the gradient and a dot product do the same work in a couple of lines. To see the difference, we rework  the same function, point, and direction and then read the answer geometrically off the surface.   Example II   Consider the function , the point , and the unit vector . Evaluate the directional derivative and interpret your result.    We use . First we compute the gradient vector :   Then we take the dot product with : which agrees with the limit computation in . See for a geometrical interpretation of the directional derivative. Note that the unit vector is the direction vector of the line located in the -plane. The plane contains this line and is orthogonal to the -plane. The intersection of the surface and the plane is the parabola shown in the figure. Finally, the directional derivative of at the point corresponds to the slope of the tangent line to the surface at that is located in the plane .   The surface cut by the vertical plane , which contains the direction . The intersection is a parabola, and the directional derivative is the slope of its tangent line at the point . The level curve through , the circle , is drawn on the surface at height , with its dashed projection in the -plane.   A paraboloid cut by a vertical plane, with the trace parabola and its tangent line at the point one comma one comma three.   The surface , an upward-opening paraboloid, drawn as a translucent blue surface. A translucent yellow vertical plane passes through the surface above the line in the -plane, where the unit vector is drawn as a blue arrow starting at . The plane meets the surface in a parabola, drawn in solid vermillion, and a green tangent line touches this parabola at the marked point . The slope of this tangent line, measured within the vertical plane, is the directional derivative . A reddish-purple circle on the surface at height marks the level curve , and its dashed projection in the -plane is the circle through the point .        The same slice, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as the direction turns around .      "
},
{
  "id": "sec-gradient-vector-4",
  "level": "2",
  "url": "sec-gradient-vector.html#sec-gradient-vector-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient vector "
},
{
  "id": "def-gradient-vector",
  "level": "2",
  "url": "sec-gradient-vector.html#def-gradient-vector",
  "type": "Definition",
  "number": "4.5.8",
  "title": "Gradient Vector.",
  "body": " Gradient Vector   The gradient vector of the function at is the vector   The gradient vector and the directional derivative of at in the direction are related via the following dot product:    "
},
{
  "id": "fig-chain-rule-tree-prefigure",
  "level": "2",
  "url": "sec-gradient-vector.html#fig-chain-rule-tree-prefigure",
  "type": "Figure",
  "number": "4.5.9",
  "title": "",
  "body": " The chain rule dependency diagram: multiplying down each branch and adding the two products gives .       z=f(x,y)    x    y    s        \\dfrac{\\partial f}{\\partial x}    \\dfrac{\\partial f}{\\partial y}    \\dfrac{dx}{ds}    \\dfrac{dy}{ds}                 "
},
{
  "id": "thm-gradient-perp-level-curve",
  "level": "2",
  "url": "sec-gradient-vector.html#thm-gradient-perp-level-curve",
  "type": "Theorem",
  "number": "4.5.10",
  "title": "The Gradient is Perpendicular to the Level Curves.",
  "body": " The Gradient is Perpendicular to the Level Curves   Let be a differentiable function, and let be the level curve for a constant . At every point of where , the gradient vector is perpendicular to the level curve .    Suppose the level curve is parametrized by a differentiable vector function and let denote its velocity vector. Because every point of lies on the level curve, its coordinates satisfy   The left-hand side is constant in , so its derivative is zero. Differentiating both sides with respect to and applying the chain rule gives   We recognize the middle expression as the dot product of the gradient vector with the velocity vector:   Therefore, at each point of , the gradient is orthogonal to the velocity vector , as shown in . Since the velocity vector points in the direction of motion along the curve, it is tangent to ; hence being orthogonal to means precisely that is perpendicular to the level curve . This holds at every point where .   "
},
{
  "id": "fig-gradient-perp-prefigure",
  "level": "2",
  "url": "sec-gradient-vector.html#fig-gradient-perp-prefigure",
  "type": "Figure",
  "number": "4.5.11",
  "title": "",
  "body": " The gradient meets the level curve at a right angle: it is perpendicular to the velocity vector , which is tangent to .     ce(t) = (2.4*cos(t), 1.6*sin(t))  ci(t) = (1.63*cos(t), 1.09*sin(t))  co(t) = (3.12*cos(t), 2.08*sin(t))           P    \\nabla f    \\mathbf v(t)    C\\colon f=c    f=c+\\Delta c    f=c-\\Delta c               "
},
{
  "id": "activity-gradient-perp-check",
  "level": "2",
  "url": "sec-gradient-vector.html#activity-gradient-perp-check",
  "type": "Activity",
  "number": "4.5.2.1",
  "title": "Checking that the Gradient Meets Level Curves at Right Angles.",
  "body": " Checking that the Gradient Meets Level Curves at Right Angles    claims that is perpendicular to the level curve through a point. This activity asks you to verify that claim by hand at one point, and then to test it at many points using the interactive figure that follows.     Let . Find the level curve of through , and give a vector tangent to that curve at .    Level curves of this are circles centred at the origin. A tangent to a circle is perpendicular to its radius.    Since , the level curve is , that is the circle of radius . The radius at points along , so a tangent vector is .      Compute and then the dot product of that gradient with your tangent vector. What does the result say?     gives , and   A zero dot product between non-zero vectors means the two are orthogonal, so meets the level curve at a right angle at , exactly as asserts.      Repeat the argument at an arbitrary point to show the right angle is not a coincidence of the point .    The level curve through is the circle , whose tangent there is . Since , so the gradient is perpendicular to the level curve at every point other than the origin, where and no direction is singled out.      Now drag the red point in to several locations, including points on the axes and points far from the origin. Confirm that the gradient arrow always meets the level curve at a right angle, and describe how the length of the arrow changes as the point moves away from the origin. Can you place the point where the gradient vanishes?   The gradient of at a movable point, shown with the level curve through that point, illustrating that is perpendicular to the level curves.      The right angle persists everywhere. The arrow lengthens as the point moves outward, since grows with the distance from the origin; correspondingly the level curves are spaced more closely there, because is climbing faster. At the origin : the level curve degenerates to a single point and there is no direction of steepest ascent.    "
},
{
  "id": "example-dirderiv-gradient",
  "level": "2",
  "url": "sec-gradient-vector.html#example-dirderiv-gradient",
  "type": "Example",
  "number": "4.5.13",
  "title": "Example II.",
  "body": " Example II   Consider the function , the point , and the unit vector . Evaluate the directional derivative and interpret your result.    We use . First we compute the gradient vector :   Then we take the dot product with : which agrees with the limit computation in . See for a geometrical interpretation of the directional derivative. Note that the unit vector is the direction vector of the line located in the -plane. The plane contains this line and is orthogonal to the -plane. The intersection of the surface and the plane is the parabola shown in the figure. Finally, the directional derivative of at the point corresponds to the slope of the tangent line to the surface at that is located in the plane .   The surface cut by the vertical plane , which contains the direction . The intersection is a parabola, and the directional derivative is the slope of its tangent line at the point . The level curve through , the circle , is drawn on the surface at height , with its dashed projection in the -plane.   A paraboloid cut by a vertical plane, with the trace parabola and its tangent line at the point one comma one comma three.   The surface , an upward-opening paraboloid, drawn as a translucent blue surface. A translucent yellow vertical plane passes through the surface above the line in the -plane, where the unit vector is drawn as a blue arrow starting at . The plane meets the surface in a parabola, drawn in solid vermillion, and a green tangent line touches this parabola at the marked point . The slope of this tangent line, measured within the vertical plane, is the directional derivative . A reddish-purple circle on the surface at height marks the level curve , and its dashed projection in the -plane is the circle through the point .        The same slice, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as the direction turns around .     "
},
{
  "id": "sec-dirderiv-properties",
  "level": "1",
  "url": "sec-dirderiv-properties.html",
  "type": "Subsection",
  "number": "4.5.3",
  "title": "Directions of Fastest Increase, Fastest Decrease, and No Change",
  "body": " Directions of Fastest Increase, Fastest Decrease, and No Change  The directional derivative can be expressed as where is the angle between and the unit vector . The first line is , obtained from the chain rule in ; the second is the geometric form of the dot product; and the third uses .   Three Consequences of  Only the factor depends on the direction, and it runs over as turns through the circle of directions at . Its three extreme values single out three directions, drawn in :     When and are in the same direction ( ), increases most rapidly and .    When and have opposite directions ( ), decreases most rapidly and .    When and are orthogonal ( ), does not change, and .       Directions around : increases fastest along , decreases fastest along , and does not change in the two directions orthogonal to .            P_0    \\nabla f    \\hat{u}    D_{\\hat{u}}f=0    D_{\\hat{u}}f=0    D_{\\hat{u}} f = \\|\\nabla f\\|\\cos\\theta                  Verifying the Three Special Directions   The three cases listed above are all consequences of a single formula, . In this activity you will derive them yourself and then check your answers against , where can be dragged around the circle of directions.     Beginning with , explain why the dot product can be rewritten as .    For any two vectors, with the angle between them. Applying this to and , where the last step uses . Without that assumption the factor would survive, and rescaling would change without changing the direction being measured.      Treat as fixed and let run over . What are the largest and smallest values of , and at which angles do they occur? For which angles is ?    Since , the quantity ranges between and . The largest value occurs at , with pointing along ; the smallest, , occurs at , with pointing along . The directional derivative vanishes when , that is at and , the two directions orthogonal to .      Now take at , the function of . Compute and at , write as a function of , and give the three special unit vectors explicitly.    Here , so and . Therefore   The fastest increase happens along , giving , which is the value computed in . The fastest decrease happens along , giving . There is no change along , the two directions orthogonal to .      Check your work against the figure below. Drag around the circle and confirm that the meter agrees with at several angles. Then use the three buttons and compare the readings with your answers to the previous task. As you drag, at what angle does the reading change most quickly, and at what angle is it momentarily stationary?   The directional derivative as the unit vector rotates around .      The three buttons should give , , and . The reading changes fastest where is largest, namely at and , the very directions where itself is zero. It is momentarily stationary at and , where is largest and smallest. So a small change of heading matters least when you are already pointing straight uphill, and most when you are moving along a level direction.      Example III   Consider the function . Find the directions in which, at the point ,      increases most rapidly,     decreases most rapidly,    there is no change in .        A. As explained above, increases most rapidly in the direction of . We have   Note that we need to divide by its length to find the unit vector corresponding to the direction of most rapid increase:    B. For the direction of most rapid decrease, we take the opposite direction:    C. To find the directions of zero change in , we require and since is a unit vector, we have   After substituting in , we conclude   Hence, the directions of zero change in at are   Note that . All four directions are shown in : the directions of zero change are tangent to the level curve of through , while the directions of most rapid increase and decrease are perpendicular to it.   At : fastest increase along , fastest decrease along , and zero change along , tangent to the level curve .                 P_0(1,1)    \\nabla f\/\\|\\nabla f\\|    -\\nabla f\/\\|\\nabla f\\|    \\hat{u}    \\tilde{\\hat{u}}                     The same three directions, animated: sweeping between and as turns around .      The same 3D view, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as turns.      "
},
{
  "id": "remark-dirderiv-three-consequences",
  "level": "2",
  "url": "sec-dirderiv-properties.html#remark-dirderiv-three-consequences",
  "type": "Remark",
  "number": "4.5.16",
  "title": "Three Consequences of <span class=\"process-math\">\\(D_{\\hat{u}} f = \\|\\nabla f\\|\\cos\\theta\\)<\/span>.",
  "body": " Three Consequences of  Only the factor depends on the direction, and it runs over as turns through the circle of directions at . Its three extreme values single out three directions, drawn in :     When and are in the same direction ( ), increases most rapidly and .    When and have opposite directions ( ), decreases most rapidly and .    When and are orthogonal ( ), does not change, and .     "
},
{
  "id": "fig-dirderiv-angle-prefigure",
  "level": "2",
  "url": "sec-dirderiv-properties.html#fig-dirderiv-angle-prefigure",
  "type": "Figure",
  "number": "4.5.17",
  "title": "",
  "body": " Directions around : increases fastest along , decreases fastest along , and does not change in the two directions orthogonal to .            P_0    \\nabla f    \\hat{u}    D_{\\hat{u}}f=0    D_{\\hat{u}}f=0    D_{\\hat{u}} f = \\|\\nabla f\\|\\cos\\theta                "
},
{
  "id": "activity-verify-cos-theta",
  "level": "2",
  "url": "sec-dirderiv-properties.html#activity-verify-cos-theta",
  "type": "Activity",
  "number": "4.5.3.1",
  "title": "Verifying the Three Special Directions.",
  "body": " Verifying the Three Special Directions   The three cases listed above are all consequences of a single formula, . In this activity you will derive them yourself and then check your answers against , where can be dragged around the circle of directions.     Beginning with , explain why the dot product can be rewritten as .    For any two vectors, with the angle between them. Applying this to and , where the last step uses . Without that assumption the factor would survive, and rescaling would change without changing the direction being measured.      Treat as fixed and let run over . What are the largest and smallest values of , and at which angles do they occur? For which angles is ?    Since , the quantity ranges between and . The largest value occurs at , with pointing along ; the smallest, , occurs at , with pointing along . The directional derivative vanishes when , that is at and , the two directions orthogonal to .      Now take at , the function of . Compute and at , write as a function of , and give the three special unit vectors explicitly.    Here , so and . Therefore   The fastest increase happens along , giving , which is the value computed in . The fastest decrease happens along , giving . There is no change along , the two directions orthogonal to .      Check your work against the figure below. Drag around the circle and confirm that the meter agrees with at several angles. Then use the three buttons and compare the readings with your answers to the previous task. As you drag, at what angle does the reading change most quickly, and at what angle is it momentarily stationary?   The directional derivative as the unit vector rotates around .      The three buttons should give , , and . The reading changes fastest where is largest, namely at and , the very directions where itself is zero. It is momentarily stationary at and , where is largest and smallest. So a small change of heading matters least when you are already pointing straight uphill, and most when you are moving along a level direction.    "
},
{
  "id": "example-gradient-directions",
  "level": "2",
  "url": "sec-dirderiv-properties.html#example-gradient-directions",
  "type": "Example",
  "number": "4.5.19",
  "title": "Example III.",
  "body": " Example III   Consider the function . Find the directions in which, at the point ,      increases most rapidly,     decreases most rapidly,    there is no change in .        A. As explained above, increases most rapidly in the direction of . We have   Note that we need to divide by its length to find the unit vector corresponding to the direction of most rapid increase:    B. For the direction of most rapid decrease, we take the opposite direction:    C. To find the directions of zero change in , we require and since is a unit vector, we have   After substituting in , we conclude   Hence, the directions of zero change in at are   Note that . All four directions are shown in : the directions of zero change are tangent to the level curve of through , while the directions of most rapid increase and decrease are perpendicular to it.   At : fastest increase along , fastest decrease along , and zero change along , tangent to the level curve .                 P_0(1,1)    \\nabla f\/\\|\\nabla f\\|    -\\nabla f\/\\|\\nabla f\\|    \\hat{u}    \\tilde{\\hat{u}}                     The same three directions, animated: sweeping between and as turns around .      The same 3D view, animated: the tangent to the sliced surface at tipping from steepest ascent through level to steepest descent as turns.     "
},
{
  "id": "sec-gradient-summary",
  "level": "1",
  "url": "sec-gradient-summary.html",
  "type": "Subsection",
  "number": "4.5.4",
  "title": "Summary",
  "body": " Summary  We collect here the main ideas of this section.   A directional derivative viewed together in the plane and in space: the unit vector at in the -plane selects a slice of the surface , and is the slope of the resulting tangent line to that slice.        The directional derivative.  defines as the limit in ; it measures the rate of change of at in the direction of a unit vector . It is computed directly from this limit in , and shows how the plane and space pictures fit together.     The gradient vector. Using the chain rule we obtain , which gives the shortcut in . This is applied in .     Fastest increase, fastest decrease, and no change. Writing in shows that increases most rapidly in the direction of , decreases most rapidly in the direction of , and does not change in the directions orthogonal to . These directions are found in .     The gradient is perpendicular to the level curves.  proves that is perpendicular to the level curve through each point. Equivalently, the directions of no change are tangent to the level curve, while the directions of most rapid increase and decrease are perpendicular to it.     "
},
{
  "id": "video-dirderiv-2d-3d",
  "level": "2",
  "url": "sec-gradient-summary.html#video-dirderiv-2d-3d",
  "type": "Figure",
  "number": "4.5.23",
  "title": "",
  "body": " A directional derivative viewed together in the plane and in space: the unit vector at in the -plane selects a slice of the surface , and is the slope of the resulting tangent line to that slice.   "
},
{
  "id": "subsec-scalar-fields-potentials",
  "level": "1",
  "url": "subsec-scalar-fields-potentials.html",
  "type": "Subsection",
  "number": "4.5.5",
  "title": "Scalar Fields, Potentials, and the Direction Nature Chooses",
  "body": " Scalar Fields, Potentials, and the Direction Nature Chooses  A scalar field is a rule that assigns a single number to every point of a region: the temperature in a city, the pressure over an ocean, the elevation on a hillside, the concentration of a pollutant in a corridor. A scalar field carries no direction of its own. It is only a number at each location.  Physics, by contrast, is full of quantities that point somewhere: heat flows, forces push, wind blows. These are vector fields . The gradient is what ties them back to scalar fields at least for the conservative fields taken up in MATH 14 at SCU, where the whole vector field is recovered from a single scalar potential by differentiation. Because such fields are so common in nature, the pattern in the table below appears again and again across physics.  When a scalar field governs a physical force or flux, we call the field a potential , and the associated vector quantity is, up to a constant, the negative gradient of that potential.    Setting  Scalar field  Vector quantity  Level curves are    Heat conduction  temperature  heat flux (Fourier's law)  isotherms    Electrostatics  potential  electric field  equipotentials    Mechanics  potential energy  conservative force  contours of constant energy    Meteorology  pressure  pressure-gradient force per unit volume  isobars    The minus sign in each of these laws encodes one physical fact: nature moves downhill . Heat drains from hot to cold, charges move toward low electric potential, a ball rolls toward low gravitational potential energy, air accelerates toward low pressure. So the direction the physics actually selects is the direction of most rapid decrease , which is exactly the case of .  Three consequences carry over unchanged from , and they are worth restating in physical language.      : fastest increase, at the rate . This is the direction heat comes from .     : fastest decrease, at the rate . This is the direction the flux, the force, or the wind actually points.     : no change at all. These directions trace the level curves of the field isotherms, equipotentials, isobars, the contour lines on a topographic map. Since is orthogonal to the level curve through a point, the flux, the force, or the wind always crosses the contours at right angles .      Two Runners in a City Heat Island   On a still summer afternoon the pavement downtown is far hotter than the outlying neighborhoods. Model the surface air temperature, in degrees Fahrenheit, by where and are measured in miles east and north of downtown. The core reaches F, and the outskirts settle near F. Two runners meet at the point .     The first runner is overheating and wants cooler air as quickly as possible. Which direction should she take, and how fast does the temperature fall along it?    The second runner has settled into the temperature at and wants a route on which it never changes at all. What path should she run?       Differentiating the exponential with the chain rule, At the temperature itself is F.   Part 1. Temperature falls fastest in the direction of , which is a positive multiple of . Normalizing, the heading is north-northeast: and the rate of change along it is Notice how modest this is. The gradient hands her the best available direction, not a dramatic one: even running the optimal heading, she must cover a full mile to shed about two degrees. Any other heading does worse.   Part 2. The second runner needs , that is, orthogonal to : Following that condition continuously, rather than for a single step, means never leaving the level curve of through . Since is constant exactly when is constant, her route is an ellipse with semi-axes miles east-west and miles north-south a closed loop of roughly ten miles, every step of it at F.  In the animation below, switch between the two runners. On the loop the thermometer holds at F while the blue gradient arrow stays stubbornly perpendicular to her heading; on the escape route the same reading falls steadily, and the path cuts across every isotherm at a right angle.  Use the interactive figure to explore the problem further geometrically, switching between the two routes and watching how the readings respond as the runner moves.   Two routes from in the field . The highlighted ellipse is the level curve , on which .      "
},
{
  "id": "subsec-scalar-fields-potentials-2",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar field "
},
{
  "id": "subsec-scalar-fields-potentials-3",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector fields conservative "
},
{
  "id": "subsec-scalar-fields-potentials-4",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#subsec-scalar-fields-potentials-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "potential "
},
{
  "id": "ex-two-runners",
  "level": "2",
  "url": "subsec-scalar-fields-potentials.html#ex-two-runners",
  "type": "Example",
  "number": "4.5.24",
  "title": "Two Runners in a City Heat Island.",
  "body": " Two Runners in a City Heat Island   On a still summer afternoon the pavement downtown is far hotter than the outlying neighborhoods. Model the surface air temperature, in degrees Fahrenheit, by where and are measured in miles east and north of downtown. The core reaches F, and the outskirts settle near F. Two runners meet at the point .     The first runner is overheating and wants cooler air as quickly as possible. Which direction should she take, and how fast does the temperature fall along it?    The second runner has settled into the temperature at and wants a route on which it never changes at all. What path should she run?       Differentiating the exponential with the chain rule, At the temperature itself is F.   Part 1. Temperature falls fastest in the direction of , which is a positive multiple of . Normalizing, the heading is north-northeast: and the rate of change along it is Notice how modest this is. The gradient hands her the best available direction, not a dramatic one: even running the optimal heading, she must cover a full mile to shed about two degrees. Any other heading does worse.   Part 2. The second runner needs , that is, orthogonal to : Following that condition continuously, rather than for a single step, means never leaving the level curve of through . Since is constant exactly when is constant, her route is an ellipse with semi-axes miles east-west and miles north-south a closed loop of roughly ten miles, every step of it at F.  In the animation below, switch between the two runners. On the loop the thermometer holds at F while the blue gradient arrow stays stubbornly perpendicular to her heading; on the escape route the same reading falls steadily, and the path cuts across every isotherm at a right angle.  Use the interactive figure to explore the problem further geometrically, switching between the two routes and watching how the readings respond as the runner moves.   Two routes from in the field . The highlighted ellipse is the level curve , on which .     "
},
{
  "id": "sec-tp-equation",
  "level": "1",
  "url": "sec-tp-equation.html",
  "type": "Subsection",
  "number": "4.6.1",
  "title": "Equation of the Tangent Plane",
  "body": " Equation of the Tangent Plane  We use what we learned about the partial derivatives and slopes of tangent lines to calculate the equation of the tangent plane to the surface at .  Let us consider the equation of the tangent plane , where . We then rewrite the equation as   When , we have , which is the equation of the tangent line at in the plane , and therefore its slope is . Similarly, when , we have , which is the equation of the tangent line at in the plane , and therefore its slope is . shows the two tangent lines inside the planes and .  Therefore the equation of the tangent plane to the surface  at is   Note that we can write the equation of the surface as and define the gradient of as Then, reading off the coefficients in , the normal vector to the tangent plane is    The two vertical planes and cut the surface along the green and amber curves of and , whose tangent lines at have slopes and . The tangent plane at contains both tangent lines, and its normal vector is . Equivalently, is given (up to sign) by the cross product of the direction vectors and of the two tangent lines.    A grey dome-shaped surface, the graph of z equals f of x y, with the pink tangent plane touching it at the magenta point P 0. The green curve cut by the plane y equals y 0 and the amber curve cut by the plane x equals x 0 run across the surface through P 0, drawn in the same colors as the two partial derivative figures. The blue tangent line to the green curve at P 0 and the dark red tangent line to the amber curve at P 0 lie inside the tangent plane, and a black arrow, the normal vector n, points away from the plane at P 0, perpendicular to both tangent lines. A legend above the picture names each of these seven elements.       rebuilds the picture above one layer at a time, so each ingredient of the construction can be seen arriving: the two slices with their tangent lines first, then the tangent plane that contains both lines, and finally the normal vector.   The construction of , one layer at a time. The plane cuts the surface along the green curve of , whose tangent line at has slope ; the plane cuts it along the amber curve of , whose tangent line has slope . The tangent plane contains both tangent lines, and stands perpendicular to it.     Everything in can also be explored interactively in the Tangent Plane Explorer , which opens in a new tab. It builds the picture up one layer at a time the surface, the point , the two cutting planes and the curves they cut, the two tangent lines, the tangent plane, and finally  for any of several surfaces. Drag around and rotate the figure to see for yourself that the tangent plane always contains both tangent lines and that always stands at a right angle to it.  Also, note that is the direction vector of the line normal to the surface at , which means the parametric equations of the normal line to the surface at are   "
},
{
  "id": "sec-tp-equation-5",
  "level": "2",
  "url": "sec-tp-equation.html#sec-tp-equation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent plane to the surface "
},
{
  "id": "sec-tp-equation-6",
  "level": "2",
  "url": "sec-tp-equation.html#sec-tp-equation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal vector to the tangent plane "
},
{
  "id": "fig-tp-plane-normal",
  "level": "2",
  "url": "sec-tp-equation.html#fig-tp-plane-normal",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": " The two vertical planes and cut the surface along the green and amber curves of and , whose tangent lines at have slopes and . The tangent plane at contains both tangent lines, and its normal vector is . Equivalently, is given (up to sign) by the cross product of the direction vectors and of the two tangent lines.    A grey dome-shaped surface, the graph of z equals f of x y, with the pink tangent plane touching it at the magenta point P 0. The green curve cut by the plane y equals y 0 and the amber curve cut by the plane x equals x 0 run across the surface through P 0, drawn in the same colors as the two partial derivative figures. The blue tangent line to the green curve at P 0 and the dark red tangent line to the amber curve at P 0 lie inside the tangent plane, and a black arrow, the normal vector n, points away from the plane at P 0, perpendicular to both tangent lines. A legend above the picture names each of these seven elements.     "
},
{
  "id": "fig-tp-plane-interactive",
  "level": "2",
  "url": "sec-tp-equation.html#fig-tp-plane-interactive",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": " The construction of , one layer at a time. The plane cuts the surface along the green curve of , whose tangent line at has slope ; the plane cuts it along the amber curve of , whose tangent line has slope . The tangent plane contains both tangent lines, and stands perpendicular to it.    "
},
{
  "id": "sec-tp-equation-11",
  "level": "2",
  "url": "sec-tp-equation.html#sec-tp-equation-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal line to the surface "
},
{
  "id": "sec-tp-example-paraboloid",
  "level": "1",
  "url": "sec-tp-example-paraboloid.html",
  "type": "Subsection",
  "number": "4.6.2",
  "title": "Tangent Plane and Normal Line to a Surface",
  "body": " Tangent Plane and Normal Line to a Surface  In the first example, we find the normal line and the tangent plane to a paraboloid at a given point.   Tangent Plane and Normal Line to a Paraboloid   Consider the surface and the point .   Find the equation of the normal line to the surface at .    Find the equation of the tangent plane to the surface at .        A. We begin by computing the normal vector to the surface at , which is given by , where : Hence, by , the parametric equations of the normal line are    B. Note that we have already calculated the normal vector to the surface at , and we are ready to write down the equation of the tangent plane: Therefore the tangent plane is  shows the surface, the tangent plane, and the normal line at .     The graph of , the tangent plane (green), and the normal line , , (black) at the point .    A downward-opening paraboloid drawn as a blue mesh, the graph of z equals negative x squared minus y squared. A green tangent plane patch touches the surface at the red point P 0 with coordinates 1, 1, negative 2, on the side of the dome. A black line passes through P 0 perpendicular to the plane: the normal line to the surface. A legend above the axes names the surface, the point P 0, the tangent plane and the normal line.       works through this computation from the start: it builds the gradient , evaluates it at to get the normal vector, and then draws the normal line and the tangent plane on the surface. Note that the video takes the normal vector in the outward direction, , which is the opposite of the used above; either choice gives the same normal line and the same tangent plane, since the two vectors differ only by the factor .   Computing the normal vector for . The surface, the point , the gradient computation, the normal vector, the normal line, and the tangent plane are built up in turn, followed by a slow rotation of the finished figure.    "
},
{
  "id": "example-tp-paraboloid",
  "level": "2",
  "url": "sec-tp-example-paraboloid.html#example-tp-paraboloid",
  "type": "Example",
  "number": "4.6.3",
  "title": "Tangent Plane and Normal Line to a Paraboloid.",
  "body": " Tangent Plane and Normal Line to a Paraboloid   Consider the surface and the point .   Find the equation of the normal line to the surface at .    Find the equation of the tangent plane to the surface at .        A. We begin by computing the normal vector to the surface at , which is given by , where : Hence, by , the parametric equations of the normal line are    B. Note that we have already calculated the normal vector to the surface at , and we are ready to write down the equation of the tangent plane: Therefore the tangent plane is  shows the surface, the tangent plane, and the normal line at .   "
},
{
  "id": "fig-tp-example-paraboloid",
  "level": "2",
  "url": "sec-tp-example-paraboloid.html#fig-tp-example-paraboloid",
  "type": "Figure",
  "number": "4.6.4",
  "title": "",
  "body": " The graph of , the tangent plane (green), and the normal line , , (black) at the point .    A downward-opening paraboloid drawn as a blue mesh, the graph of z equals negative x squared minus y squared. A green tangent plane patch touches the surface at the red point P 0 with coordinates 1, 1, negative 2, on the side of the dome. A black line passes through P 0 perpendicular to the plane: the normal line to the surface. A legend above the axes names the surface, the point P 0, the tangent plane and the normal line.     "
},
{
  "id": "video-tp-normal-vector",
  "level": "2",
  "url": "sec-tp-example-paraboloid.html#video-tp-normal-vector",
  "type": "Figure",
  "number": "4.6.5",
  "title": "",
  "body": " Computing the normal vector for . The surface, the point , the gradient computation, the normal vector, the normal line, and the tangent plane are built up in turn, followed by a slow rotation of the finished figure.   "
},
{
  "id": "sec-tp-change",
  "level": "1",
  "url": "sec-tp-change.html",
  "type": "Subsection",
  "number": "4.6.3",
  "title": "Estimating the Change in a Particular Direction",
  "body": " Estimating the Change in a Particular Direction  Before turning to functions of two variables, it is worth recalling the analogous idea from single-variable calculus. For a differentiable function , moving a small distance away from a point changes the height of the curve by an amount that can be estimated from the slope : the resulting differential is As shows, this differential closely approximates the actual change in the function, , as long as is small.   The tangent line at approximates near . The differential , found by walking along the tangent line, closely approximates the actual change , found by walking along the curve.    The graph of a curve y equals f of x. At a point x on the curve, a right triangle formed by the tangent line has horizontal leg d x and vertical leg d f, equal to f prime of x times d x. A separate vertical bracket to the left, labeled delta f, compares this to the actual rise of the curve, f of x plus d x minus f of x, and a bracket to the right shows the differential d f equals f prime of x times d x next to the baseline height f of x.     curve(t) = (t, exp(0.35*t))                     x  y   y=f(x)   x   x+dx   f(x)   f(x+dx)    dx    df=f'(x)\\,dx    \\Delta f    f(x)                The same question arises for a function of two variables. The difference is that near a point in the plane there is no longer a single direction to move in — moving away from a point requires both a distance and a direction. Consider the function , a point in its domain, and a unit vector . The question is:    How can we estimate the change in ( ) as a result of moving a small distance ( ) away from in the direction ?    Moving away from by the distance in the direction is the displacement , with , and it takes us to the point . As shows, this causes the change in the value of the function.   Moving away from by the distance in the direction causes the change in the value of the function.     beztop(t) = ((1-t)^2*1.5 + 2*t*(1-t)*4.4 + t^2*7.6, (1-t)^2*1.55 + 2*t*(1-t)*3.35 + t^2*1.18)  bezbot(t) = ((1-t)^2*0.7 + 2*t*(1-t)*3.6 + t^2*6.45, (1-t)^2*0.82 + 2*t*(1-t)*(-0.75) + t^2*0.78)              P_0(x_0,y_0)    P(x_0+u_1\\,ds,\\; y_0+u_2\\,ds)      x    y    z    \\hat{u} = u_1\\,\\hat{\\imath} + u_2\\,\\hat{\\jmath}    \\hat{u}\\,ds = u_1\\,ds\\,\\hat{\\imath} + u_2\\,ds\\,\\hat{\\jmath},\\quad \\|\\hat{u}\\,ds\\| = ds    u_1\\,ds\\,\\hat{\\imath}    u_2\\,ds\\,\\hat{\\jmath}    \\hat{u}\\,ds    f(x_0,y_0)    f(x_0+u_1\\,ds,\\; y_0+u_2\\,ds)    \\Delta f = f(x_0+u_1\\,ds,\\; y_0+u_2\\,ds) - f(x_0,y_0)    f    f                    We know from that the rate of change of at a point in the direction of is given by the directional derivative Hence, we can estimate the change in as The quantity is called the differential of .   Estimating the Change in a Given Direction   Consider the function , the point , and the unit vector . Estimate the change in the value of as a result of moving away from in the direction of by units.    Note that from the question we know units. Our goal is to estimate the change in . We compute the gradient of and evaluate it at : By , This means the change in is approximately units. See .  For comparison, the exact change is so the estimate is off by only units. zooms in on the stretch just past and shows this gap between the tangent line and the surface.     The graph of and the vertical plane that contains the direction . Moving from by along moves the input point (light blue), and the value of climbs along the black intersection curve from (green) to the orange point.    An upward-opening gray paraboloid, the graph of z equals 1 plus x squared plus y squared, cut by a green vertical plane through the line y equals x. The plane meets the surface along a black parabola, and the branch of that parabola through the point 1, 1 faces the viewer. On the base plane, a black arrow shows the unit vector u leaving the point 1, 1, 0. Four points are marked: the input point 1, 1, 0 in dark red, the moved input point in light blue just beyond it, the output point 1, 1, 3 in green on the curve, and the moved output point in orange on the curve; a dashed gray segment joins each input point to its output point. A legend below the picture names the surface, the plane, the curve, the vector u, and the four points.       The curve of plotted against the distance travelled along , together with its tangent line at . The window starts at , past the stretch where the two are indistinguishable, so that the gap between them can be seen: at the tangent line has risen by to , while the curve itself has risen by to .    A two dimensional graph zoomed into the neighborhood of the moved point. The horizontal axis is the distance s travelled from P 0 in the direction of u, running from 0.05 to 0.15 rather than from 0, so that the two graphs are far enough apart to be told apart; the vertical axis is z, running from about 3.13 to about 3.46. A black curve is the value of f along u, and a blue dashed line is its tangent line at P 0. The line stays just below the curve and the gap between them widens to the right. At s equals d s equals 0.1, dashed guide lines pick out the two heights: the tangent line reaches the blue point at 3.283, the estimate 3 plus d f, and the curve reaches the orange point at 3.293, the exact value of f at the moved point. A callout labels the gap between the two points as delta f minus d f equals 0.01. A legend below the picture names the curve, the tangent line, and the two marked values.      "
},
{
  "id": "sec-tp-change-2",
  "level": "2",
  "url": "sec-tp-change.html#sec-tp-change-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential "
},
{
  "id": "fig-tp-linear-approx-1d",
  "level": "2",
  "url": "sec-tp-change.html#fig-tp-linear-approx-1d",
  "type": "Figure",
  "number": "4.6.6",
  "title": "",
  "body": " The tangent line at approximates near . The differential , found by walking along the tangent line, closely approximates the actual change , found by walking along the curve.    The graph of a curve y equals f of x. At a point x on the curve, a right triangle formed by the tangent line has horizontal leg d x and vertical leg d f, equal to f prime of x times d x. A separate vertical bracket to the left, labeled delta f, compares this to the actual rise of the curve, f of x plus d x minus f of x, and a bracket to the right shows the differential d f equals f prime of x times d x next to the baseline height f of x.     curve(t) = (t, exp(0.35*t))                     x  y   y=f(x)   x   x+dx   f(x)   f(x+dx)    dx    df=f'(x)\\,dx    \\Delta f    f(x)               "
},
{
  "id": "fig-tp-change-schematic",
  "level": "2",
  "url": "sec-tp-change.html#fig-tp-change-schematic",
  "type": "Figure",
  "number": "4.6.7",
  "title": "",
  "body": " Moving away from by the distance in the direction causes the change in the value of the function.     beztop(t) = ((1-t)^2*1.5 + 2*t*(1-t)*4.4 + t^2*7.6, (1-t)^2*1.55 + 2*t*(1-t)*3.35 + t^2*1.18)  bezbot(t) = ((1-t)^2*0.7 + 2*t*(1-t)*3.6 + t^2*6.45, (1-t)^2*0.82 + 2*t*(1-t)*(-0.75) + t^2*0.78)              P_0(x_0,y_0)    P(x_0+u_1\\,ds,\\; y_0+u_2\\,ds)      x    y    z    \\hat{u} = u_1\\,\\hat{\\imath} + u_2\\,\\hat{\\jmath}    \\hat{u}\\,ds = u_1\\,ds\\,\\hat{\\imath} + u_2\\,ds\\,\\hat{\\jmath},\\quad \\|\\hat{u}\\,ds\\| = ds    u_1\\,ds\\,\\hat{\\imath}    u_2\\,ds\\,\\hat{\\jmath}    \\hat{u}\\,ds    f(x_0,y_0)    f(x_0+u_1\\,ds,\\; y_0+u_2\\,ds)    \\Delta f = f(x_0+u_1\\,ds,\\; y_0+u_2\\,ds) - f(x_0,y_0)    f    f                   "
},
{
  "id": "sec-tp-change-8",
  "level": "2",
  "url": "sec-tp-change.html#sec-tp-change-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential "
},
{
  "id": "example-tp-change",
  "level": "2",
  "url": "sec-tp-change.html#example-tp-change",
  "type": "Example",
  "number": "4.6.8",
  "title": "Estimating the Change in a Given Direction.",
  "body": " Estimating the Change in a Given Direction   Consider the function , the point , and the unit vector . Estimate the change in the value of as a result of moving away from in the direction of by units.    Note that from the question we know units. Our goal is to estimate the change in . We compute the gradient of and evaluate it at : By , This means the change in is approximately units. See .  For comparison, the exact change is so the estimate is off by only units. zooms in on the stretch just past and shows this gap between the tangent line and the surface.   "
},
{
  "id": "fig-tp-example-change",
  "level": "2",
  "url": "sec-tp-change.html#fig-tp-example-change",
  "type": "Figure",
  "number": "4.6.9",
  "title": "",
  "body": " The graph of and the vertical plane that contains the direction . Moving from by along moves the input point (light blue), and the value of climbs along the black intersection curve from (green) to the orange point.    An upward-opening gray paraboloid, the graph of z equals 1 plus x squared plus y squared, cut by a green vertical plane through the line y equals x. The plane meets the surface along a black parabola, and the branch of that parabola through the point 1, 1 faces the viewer. On the base plane, a black arrow shows the unit vector u leaving the point 1, 1, 0. Four points are marked: the input point 1, 1, 0 in dark red, the moved input point in light blue just beyond it, the output point 1, 1, 3 in green on the curve, and the moved output point in orange on the curve; a dashed gray segment joins each input point to its output point. A legend below the picture names the surface, the plane, the curve, the vector u, and the four points.     "
},
{
  "id": "fig-tp-example-change-zoom",
  "level": "2",
  "url": "sec-tp-change.html#fig-tp-example-change-zoom",
  "type": "Figure",
  "number": "4.6.10",
  "title": "",
  "body": " The curve of plotted against the distance travelled along , together with its tangent line at . The window starts at , past the stretch where the two are indistinguishable, so that the gap between them can be seen: at the tangent line has risen by to , while the curve itself has risen by to .    A two dimensional graph zoomed into the neighborhood of the moved point. The horizontal axis is the distance s travelled from P 0 in the direction of u, running from 0.05 to 0.15 rather than from 0, so that the two graphs are far enough apart to be told apart; the vertical axis is z, running from about 3.13 to about 3.46. A black curve is the value of f along u, and a blue dashed line is its tangent line at P 0. The line stays just below the curve and the gap between them widens to the right. At s equals d s equals 0.1, dashed guide lines pick out the two heights: the tangent line reaches the blue point at 3.283, the estimate 3 plus d f, and the curve reaches the orange point at 3.293, the exact value of f at the moved point. A callout labels the gap between the two points as delta f minus d f equals 0.01. A legend below the picture names the curve, the tangent line, and the two marked values.     "
},
{
  "id": "sec-tp-linearization",
  "level": "1",
  "url": "sec-tp-linearization.html",
  "type": "Subsection",
  "number": "4.6.4",
  "title": "Linearizing <span class=\"process-math\">\\(z = f(x,y)\\)<\/span>",
  "body": " Linearizing  Before generalizing to two variables, recall how a differentiable function is approximated near a point by its tangent line. This line passes through with slope , so it is the graph of the linear function As shows, matches both the value and the slope of at , so its graph hugs the curve nearby.   The tangent line approximates near .    The graph of a curve y equals f of x and its tangent line at the point x0. The tangent line passes through the point P0 with coordinates x0, f of x0, matching both the height and the slope of the curve there.     x0 = 2.5  fx(x) = exp(0.35*x)          x  y   y=f(x)     L(x)   x_0  f(x_0)  P_0              The same idea extends to a function of two variables . Near a point on the surface, the tangent plane plays the role that the tangent line played above, and the single slope is replaced by the two partial derivatives and — one for the rate of change in each coordinate direction. The resulting linear approximation is called the linearization of , defined as follows.    The linearization of a differentiable function at a point is the function The linearized function can be used as an approximation for near .    Note that solving for gives exactly : the graph of the linearization is the tangent plane to the surface at .   Linear Approximation of a Function   Consider the function . Approximate near the point with a linear function .    We use the equation of the tangent plane at as a linear approximation for the surface, as follows. First we evaluate and its partial derivatives at the point: Then, by ,  shows the graph of together with the graph of , which is the tangent plane patch at .     The graph of and the tangent plane at , whose equation is . The view is close in on , where the plane hugs the surface, so that approximates ; farther out the surface curves away from the plane. The arrow at is the normal direction to the surface.    A blue mesh surface, the graph of z equals negative 2 x squared minus 2 x y cubed minus 2 x, seen close up around the point P 0. A flat dark red patch of the tangent plane z equals L of x y cuts through the mesh, touching it at the green point P 0 with coordinates negative one half, negative one half, three eighths: near P 0 the patch and the surface are indistinguishable, while away from P 0 the surface curves down and away from the flat patch. A long black arrow leaves P 0 at right angles to the patch, showing the normal direction to the surface there. A legend below the picture names the surface, the tangent plane, the point P 0, and the normal direction.      "
},
{
  "id": "fig-tp-linearization-1d",
  "level": "2",
  "url": "sec-tp-linearization.html#fig-tp-linearization-1d",
  "type": "Figure",
  "number": "4.6.11",
  "title": "",
  "body": " The tangent line approximates near .    The graph of a curve y equals f of x and its tangent line at the point x0. The tangent line passes through the point P0 with coordinates x0, f of x0, matching both the height and the slope of the curve there.     x0 = 2.5  fx(x) = exp(0.35*x)          x  y   y=f(x)     L(x)   x_0  f(x_0)  P_0             "
},
{
  "id": "sec-tp-linearization-4",
  "level": "2",
  "url": "sec-tp-linearization.html#sec-tp-linearization-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent plane linearization "
},
{
  "id": "def-tp-linearization",
  "level": "2",
  "url": "sec-tp-linearization.html#def-tp-linearization",
  "type": "Definition",
  "number": "4.6.12",
  "title": "",
  "body": "  The linearization of a differentiable function at a point is the function The linearized function can be used as an approximation for near .   "
},
{
  "id": "example-tp-linearization",
  "level": "2",
  "url": "sec-tp-linearization.html#example-tp-linearization",
  "type": "Example",
  "number": "4.6.13",
  "title": "Linear Approximation of a Function.",
  "body": " Linear Approximation of a Function   Consider the function . Approximate near the point with a linear function .    We use the equation of the tangent plane at as a linear approximation for the surface, as follows. First we evaluate and its partial derivatives at the point: Then, by ,  shows the graph of together with the graph of , which is the tangent plane patch at .   "
},
{
  "id": "fig-tp-example-linearization",
  "level": "2",
  "url": "sec-tp-linearization.html#fig-tp-example-linearization",
  "type": "Figure",
  "number": "4.6.14",
  "title": "",
  "body": " The graph of and the tangent plane at , whose equation is . The view is close in on , where the plane hugs the surface, so that approximates ; farther out the surface curves away from the plane. The arrow at is the normal direction to the surface.    A blue mesh surface, the graph of z equals negative 2 x squared minus 2 x y cubed minus 2 x, seen close up around the point P 0. A flat dark red patch of the tangent plane z equals L of x y cuts through the mesh, touching it at the green point P 0 with coordinates negative one half, negative one half, three eighths: near P 0 the patch and the surface are indistinguishable, while away from P 0 the surface curves down and away from the flat patch. A long black arrow leaves P 0 at right angles to the patch, showing the normal direction to the surface there. A legend below the picture names the surface, the tangent plane, the point P 0, and the normal direction.     "
},
{
  "id": "sec-local-extrema",
  "level": "1",
  "url": "sec-local-extrema.html",
  "type": "Subsection",
  "number": "4.7.1",
  "title": "Local Maximum and Local Minimum",
  "body": " Local Maximum and Local Minimum   Local Maximum and Local Minimum   Let the domain of the function contain the point . Then      is a local minimum if for all the points in an open disk centered at .     is a local maximum if for all the points in an open disk centered at .       As the first example, consider the function . We have already studied this function and we know that it represents a paraboloid. Note that we can find a disk centered at the point such that for all the points inside the disk, as shown in , and hence by definition is a local minimum of , as shown in .   The paraboloid . Over an open disk centered at , the value is smaller than every other value of the function, so is a local minimum.     An open disk in the domain of centered at . For every point inside the disk we have , so is a local minimum.         (0,0)    f(0,0)\\le f(x,y)               The next example is the function . Note that we can find a disk centered at the point such that for all the points inside the disk and hence by definition is a local maximum of , as shown in and .   The paraboloid opens downward. Over an open disk centered at , the value is larger than every other value of the function, so is a local maximum.     The trace of the surface in the plane is the parabola , which has a maximum at the origin. By symmetry, every vertical cross-section through the origin has the same shape.     g(x) = -x^2       \\text{Local maximum}    z=-x^2               Theorem I   If has a local maximum or minimum at an interior point of its domain and if the first partial derivatives exist there, then     As an example, consider the function , which has a local minimum at . You can easily check that .   Critical Point   An interior point of the domain of a function where both and are zero or where one or both of and do not exist is a critical point of . Note that not every critical point is a local extremum.     Saddle Point   A differentiable function has a saddle point at a critical point if in every open disk centered at there are domain points where and domain points where . The corresponding point on the surface is called a saddle point of the surface.    "
},
{
  "id": "def-local-extrema",
  "level": "2",
  "url": "sec-local-extrema.html#def-local-extrema",
  "type": "Definition",
  "number": "4.7.1",
  "title": "Local Maximum and Local Minimum.",
  "body": " Local Maximum and Local Minimum   Let the domain of the function contain the point . Then      is a local minimum if for all the points in an open disk centered at .     is a local maximum if for all the points in an open disk centered at .      "
},
{
  "id": "fig-local-min-video",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-min-video",
  "type": "Figure",
  "number": "4.7.2",
  "title": "",
  "body": " The paraboloid . Over an open disk centered at , the value is smaller than every other value of the function, so is a local minimum.   "
},
{
  "id": "fig-local-min-disk",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-min-disk",
  "type": "Figure",
  "number": "4.7.3",
  "title": "",
  "body": " An open disk in the domain of centered at . For every point inside the disk we have , so is a local minimum.         (0,0)    f(0,0)\\le f(x,y)              "
},
{
  "id": "fig-local-max-video",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-max-video",
  "type": "Figure",
  "number": "4.7.4",
  "title": "",
  "body": " The paraboloid opens downward. Over an open disk centered at , the value is larger than every other value of the function, so is a local maximum.   "
},
{
  "id": "fig-local-max-trace",
  "level": "2",
  "url": "sec-local-extrema.html#fig-local-max-trace",
  "type": "Figure",
  "number": "4.7.5",
  "title": "",
  "body": " The trace of the surface in the plane is the parabola , which has a maximum at the origin. By symmetry, every vertical cross-section through the origin has the same shape.     g(x) = -x^2       \\text{Local maximum}    z=-x^2             "
},
{
  "id": "thm-first-derivative-test",
  "level": "2",
  "url": "sec-local-extrema.html#thm-first-derivative-test",
  "type": "Theorem",
  "number": "4.7.6",
  "title": "Theorem I.",
  "body": " Theorem I   If has a local maximum or minimum at an interior point of its domain and if the first partial derivatives exist there, then    "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-local-extrema.html#def-critical-point",
  "type": "Definition",
  "number": "4.7.7",
  "title": "Critical Point.",
  "body": " Critical Point   An interior point of the domain of a function where both and are zero or where one or both of and do not exist is a critical point of . Note that not every critical point is a local extremum.   "
},
{
  "id": "def-saddle-point",
  "level": "2",
  "url": "sec-local-extrema.html#def-saddle-point",
  "type": "Definition",
  "number": "4.7.8",
  "title": "Saddle Point.",
  "body": " Saddle Point   A differentiable function has a saddle point at a critical point if in every open disk centered at there are domain points where and domain points where . The corresponding point on the surface is called a saddle point of the surface.   "
},
{
  "id": "sec-saddle-example",
  "level": "1",
  "url": "sec-saddle-example.html",
  "type": "Subsection",
  "number": "4.7.2",
  "title": "A Saddle Point Example",
  "body": " A Saddle Point Example   Saddle Point   Consider the function   Show that has a saddle point at .     Solution  As we previously studied, this function represents a hyperbolic paraboloid, which is shown in . Note that the first partial derivatives are   The partial derivatives exist everywhere, so the only point at which a local extremum can occur is the point . Note that along the -axis the function takes negative values, , whereas along the -axis the function takes positive values, , as shown in . Hence inside every open disk around , there are points such that and also there are points such that , which means is a saddle point. Note that in this example the two partial derivatives are zero at ; however, the function does not have a local extremum at this point.    The hyperbolic paraboloid . Along the -axis the surface falls below the origin, and along the -axis it rises above the origin, so is a saddle point.     The traces of along the two coordinate planes. In the plane the trace opens downward, while in the plane the trace opens upward, so is a saddle point.     up(t) = t^2\/3  down(t) = -t^2\/3        z=\\dfrac{y^2}{3}    z=-\\dfrac{x^2}{3}               "
},
{
  "id": "example-saddle-point",
  "level": "2",
  "url": "sec-saddle-example.html#example-saddle-point",
  "type": "Example",
  "number": "4.7.9",
  "title": "Saddle Point.",
  "body": " Saddle Point   Consider the function   Show that has a saddle point at .   "
},
{
  "id": "fig-saddle-video",
  "level": "2",
  "url": "sec-saddle-example.html#fig-saddle-video",
  "type": "Figure",
  "number": "4.7.10",
  "title": "",
  "body": " The hyperbolic paraboloid . Along the -axis the surface falls below the origin, and along the -axis it rises above the origin, so is a saddle point.   "
},
{
  "id": "fig-saddle-traces",
  "level": "2",
  "url": "sec-saddle-example.html#fig-saddle-traces",
  "type": "Figure",
  "number": "4.7.11",
  "title": "",
  "body": " The traces of along the two coordinate planes. In the plane the trace opens downward, while in the plane the trace opens upward, so is a saddle point.     up(t) = t^2\/3  down(t) = -t^2\/3        z=\\dfrac{y^2}{3}    z=-\\dfrac{x^2}{3}              "
},
{
  "id": "sec-second-derivative-test",
  "level": "1",
  "url": "sec-second-derivative-test.html",
  "type": "Subsection",
  "number": "4.7.3",
  "title": "The Second Derivative Test",
  "body": " The Second Derivative Test   Theorem II (The Second Derivative Test)   Suppose that and its first and second partial derivatives are continuous throughout a disk centered at and that . Then      has a local maximum at if and at .     has a local minimum at if and at .     has a saddle point at if at .     The test is inconclusive at if at . In this case, we must find some other way to determine the behavior of at .       Note that the expression is called the discriminant or the Hessian of the function and can be easily remembered when written in the following form:    Finding Local Extrema and Saddle Points   Find the local maximum and minimum values and saddle points of the function      Solution  We begin by computing the partial derivatives:   We set both partials equal to zero, which gives us:   To solve these equations, we substitute the second equation into the first one:   Therefore, the two partials are zero at the points , , and , as shown in . Next we compute the Hessian and apply the second derivative test. We have , , and , so that   We now evaluate the Hessian at each critical point:      the origin is a saddle point.     and is a local minimum.     and is a local minimum.     Check out the surface in .    The surface has a saddle point at and two local minima, at and .     The critical points of are the intersections of the curves and : a saddle point at and local minima at and .     c1(t) = (t, t^3)  c2(t) = (t^3, t)       (0,0)    (1,1)    (-1,-1)    y=x^3    x=y^3                  Shortest Distance to a Plane   Find the shortest distance from the point to the plane .     Solution  We begin by writing the distance between the point and points on the plane:   Then we use the fact that the points are on the plane, , to express the distance as a function of and only:   We make the observation that to find the shortest distance we can minimize rather than :   We calculate the partials and set them equal to zero:   We subtract the first equation from the second one:   We compute the Hessian :   Since and , the point is a local minimum. However, we know that there is a point on the plane that has the shortest distance to , which means is in fact where the absolute minimum of the distance occurs. To find the shortest distance we plug the point into the distance formula, which gives    "
},
{
  "id": "thm-second-derivative-test",
  "level": "2",
  "url": "sec-second-derivative-test.html#thm-second-derivative-test",
  "type": "Theorem",
  "number": "4.7.12",
  "title": "Theorem II (The Second Derivative Test).",
  "body": " Theorem II (The Second Derivative Test)   Suppose that and its first and second partial derivatives are continuous throughout a disk centered at and that . Then      has a local maximum at if and at .     has a local minimum at if and at .     has a saddle point at if at .     The test is inconclusive at if at . In this case, we must find some other way to determine the behavior of at .      "
},
{
  "id": "sec-second-derivative-test-3",
  "level": "2",
  "url": "sec-second-derivative-test.html#sec-second-derivative-test-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discriminant Hessian "
},
{
  "id": "example-quartic-extrema",
  "level": "2",
  "url": "sec-second-derivative-test.html#example-quartic-extrema",
  "type": "Example",
  "number": "4.7.13",
  "title": "Finding Local Extrema and Saddle Points.",
  "body": " Finding Local Extrema and Saddle Points   Find the local maximum and minimum values and saddle points of the function    "
},
{
  "id": "fig-quartic-video",
  "level": "2",
  "url": "sec-second-derivative-test.html#fig-quartic-video",
  "type": "Figure",
  "number": "4.7.14",
  "title": "",
  "body": " The surface has a saddle point at and two local minima, at and .   "
},
{
  "id": "fig-quartic-critical-points",
  "level": "2",
  "url": "sec-second-derivative-test.html#fig-quartic-critical-points",
  "type": "Figure",
  "number": "4.7.15",
  "title": "",
  "body": " The critical points of are the intersections of the curves and : a saddle point at and local minima at and .     c1(t) = (t, t^3)  c2(t) = (t^3, t)       (0,0)    (1,1)    (-1,-1)    y=x^3    x=y^3                "
},
{
  "id": "example-shortest-distance",
  "level": "2",
  "url": "sec-second-derivative-test.html#example-shortest-distance",
  "type": "Example",
  "number": "4.7.16",
  "title": "Shortest Distance to a Plane.",
  "body": " Shortest Distance to a Plane   Find the shortest distance from the point to the plane .   "
},
{
  "id": "sec-absolute-extrema",
  "level": "1",
  "url": "sec-absolute-extrema.html",
  "type": "Subsection",
  "number": "4.7.4",
  "title": "Absolute Maximum and Absolute Minimum",
  "body": " Absolute Maximum and Absolute Minimum  In the next example, we will see how to find absolute extrema of a function over a closed bounded region .   Absolute Extrema over a Rectangle   Find the absolute maximum and minimum values of the function on the rectangle      Solution   Step (I): We begin by finding the critical points of that are also in the set :   Therefore, the only critical point is , with .   Step (II): We find the extreme values of on the boundary of , i.e. along the four edges of the rectangle denoted by , , , and , shown in .     Along the first edge , we have and since , the minimum value is and the maximum value is .    Along the second edge , we have and since , the minimum value is and the maximum value is .    Along the third edge , we have and since , the minimum value is and the maximum value is .    Along the fourth edge , we have and since , the minimum value is and the maximum value is .      Step (III): We compare the values obtained in the previous steps. The absolute maximum value of on the rectangle is and its absolute minimum is . The candidate points and the surface are shown in and .    The closed bounded rectangle with its four edges , , , and , and the critical point in its interior.     The rectangle and its four edges. To find the absolute extrema, we evaluate at the critical points inside and compare with the extreme values of along each edge.             (1,1)    R    L_1    L_2    L_3    L_4    3    2                   The surface over the rectangle . The absolute maximum and the absolute minimum occur on the boundary of .     The candidate points for the absolute extrema of on : the interior critical point and the extreme points found along the four edges. Comparing the values of , the absolute maximum is and the absolute minimum is .         f=0    f=0    f=9    f=4    f=1    f=1                   "
},
{
  "id": "example-absolute-extrema",
  "level": "2",
  "url": "sec-absolute-extrema.html#example-absolute-extrema",
  "type": "Example",
  "number": "4.7.17",
  "title": "Absolute Extrema over a Rectangle.",
  "body": " Absolute Extrema over a Rectangle   Find the absolute maximum and minimum values of the function on the rectangle    "
},
{
  "id": "fig-rectangle-region-video",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-rectangle-region-video",
  "type": "Figure",
  "number": "4.7.18",
  "title": "",
  "body": " The closed bounded rectangle with its four edges , , , and , and the critical point in its interior.   "
},
{
  "id": "fig-rectangle-region",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-rectangle-region",
  "type": "Figure",
  "number": "4.7.19",
  "title": "",
  "body": " The rectangle and its four edges. To find the absolute extrema, we evaluate at the critical points inside and compare with the extreme values of along each edge.             (1,1)    R    L_1    L_2    L_3    L_4    3    2                 "
},
{
  "id": "fig-absolute-extrema-surface-video",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-absolute-extrema-surface-video",
  "type": "Figure",
  "number": "4.7.20",
  "title": "",
  "body": " The surface over the rectangle . The absolute maximum and the absolute minimum occur on the boundary of .   "
},
{
  "id": "fig-absolute-candidates",
  "level": "2",
  "url": "sec-absolute-extrema.html#fig-absolute-candidates",
  "type": "Figure",
  "number": "4.7.21",
  "title": "",
  "body": " The candidate points for the absolute extrema of on : the interior critical point and the extreme points found along the four edges. Comparing the values of , the absolute maximum is and the absolute minimum is .         f=0    f=0    f=9    f=4    f=1    f=1                  "
},
{
  "id": "sec-equilibrium-stability",
  "level": "1",
  "url": "sec-equilibrium-stability.html",
  "type": "Subsection",
  "number": "4.7.5",
  "title": "A Physical Application: Equilibrium and Stability",
  "body": " A Physical Application: Equilibrium and Stability  Consider a marble that rolls on the surface under the influence of gravity. If we measure heights from the -plane, the potential energy of the marble at the point of the surface is where is the mass of the marble and is the acceleration due to gravity. The marble is in equilibrium at a point where the force along the surface vanishes, which happens exactly where both partial derivatives of the potential energy are zero:   In other words, the equilibrium points of the marble are precisely the critical points of . The second derivative test then tells us whether the equilibrium is stable (a displaced marble rolls back) or unstable (a displaced marble rolls away).   Equilibrium and Stability of a Marble   A marble rests at the origin on each of the following three surfaces:   Show that is an equilibrium point in each case, and determine whether the equilibrium is stable or unstable.     Solution  In each case the potential energy is , so by the equilibrium points are the critical points of . For all three surfaces we have , so the origin is an equilibrium point in each case. We classify each equilibrium with the second derivative test, as shown in .   Case (i): For we have and , so and , and the origin is a local minimum of the potential energy. A marble displaced slightly in any direction rolls back toward the bottom: the equilibrium is stable .   Case (ii): For we have and , so and , and the origin is a local maximum of the potential energy. A marble displaced slightly in any direction rolls away from the top: the equilibrium is unstable .   Case (iii): For we have , , and , so , and the origin is a saddle point. Along the -axis the potential energy rises, so a marble displaced in the -direction rolls back; but along the -axis the potential energy falls, so a marble displaced in the -direction rolls away. Since some displacements grow, the equilibrium is unstable .  The general principle illustrated by this example, shown in , is that an equilibrium is stable exactly when the potential energy has a local minimum there.    A marble at an equilibrium point on each of the three surfaces. On the bowl a displaced marble rolls back (stable); on the dome it rolls away (unstable); on the saddle it rolls back along the -direction but away along the -direction (unstable).     Cross-sections of the potential energy near an equilibrium point. Along a direction where has a minimum (blue), the force is restoring and pushes the marble back: stable. Along a direction where has a maximum (red), the force pushes the marble away: unstable. For the bowl, every cross-section is the blue type; for the dome, every cross-section is the red type; a saddle has one of each.     stable(x) = 0.9*x^2  unstable(x) = -0.9*x^2            \\text{stable}    \\text{unstable}    U                   "
},
{
  "id": "sec-equilibrium-stability-2",
  "level": "2",
  "url": "sec-equilibrium-stability.html#sec-equilibrium-stability-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium "
},
{
  "id": "sec-equilibrium-stability-3",
  "level": "2",
  "url": "sec-equilibrium-stability.html#sec-equilibrium-stability-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "example-marble-stability",
  "level": "2",
  "url": "sec-equilibrium-stability.html#example-marble-stability",
  "type": "Example",
  "number": "4.7.22",
  "title": "Equilibrium and Stability of a Marble.",
  "body": " Equilibrium and Stability of a Marble   A marble rests at the origin on each of the following three surfaces:   Show that is an equilibrium point in each case, and determine whether the equilibrium is stable or unstable.   "
},
{
  "id": "fig-stability-video",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-stability-video",
  "type": "Figure",
  "number": "4.7.23",
  "title": "",
  "body": " A marble at an equilibrium point on each of the three surfaces. On the bowl a displaced marble rolls back (stable); on the dome it rolls away (unstable); on the saddle it rolls back along the -direction but away along the -direction (unstable).   "
},
{
  "id": "fig-stability-cross-sections",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-stability-cross-sections",
  "type": "Figure",
  "number": "4.7.24",
  "title": "",
  "body": " Cross-sections of the potential energy near an equilibrium point. Along a direction where has a minimum (blue), the force is restoring and pushes the marble back: stable. Along a direction where has a maximum (red), the force pushes the marble away: unstable. For the bowl, every cross-section is the blue type; for the dome, every cross-section is the red type; a saddle has one of each.     stable(x) = 0.9*x^2  unstable(x) = -0.9*x^2            \\text{stable}    \\text{unstable}    U                  "
},
{
  "id": "sec-why-second-derivative-test",
  "level": "1",
  "url": "sec-why-second-derivative-test.html",
  "type": "Subsection",
  "number": "4.7.6",
  "title": "Why the Second Derivative Test Works",
  "body": " Why the Second Derivative Test Works  Where do the conditions of come from? The key idea is to take the directional derivative twice . At a critical point every direction looks flat to the first derivative, so we ask the second derivative how the surface curves as we walk away from the point in each direction. The video in animates the argument; the equations that appear in it are derived in detail below.   Slicing a surface through a critical point in a rotating unit direction . The second directional derivative is the curvature of the slice: one sign for all directions gives a local extremum, both signs give a saddle point, and completing the square shows that the discriminant decides between the two.      Slicing the surface in a direction  Suppose has continuous first and second partial derivatives near a critical point , so that . Fix a unit vector and walk away from the critical point along the line through in the direction of . The height of the surface above this line is the single-variable function which is exactly the slice of the surface cut by the vertical plane through containing . In the video this slice is the highlighted curve, drawn green where it curves upward and red where it curves downward.     The first directional derivative  By the chain rule, with and (so that and ),   This is the ordinary directional derivative of in the direction . At the critical point, for every choice of : each slice has a horizontal tangent line at . This is why the first derivative alone cannot distinguish a minimum from a maximum from a saddle, and why we must differentiate once more.     The second directional derivative  Apply to the function . Differentiating with the chain rule again, and using the equality of the mixed partials ( , which holds because the second partials are continuous),   The number is the curvature of the slice at the critical point: if it is positive the slice is concave up in the direction , and if it is negative the slice is concave down. By the single-variable second derivative test applied to , the critical point is     a local minimum if for every direction ,    a local maximum if for every direction ,    a saddle point if is positive for some directions and negative for others, since the surface then rises along some lines through and falls along others.     Writing , equation becomes a function of the direction angle, which is the curve plotted against in the video. For it is the constant (always positive: a minimum); for it is the constant (always negative: a maximum); and for it equals , which changes sign four times as makes a full turn: a saddle point.     Completing the square: the discriminant appears  Checking the sign of one direction at a time is impossible; there are infinitely many directions. Instead, suppose , multiply by , and complete the square in :   (Expanding the square in reproduces the first line: the cross terms match, and the produced by the square is subtracted off again by the second term.) Every quantity on the right-hand side is now a perfect square except the coefficient the discriminant (the Hessian determinant of ). The sign of in every direction at once is therefore controlled by just the two numbers and , evaluated at the critical point.     Reading off the four cases      Case . The right-hand side of is a sum of two nonnegative terms, and it cannot vanish: if then and the first term is , while if the second term is positive. Hence for every direction, so has the same sign as  in every direction. (Note forces , since would give .) If , every slice is concave up and is a local minimum; if , every slice is concave down and is a local maximum.     Case . The two terms in now compete. If , taking gives , while choosing proportional to kills the perfect square and gives . So takes both signs and is a saddle point. (If and , run the same argument with the roles of and exchanged; if , then means , and visibly changes sign between the directions where and where .)     Case . Equation degenerates to a single perfect square, which vanishes along the direction proportional to . In that direction the second derivative gives no information, and the behavior of is decided by higher-order terms: the test is inconclusive .     These are precisely conditions (i) (iv) of . One technical remark: the argument above examines only straight-line slices through , which by itself is not quite enough (a function can increase along every line yet fail to have a local minimum). The full proof replaces near by its second-order Taylor expansion; continuity of the second partials guarantees that when the quadratic form keeps its sign uniformly on a small disk around , which upgrades the line-by-line conclusion to a genuine local one.   "
},
{
  "id": "fig-why-sdt-video",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#fig-why-sdt-video",
  "type": "Figure",
  "number": "4.7.25",
  "title": "",
  "body": " Slicing a surface through a critical point in a rotating unit direction . The second directional derivative is the curvature of the slice: one sign for all directions gives a local extremum, both signs give a saddle point, and completing the square shows that the discriminant decides between the two.   "
},
{
  "id": "sec-why-second-derivative-test-4-2",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#sec-why-second-derivative-test-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice "
},
{
  "id": "sec-why-second-derivative-test-6-3",
  "level": "2",
  "url": "sec-why-second-derivative-test.html#sec-why-second-derivative-test-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvature of the slice "
},
{
  "id": "sec-lagrange-method",
  "level": "1",
  "url": "sec-lagrange-method.html",
  "type": "Subsection",
  "number": "4.8.1",
  "title": "The Method of Lagrange Multipliers",
  "body": " The Method of Lagrange Multipliers   Why the Gradients Must Be Collinear  The set of points satisfying the constraint is a curve in the plane: it is precisely the level curve of of value . We showed in that the gradient of a function is perpendicular to its level curves, so at every point of where , where is a unit vector tangent to at that point. To stay on the curve, any small motion away from the point must be along the tangent direction .  How does change as we move along ? By , the rate of change of in the direction of the unit tangent vector is the directional derivative If at a point of , as in , then the motion along the curve has a component along : the value of increases as we move along in the direction of and decreases as we move in the direction of . Such a point cannot be a constrained maximum or minimum.   A point of the constraint curve that is not a constrained extremum. The gradient is perpendicular to the curve by , but is not: it has a nonzero component (dashed) along the tangent direction , so is still changing as we move along the curve.     c(t) = (1.4*t, 1.1*sin(t))            P    g(x,y)=0    \\hat{T}    \\nabla g    \\nabla f                  At a constrained local maximum or minimum, then, a small motion along the curve must not produce any change in : the rate of change must vanish, so Now compare and : at a constrained extremum, the tangent vector is perpendicular to both gradients and . In the plane, all vectors perpendicular to the nonzero vector lie on a single line, so and must be collinear (parallel). Phrased differently, there exists some number such that    explains the condition by superposing the constraint curve onto the family of level curves of , that is, the collection of curves , where is a real number in the range of . In the figure, . Imagine a point moving along the constraint curve from to . Initially, the motion has a component along the negative gradient direction , so the value of decreases. This component becomes smaller and smaller. When the moving point reaches , the motion is perpendicular to . From that point on, the motion has a component along the gradient direction , so the value of increases. Thus at the function achieves a local minimum on the constraint curve, namely the value . The motion is in the tangential direction of the constraint curve, which is perpendicular to ; therefore at the two gradients and are collinear, which is what says. Since both curves are perpendicular to the same line at , the level curve and the constraint curve are tangent at .   The constraint curve superposed on the family of level curves of , with . At the constrained minimum , the level curve is tangent to the constraint curve and the two gradients are collinear: . Here they point in opposite directions, so ; it is only the collinearity that matters.     c1(t) = (1.0*cos(t), 1.0*sin(t))  cs(t) = (1.5*cos(t), 1.5*sin(t))  c3(t) = (2.0*cos(t), 2.0*sin(t))  c4(t) = (2.5*cos(t), 2.5*sin(t))  c5(t) = (3.0*cos(t), 3.0*sin(t))  gc(t) = (t, -1.5 - 0.25*t^2)            (x_1,y_1)    (x_2,y_2)    (x^*,y^*)    f=c_1    f=c^*    f=c_3    f=c_4    f=c_5    g(x,y)=0    \\nabla f    \\nabla g                      , set moving. A point travels along the constraint curve from to carrying the unit tangent (blue) and (red); the shaded band on is the component of along the direction of travel, and the gauge beside the picture reads off the value of . The component is negative and shrinking on the way in, zero at , and positive on the way out, so falls to the constrained minimum and rises again. Since is perpendicular to as well, the two gradients are collinear there, , and the level curve is tangent to the constraint curve.    Suppose we find the set of points satisfying the two equations Then contains the local extrema of subject to the constraint . The same reasoning applies to functions of three variables: there the constraint defines a level surface of , the gradient is perpendicular to that surface, and at a constrained extremum can have no component tangent to the surface, so once again and must be collinear.     Stating the Method   The Method of Lagrange Multipliers   Let and be differentiable functions. To find the local maximum and minimum values of subject to the constraint , find the values of , , , and that simultaneously satisfy the equations For functions of two variables and , the same equations apply, with the variable omitted.    The number is called a Lagrange multiplier . The equation is a vector equation, so it holds component by component; together with the constraint it gives four equations in the four unknowns , , , (three equations in , , for functions of two variables). Notice that we are usually not interested in the value of itself: it is an auxiliary unknown that we eliminate along the way while solving for the coordinates of the candidate points.   "
},
{
  "id": "fig-lagrange-tangent",
  "level": "2",
  "url": "sec-lagrange-method.html#fig-lagrange-tangent",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": " A point of the constraint curve that is not a constrained extremum. The gradient is perpendicular to the curve by , but is not: it has a nonzero component (dashed) along the tangent direction , so is still changing as we move along the curve.     c(t) = (1.4*t, 1.1*sin(t))            P    g(x,y)=0    \\hat{T}    \\nabla g    \\nabla f                 "
},
{
  "id": "fig-lagrange-level-curves",
  "level": "2",
  "url": "sec-lagrange-method.html#fig-lagrange-level-curves",
  "type": "Figure",
  "number": "4.8.2",
  "title": "",
  "body": " The constraint curve superposed on the family of level curves of , with . At the constrained minimum , the level curve is tangent to the constraint curve and the two gradients are collinear: . Here they point in opposite directions, so ; it is only the collinearity that matters.     c1(t) = (1.0*cos(t), 1.0*sin(t))  cs(t) = (1.5*cos(t), 1.5*sin(t))  c3(t) = (2.0*cos(t), 2.0*sin(t))  c4(t) = (2.5*cos(t), 2.5*sin(t))  c5(t) = (3.0*cos(t), 3.0*sin(t))  gc(t) = (t, -1.5 - 0.25*t^2)            (x_1,y_1)    (x_2,y_2)    (x^*,y^*)    f=c_1    f=c^*    f=c_3    f=c_4    f=c_5    g(x,y)=0    \\nabla f    \\nabla g                   "
},
{
  "id": "fig-lagrange-collinear-video",
  "level": "2",
  "url": "sec-lagrange-method.html#fig-lagrange-collinear-video",
  "type": "Figure",
  "number": "4.8.3",
  "title": "",
  "body": "  , set moving. A point travels along the constraint curve from to carrying the unit tangent (blue) and (red); the shaded band on is the component of along the direction of travel, and the gauge beside the picture reads off the value of . The component is negative and shrinking on the way in, zero at , and positive on the way out, so falls to the constrained minimum and rises again. Since is perpendicular to as well, the two gradients are collinear there, , and the level curve is tangent to the constraint curve.   "
},
{
  "id": "thm-lagrange-multipliers",
  "level": "2",
  "url": "sec-lagrange-method.html#thm-lagrange-multipliers",
  "type": "Theorem",
  "number": "4.8.4",
  "title": "The Method of Lagrange Multipliers.",
  "body": " The Method of Lagrange Multipliers   Let and be differentiable functions. To find the local maximum and minimum values of subject to the constraint , find the values of , , , and that simultaneously satisfy the equations For functions of two variables and , the same equations apply, with the variable omitted.   "
},
{
  "id": "subsec-lagrange-statement-3",
  "level": "2",
  "url": "sec-lagrange-method.html#subsec-lagrange-statement-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange multiplier "
},
{
  "id": "sec-lagrange-examples",
  "level": "1",
  "url": "sec-lagrange-examples.html",
  "type": "Subsection",
  "number": "4.8.2",
  "title": "Examples: Functions of Two Variables",
  "body": " Examples: Functions of Two Variables    Extrema on an Ellipse  In the first example, we find the greatest and smallest values of a function whose domain is restricted to a curve in the plane, namely an ellipse.   Extrema of on an Ellipse   Find the greatest and smallest values that the function takes over the ellipse     If we picture the graph of , a saddle-shaped surface, then restricting the inputs to the ellipse traces a curve on that surface, and we are after the highest and lowest points of this curve. We wish to find the extrema of subject to the constraint , written in the form required by :   To apply we begin by computing the gradients of both functions:   The Lagrange multiplier equation gives After substituting into , we get After plugging into the constraint equation we get Note that is another solution of ; however, when , from we know that , and the point does not satisfy the constraint equation, i.e. .  Therefore there are four local extrema: Since the ellipse is a closed and bounded curve and is continuous, attains its absolute extrema over the ellipse, and they are among these four values. The absolute maximum of over the ellipse is and its absolute minimum is .   shows the constraint ellipse together with several level curves of : the hyperbolas , with increasing as the curves move away from the origin. Exactly as promised by , the level curves and are tangent to the ellipse at the four extremal points, and at each of them and are collinear. For instance, at we have and , so , matching the multiplier .     The ellipse and the level curves of . The hyperbolas are tangent to the ellipse at the four extremal points, where . The two gradients are drawn at all four points: at the maxima they point the same way ( ), and at the minima they point in opposite directions ( ). Where they overlap, the two arrows are drawn slightly apart so both are visible.     el(t) = (2.8284*cos(t), 1.4142*sin(t))  h2a(t) = (t, 2\/t)  h2b(t) = (t, -2\/t)  h1a(t) = (t, 1\/t)  h1b(t) = (t, -1\/t)                      (2,1)    (-2,-1)    (-2,1)    (2,-1)    xy=2    xy=-2    xy=1    \\frac{x^2}{8}+\\frac{y^2}{2}=1    \\nabla f    \\nabla g                              Absolute Extrema on a Circle   Absolute Extrema on a Circle   Find the absolute maximum and minimum of , given the constraint .    Completing the squares shows that so the graph of is a paraboloid with vertex at . The constraint can be thought of as , which is a circle of radius centered at the origin in the -plane. Restricting to this circle traces a curve on the paraboloid, and the goal is to find the highest and lowest points of that curve. By , the level curves of are the circles centered at , and we are looking for the smallest and largest values of for which the level curve still meets the constraint circle; as shows, at those values the two circles are tangent and the gradients are collinear, .  We compute the gradients: The Lagrange multiplier equation gives Adding the two equations yields This equation is satisfied if or if . The case is impossible, since substituting it into gives . Hence , which we substitute into the constraint:   Therefore the solutions are and . Using , Since the circle is closed and bounded and is continuous, these are the absolute extrema: is the absolute minimum and is the absolute maximum.  The answer agrees with the geometry of : on the constraint circle, equals plus the square of the distance to the point . The point of the circle farthest from is , at distance , giving , and the nearest point is , at distance , giving . Note also that in the gradients and point in the same direction at both extrema, but with different multipliers: from , we get at the minimum and at the maximum.  The video below animates this picture. The completed-square form shows that, with no constraint, would take its least possible value at the vertex —the bottom of the paraboloid. But that vertex lies inside the constraint circle (a distance from the origin), so it is not available to us here: the method of Lagrange multipliers instead locates the highest and lowest points of  along the circle. As the level circles of expand outward from , the first one to reach the constraint circle gives the constrained minimum and the last gives the maximum ; at each of these contacts the two circles are tangent and is parallel to .   The extrema of on the constraint circle (green). Over that circle the paraboloid carries the light blue curve, and we are after its highest and lowest points. The level circles of (red), centered at the vertex where , expand until they touch the constraint circle; the first contact is the constrained minimum and the last is the maximum , and at both the gradients and line up, .       The constraint circle and three level curves of , which are circles centered at . The extreme level curves are tangent to the constraint circle, while an intermediate level curve (dashed) crosses it. At each point of tangency .     cc(t) = (2*cos(t), 2*sin(t))  lmin(t) = (1 + 0.5858*cos(t), -1 + 0.5858*sin(t))  lmax(t) = (1 + 3.4142*cos(t), -1 + 3.4142*sin(t))  lmid(t) = (1 + 2*cos(t), -1 + 2*sin(t))                (1,-1)    (-\\sqrt 2,\\sqrt 2)      (\\sqrt 2,-\\sqrt 2)    x^2+y^2=4    f=9+4\\sqrt 2    f=9-4\\sqrt 2    f=7    \\nabla f    \\nabla g    \\nabla f    \\nabla g                        "
},
{
  "id": "example-lagrange-ellipse",
  "level": "2",
  "url": "sec-lagrange-examples.html#example-lagrange-ellipse",
  "type": "Example",
  "number": "4.8.5",
  "title": "Extrema of <span class=\"process-math\">\\(f(x,y) = xy\\)<\/span> on an Ellipse.",
  "body": " Extrema of on an Ellipse   Find the greatest and smallest values that the function takes over the ellipse     If we picture the graph of , a saddle-shaped surface, then restricting the inputs to the ellipse traces a curve on that surface, and we are after the highest and lowest points of this curve. We wish to find the extrema of subject to the constraint , written in the form required by :   To apply we begin by computing the gradients of both functions:   The Lagrange multiplier equation gives After substituting into , we get After plugging into the constraint equation we get Note that is another solution of ; however, when , from we know that , and the point does not satisfy the constraint equation, i.e. .  Therefore there are four local extrema: Since the ellipse is a closed and bounded curve and is continuous, attains its absolute extrema over the ellipse, and they are among these four values. The absolute maximum of over the ellipse is and its absolute minimum is .   shows the constraint ellipse together with several level curves of : the hyperbolas , with increasing as the curves move away from the origin. Exactly as promised by , the level curves and are tangent to the ellipse at the four extremal points, and at each of them and are collinear. For instance, at we have and , so , matching the multiplier .   "
},
{
  "id": "fig-lagrange-ellipse-prefigure",
  "level": "2",
  "url": "sec-lagrange-examples.html#fig-lagrange-ellipse-prefigure",
  "type": "Figure",
  "number": "4.8.6",
  "title": "",
  "body": " The ellipse and the level curves of . The hyperbolas are tangent to the ellipse at the four extremal points, where . The two gradients are drawn at all four points: at the maxima they point the same way ( ), and at the minima they point in opposite directions ( ). Where they overlap, the two arrows are drawn slightly apart so both are visible.     el(t) = (2.8284*cos(t), 1.4142*sin(t))  h2a(t) = (t, 2\/t)  h2b(t) = (t, -2\/t)  h1a(t) = (t, 1\/t)  h1b(t) = (t, -1\/t)                      (2,1)    (-2,-1)    (-2,1)    (2,-1)    xy=2    xy=-2    xy=1    \\frac{x^2}{8}+\\frac{y^2}{2}=1    \\nabla f    \\nabla g                          "
},
{
  "id": "example-lagrange-circle",
  "level": "2",
  "url": "sec-lagrange-examples.html#example-lagrange-circle",
  "type": "Example",
  "number": "4.8.7",
  "title": "Absolute Extrema on a Circle.",
  "body": " Absolute Extrema on a Circle   Find the absolute maximum and minimum of , given the constraint .    Completing the squares shows that so the graph of is a paraboloid with vertex at . The constraint can be thought of as , which is a circle of radius centered at the origin in the -plane. Restricting to this circle traces a curve on the paraboloid, and the goal is to find the highest and lowest points of that curve. By , the level curves of are the circles centered at , and we are looking for the smallest and largest values of for which the level curve still meets the constraint circle; as shows, at those values the two circles are tangent and the gradients are collinear, .  We compute the gradients: The Lagrange multiplier equation gives Adding the two equations yields This equation is satisfied if or if . The case is impossible, since substituting it into gives . Hence , which we substitute into the constraint:   Therefore the solutions are and . Using , Since the circle is closed and bounded and is continuous, these are the absolute extrema: is the absolute minimum and is the absolute maximum.  The answer agrees with the geometry of : on the constraint circle, equals plus the square of the distance to the point . The point of the circle farthest from is , at distance , giving , and the nearest point is , at distance , giving . Note also that in the gradients and point in the same direction at both extrema, but with different multipliers: from , we get at the minimum and at the maximum.  The video below animates this picture. The completed-square form shows that, with no constraint, would take its least possible value at the vertex —the bottom of the paraboloid. But that vertex lies inside the constraint circle (a distance from the origin), so it is not available to us here: the method of Lagrange multipliers instead locates the highest and lowest points of  along the circle. As the level circles of expand outward from , the first one to reach the constraint circle gives the constrained minimum and the last gives the maximum ; at each of these contacts the two circles are tangent and is parallel to .   The extrema of on the constraint circle (green). Over that circle the paraboloid carries the light blue curve, and we are after its highest and lowest points. The level circles of (red), centered at the vertex where , expand until they touch the constraint circle; the first contact is the constrained minimum and the last is the maximum , and at both the gradients and line up, .     "
},
{
  "id": "fig-lagrange-circle-prefigure",
  "level": "2",
  "url": "sec-lagrange-examples.html#fig-lagrange-circle-prefigure",
  "type": "Figure",
  "number": "4.8.9",
  "title": "",
  "body": " The constraint circle and three level curves of , which are circles centered at . The extreme level curves are tangent to the constraint circle, while an intermediate level curve (dashed) crosses it. At each point of tangency .     cc(t) = (2*cos(t), 2*sin(t))  lmin(t) = (1 + 0.5858*cos(t), -1 + 0.5858*sin(t))  lmax(t) = (1 + 3.4142*cos(t), -1 + 3.4142*sin(t))  lmid(t) = (1 + 2*cos(t), -1 + 2*sin(t))                (1,-1)    (-\\sqrt 2,\\sqrt 2)      (\\sqrt 2,-\\sqrt 2)    x^2+y^2=4    f=9+4\\sqrt 2    f=9-4\\sqrt 2    f=7    \\nabla f    \\nabla g    \\nabla f    \\nabla g                      "
},
{
  "id": "sec-lagrange-three-variables",
  "level": "1",
  "url": "sec-lagrange-three-variables.html",
  "type": "Subsection",
  "number": "4.8.3",
  "title": "Examples: Functions of Three Variables",
  "body": " Examples: Functions of Three Variables    Shortest Distance to a Plane  In we found the shortest distance from a point to a plane by substituting the equation of the plane into the distance function and minimizing the resulting function of two variables with the second derivative test. In the next example we solve the same problem with Lagrange multipliers, and then once more using the normal vector to the plane.   Shortest Distance to a Plane, Revisited   Find the shortest distance from the point to the plane .    We find the closest point on the plane to the point . The distance from a point to is , and, as before, minimizing the distance is the same as minimizing its square. So we minimize subject to the constraint   We compute the gradients: The Lagrange multiplier equation gives so that We substitute these into the equation of the constraint to find :   Therefore the closest point on the plane to the point is and their distance is in agreement with .    Another Solution, Using the Normal to the Plane  To find the closest point on the plane to the point , we assume that the point on the plane is the closest point to . As shows, the segment realizing the shortest distance meets the plane perpendicularly, so the vector must be parallel to the normal vector of the plane: We then substitute into the equation of the plane: and therefore the minimum distance is again .  The two solutions are closely related. At the closest point, , while . So the Lagrange condition says precisely that is parallel to the normal : the method of Lagrange multipliers rediscovers the geometry on its own.     A schematic, edge-on view of the plane and the point . The shortest segment from to the plane is along the normal vector ; the dashed segments, which reach the plane in any other direction, are longer.              P_0(1,0,-2)    P\\left(\\frac{11}{6},\\frac{5}{3},-\\frac{7}{6}\\right)    x+2y+z=4    d=\\frac{5}{6}\\sqrt{6}    \\mathbf n=\\hat{\\imath}+2\\,\\hat{\\jmath}+\\hat{k}                      Minimizing the Cost of a Box   Minimizing the cost of a box   A jewelry box is to be constructed of material that costs $1 per square inch for the bottom, $2 per square inch for the sides, and $5 per square inch for the top. If the total volume is to be , what dimensions will minimize the total cost of construction?   The box with dimensions , , : bottom and top of area , and sides of areas and .   A rectangular box drawn in three dimensions, with the horizontal edges of the base labeled x and y and the vertical edge labeled z.       Let and be the dimensions of the base and the height. The bottom costs , the top costs , and the four sides cost , so the total cost of construction is with partial derivatives The volume requirement gives the constraint with , , .  The Lagrange condition gives the system Multiplying the equations by , , respectively makes each right-hand side equal to : The first equality gives , so . The second gives , so .  Substituting and into the constraint , so . The cost is minimized by the dimensions      "
},
{
  "id": "example-lagrange-distance",
  "level": "2",
  "url": "sec-lagrange-three-variables.html#example-lagrange-distance",
  "type": "Example",
  "number": "4.8.10",
  "title": "Shortest Distance to a Plane, Revisited.",
  "body": " Shortest Distance to a Plane, Revisited   Find the shortest distance from the point to the plane .    We find the closest point on the plane to the point . The distance from a point to is , and, as before, minimizing the distance is the same as minimizing its square. So we minimize subject to the constraint   We compute the gradients: The Lagrange multiplier equation gives so that We substitute these into the equation of the constraint to find :   Therefore the closest point on the plane to the point is and their distance is in agreement with .    Another Solution, Using the Normal to the Plane  To find the closest point on the plane to the point , we assume that the point on the plane is the closest point to . As shows, the segment realizing the shortest distance meets the plane perpendicularly, so the vector must be parallel to the normal vector of the plane: We then substitute into the equation of the plane: and therefore the minimum distance is again .  The two solutions are closely related. At the closest point, , while . So the Lagrange condition says precisely that is parallel to the normal : the method of Lagrange multipliers rediscovers the geometry on its own.   "
},
{
  "id": "fig-lagrange-plane-prefigure",
  "level": "2",
  "url": "sec-lagrange-three-variables.html#fig-lagrange-plane-prefigure",
  "type": "Figure",
  "number": "4.8.11",
  "title": "",
  "body": " A schematic, edge-on view of the plane and the point . The shortest segment from to the plane is along the normal vector ; the dashed segments, which reach the plane in any other direction, are longer.              P_0(1,0,-2)    P\\left(\\frac{11}{6},\\frac{5}{3},-\\frac{7}{6}\\right)    x+2y+z=4    d=\\frac{5}{6}\\sqrt{6}    \\mathbf n=\\hat{\\imath}+2\\,\\hat{\\jmath}+\\hat{k}                  "
},
{
  "id": "exer-jewelry-box",
  "level": "2",
  "url": "sec-lagrange-three-variables.html#exer-jewelry-box",
  "type": "Checkpoint",
  "number": "4.8.12",
  "title": "Minimizing the cost of a box.",
  "body": " Minimizing the cost of a box   A jewelry box is to be constructed of material that costs $1 per square inch for the bottom, $2 per square inch for the sides, and $5 per square inch for the top. If the total volume is to be , what dimensions will minimize the total cost of construction?   The box with dimensions , , : bottom and top of area , and sides of areas and .   A rectangular box drawn in three dimensions, with the horizontal edges of the base labeled x and y and the vertical edge labeled z.       Let and be the dimensions of the base and the height. The bottom costs , the top costs , and the four sides cost , so the total cost of construction is with partial derivatives The volume requirement gives the constraint with , , .  The Lagrange condition gives the system Multiplying the equations by , , respectively makes each right-hand side equal to : The first equality gives , so . The second gives , so .  Substituting and into the constraint , so . The cost is minimized by the dimensions    "
},
{
  "id": "sec-lagrange-functions-n-variables",
  "level": "1",
  "url": "sec-lagrange-functions-n-variables.html",
  "type": "Subsection",
  "number": "4.8.4",
  "title": "Functions of <span class=\"process-math\">\\(n\\)<\/span> Variables",
  "body": " Functions of Variables    The Method in Variables  Nothing in the reasoning behind depended on the inputs being two or three numbers. The constraint still describes a set of points on which we are allowed to move; is still perpendicular to that set; and at a constrained extremum still cannot be changing along any direction we are allowed to move in, so can have no component tangent to the constraint set. As before, the only way for a vector to be perpendicular to every allowed direction is for it to point along . So the method reads the same way for any number of variables.   The Method of Lagrange Multipliers in Variables   Let and be differentiable functions of the variables . To find the local maximum and minimum values of subject to the constraint , find the values of and that simultaneously satisfy the equations     Here the gradient has components, and likewise for . Reading one component at a time turns it into which together with is a system of equations in the unknowns . For and this is exactly . The bookkeeping grows, but the strategy does not: eliminate , solve for the candidate points, and then compare the values of there.  One habit does need adjusting. In and the constraint curve was closed and bounded, so the Extreme Value Theorem guaranteed in advance that the absolute maximum and minimum existed and were among the candidate points. In variables a constraint set is often unbounded, and then no such guarantee comes for free: after solving the system we must argue separately that the point we found really is the extremum we are after. The activity below does exactly that.     An Inequality Between Two Means  Our last application of the method is not an optimization problem at first sight: it is an inequality, valid for any number of positive numbers, which turns into a constrained optimization problem as soon as the right quantity is held fixed. For positive numbers , the harmonic mean and the geometric mean You are not expected to have met these averages before, and nothing later in the course depends on them. The arithmetic mean  is the ordinary average. The geometric mean  is the number that, repeated times, has the same product : for it is the side of a square with the same area as an -by- rectangle, and it is the right average for growth factors, since an investment that grows by factors in successive years grows in total as though it had grown by the constant factor each year. The harmonic mean  is the reciprocal of the average of the reciprocals, and it is the right average for rates: drive one mile at mph and the next at mph and your average speed over the two miles is the harmonic mean mph, not the arithmetic mean mph. are The example below proves that always, with equality exactly when all the numbers are the same. If you are curious about where these two averages come from, and about what the inequality amounts to for two numbers, where it can be both checked by hand and seen in a picture, read after the example; it is optional.   The Harmonic Mean Never Exceeds the Geometric Mean   Let and let be positive real numbers. Use the method of Lagrange multipliers to prove that that is, , with equality if and only if .    The difficulty is that both sides vary at once. The remedy is to hold the right-hand side still: depends on the numbers only through their product, so it is constant on each surface where that product is constant. Write for that product, fix a constant , and work on on which at every single point. Every choice of positive numbers lies on exactly one such surface, so will be proved if we show that the largest value of on is , and that it is attained only where all the coordinates agree.  Maximizing is the same as minimizing the sum in its denominator, since with and is largest exactly where the positive quantity is smallest. So the problem to solve is: minimize subject to .  First, that minimum exists. The quantity tends to infinity as , because the reciprocal of the smallest coordinate blows up; and on no coordinate can run off to infinity without dragging another one down to zero, since the product of them all stays pinned at . Both ways of drifting off to the edges of therefore drive up without bound, so must attain an absolute minimum at some point of itself. That point is one the method of Lagrange multipliers will find, because has every entry positive on , so is never the zero vector there.  Now apply to and . Differentiating with respect to leaves the product of all the other factors, written below as , where the hat indicates that is omitted from the product. So for each , the equation reads Rearranging, by multiplying through by , restores the missing factor and leaves one spare copy of :   Now must be nonzero for to hold at all, since would read . So and the right-hand side does not depend on . Every coordinate of a Lagrange point is therefore the same, and the constraint pins down their common value: So carries exactly one Lagrange point.  Since the absolute minimum of on exists and must occur at a Lagrange point, that one point is where it occurs. There which is the promised equality. At every other point of the value of is strictly greater than this minimum—a second point achieving the minimum would be a second Lagrange point, and there is only one—so at every other point .  Finally, an arbitrary list of positive numbers lies on for , so the two conclusions of the previous paragraph say exactly that , with equality precisely when . This proves .    One last observation costs nothing and doubles the yield. Apply not to the numbers themselves but to their reciprocals . The harmonic mean of the is , where is the arithmetic mean of the , and the geometric mean of the is . So reads , that is, the celebrated inequality between the geometric and arithmetic means, again with equality exactly when all the are equal. Together with the example this establishes the full chain for any number of positive numbers—the general form of what shows for two.   For the Curious: the Two-Variable Case and a Picture  This remark is optional, and nothing later in the course depends on it. It is here for the reader curious about what the inequality just proved actually says. For two numbers it can be checked with nothing but algebra and, better, read off a single picture, along with the arithmetic mean for good measure.  For no calculus is needed at all. Write the two positive numbers as and . Then and since and we may multiply and divide freely without reversing the inequality: where the second line divides through by , using . The last line is true for every choice of and , and it is an equality exactly when , that is, when .  The middle line of that chain is worth a second look. It says , so for two numbers the statement is the very same statement as , where is the arithmetic mean. The two-variable case therefore carries the whole chain on its own, without any appeal to .  All three means can be read off a single picture, and the geometric mean is the interesting one. It comes from a fact about right triangles: the altitude drawn from the right angle to the hypotenuse is the geometric mean of the two pieces into which it cuts the hypotenuse. In the right angle is at , the altitude has length , and it splits the hypotenuse into pieces of lengths and . The two small triangles and are both similar to the whole triangle , hence to each other, so matching the short leg of one against the long leg of the other gives   Now lay the two lengths and end to end and draw the semicircle having the resulting segment as its diameter, as in . The radius is , drawn vertically at the center . Any triangle inscribed in a semicircle has a right angle at the point on the arc, so the vertical segment erected where meets is precisely the altitude of : its length is . Finally drop a perpendicular from to the radius , meeting it at . Applying a second time, now to the right triangle with its right angle at , gives , so The chain is now visible rather than computed: because a leg of the right triangle cannot exceed its hypotenuse, and for the same reason in the right triangle . Both become equalities exactly when coincides with , that is, when .    The altitude from the right angle of a right triangle is the geometric mean of the two pieces of the hypotenuse. Here the right angle is at , the altitude has length , and it cuts the hypotenuse into pieces of lengths and ; the similar triangles and give .     A=(0,0)  B=(5,0)  C=(4,2)  D=(4,0)         A  B  C  D   a    b    h=\\sqrt{ab}                     The three means of and in one picture. The semicircle has the segment of length as its diameter, so its radius is the arithmetic mean , drawn in red at the center . The vertical segment erected where meets is the altitude of the inscribed right triangle, so its length is the geometric mean , drawn in blue. The perpendicular from to the radius cuts off the piece , whose length is the harmonic mean , drawn in purple. Since a leg of a right triangle is never longer than its hypotenuse, .     P=(0,0)  Q=(5,0)  O=(2.5,0)  D=(4,0)  C=(4,2)  M=(3.04,0.72)  T=(2.5,2.5)                    C  M   O    D    a    b    A    G    H                        "
},
{
  "id": "thm-lagrange-n-variables",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#thm-lagrange-n-variables",
  "type": "Theorem",
  "number": "4.8.14",
  "title": "The Method of Lagrange Multipliers in <span class=\"process-math\">\\(n\\)<\/span> Variables.",
  "body": " The Method of Lagrange Multipliers in Variables   Let and be differentiable functions of the variables . To find the local maximum and minimum values of subject to the constraint , find the values of and that simultaneously satisfy the equations    "
},
{
  "id": "sec-lagrange-hm-gm-2",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#sec-lagrange-hm-gm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic mean geometric mean arithmetic mean geometric mean harmonic mean "
},
{
  "id": "example-lagrange-hm-gm",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#example-lagrange-hm-gm",
  "type": "Example",
  "number": "4.8.15",
  "title": "The Harmonic Mean Never Exceeds the Geometric Mean.",
  "body": " The Harmonic Mean Never Exceeds the Geometric Mean   Let and let be positive real numbers. Use the method of Lagrange multipliers to prove that that is, , with equality if and only if .    The difficulty is that both sides vary at once. The remedy is to hold the right-hand side still: depends on the numbers only through their product, so it is constant on each surface where that product is constant. Write for that product, fix a constant , and work on on which at every single point. Every choice of positive numbers lies on exactly one such surface, so will be proved if we show that the largest value of on is , and that it is attained only where all the coordinates agree.  Maximizing is the same as minimizing the sum in its denominator, since with and is largest exactly where the positive quantity is smallest. So the problem to solve is: minimize subject to .  First, that minimum exists. The quantity tends to infinity as , because the reciprocal of the smallest coordinate blows up; and on no coordinate can run off to infinity without dragging another one down to zero, since the product of them all stays pinned at . Both ways of drifting off to the edges of therefore drive up without bound, so must attain an absolute minimum at some point of itself. That point is one the method of Lagrange multipliers will find, because has every entry positive on , so is never the zero vector there.  Now apply to and . Differentiating with respect to leaves the product of all the other factors, written below as , where the hat indicates that is omitted from the product. So for each , the equation reads Rearranging, by multiplying through by , restores the missing factor and leaves one spare copy of :   Now must be nonzero for to hold at all, since would read . So and the right-hand side does not depend on . Every coordinate of a Lagrange point is therefore the same, and the constraint pins down their common value: So carries exactly one Lagrange point.  Since the absolute minimum of on exists and must occur at a Lagrange point, that one point is where it occurs. There which is the promised equality. At every other point of the value of is strictly greater than this minimum—a second point achieving the minimum would be a second Lagrange point, and there is only one—so at every other point .  Finally, an arbitrary list of positive numbers lies on for , so the two conclusions of the previous paragraph say exactly that , with equality precisely when . This proves .   "
},
{
  "id": "remark-hm-gm-two-variables",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#remark-hm-gm-two-variables",
  "type": "Remark",
  "number": "4.8.16",
  "title": "For the Curious: the Two-Variable Case and a Picture.",
  "body": " For the Curious: the Two-Variable Case and a Picture  This remark is optional, and nothing later in the course depends on it. It is here for the reader curious about what the inequality just proved actually says. For two numbers it can be checked with nothing but algebra and, better, read off a single picture, along with the arithmetic mean for good measure.  For no calculus is needed at all. Write the two positive numbers as and . Then and since and we may multiply and divide freely without reversing the inequality: where the second line divides through by , using . The last line is true for every choice of and , and it is an equality exactly when , that is, when .  The middle line of that chain is worth a second look. It says , so for two numbers the statement is the very same statement as , where is the arithmetic mean. The two-variable case therefore carries the whole chain on its own, without any appeal to .  All three means can be read off a single picture, and the geometric mean is the interesting one. It comes from a fact about right triangles: the altitude drawn from the right angle to the hypotenuse is the geometric mean of the two pieces into which it cuts the hypotenuse. In the right angle is at , the altitude has length , and it splits the hypotenuse into pieces of lengths and . The two small triangles and are both similar to the whole triangle , hence to each other, so matching the short leg of one against the long leg of the other gives   Now lay the two lengths and end to end and draw the semicircle having the resulting segment as its diameter, as in . The radius is , drawn vertically at the center . Any triangle inscribed in a semicircle has a right angle at the point on the arc, so the vertical segment erected where meets is precisely the altitude of : its length is . Finally drop a perpendicular from to the radius , meeting it at . Applying a second time, now to the right triangle with its right angle at , gives , so The chain is now visible rather than computed: because a leg of the right triangle cannot exceed its hypotenuse, and for the same reason in the right triangle . Both become equalities exactly when coincides with , that is, when .  "
},
{
  "id": "fig-hm-gm-altitude",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#fig-hm-gm-altitude",
  "type": "Figure",
  "number": "4.8.17",
  "title": "",
  "body": " The altitude from the right angle of a right triangle is the geometric mean of the two pieces of the hypotenuse. Here the right angle is at , the altitude has length , and it cuts the hypotenuse into pieces of lengths and ; the similar triangles and give .     A=(0,0)  B=(5,0)  C=(4,2)  D=(4,0)         A  B  C  D   a    b    h=\\sqrt{ab}                   "
},
{
  "id": "fig-hm-gm-semicircle",
  "level": "2",
  "url": "sec-lagrange-functions-n-variables.html#fig-hm-gm-semicircle",
  "type": "Figure",
  "number": "4.8.18",
  "title": "",
  "body": " The three means of and in one picture. The semicircle has the segment of length as its diameter, so its radius is the arithmetic mean , drawn in red at the center . The vertical segment erected where meets is the altitude of the inscribed right triangle, so its length is the geometric mean , drawn in blue. The perpendicular from to the radius cuts off the piece , whose length is the harmonic mean , drawn in purple. Since a leg of a right triangle is never longer than its hypotenuse, .     P=(0,0)  Q=(5,0)  O=(2.5,0)  D=(4,0)  C=(4,2)  M=(3.04,0.72)  T=(2.5,2.5)                    C  M   O    D    a    b    A    G    H                      "
},
{
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "5.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.      Compute .    We use with , so . Hence       Simplify .    Using the definition together with and ,       Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore       Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .      Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .    "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.   "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "  Compute .    We use with , so . Hence    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "  Simplify .    Using the definition together with and ,    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .   "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "  Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .   "
},
{
  "id": "worksheet-assignment-2",
  "level": "1",
  "url": "worksheet-assignment-2.html",
  "type": "Worksheet",
  "number": "5.2",
  "title": "Assignment 2",
  "body": " Assignment 2   These problems work with sequences, finite sums and geometric series, ask whether a series converges and what it sums to, and then use the Maclaurin series of the standard functions to recognise a sum. If you would like to review the material first, see and .     The terms of a geometric series satisfy where denotes the th term. Find .    Using , Dividing the two equations,   Substituting back, Since , we have , and therefore       What is the sum of all multiples of 7 or 11 less than 1000?    Note that we need to subtract the multiples of , since they have been added twice:   Using : where we used and .      What can we conclude by applying the th term test in the following series?                                  Evaluate the following sums or show that they diverge.                                  We use partial fractions: Setting gives , so ; setting gives , so ; and setting gives , so . Hence     This is a geometric series with and :      , so by the th Term Test the series diverges.    Let . Then Hence , so by the th Term Test the series diverges.     where the terms for and need to be subtracted.         Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.          We compute the limit of the terms: Hence the th-term test does not apply: since the limit of the terms is , the test is inconclusive.    The series telescopes. The partial sum is and therefore          Express as a rational number, i.e. in the form , where and are positive integers with no common factors.    We write the repeating decimal as a geometric series: Using the geometric series with and , Hence and .      Find the sum of the convergent series .    Recall . With , so the sum is .      Find the sum of the series .    The Maclaurin series of the exponential function is Setting gives       Find the sum of the series     The general term is starting at . Let us check the first few: at we get ; at we get ; at we get . These match, so the series is   Now pull out one factor of , which does not depend on :   The remaining series is the Maclaurin series evaluated at , which converges for every . Therefore     "
},
{
  "id": "rev-ser-10",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-10",
  "type": "Worksheet Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  The terms of a geometric series satisfy where denotes the th term. Find .    Using , Dividing the two equations,   Substituting back, Since , we have , and therefore    "
},
{
  "id": "rev-ser-2",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-2",
  "type": "Worksheet Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  What is the sum of all multiples of 7 or 11 less than 1000?    Note that we need to subtract the multiples of , since they have been added twice:   Using : where we used and .   "
},
{
  "id": "asgn2-nth-term-test",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-nth-term-test",
  "type": "Worksheet Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  What can we conclude by applying the th term test in the following series?                               "
},
{
  "id": "asgn2-evaluate-sums",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-evaluate-sums",
  "type": "Worksheet Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  Evaluate the following sums or show that they diverge.                                  We use partial fractions: Setting gives , so ; setting gives , so ; and setting gives , so . Hence     This is a geometric series with and :      , so by the th Term Test the series diverges.    Let . Then Hence , so by the th Term Test the series diverges.     where the terms for and need to be subtracted.      "
},
{
  "id": "rw23-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw23-1",
  "type": "Worksheet Exercise",
  "number": "5.2.5",
  "title": "",
  "body": "  Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.          We compute the limit of the terms: Hence the th-term test does not apply: since the limit of the terms is , the test is inconclusive.    The series telescopes. The partial sum is and therefore       "
},
{
  "id": "rw21-4",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw21-4",
  "type": "Worksheet Exercise",
  "number": "5.2.6",
  "title": "",
  "body": "  Express as a rational number, i.e. in the form , where and are positive integers with no common factors.    We write the repeating decimal as a geometric series: Using the geometric series with and , Hence and .   "
},
{
  "id": "asgn2-cos-series-sum",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-cos-series-sum",
  "type": "Worksheet Exercise",
  "number": "5.2.7",
  "title": "",
  "body": "  Find the sum of the convergent series .    Recall . With , so the sum is .   "
},
{
  "id": "pp-3",
  "level": "2",
  "url": "worksheet-assignment-2.html#pp-3",
  "type": "Worksheet Exercise",
  "number": "5.2.8",
  "title": "",
  "body": "  Find the sum of the series .    The Maclaurin series of the exponential function is Setting gives    "
},
{
  "id": "m1-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#m1-1",
  "type": "Worksheet Exercise",
  "number": "5.2.9",
  "title": "",
  "body": "  Find the sum of the series     The general term is starting at . Let us check the first few: at we get ; at we get ; at we get . These match, so the series is   Now pull out one factor of , which does not depend on :   The remaining series is the Maclaurin series evaluated at , which converges for every . Therefore    "
},
{
  "id": "worksheet-assignment-3",
  "level": "1",
  "url": "worksheet-assignment-3.html",
  "type": "Worksheet",
  "number": "5.3",
  "title": "Assignment 3",
  "body": " Assignment 3   These problems bound the error in a Taylor approximation with the Remainder Theorem, and then use the binomial series to approximate a physical law. Problems marked with a star ( ) are for the interested reader and will not be examined. If you would like to review the material first, see and .     For approximately what values of can we replace by with an error of magnitude no greater than ?    Here , and the cubic is . But the Maclaurin series of has no term, so the same polynomial is also the fourth order Taylor polynomial: We should therefore take , not : both choices describe the very same approximation, but the remainder is one order smaller than and so gives the sharper estimate.  The derivatives of are and therefore , so we can take .  By the Remainder Theorem with , which gives See .  For comparison, stopping at would have given , a needlessly small interval for exactly the same polynomial.   The function and the cubic . Between the dashed lines the two graphs differ by at most .     f(t) = (t, sin(t))  p(t) = (t, t - t^3\/6)         y=\\sin x    y=x-\\frac{x^3}{6}    -0.863    0.863                    Use the remainder estimation theorem to estimate the maximum error when approximating by on the interval .    From the remainder theorem, we know that   Also, since , we have and hence :   We know that , hence Hence, an estimate for the upper bound of the error is . See .   The function and on the interval , marked by the dashed lines.     f(t) = (t, exp(t))  p(t) = (t, 1 + t + t^2)         y=e^{x}    y=1+x+x^2    -\\frac56    \\frac56                    Consider the function .   Find the second order Taylor polynomial centered at 0.    Estimate the maximum error when approximating with the second order Taylor polynomial centered at 0, on the interval .          We compute the derivatives at 0: Hence i.e. .    We have and . Note that is negative, which means is a decreasing function, hence at the value is maximized, i.e., Also and therefore This means that the error in estimating for by is definitely smaller than . See .      The function and . On the interval , marked by the dashed lines, the two graphs are nearly identical.     f(t) = (t, log(1 + 2*t))  p(t) = (t, 2*t - 2*t^2)         y=\\ln(1+2x)    y=2x-2x^2    -0.25    0.25                   Approximating The Electric Field due to an Electric Dipole   Consider an electric dipole consisting of two charges, and , separated by a distance . The electric field at a point located at a distance from the positive charge along the axis of the dipole is given by:    An electric dipole: charges and separated by a distance , with the field point a distance from the positive charge along the axis.      xneg = -1.1  xpos = 0  xP = 3.2      -q     +q     P       d       r                 Use the Taylor series to approximate the electric field at point for . Show that the leading term in the approximation is proportional to .    To approximate the electric field at point for , we can use the Taylor series expansion for the function around .  We have:   Using the binomial series expansion, we can write:   Substituting and , we get:    Now, we can write the electric field as:   Substituting the Taylor series expansion for and , we get:   Simplifying, we have:   Thus, the leading term in the approximation is: which shows that the leading term is proportional to .   The axial field of a dipole, , compared with its leading Taylor term for . The leading term overshoots slightly at small but converges to the exact field as grows.      Eexact(r) = 1\/r^2 - 1\/(r+1)^2  Elead(r) = 2\/r^3       \\dfrac{2qd}{4\\pi\\epsilon_0 r^3} \\propto \\dfrac{d}{r^3}    E = \\dfrac{1}{4\\pi\\epsilon_0}\\!\\left( \\dfrac{q}{r^2} - \\dfrac{q}{(r+d)^2} \\right)    d \\ll r                 *How small must the separation be?    Starred problem. This one is for the interested reader. It will not be examined.  A dipole is often treated as a point dipole by replacing the exact axial field with its leading-order Taylor term for , Suppose this approximation must agree with the exact field to within a relative error of . If the field point is from the positive charge, how small must the charge separation be for the point-dipole approximation to be valid?    The dominant error comes from the next term in the expansion. Using , form the relative error of the leading term and keep only the largest contribution.         From the Taylor expansion, the leading term is , and the first neglected term is . The relative error of the approximation is therefore Notice that and cancel, so the relative error depends only on the ratio . Requiring this to be at most gives With , So the point-dipole approximation is accurate to only when the charges are separated by less than about at this distance consistent with , where the two curves visibly merge as grows relative to .      Use a binomial series to represent the function as a series. Write your final answer in sigma notation.    We start from the binomial series with : The binomial coefficients are and in general . Hence   Therefore,       Use the binomial series to obtain the Maclaurin series for    . Write your answer in sigma notation, .     . Give the first four terms only.          Here , so The coefficient of is so As a check, give the coefficients found above.    Here , so          Expand the quantity about in powers of . Give four nonzero terms.    The binomial series expands , so first factor out of the radicand to produce a something:   Now apply the binomial series with and :       Let Find the exact value of .    First we identify . Its general term is , so This is exactly what you get by differentiating the geometric series term by term: So for . Since , the whole interval of integration lies inside the interval of convergence.  Now we integrate. An antiderivative of is , so       Evaluate as an infinite series. Give the first three nonzero terms.    The integrand has no elementary antiderivative, so expand it as a series first. Starting from , subtracting kills the constant term, so every surviving power of is even and at least . Dividing by therefore leaves an honest power series:   Integrating term by term,       Use Taylor series to evaluate     The quotient has the indeterminate form . Replace the numerator and the denominator by their Maclaurin series. Putting in place of in , and from ,   Both vanish to exactly second order, so cancel the common factor of  legitimate, since the limit never uses the value at itself: Each remaining series is continuous at with a nonzero value there, so only the two leading coefficients matter.      The gravitational force exerted by the Earth on an object of mass at height above the surface is where is the radius of the Earth and is the acceleration due to gravity at the surface.   Express as a Maclaurin series in the variable , writing out the first four non-zero terms.    What approximation to do you get by keeping only the first term? When is it reasonable?        (a) The point of the problem is to get the expression into the form with . Factor out of the denominator:   Now use the binomial series with . The coefficients are and in general . Hence and so This is valid for .   (b) Keeping only the first term gives the familiar constant weight of an object near the surface of the Earth. It is reasonable when is very small, that is when the object stays close to the surface: the first term we discard is , so the relative error is about . With km, even at km the relative error is only about .    "
},
{
  "id": "rev-ser-6",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-6",
  "type": "Worksheet Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "  For approximately what values of can we replace by with an error of magnitude no greater than ?    Here , and the cubic is . But the Maclaurin series of has no term, so the same polynomial is also the fourth order Taylor polynomial: We should therefore take , not : both choices describe the very same approximation, but the remainder is one order smaller than and so gives the sharper estimate.  The derivatives of are and therefore , so we can take .  By the Remainder Theorem with , which gives See .  For comparison, stopping at would have given , a needlessly small interval for exactly the same polynomial.   The function and the cubic . Between the dashed lines the two graphs differ by at most .     f(t) = (t, sin(t))  p(t) = (t, t - t^3\/6)         y=\\sin x    y=x-\\frac{x^3}{6}    -0.863    0.863                 "
},
{
  "id": "rev-ser-7",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-7",
  "type": "Worksheet Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "  Use the remainder estimation theorem to estimate the maximum error when approximating by on the interval .    From the remainder theorem, we know that   Also, since , we have and hence :   We know that , hence Hence, an estimate for the upper bound of the error is . See .   The function and on the interval , marked by the dashed lines.     f(t) = (t, exp(t))  p(t) = (t, 1 + t + t^2)         y=e^{x}    y=1+x+x^2    -\\frac56    \\frac56                 "
},
{
  "id": "rev-ser-8",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-8",
  "type": "Worksheet Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "  Consider the function .   Find the second order Taylor polynomial centered at 0.    Estimate the maximum error when approximating with the second order Taylor polynomial centered at 0, on the interval .          We compute the derivatives at 0: Hence i.e. .    We have and . Note that is negative, which means is a decreasing function, hence at the value is maximized, i.e., Also and therefore This means that the error in estimating for by is definitely smaller than . See .      The function and . On the interval , marked by the dashed lines, the two graphs are nearly identical.     f(t) = (t, log(1 + 2*t))  p(t) = (t, 2*t - 2*t^2)         y=\\ln(1+2x)    y=2x-2x^2    -0.25    0.25                 "
},
{
  "id": "exer-dipole-field",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-dipole-field",
  "type": "Worksheet Exercise",
  "number": "5.3.4",
  "title": "Approximating The Electric Field due to an Electric Dipole.",
  "body": " Approximating The Electric Field due to an Electric Dipole   Consider an electric dipole consisting of two charges, and , separated by a distance . The electric field at a point located at a distance from the positive charge along the axis of the dipole is given by:    An electric dipole: charges and separated by a distance , with the field point a distance from the positive charge along the axis.      xneg = -1.1  xpos = 0  xP = 3.2      -q     +q     P       d       r                 Use the Taylor series to approximate the electric field at point for . Show that the leading term in the approximation is proportional to .    To approximate the electric field at point for , we can use the Taylor series expansion for the function around .  We have:   Using the binomial series expansion, we can write:   Substituting and , we get:    Now, we can write the electric field as:   Substituting the Taylor series expansion for and , we get:   Simplifying, we have:   Thus, the leading term in the approximation is: which shows that the leading term is proportional to .   The axial field of a dipole, , compared with its leading Taylor term for . The leading term overshoots slightly at small but converges to the exact field as grows.      Eexact(r) = 1\/r^2 - 1\/(r+1)^2  Elead(r) = 2\/r^3       \\dfrac{2qd}{4\\pi\\epsilon_0 r^3} \\propto \\dfrac{d}{r^3}    E = \\dfrac{1}{4\\pi\\epsilon_0}\\!\\left( \\dfrac{q}{r^2} - \\dfrac{q}{(r+d)^2} \\right)    d \\ll r               "
},
{
  "id": "exer-dipole-tolerance",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-dipole-tolerance",
  "type": "Worksheet Exercise",
  "number": "5.3.5",
  "title": "*How small must the separation be?",
  "body": " *How small must the separation be?    Starred problem. This one is for the interested reader. It will not be examined.  A dipole is often treated as a point dipole by replacing the exact axial field with its leading-order Taylor term for , Suppose this approximation must agree with the exact field to within a relative error of . If the field point is from the positive charge, how small must the charge separation be for the point-dipole approximation to be valid?    The dominant error comes from the next term in the expansion. Using , form the relative error of the leading term and keep only the largest contribution.         From the Taylor expansion, the leading term is , and the first neglected term is . The relative error of the approximation is therefore Notice that and cancel, so the relative error depends only on the ratio . Requiring this to be at most gives With , So the point-dipole approximation is accurate to only when the charges are separated by less than about at this distance consistent with , where the two curves visibly merge as grows relative to .   "
},
{
  "id": "rf-1",
  "level": "2",
  "url": "worksheet-assignment-3.html#rf-1",
  "type": "Worksheet Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "  Use a binomial series to represent the function as a series. Write your final answer in sigma notation.    We start from the binomial series with : The binomial coefficients are and in general . Hence   Therefore,    "
},
{
  "id": "exer-binomial-maclaurin",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-binomial-maclaurin",
  "type": "Worksheet Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "  Use the binomial series to obtain the Maclaurin series for    . Write your answer in sigma notation, .     . Give the first four terms only.          Here , so The coefficient of is so As a check, give the coefficients found above.    Here , so       "
},
{
  "id": "exer-binomial-cube-root",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-binomial-cube-root",
  "type": "Worksheet Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "  Expand the quantity about in powers of . Give four nonzero terms.    The binomial series expands , so first factor out of the radicand to produce a something:   Now apply the binomial series with and :    "
},
{
  "id": "m1-4",
  "level": "2",
  "url": "worksheet-assignment-3.html#m1-4",
  "type": "Worksheet Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "  Let Find the exact value of .    First we identify . Its general term is , so This is exactly what you get by differentiating the geometric series term by term: So for . Since , the whole interval of integration lies inside the interval of convergence.  Now we integrate. An antiderivative of is , so    "
},
{
  "id": "exer-integral-cos-over-x",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-integral-cos-over-x",
  "type": "Worksheet Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "  Evaluate as an infinite series. Give the first three nonzero terms.    The integrand has no elementary antiderivative, so expand it as a series first. Starting from , subtracting kills the constant term, so every surviving power of is even and at least . Dividing by therefore leaves an honest power series:   Integrating term by term,    "
},
{
  "id": "exer-series-limit-cos2x",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-series-limit-cos2x",
  "type": "Worksheet Exercise",
  "number": "5.3.11",
  "title": "",
  "body": "  Use Taylor series to evaluate     The quotient has the indeterminate form . Replace the numerator and the denominator by their Maclaurin series. Putting in place of in , and from ,   Both vanish to exactly second order, so cancel the common factor of  legitimate, since the limit never uses the value at itself: Each remaining series is continuous at with a nonzero value there, so only the two leading coefficients matter.   "
},
{
  "id": "m1-6",
  "level": "2",
  "url": "worksheet-assignment-3.html#m1-6",
  "type": "Worksheet Exercise",
  "number": "5.3.12",
  "title": "",
  "body": "  The gravitational force exerted by the Earth on an object of mass at height above the surface is where is the radius of the Earth and is the acceleration due to gravity at the surface.   Express as a Maclaurin series in the variable , writing out the first four non-zero terms.    What approximation to do you get by keeping only the first term? When is it reasonable?        (a) The point of the problem is to get the expression into the form with . Factor out of the denominator:   Now use the binomial series with . The coefficients are and in general . Hence and so This is valid for .   (b) Keeping only the first term gives the familiar constant weight of an object near the surface of the Earth. It is reasonable when is very small, that is when the object stays close to the surface: the first term we discard is , so the relative error is about . With km, even at km the relative error is only about .   "
},
{
  "id": "worksheet-review-problems-1",
  "level": "1",
  "url": "worksheet-review-problems-1.html",
  "type": "Worksheet",
  "number": "5.4",
  "title": "Review Problems #1",
  "body": " Review Problems #1   These are the leftover problems from the first four topics of the course, collected here for review. They are not assigned, but they are fair game on an exam. The topics they cover, with links to the notes:             True or False   For any real number , we have .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    First, Second, Comparing and gives .      If and are positive numbers that form 4 consecutive terms in a geometric sequence, find .    Since consecutive ratios in a geometric sequence are equal,   From the first equality,   From the equality of the first and third fractions,       Consider the sequence defined by and . Find a formula for and use it to compute .    We compute the first few terms: We notice that , , and , hence it seems that .  Let us verify by computing using : which confirms that when , then . Hence,       What can we conclude by applying the th term test to the series ?           Evaluate the following sums or show that they diverge.                                  This is a finite geometric sum. Using , which was proved when we first studied geometric sums,     Partial fractions give and setting gives , , while gives , . The sum telescopes:     Partial fractions (or direct observation) give so the sum telescopes:      , so by the th Term Test the series diverges.     where the subtracted terms correspond to , , and of the shifted series.         The government has decided to give a $1,000 tax rebate to each household in order to stimulate the economy. The government statistics say that each household will spend 80% of the rebate in goods and services. The businesses and individuals who benefited from that 80% will then spend 80% of what they received and so on. The result is called the multiplier effect. What is the total effect of the rebate on the economy?    The rounds of spending form a geometric series with and : The successive rounds of spending are shown in .   The multiplier effect. Each round of spending is 80% of the previous one, and the total of all the bars is dollars.                  1000    800    640    512    \\cdots    \\text{round of spending}                   Determine whether the series is convergent or divergent and if it is convergent calculate its sum.                   The series telescopes. The partial sum is Hence the series converges and     We split the series into two geometric series: Since , by the th term test we can conclude that the series diverges.         Determine whether the series converges, and if so find its sum:     Note that since . Indeed, setting and , Therefore, the series diverges by the th Term Test.      Consider the following series. Answer the following questions.    Find the values of for which the series converges.    Find the sum of the series for those values of .          We can write the series as a geometric series: which converges when : i.e. the series converges on the interval .    When , the geometric series with and gives         True or False   A geometric series converges if and only if .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    As a counterexample consider , which clearly diverges even though . The correct condition is .      Consider the series . Does the series converge? If so, what is the result?    We first factor out so that the powers match: Splitting off the term so that the sum starts at ,   The remaining sum is a geometric series with and . Since , it converges and , so       Find the sum of all of the convergent series.                   The factor cycles through as , so only the odd contribute, with alternating signs. Writing , This is a geometric series with and , and , so     By the constant multiple rule, . The remaining series telescopes: since , Hence the sum is .        True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.      For the following functions, give the Taylor series generated by the function at AND give the values of for which the Taylor series converges to the given function.                  Using the Taylor series you found for in part C, find , i.e. the 12th order derivative of at .          The derivatives of at cycle through , so only even powers survive and which converges to for all .    This is the geometric series with and : which converges to exactly when , i.e. for .    We start from , valid for all , and substitute : Multiplying by , which converges to for all .    In the Taylor series , the coefficient of is . From part C, the term with occurs when , i.e. , and its coefficient is . Equating the two,          Given .   Find the 2nd order Maclaurin polynomial for .    Use Taylor's Remainder Theorem to find an upper bound on the magnitude of the error if the 2nd order Maclaurin polynomial is used to approximate for .          We compute the derivatives at : Hence     By Taylor's Remainder Theorem, Here , so . For we have , and the fraction is largest when the denominator is smallest, i.e. at : Therefore, for ,          What function has Maclaurin series ?    Factoring out of every term, and the bracket is exactly the Maclaurin series of . Hence the function is          Use a third Taylor polynomial at to approximate .    Give an upper bound for the error in using this approximation.          Let and . Then Hence and evaluating at (so ),     By Taylor's Remainder Theorem, , where bounds on . Since and is decreasing, the largest value occurs at : Therefore          Use the binomial series to obtain the Maclaurin series for each of the following.    . Give every nonzero term, and say what happens to the terms beyond them.     . Give the first four terms only.     . Give the first four terms only.          Here , a positive integer: The coefficient contains the factor , so it vanishes, and so does every coefficient after it. When is a positive integer the binomial series terminates and reproduces the ordinary binomial theorem: it is a polynomial of degree , valid for every , not just for .    Here : The factors are never zero now, so the series does not terminate.    Write the radical in the denominator as a negative power, so that the binomial series applies with : With negative the signs alternate, as they did for .         Find the first four nonzero terms of the Taylor series about for the function . Note that you may want to find these in a manner other than by direct differentiation of the function.    Differentiating the product four times is painful; multiplying two series you already know is not. The binomial series with gives and replacing by in gives   Only the constant and terms of can contribute below degree , so multiplying and collecting powers of up to ,       Use Taylor series to evaluate     Numerator and denominator both tend to , and each vanishes to third order, so l'Hôpital's rule would have to be applied three times. Replacing each by its Maclaurin series is quicker. From and , subtracting removes the leading term of each:   Both series begin with . The limit never sees itself, so we may cancel a factor of from top and bottom: Each of the two remaining series is a power series with a nonzero constant term, so it is continuous at and the limit is just that constant term. Only the leading coefficients matter: the answer is the ratio .    "
},
{
  "id": "rw23-9-b",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw23-9-b",
  "type": "Worksheet Exercise",
  "number": "5.4.1",
  "title": "True or False.",
  "body": " True or False   For any real number , we have .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    First, Second, Comparing and gives .   "
},
{
  "id": "rev-ser-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-1",
  "type": "Worksheet Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  If and are positive numbers that form 4 consecutive terms in a geometric sequence, find .    Since consecutive ratios in a geometric sequence are equal,   From the first equality,   From the equality of the first and third fractions,    "
},
{
  "id": "rev-ser-9",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-9",
  "type": "Worksheet Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Consider the sequence defined by and . Find a formula for and use it to compute .    We compute the first few terms: We notice that , , and , hence it seems that .  Let us verify by computing using : which confirms that when , then . Hence,    "
},
{
  "id": "rev-ser-4",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-4",
  "type": "Worksheet Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "  What can we conclude by applying the th term test to the series ?        "
},
{
  "id": "rev-ser-5",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-5",
  "type": "Worksheet Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  Evaluate the following sums or show that they diverge.                                  This is a finite geometric sum. Using , which was proved when we first studied geometric sums,     Partial fractions give and setting gives , , while gives , . The sum telescopes:     Partial fractions (or direct observation) give so the sum telescopes:      , so by the th Term Test the series diverges.     where the subtracted terms correspond to , , and of the shifted series.      "
},
{
  "id": "rev-ser-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-3",
  "type": "Worksheet Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "  The government has decided to give a $1,000 tax rebate to each household in order to stimulate the economy. The government statistics say that each household will spend 80% of the rebate in goods and services. The businesses and individuals who benefited from that 80% will then spend 80% of what they received and so on. The result is called the multiplier effect. What is the total effect of the rebate on the economy?    The rounds of spending form a geometric series with and : The successive rounds of spending are shown in .   The multiplier effect. Each round of spending is 80% of the previous one, and the total of all the bars is dollars.                  1000    800    640    512    \\cdots    \\text{round of spending}                "
},
{
  "id": "rs19-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rs19-1",
  "type": "Worksheet Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "  Determine whether the series is convergent or divergent and if it is convergent calculate its sum.                   The series telescopes. The partial sum is Hence the series converges and     We split the series into two geometric series: Since , by the th term test we can conclude that the series diverges.      "
},
{
  "id": "rw21-2",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw21-2",
  "type": "Worksheet Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "  Determine whether the series converges, and if so find its sum:     Note that since . Indeed, setting and , Therefore, the series diverges by the th Term Test.   "
},
{
  "id": "rw21-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw21-3",
  "type": "Worksheet Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "  Consider the following series. Answer the following questions.    Find the values of for which the series converges.    Find the sum of the series for those values of .          We can write the series as a geometric series: which converges when : i.e. the series converges on the interval .    When , the geometric series with and gives       "
},
{
  "id": "rf-8-b",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rf-8-b",
  "type": "Worksheet Exercise",
  "number": "5.4.10",
  "title": "True or False.",
  "body": " True or False   A geometric series converges if and only if .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    As a counterexample consider , which clearly diverges even though . The correct condition is .   "
},
{
  "id": "rw22-2",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw22-2",
  "type": "Worksheet Exercise",
  "number": "5.4.11",
  "title": "",
  "body": "  Consider the series . Does the series converge? If so, what is the result?    We first factor out so that the powers match: Splitting off the term so that the sum starts at ,   The remaining sum is a geometric series with and . Since , it converges and , so    "
},
{
  "id": "pp-4",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-4",
  "type": "Worksheet Exercise",
  "number": "5.4.12",
  "title": "",
  "body": "  Find the sum of all of the convergent series.                   The factor cycles through as , so only the odd contribute, with alternating signs. Writing , This is a geometric series with and , and , so     By the constant multiple rule, . The remaining series telescopes: since , Hence the sum is .      "
},
{
  "id": "ex-tf-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#ex-tf-1",
  "type": "Worksheet Exercise",
  "number": "5.4.13",
  "title": "True or False.",
  "body": " True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.   "
},
{
  "id": "rw17-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw17-1",
  "type": "Worksheet Exercise",
  "number": "5.4.14",
  "title": "",
  "body": "  For the following functions, give the Taylor series generated by the function at AND give the values of for which the Taylor series converges to the given function.                  Using the Taylor series you found for in part C, find , i.e. the 12th order derivative of at .          The derivatives of at cycle through , so only even powers survive and which converges to for all .    This is the geometric series with and : which converges to exactly when , i.e. for .    We start from , valid for all , and substitute : Multiplying by , which converges to for all .    In the Taylor series , the coefficient of is . From part C, the term with occurs when , i.e. , and its coefficient is . Equating the two,       "
},
{
  "id": "rw17-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw17-3",
  "type": "Worksheet Exercise",
  "number": "5.4.15",
  "title": "",
  "body": "  Given .   Find the 2nd order Maclaurin polynomial for .    Use Taylor's Remainder Theorem to find an upper bound on the magnitude of the error if the 2nd order Maclaurin polynomial is used to approximate for .          We compute the derivatives at : Hence     By Taylor's Remainder Theorem, Here , so . For we have , and the fraction is largest when the denominator is smallest, i.e. at : Therefore, for ,       "
},
{
  "id": "pp-5",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-5",
  "type": "Worksheet Exercise",
  "number": "5.4.16",
  "title": "",
  "body": "  What function has Maclaurin series ?    Factoring out of every term, and the bracket is exactly the Maclaurin series of . Hence the function is    "
},
{
  "id": "pp-6",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-6",
  "type": "Worksheet Exercise",
  "number": "5.4.17",
  "title": "",
  "body": "     Use a third Taylor polynomial at to approximate .    Give an upper bound for the error in using this approximation.          Let and . Then Hence and evaluating at (so ),     By Taylor's Remainder Theorem, , where bounds on . Since and is decreasing, the largest value occurs at : Therefore       "
},
{
  "id": "exer-binomial-three-powers",
  "level": "2",
  "url": "worksheet-review-problems-1.html#exer-binomial-three-powers",
  "type": "Worksheet Exercise",
  "number": "5.4.18",
  "title": "",
  "body": "  Use the binomial series to obtain the Maclaurin series for each of the following.    . Give every nonzero term, and say what happens to the terms beyond them.     . Give the first four terms only.     . Give the first four terms only.          Here , a positive integer: The coefficient contains the factor , so it vanishes, and so does every coefficient after it. When is a positive integer the binomial series terminates and reproduces the ordinary binomial theorem: it is a polynomial of degree , valid for every , not just for .    Here : The factors are never zero now, so the series does not terminate.    Write the radical in the denominator as a negative power, so that the binomial series applies with : With negative the signs alternate, as they did for .      "
},
{
  "id": "exer-sqrt-cos-product",
  "level": "2",
  "url": "worksheet-review-problems-1.html#exer-sqrt-cos-product",
  "type": "Worksheet Exercise",
  "number": "5.4.19",
  "title": "",
  "body": "  Find the first four nonzero terms of the Taylor series about for the function . Note that you may want to find these in a manner other than by direct differentiation of the function.    Differentiating the product four times is painful; multiplying two series you already know is not. The binomial series with gives and replacing by in gives   Only the constant and terms of can contribute below degree , so multiplying and collecting powers of up to ,    "
},
{
  "id": "exer-series-limit-arctan",
  "level": "2",
  "url": "worksheet-review-problems-1.html#exer-series-limit-arctan",
  "type": "Worksheet Exercise",
  "number": "5.4.20",
  "title": "",
  "body": "  Use Taylor series to evaluate     Numerator and denominator both tend to , and each vanishes to third order, so l'Hôpital's rule would have to be applied three times. Replacing each by its Maclaurin series is quicker. From and , subtracting removes the leading term of each:   Both series begin with . The limit never sees itself, so we may cancel a factor of from top and bottom: Each of the two remaining series is a power series with a nonzero constant term, so it is continuous at and the limit is just that constant term. Only the leading coefficients matter: the answer is the ratio .   "
},
{
  "id": "worksheet-assignment-4",
  "level": "1",
  "url": "worksheet-assignment-4.html",
  "type": "Worksheet",
  "number": "5.5",
  "title": "Assignment 4",
  "body": " Assignment 4   These problems set up coordinates in space, describe regions and solids by equations and inequalities, do algebra with vectors, and use the dot product to measure angles and to split a vector into a piece along a given direction and a piece orthogonal to it. If you would like to review the material first, see , and .        Find an equation of the set of all points equidistant from the points and .    Describe the geometrical shape corresponding to the set.          We want to find all points that have the same distance from and . Squaring both distances (which is equivalent, since distances are non-negative) gives Expanding both sides, and collecting terms,     This is the equation of a plane. Its normal vector is , which is parallel to . Moreover, the midpoint of , satisfies the equation, since . Hence the set is the plane that passes through the midpoint of and is orthogonal to , i.e. the perpendicular bisector plane of the segment . See .      The set of points equidistant from and is the plane through the midpoint of perpendicular to .    Two points A and B are joined by a segment. A shaded rectangle representing a plane cuts the segment at right angles at its midpoint C, with a small right angle marker at C. The stretch of the segment that passes behind the plane is drawn dashed.          Describe the following regions and graphs.    ,      ,      ,      ,        The key is to notice whether the first condition is an inequality (a solid region) or an equation (a surface), and then what the second condition does to it.   The solid ball of radius centered at the origin, restricted to : the upper half of the solid ball , including the flat disk in the -plane.    Setting in the solid ball gives : the solid disk of radius centered at the origin, lying in the -plane.    The sphere of radius restricted to : the upper hemisphere (a surface only), together with the circle where it meets the -plane.    Setting on the sphere gives : the circle of radius centered at the origin in the -plane.         Consider the point .   What is its distance to the -plane?    What is its distance to the -axis?        (a) The -plane is the plane . The closest point of that plane to is obtained by simply setting the -coordinate to zero, giving . Hence the distance is In general the distance from to the -plane is .   (b) The -axis consists of the points . The closest such point to is the one with the same -coordinate, namely , so the distance is In general the distance from to the -axis is : we drop the coordinate along the axis and keep the other two. See .   The point , its distance to the -plane (measured horizontally, parallel to the -axis), and its distance to the -axis (measured perpendicular to that axis).    A three dimensional coordinate system with the point P at three, seven, negative five. A segment runs from P horizontally to the point zero, seven, negative five in the y z plane, and a second segment runs from P to the point zero, seven, zero on the y axis.         A Solid Bounded by a Paraboloid, a Plane, and a Cylinder   Consider the solid region bounded below by the paraboloid , above by the plane , and on the outside by the cylinder . Describe this solid.    The paraboloid opens downward from its vertex , reaching exactly on the circle , the same circle where the cylinder meets the -plane. The plane is tangent to the paraboloid at its vertex.  The solid consists of the points inside the cylinder that lie above the paraboloid and below the plane: At the center , this range for collapses to the single point , since the paraboloid already reaches the plane there. At the rim , the range is the full interval . The solid is therefore a disk-shaped shell that thins to a single point at its center, as though a dome-shaped cavity bounded by the paraboloid had been hollowed out from the top of the solid cylinder , , shown in .   The solid bounded below by the paraboloid , above by the plane , and on the outside by the cylinder . The paraboloid hollows out a dome-shaped cavity from the top of the solid, which is thin at the center and full height at the rim.    A short solid cylinder whose flat top has a dome-shaped dent scooped out of it. The dent is bounded by a downward-curving paraboloid that touches the flat top at the center and meets the bottom rim of the cylinder at its edge, leaving a thin shell of material near the rim and almost none at the center.          Write each combination of vectors as a single vector. See .                    The quadrilateral with vertices , , , and , with its diagonals.                 P    Q    R    S                     By the triangle law, placing at the tip of ,     Since ,     Chaining the three vectors tip to tail,          Find a vector of length 3 pointing in the opposite direction from the vector .    The given vector has length , so the unit vector in its direction is . Multiplying by reverses the direction and gives length :       Let be the vector that goes from the point to the point . Find a vector of length that points in the same direction as .    The vector from to is obtained by subtracting the tail from the head:   Its length is   The unit vector in the direction of is therefore Scaling by gives a vector of length pointing the same way:      A parallelogram in space   Consider the four points    Show that is a parallelogram.    Find the point at which the two diagonals of meet.    Find the perimeter of .          A quadrilateral is a parallelogram exactly when one pair of opposite sides is given by the same vector, since equal vectors have both the same direction and the same length. Along the sides and , Since , these two sides are parallel and have equal length, so is a parallelogram. The other pair of sides matches as well: See .    The diagonals of a parallelogram bisect each other, so is the midpoint of . Using position vectors and , Travelling along the other diagonal instead, with , the same point, which confirms both the answer and part A. Hence .    Opposite sides have equal length, so the perimeter is , where The perimeter is therefore . Since , this parallelogram is not a rhombus.      The parallelogram , with drawn in blue and in magenta. The diagonals and cross at their common midpoint .    Three coordinate axes labelled x, y and z. Four points A, B, C and D in space are joined into a slanted parallelogram. The two sides from A to B and from D to C are drawn as blue arrows of the same length and direction, and the two sides from A to D and from B to C are drawn as magenta arrows, also equal to each other. The two diagonals, from A to C and from B to D, are dashed grey segments that cross at a marked red point M in the middle of the parallelogram.          Consider the two vectors and . Write as the sum of a vector parallel to and a vector orthogonal to .    We have and . The component of parallel to is and the component orthogonal to is Here is parallel to and is orthogonal to . Note that .      Determine whether the following pairs of vectors are orthogonal, parallel, or neither.    and      and      and , where , , and are non-zero real numbers.           Parallel , since : indeed . (Two vectors are parallel exactly when one is a scalar multiple of the other.)     Orthogonal , since .     Orthogonal , since . They are not parallel, because has a non-zero component while does not.         A 100-meter dash is run on a track in the direction of the vector . The wind velocity is km\/hr. The rules say that a legal wind speed measured in the direction of the dash must not exceed 5 km\/hr.   Will the race results be disqualified due to an illegal wind? Justify your answer.    Find the velocity vector of the wind in the direction of the dash.       Let be the direction of the dash and the wind velocity. Then    The wind speed measured in the direction of the dash is the length of the projection of onto : Since , the wind is legal and the race results will not be disqualified.    The velocity vector of the wind in the direction of the dash is the vector projection As a check, its length is , matching part A.         A constant force is A particle is constrained to move in directions parallel to the plane For a displacement of one unit, the work done by the force is , where is an allowed unit direction lying in the plane.   Find the unit direction in the plane that maximizes the work.    Find the maximum possible work per unit distance.    Find one unit direction in the plane for which the work is zero.       Reading the coefficients of the plane, a normal vector is A vector is parallel to the plane exactly when it is orthogonal to .   (a) Decompose the force into a normal piece and a piece lying in the plane, The first piece comes from the projection formula. Since and , we get Subtracting, As a check, this really is parallel to the plane: .  Now let be any allowed unit direction. Because is orthogonal to every vector lying in the plane, The normal part of the force is simply wasted: it presses the particle against the constraint and does no work. Writing , the largest value occurs when , that is when points in the same direction as . Since the maximizing unit vector is See .   The force splits into a piece along the normal, which does no work, and a much shorter piece lying in the plane, which is the only part that can do work. The picture is drawn to scale: while .    A tilted plane through the origin with a normal arrow. A force vector rises steeply from the origin, almost along the normal; it is resolved into a long component along the normal and a very short component lying in the plane.               O    \\mathbf n=\\left\\langle 2,-1,2\\right\\rangle    \\mathbf F    \\operatorname{proj}_{\\mathbf n}\\mathbf F    \\mathbf F_{\\parallel}    2x-y+2z=0                  (b) The maximum work per unit displacement is the length of the in-plane component, We can confirm this directly from the original force: Compare this with : the constraint costs us about of the force.   (c) We want a unit vector satisfying two conditions at once: it must lie in the plane, and it must do no work. That is, or explicitly Subtracting the first equation from the second gives , and then , so . Taking gives the non-zero vector , whose length is . Hence one suitable unit vector is Indeed , and the opposite direction works equally well. Geometrically, is the direction in the plane perpendicular to : moving along it, the particle travels neither with nor against the usable part of the force.    "
},
{
  "id": "rw22-3",
  "level": "2",
  "url": "worksheet-assignment-4.html#rw22-3",
  "type": "Worksheet Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "     Find an equation of the set of all points equidistant from the points and .    Describe the geometrical shape corresponding to the set.          We want to find all points that have the same distance from and . Squaring both distances (which is equivalent, since distances are non-negative) gives Expanding both sides, and collecting terms,     This is the equation of a plane. Its normal vector is , which is parallel to . Moreover, the midpoint of , satisfies the equation, since . Hence the set is the plane that passes through the midpoint of and is orthogonal to , i.e. the perpendicular bisector plane of the segment . See .      The set of points equidistant from and is the plane through the midpoint of perpendicular to .    Two points A and B are joined by a segment. A shaded rectangle representing a plane cuts the segment at right angles at its midpoint C, with a small right angle marker at C. The stretch of the segment that passes behind the plane is drawn dashed.       "
},
{
  "id": "pp-24",
  "level": "2",
  "url": "worksheet-assignment-4.html#pp-24",
  "type": "Worksheet Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "  Describe the following regions and graphs.    ,      ,      ,      ,        The key is to notice whether the first condition is an inequality (a solid region) or an equation (a surface), and then what the second condition does to it.   The solid ball of radius centered at the origin, restricted to : the upper half of the solid ball , including the flat disk in the -plane.    Setting in the solid ball gives : the solid disk of radius centered at the origin, lying in the -plane.    The sphere of radius restricted to : the upper hemisphere (a surface only), together with the circle where it meets the -plane.    Setting on the sphere gives : the circle of radius centered at the origin in the -plane.      "
},
{
  "id": "m1-3",
  "level": "2",
  "url": "worksheet-assignment-4.html#m1-3",
  "type": "Worksheet Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "  Consider the point .   What is its distance to the -plane?    What is its distance to the -axis?        (a) The -plane is the plane . The closest point of that plane to is obtained by simply setting the -coordinate to zero, giving . Hence the distance is In general the distance from to the -plane is .   (b) The -axis consists of the points . The closest such point to is the one with the same -coordinate, namely , so the distance is In general the distance from to the -axis is : we drop the coordinate along the axis and keep the other two. See .   The point , its distance to the -plane (measured horizontally, parallel to the -axis), and its distance to the -axis (measured perpendicular to that axis).    A three dimensional coordinate system with the point P at three, seven, negative five. A segment runs from P horizontally to the point zero, seven, negative five in the y z plane, and a second segment runs from P to the point zero, seven, zero on the y axis.       "
},
{
  "id": "ex-3d-nonconvex-solid",
  "level": "2",
  "url": "worksheet-assignment-4.html#ex-3d-nonconvex-solid",
  "type": "Worksheet Exercise",
  "number": "5.5.4",
  "title": "A Solid Bounded by a Paraboloid, a Plane, and a Cylinder.",
  "body": " A Solid Bounded by a Paraboloid, a Plane, and a Cylinder   Consider the solid region bounded below by the paraboloid , above by the plane , and on the outside by the cylinder . Describe this solid.    The paraboloid opens downward from its vertex , reaching exactly on the circle , the same circle where the cylinder meets the -plane. The plane is tangent to the paraboloid at its vertex.  The solid consists of the points inside the cylinder that lie above the paraboloid and below the plane: At the center , this range for collapses to the single point , since the paraboloid already reaches the plane there. At the rim , the range is the full interval . The solid is therefore a disk-shaped shell that thins to a single point at its center, as though a dome-shaped cavity bounded by the paraboloid had been hollowed out from the top of the solid cylinder , , shown in .   The solid bounded below by the paraboloid , above by the plane , and on the outside by the cylinder . The paraboloid hollows out a dome-shaped cavity from the top of the solid, which is thin at the center and full height at the rim.    A short solid cylinder whose flat top has a dome-shaped dent scooped out of it. The dent is bounded by a downward-curving paraboloid that touches the flat top at the center and meets the bottom rim of the cylinder at its edge, leaving a thin shell of material near the rim and almost none at the center.       "
},
{
  "id": "rs19-2",
  "level": "2",
  "url": "worksheet-assignment-4.html#rs19-2",
  "type": "Worksheet Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "  Write each combination of vectors as a single vector. See .                    The quadrilateral with vertices , , , and , with its diagonals.                 P    Q    R    S                     By the triangle law, placing at the tip of ,     Since ,     Chaining the three vectors tip to tail,       "
},
{
  "id": "pp-9",
  "level": "2",
  "url": "worksheet-assignment-4.html#pp-9",
  "type": "Worksheet Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "  Find a vector of length 3 pointing in the opposite direction from the vector .    The given vector has length , so the unit vector in its direction is . Multiplying by reverses the direction and gives length :    "
},
{
  "id": "m1-2",
  "level": "2",
  "url": "worksheet-assignment-4.html#m1-2",
  "type": "Worksheet Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "  Let be the vector that goes from the point to the point . Find a vector of length that points in the same direction as .    The vector from to is obtained by subtracting the tail from the head:   Its length is   The unit vector in the direction of is therefore Scaling by gives a vector of length pointing the same way:    "
},
{
  "id": "vec-parallelogram-space",
  "level": "2",
  "url": "worksheet-assignment-4.html#vec-parallelogram-space",
  "type": "Worksheet Exercise",
  "number": "5.5.8",
  "title": "A parallelogram in space.",
  "body": " A parallelogram in space   Consider the four points    Show that is a parallelogram.    Find the point at which the two diagonals of meet.    Find the perimeter of .          A quadrilateral is a parallelogram exactly when one pair of opposite sides is given by the same vector, since equal vectors have both the same direction and the same length. Along the sides and , Since , these two sides are parallel and have equal length, so is a parallelogram. The other pair of sides matches as well: See .    The diagonals of a parallelogram bisect each other, so is the midpoint of . Using position vectors and , Travelling along the other diagonal instead, with , the same point, which confirms both the answer and part A. Hence .    Opposite sides have equal length, so the perimeter is , where The perimeter is therefore . Since , this parallelogram is not a rhombus.      The parallelogram , with drawn in blue and in magenta. The diagonals and cross at their common midpoint .    Three coordinate axes labelled x, y and z. Four points A, B, C and D in space are joined into a slanted parallelogram. The two sides from A to B and from D to C are drawn as blue arrows of the same length and direction, and the two sides from A to D and from B to C are drawn as magenta arrows, also equal to each other. The two diagonals, from A to C and from B to D, are dashed grey segments that cross at a marked red point M in the middle of the parallelogram.       "
},
{
  "id": "rs19-4",
  "level": "2",
  "url": "worksheet-assignment-4.html#rs19-4",
  "type": "Worksheet Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "  Consider the two vectors and . Write as the sum of a vector parallel to and a vector orthogonal to .    We have and . The component of parallel to is and the component orthogonal to is Here is parallel to and is orthogonal to . Note that .   "
},
{
  "id": "rw22-4",
  "level": "2",
  "url": "worksheet-assignment-4.html#rw22-4",
  "type": "Worksheet Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "  Determine whether the following pairs of vectors are orthogonal, parallel, or neither.    and      and      and , where , , and are non-zero real numbers.           Parallel , since : indeed . (Two vectors are parallel exactly when one is a scalar multiple of the other.)     Orthogonal , since .     Orthogonal , since . They are not parallel, because has a non-zero component while does not.      "
},
{
  "id": "rw17-4",
  "level": "2",
  "url": "worksheet-assignment-4.html#rw17-4",
  "type": "Worksheet Exercise",
  "number": "5.5.11",
  "title": "",
  "body": "  A 100-meter dash is run on a track in the direction of the vector . The wind velocity is km\/hr. The rules say that a legal wind speed measured in the direction of the dash must not exceed 5 km\/hr.   Will the race results be disqualified due to an illegal wind? Justify your answer.    Find the velocity vector of the wind in the direction of the dash.       Let be the direction of the dash and the wind velocity. Then    The wind speed measured in the direction of the dash is the length of the projection of onto : Since , the wind is legal and the race results will not be disqualified.    The velocity vector of the wind in the direction of the dash is the vector projection As a check, its length is , matching part A.      "
},
{
  "id": "dp-constrained-work",
  "level": "2",
  "url": "worksheet-assignment-4.html#dp-constrained-work",
  "type": "Worksheet Exercise",
  "number": "5.5.12",
  "title": "",
  "body": "  A constant force is A particle is constrained to move in directions parallel to the plane For a displacement of one unit, the work done by the force is , where is an allowed unit direction lying in the plane.   Find the unit direction in the plane that maximizes the work.    Find the maximum possible work per unit distance.    Find one unit direction in the plane for which the work is zero.       Reading the coefficients of the plane, a normal vector is A vector is parallel to the plane exactly when it is orthogonal to .   (a) Decompose the force into a normal piece and a piece lying in the plane, The first piece comes from the projection formula. Since and , we get Subtracting, As a check, this really is parallel to the plane: .  Now let be any allowed unit direction. Because is orthogonal to every vector lying in the plane, The normal part of the force is simply wasted: it presses the particle against the constraint and does no work. Writing , the largest value occurs when , that is when points in the same direction as . Since the maximizing unit vector is See .   The force splits into a piece along the normal, which does no work, and a much shorter piece lying in the plane, which is the only part that can do work. The picture is drawn to scale: while .    A tilted plane through the origin with a normal arrow. A force vector rises steeply from the origin, almost along the normal; it is resolved into a long component along the normal and a very short component lying in the plane.               O    \\mathbf n=\\left\\langle 2,-1,2\\right\\rangle    \\mathbf F    \\operatorname{proj}_{\\mathbf n}\\mathbf F    \\mathbf F_{\\parallel}    2x-y+2z=0                  (b) The maximum work per unit displacement is the length of the in-plane component, We can confirm this directly from the original force: Compare this with : the constraint costs us about of the force.   (c) We want a unit vector satisfying two conditions at once: it must lie in the plane, and it must do no work. That is, or explicitly Subtracting the first equation from the second gives , and then , so . Taking gives the non-zero vector , whose length is . Hence one suitable unit vector is Indeed , and the opposite direction works equally well. Geometrically, is the direction in the plane perpendicular to : moving along it, the particle travels neither with nor against the usable part of the force.   "
},
{
  "id": "worksheet-assignment-5",
  "level": "1",
  "url": "worksheet-assignment-5.html",
  "type": "Worksheet",
  "number": "5.6",
  "title": "Assignment 5",
  "body": " Assignment 5   These problems use the cross product to build normal vectors, areas and orthogonal directions, parametrize plane curves and curves of intersection in space, and intersect lines with planes and measure distances between them. If you would like to review the material first, see , and .    True or False   If and are two non-zero vectors in , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: take and . Then and .      Let be the vector .   Find a non-zero vector orthogonal to .    Find a vector orthogonal to both and .          We need with . Any solution will do; taking leaves , so , works: (There are infinitely many correct answers.)    The cross product is orthogonal to both: Dividing by gives the simpler answer .         Suppose , and . Find    ;     .        (a) Let be the angle between the two vectors, . From , Since , (We cannot determine the sign of , since could be or ; this is exactly why the problem asks for the absolute value.) Therefore    (b) The projection is , so its length is As a sanity check, , which is less than , as a shadow must be.      Find the Cartesian equation for the curve represented by the following parametric equations, then graph it:     From the second equation, , and hence For the range, note that gives and correspondingly . The curve is the portion of from to , shown in .   The curve traced by the parametric equations for , from to .     c(t) = (t, t^(1\/2) - 1)        y=\\sqrt{x}-1    (1,0)    (4,1)                   Provide a parametrized form of the curve given by Assume that the curve is traced counter-clockwise as the parameter increases.    We complete the squares: This is an ellipse centered at . Setting gives the counter-clockwise parametrization See .   The ellipse , centered at with semi-axes and , traced counter-clockwise.     ell(t) = (5*cos(t) + 4.5826, 2.5*sin(t) - 1)        \\left(\\sqrt{21},-1\\right)    t                      Parametrize the intersection of and the plane .    Which axis is perpendicular to the plane ?          Substituting into the equation of the sphere, a circle of radius lying in the plane . Hence     The plane has normal vector , so the -axis is perpendicular to it.         Consider the curve .   Sketch the curve and label its important points.    Parametrize the entire curve using one parametrization.        (a) Divide both sides by to put the equation in standard form:   This is an ellipse with centre , semi-axis in the -direction and semi-axis in the -direction. Since , the major axis is vertical. The four vertices are and the foci lie on the vertical axis at distance from the centre. See .   The ellipse , with centre , horizontal semi-axis and vertical semi-axis .    A tall narrow ellipse centred at the point one comma negative four. Its topmost and bottommost points are one comma negative two and one comma negative six, and its leftmost and rightmost points are one half comma negative four and three halves comma negative four.     ell(t) = (1 + 0.5*cos(t), -4 + 2*sin(t))           (1,-4)    (1,-2)    (1,-6)    \\left(\\tfrac12,-4\\right)    \\left(\\tfrac32,-4\\right)               (b) For a circle we would use , . Here the standard form tells us that play the roles of and , since their squares add to . So we set which gives Letting run over a full period of length traces the entire ellipse exactly once, counterclockwise, starting at the right vertex .      Find the vector equation of the line of intersection of the following planes:     The normal vectors are and , so the direction vector of the line of intersection is   Next we need a point on the line. Setting in the equations of the planes gives Adding the two equations gives , so and . Hence the point is on the line, and the vector equation of the line of intersection is       Find an equation of a plane containing the line and parallel to the plane , in which the coefficient of is .    Since the desired plane is parallel to , it has the same normal vector (Note that , so the line is indeed parallel to such a plane.) When , the point is on the plane, so from the point-normal form,       Calculate the distance between the following two lines:     We notice that the two lines are parallel (both have direction vector ) and therefore we can find the distance between a point on and the line . Taking on and on , we get , and .  Using the cross product, and the distance is       Find parametric equations for the line through which is normal to the plane containing , and .    From , the plane through those three points has normal vector . A line normal to the plane has as its direction vector, so through ,       Let be the line given by Find the point on that is closest to .    Write and let be the general point of . The direction vector of the line is .  The closest point is the foot of the perpendicular from , so we want the value of for which is orthogonal to . First,   Now impose :   Substituting into the parametric equations gives the closest point As a check, at we get , and as required. The distance from to the line is .    "
},
{
  "id": "rw23-9-a",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw23-9-a",
  "type": "Worksheet Exercise",
  "number": "5.6.1",
  "title": "True or False.",
  "body": " True or False   If and are two non-zero vectors in , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: take and . Then and .   "
},
{
  "id": "pp-8",
  "level": "2",
  "url": "worksheet-assignment-5.html#pp-8",
  "type": "Worksheet Exercise",
  "number": "5.6.2",
  "title": "",
  "body": "  Let be the vector .   Find a non-zero vector orthogonal to .    Find a vector orthogonal to both and .          We need with . Any solution will do; taking leaves , so , works: (There are infinitely many correct answers.)    The cross product is orthogonal to both: Dividing by gives the simpler answer .      "
},
{
  "id": "m2b-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#m2b-4",
  "type": "Worksheet Exercise",
  "number": "5.6.3",
  "title": "",
  "body": "  Suppose , and . Find    ;     .        (a) Let be the angle between the two vectors, . From , Since , (We cannot determine the sign of , since could be or ; this is exactly why the problem asks for the absolute value.) Therefore    (b) The projection is , so its length is As a sanity check, , which is less than , as a shadow must be.   "
},
{
  "id": "rf-2",
  "level": "2",
  "url": "worksheet-assignment-5.html#rf-2",
  "type": "Worksheet Exercise",
  "number": "5.6.4",
  "title": "",
  "body": "  Find the Cartesian equation for the curve represented by the following parametric equations, then graph it:     From the second equation, , and hence For the range, note that gives and correspondingly . The curve is the portion of from to , shown in .   The curve traced by the parametric equations for , from to .     c(t) = (t, t^(1\/2) - 1)        y=\\sqrt{x}-1    (1,0)    (4,1)                "
},
{
  "id": "rw23-8",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw23-8",
  "type": "Worksheet Exercise",
  "number": "5.6.5",
  "title": "",
  "body": "  Provide a parametrized form of the curve given by Assume that the curve is traced counter-clockwise as the parameter increases.    We complete the squares: This is an ellipse centered at . Setting gives the counter-clockwise parametrization See .   The ellipse , centered at with semi-axes and , traced counter-clockwise.     ell(t) = (5*cos(t) + 4.5826, 2.5*sin(t) - 1)        \\left(\\sqrt{21},-1\\right)    t                "
},
{
  "id": "pp-15",
  "level": "2",
  "url": "worksheet-assignment-5.html#pp-15",
  "type": "Worksheet Exercise",
  "number": "5.6.6",
  "title": "",
  "body": "     Parametrize the intersection of and the plane .    Which axis is perpendicular to the plane ?          Substituting into the equation of the sphere, a circle of radius lying in the plane . Hence     The plane has normal vector , so the -axis is perpendicular to it.      "
},
{
  "id": "m2a-2",
  "level": "2",
  "url": "worksheet-assignment-5.html#m2a-2",
  "type": "Worksheet Exercise",
  "number": "5.6.7",
  "title": "",
  "body": "  Consider the curve .   Sketch the curve and label its important points.    Parametrize the entire curve using one parametrization.        (a) Divide both sides by to put the equation in standard form:   This is an ellipse with centre , semi-axis in the -direction and semi-axis in the -direction. Since , the major axis is vertical. The four vertices are and the foci lie on the vertical axis at distance from the centre. See .   The ellipse , with centre , horizontal semi-axis and vertical semi-axis .    A tall narrow ellipse centred at the point one comma negative four. Its topmost and bottommost points are one comma negative two and one comma negative six, and its leftmost and rightmost points are one half comma negative four and three halves comma negative four.     ell(t) = (1 + 0.5*cos(t), -4 + 2*sin(t))           (1,-4)    (1,-2)    (1,-6)    \\left(\\tfrac12,-4\\right)    \\left(\\tfrac32,-4\\right)               (b) For a circle we would use , . Here the standard form tells us that play the roles of and , since their squares add to . So we set which gives Letting run over a full period of length traces the entire ellipse exactly once, counterclockwise, starting at the right vertex .   "
},
{
  "id": "rf-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#rf-4",
  "type": "Worksheet Exercise",
  "number": "5.6.8",
  "title": "",
  "body": "  Find the vector equation of the line of intersection of the following planes:     The normal vectors are and , so the direction vector of the line of intersection is   Next we need a point on the line. Setting in the equations of the planes gives Adding the two equations gives , so and . Hence the point is on the line, and the vector equation of the line of intersection is    "
},
{
  "id": "rw21-5",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw21-5",
  "type": "Worksheet Exercise",
  "number": "5.6.9",
  "title": "",
  "body": "  Find an equation of a plane containing the line and parallel to the plane , in which the coefficient of is .    Since the desired plane is parallel to , it has the same normal vector (Note that , so the line is indeed parallel to such a plane.) When , the point is on the plane, so from the point-normal form,    "
},
{
  "id": "rs19-5",
  "level": "2",
  "url": "worksheet-assignment-5.html#rs19-5",
  "type": "Worksheet Exercise",
  "number": "5.6.10",
  "title": "",
  "body": "  Calculate the distance between the following two lines:     We notice that the two lines are parallel (both have direction vector ) and therefore we can find the distance between a point on and the line . Taking on and on , we get , and .  Using the cross product, and the distance is    "
},
{
  "id": "pp-17",
  "level": "2",
  "url": "worksheet-assignment-5.html#pp-17",
  "type": "Worksheet Exercise",
  "number": "5.6.11",
  "title": "",
  "body": "  Find parametric equations for the line through which is normal to the plane containing , and .    From , the plane through those three points has normal vector . A line normal to the plane has as its direction vector, so through ,    "
},
{
  "id": "m2b-5",
  "level": "2",
  "url": "worksheet-assignment-5.html#m2b-5",
  "type": "Worksheet Exercise",
  "number": "5.6.12",
  "title": "",
  "body": "  Let be the line given by Find the point on that is closest to .    Write and let be the general point of . The direction vector of the line is .  The closest point is the foot of the perpendicular from , so we want the value of for which is orthogonal to . First,   Now impose :   Substituting into the parametric equations gives the closest point As a check, at we get , and as required. The distance from to the line is .   "
},
{
  "id": "worksheet-assignment-6",
  "level": "1",
  "url": "worksheet-assignment-6.html",
  "type": "Worksheet",
  "number": "5.7",
  "title": "Assignment 6",
  "body": " Assignment 6   These problems match equations to pictures, identify a quadric surface from its equation by slicing it with the coordinate planes and sketch it, and identify conic sections from their equations. If you would like to review the material first, see and .    Matching Quadric Surfaces    Six quadric surfaces labeled A through F: an ellipsoid, a cone opening along the y axis, a saddle, a cylinder parallel to the y axis, a paraboloid opening along the positive y axis, and two bowl-shaped pieces meeting at the origin.       Match the equations of the surfaces with the graphs A F shown above by entering a letter from A to F in each blank.  matches graph .  matches graph .  matches graph .  matches graph .                       We identify each surface by slicing, just as in this section. Here the special axis is the -axis, so we slice with the planes  and  For the plane gives no trace for a single point when and ellipses that grow as increases. The planes and give the parabolas and both opening in the positive direction. Ellipses on one side only together with parabolas: an elliptical paraboloid opening along the positive -axis, graph E.  For the plane gives an ellipse for every on both sides of the origin, shrinking to a single point when The plane gives the two crossing lines Ellipses collapsing to a point, together with crossing lines: an elliptic cone along the -axis, graph B.  For the variable is missing, so the plane gives the same ellipse for every value of Identical elliptical slices at every station: a cylinder parallel to the -axis, graph D.  For the plane gives the parabola opening in the positive direction, while the plane gives the parabola opening in the negative direction, and the plane gives the crossing lines Parabolas opening in opposite directions: a hyperbolic paraboloid, a saddle, graph C.  Graphs A and F match none of the equations. Slicing the ellipsoid in A gives bounded ellipses in every direction, which none of the equations produce. Slicing the two bowls in F with planes gives ellipses whose size grows like unlike the straight-sided linear growth of the cone in B.          Identify and sketch the surface corresponding to the following equation:     We can rewrite the equation as . Let us look at its traces:    : the horizontal traces are circles of radius (for ).     : , a pair of lines intersecting at the origin.     : , a pair of lines intersecting at the origin.   The surface is a double cone with its vertex at the origin, opening along the -axis. See .   The surface : a double cone with vertex at the origin. Horizontal cross sections are circles of radius .    A double cone drawn in a three dimensional coordinate system: an upper cone opening upward along the z axis and a mirror image cone opening downward, meeting at a single vertex at the origin. Each cone is capped by an ellipse representing a circular cross section.          Identify and sketch the surface .    We can rewrite the equation as . Let us look at its traces:    : , circles with radius .     : , hyperbolas.     : , hyperbolas (for : ).   The surface is a hyperboloid of one sheet whose axis is the -axis. See .   The hyperboloid of one sheet , opening along the -axis. The narrowest circle, of radius 2, occurs at .    A hyperboloid of one sheet drawn with its axis along the horizontal y axis: a surface shaped like a cooling tower lying on its side, with a narrow circular waist at the center and wide circular openings at the left and right ends, outlined by two large end ellipses and hyperbola shaped side curves.          Identify and sketch the surface corresponding to the equation . Give reasons for your choice.    We can rewrite the equation as . Let us look at its traces:    : forces , the single point .     : , a parabola in the -plane.     : , a parabola in the -plane.     : , ellipses.   The surface is an elliptic paraboloid with vertex at the origin, opening along the positive -axis. See .   The elliptic paraboloid : a bowl with its vertex at the origin, opening along the positive -axis. Cross sections are ellipses.    A bowl shaped surface in a three dimensional coordinate system with its vertex at the origin, opening to the right along the positive y axis. The bowl is outlined by two parabola shaped profile curves and capped by an ellipse at its wide right end.          Sketch the surface in three dimensions. Label any points where the surface crosses the coordinate axes.    Collect everything on the left and divide by : Two minus signs and one plus sign, with the constant on the right, identify this as a hyperboloid of two sheets . The axis is the one belonging to the positive term, so the axis is the -axis.  The traces confirm this.   Setting gives , which is an ellipse when , a single point when , and empty when . So there is nothing at all in the slab : this is why there are two separate sheets.    Setting gives , a hyperbola opening along the -axis, and setting gives , likewise.      Axis crossings. Setting gives , impossible; setting gives , impossible. Setting gives , so the surface meets the axes only at the two vertices See .   The hyperboloid of two sheets , with vertices at . Nothing at all lies in the slab , which is why the two sheets are separate.    Two bowl shaped sheets opening away from each other along the y axis, with vertices at y equals two and y equals negative two. The region between the two vertices is empty.          Find the equation of the hyperbola with asymptotes and passing through the point .    Since the hyperbola meets the -axis (at ) it opens up and down, so it has the form whose asymptotes are . Setting , gives , and matching the asymptote slopes, Therefore See .   The hyperbola with its asymptotes , passing through and .     hup(t) = (t, 2*(1 + 9*t^2\/4)^(1\/2))  hdn(t) = (t, -2*(1 + 9*t^2\/4)^(1\/2))           (0,2)    y=3x                   Find the equation of the parabola with vertex at the origin and axis of symmetry the -axis, passing through the point . Then find its focus and its directrix.    The vertex is at the origin and the axis of symmetry is the -axis, so the parabola has the form whose focus is and whose directrix is the line . Only the one number is unknown, and the point pins it down: Therefore Since the parabola opens upward, its focus is and its directrix is the horizontal line .  As a check on the defining property of a parabola, the point is at distance from the focus and at distance from the directrix, and the two agree. See .   The parabola through , with focus and directrix . The point of the curve is the same distance from the focus as from the directrix.     par(t) = (t, t^2\/8)           F(0,2)    (4,2)    y=-2                      Two trees grow 100 feet apart. A 120 foot rope is attached to the first tree at a height of 100 feet and to the second tree at a height of 50 feet. A child folds an empty plastic water bottle over the rope and rappels from the high end of the rope to the low end. At each moment, the rope is taut. The point where the water bottle is folded over the rope traces a path. Ignoring the numbers, state what kind of curve the path makes: line, ellipse, parabola or hyperbola.    Let and be the two attachment points and the point where the bottle folds over the taut rope. Because the rope is taut and has fixed total length, the two straight segments and together always use up the whole rope: This is precisely the defining property of an ellipse with foci and . (The curve exists because : the distance between the attachment points is feet.) So the path is an arc of an ellipse , lying in the vertical plane containing the two trees.    "
},
{
  "id": "exercise-quadric-graph-match",
  "level": "2",
  "url": "worksheet-assignment-6.html#exercise-quadric-graph-match",
  "type": "Worksheet Exercise",
  "number": "5.7.1",
  "title": "Matching Quadric Surfaces.",
  "body": " Matching Quadric Surfaces    Six quadric surfaces labeled A through F: an ellipsoid, a cone opening along the y axis, a saddle, a cylinder parallel to the y axis, a paraboloid opening along the positive y axis, and two bowl-shaped pieces meeting at the origin.       Match the equations of the surfaces with the graphs A F shown above by entering a letter from A to F in each blank.  matches graph .  matches graph .  matches graph .  matches graph .                       We identify each surface by slicing, just as in this section. Here the special axis is the -axis, so we slice with the planes  and  For the plane gives no trace for a single point when and ellipses that grow as increases. The planes and give the parabolas and both opening in the positive direction. Ellipses on one side only together with parabolas: an elliptical paraboloid opening along the positive -axis, graph E.  For the plane gives an ellipse for every on both sides of the origin, shrinking to a single point when The plane gives the two crossing lines Ellipses collapsing to a point, together with crossing lines: an elliptic cone along the -axis, graph B.  For the variable is missing, so the plane gives the same ellipse for every value of Identical elliptical slices at every station: a cylinder parallel to the -axis, graph D.  For the plane gives the parabola opening in the positive direction, while the plane gives the parabola opening in the negative direction, and the plane gives the crossing lines Parabolas opening in opposite directions: a hyperbolic paraboloid, a saddle, graph C.  Graphs A and F match none of the equations. Slicing the ellipsoid in A gives bounded ellipses in every direction, which none of the equations produce. Slicing the two bowls in F with planes gives ellipses whose size grows like unlike the straight-sided linear growth of the cone in B.       "
},
{
  "id": "rf-5",
  "level": "2",
  "url": "worksheet-assignment-6.html#rf-5",
  "type": "Worksheet Exercise",
  "number": "5.7.2",
  "title": "",
  "body": "  Identify and sketch the surface corresponding to the following equation:     We can rewrite the equation as . Let us look at its traces:    : the horizontal traces are circles of radius (for ).     : , a pair of lines intersecting at the origin.     : , a pair of lines intersecting at the origin.   The surface is a double cone with its vertex at the origin, opening along the -axis. See .   The surface : a double cone with vertex at the origin. Horizontal cross sections are circles of radius .    A double cone drawn in a three dimensional coordinate system: an upper cone opening upward along the z axis and a mirror image cone opening downward, meeting at a single vertex at the origin. Each cone is capped by an ellipse representing a circular cross section.       "
},
{
  "id": "rw23-7",
  "level": "2",
  "url": "worksheet-assignment-6.html#rw23-7",
  "type": "Worksheet Exercise",
  "number": "5.7.3",
  "title": "",
  "body": "  Identify and sketch the surface .    We can rewrite the equation as . Let us look at its traces:    : , circles with radius .     : , hyperbolas.     : , hyperbolas (for : ).   The surface is a hyperboloid of one sheet whose axis is the -axis. See .   The hyperboloid of one sheet , opening along the -axis. The narrowest circle, of radius 2, occurs at .    A hyperboloid of one sheet drawn with its axis along the horizontal y axis: a surface shaped like a cooling tower lying on its side, with a narrow circular waist at the center and wide circular openings at the left and right ends, outlined by two large end ellipses and hyperbola shaped side curves.       "
},
{
  "id": "rw21-10",
  "level": "2",
  "url": "worksheet-assignment-6.html#rw21-10",
  "type": "Worksheet Exercise",
  "number": "5.7.4",
  "title": "",
  "body": "  Identify and sketch the surface corresponding to the equation . Give reasons for your choice.    We can rewrite the equation as . Let us look at its traces:    : forces , the single point .     : , a parabola in the -plane.     : , a parabola in the -plane.     : , ellipses.   The surface is an elliptic paraboloid with vertex at the origin, opening along the positive -axis. See .   The elliptic paraboloid : a bowl with its vertex at the origin, opening along the positive -axis. Cross sections are ellipses.    A bowl shaped surface in a three dimensional coordinate system with its vertex at the origin, opening to the right along the positive y axis. The bowl is outlined by two parabola shaped profile curves and capped by an ellipse at its wide right end.       "
},
{
  "id": "m2b-2",
  "level": "2",
  "url": "worksheet-assignment-6.html#m2b-2",
  "type": "Worksheet Exercise",
  "number": "5.7.5",
  "title": "",
  "body": "  Sketch the surface in three dimensions. Label any points where the surface crosses the coordinate axes.    Collect everything on the left and divide by : Two minus signs and one plus sign, with the constant on the right, identify this as a hyperboloid of two sheets . The axis is the one belonging to the positive term, so the axis is the -axis.  The traces confirm this.   Setting gives , which is an ellipse when , a single point when , and empty when . So there is nothing at all in the slab : this is why there are two separate sheets.    Setting gives , a hyperbola opening along the -axis, and setting gives , likewise.      Axis crossings. Setting gives , impossible; setting gives , impossible. Setting gives , so the surface meets the axes only at the two vertices See .   The hyperboloid of two sheets , with vertices at . Nothing at all lies in the slab , which is why the two sheets are separate.    Two bowl shaped sheets opening away from each other along the y axis, with vertices at y equals two and y equals negative two. The region between the two vertices is empty.       "
},
{
  "id": "pp-20",
  "level": "2",
  "url": "worksheet-assignment-6.html#pp-20",
  "type": "Worksheet Exercise",
  "number": "5.7.6",
  "title": "",
  "body": "  Find the equation of the hyperbola with asymptotes and passing through the point .    Since the hyperbola meets the -axis (at ) it opens up and down, so it has the form whose asymptotes are . Setting , gives , and matching the asymptote slopes, Therefore See .   The hyperbola with its asymptotes , passing through and .     hup(t) = (t, 2*(1 + 9*t^2\/4)^(1\/2))  hdn(t) = (t, -2*(1 + 9*t^2\/4)^(1\/2))           (0,2)    y=3x                "
},
{
  "id": "exer-parabola-focus-directrix",
  "level": "2",
  "url": "worksheet-assignment-6.html#exer-parabola-focus-directrix",
  "type": "Worksheet Exercise",
  "number": "5.7.7",
  "title": "",
  "body": "  Find the equation of the parabola with vertex at the origin and axis of symmetry the -axis, passing through the point . Then find its focus and its directrix.    The vertex is at the origin and the axis of symmetry is the -axis, so the parabola has the form whose focus is and whose directrix is the line . Only the one number is unknown, and the point pins it down: Therefore Since the parabola opens upward, its focus is and its directrix is the horizontal line .  As a check on the defining property of a parabola, the point is at distance from the focus and at distance from the directrix, and the two agree. See .   The parabola through , with focus and directrix . The point of the curve is the same distance from the focus as from the directrix.     par(t) = (t, t^2\/8)           F(0,2)    (4,2)    y=-2                   "
},
{
  "id": "pp-21",
  "level": "2",
  "url": "worksheet-assignment-6.html#pp-21",
  "type": "Worksheet Exercise",
  "number": "5.7.8",
  "title": "",
  "body": "  Two trees grow 100 feet apart. A 120 foot rope is attached to the first tree at a height of 100 feet and to the second tree at a height of 50 feet. A child folds an empty plastic water bottle over the rope and rappels from the high end of the rope to the low end. At each moment, the rope is taut. The point where the water bottle is folded over the rope traces a path. Ignoring the numbers, state what kind of curve the path makes: line, ellipse, parabola or hyperbola.    Let and be the two attachment points and the point where the bottle folds over the taut rope. Because the rope is taut and has fixed total length, the two straight segments and together always use up the whole rope: This is precisely the defining property of an ellipse with foci and . (The curve exists because : the distance between the attachment points is feet.) So the path is an arc of an ellipse , lying in the vertical plane containing the two trees.   "
},
{
  "id": "worksheet-review-problems-2",
  "level": "1",
  "url": "worksheet-review-problems-2.html",
  "type": "Worksheet",
  "number": "5.8",
  "title": "Review Problems #2",
  "body": " Review Problems #2   These are the problems from the Chapter 3 topics that were not assigned in Assignments 4-6, collected here for review. They are not assigned, but they are fair game on an exam. Problems marked with a star ( ) are the exception: those are for the interested reader and will not be examined.  The topics they cover, with links to the notes:                Describing More Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the set of all points whose -coordinate equals , that is . Both and are unrestricted, so it is a plane parallel to the -plane, sitting two units to the negative side of it, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the x z plane, offset from it in the negative y direction, representing the plane y equals negative two.       B. This is the intersection of the two planes and , which is a line. Only is unrestricted, so the line is parallel to the -axis and passes through the point , as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for y equals negative two and one for z equals one, crossing each other. Their intersection is a red line parallel to the x axis.       C. Comparing with the standard equation of a sphere, this is the sphere of radius centered at . Note the center lies in the -plane, and since the radius is the sphere reaches from up to , as shown in .   Part C : the sphere , of radius centered at .    A shaded sphere of radius three, offset from the origin toward the point two, negative one, zero, with a dotted segment from the origin to its center and a dashed ellipse marking its equator.       D. Replacing the equality by gives the solid ball: every point whose distance from is at most . The extra condition keeps only the points on one side of the plane . That plane passes through the center of the ball, so exactly half of the ball survives: the region is a solid half-ball of radius , whose flat face is the disk of radius cut out of the plane , shown in .   Part D : the half-ball of radius centered at , cut by the condition , a plane through its center.    A shaded hemisphere sitting above a flat disk face at the plane y equals negative one, offset from the origin toward the point two, negative one, zero, with a dotted segment from the origin to the center of the disk.       E. In the -plane, is a circle of radius centered at the origin. In space is unrestricted, so the equation represents an infinitely long cylinder of radius whose axis is the -axis. Had the missing variable been instead, the axis would have been the -axis: the axis of the cylinder is always the axis of the variable that does not appear. The left half of shows this cylinder.   F. The extra condition cuts the cylinder of part E down to a piece of length , running from the circle in the plane to the circle in the plane , as on the right of . It is a tube, not a solid: the two end disks are not included, since the equation forces exactly.   Parts E and F . On the left, the infinite cylinder , whose axis is the -axis; the dashed lines indicate that it continues without bound in both directions. On the right, the same cylinder cut down to .    Two pictures side by side. On the left, a tube of radius two lying along the x axis, with dashed lines continuing past both ends to show that it is unbounded. On the right, the same tube cut off by the plane x equals zero at one end and the plane x equals five at the other, leaving a piece of length five with open ends.       G. The condition says nothing about , so whenever a point satisfies it, so does the whole vertical line through that point. In the -plane the equation describes a line through the origin, and sweeping that line vertically gives a plane: the plane containing the -axis that cuts the -plane along the line , shown in . It is not parallel to any coordinate plane, unlike part A .   Part G : the plane . It contains the -axis and meets the -plane in the line , drawn in red.    A shaded plane standing vertically and cutting diagonally through the first and third octants. It contains the z axis, and the red line where it meets the horizontal x y plane runs diagonally between the x and y axes.         A Solid Bounded by a Cylinder and a Plane   Consider the solid region bounded by the three surfaces restricted to . Describe each of the three bounding surfaces, and describe the solid region they enclose.    The equation is missing , so it is the infinite cylinder of radius whose axis is the -axis. The equation is the -plane, and is a plane tilted with respect to all three coordinate axes.  Solving the third equation for gives . Over the disk enclosed by the cylinder, this height stays positive: the largest value of on that disk is , attained in the direction , so throughout the disk. The tilted plane therefore never dips below the -plane over the region enclosed by the cylinder.  The solid is the piece of the solid cylinder lying between the flat base and the slanted lid : an oblique, truncated cylinder whose base is the disk of radius in the -plane and whose slanted top is an ellipse, shown in .   The solid bounded by , the cylinder , and the tilted plane . The disk in the -plane is the flat base, and the plane, hatched in pink, cuts the cylinder in an ellipse that forms the slanted top.    A cylinder of radius two centered on the z axis, standing on a shaded disk in the x y plane. The cylinder is sliced off at a slant by a tilted plane, hatched in pink, that meets it in an ellipse forming the top of the solid.          The vectors , and have their tails at the origin. Find the value of that will make their heads collinear.  Three points are collinear when they all lie on one straight line. Two points always do, so the condition is a condition on the third: it has to lie on the line already determined by the other two.    The heads are the points , , and , and we want all three on a single line. Two of them are already given, so the line is fixed: the line through the first two has slope For to lie on that same line, the slope from to must also be :   Equivalently, in vector language: the three heads are collinear exactly when the displacement vectors between them are parallel. Here and , and these are parallel exactly when , that is , giving again.      Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The difference is the vector that, added to , gives . So when and are drawn from a common tail, is the arrow that runs from the tip of   to the tip of  . (Here it is .) It is easy to get this backwards; the check is that . See .    runs from the tip of to the tip of .    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. An orange arrow runs from the tip of u to the tip of v, representing v minus u.          \\vec u    \\vec v    \\vec v-\\vec u                   Find the projection of on .    With and , so The negative scalar tells us the projection points opposite to , i.e. the angle between and is obtuse.      Let be the vector from to .   Find a non-zero unit vector that is orthogonal to .    Find the angle between and .       First,    (a) We need any non-zero with . Writing , the condition is This is one equation in three unknowns, so there are infinitely many answers; we just pick a convenient one. Taking gives , so , works: Finally we normalize:    (b) With we have Therefore so The angle is slightly less than a right angle, which matches the fact that the dot product is positive but small.      Let and . Find an equation for the set of all points such that is orthogonal to . Then sketch the resulting surface in three dimensions.    The two vectors are   Orthogonality means the dot product vanishes:   Now complete the square in and in :   This is the sphere of radius centred at . That centre is exactly the midpoint of and , and the radius is exactly half of . This is the three-dimensional version of the familiar fact from plane geometry: the points from which a given segment subtends a right angle form the circle having that segment as a diameter. See .   The set of points with is the sphere having as a diameter, namely .    A sphere in three dimensional space with the segment from A at zero, zero, one to B at zero, two, three drawn as a diameter. A point P is marked on the sphere and the two segments from P to A and from P to B meet at a right angle.          Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The projection of onto is the shadow that casts on the line through , obtained by dropping a perpendicular from the tip of to that line. Algebraically, Because the angle between and is obtuse , the dot product is negative and the projection points in the direction opposite to . This is the feature of the picture the problem is testing. See .   Since the angle between and is obtuse, points opposite to .    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. A short dark red arrow along the line of u points backwards, away from u, with a dashed perpendicular from the tip of v, representing the projection of v onto u.            \\vec u    \\vec v    \\operatorname{proj}_{\\vec u}\\vec v                   Suppose and are non-zero vectors satisfying and Without finding the coordinates of either vector:   Compute .    Find .    Find the angle between and .    Determine whether the angle is acute, right, or obtuse.       The whole problem rests on one idea: the square of a length is a dot product, . Expanding with the distributive property, These two identities are the algebraic form of the parallelogram in : the diagonals of the parallelogram built on and are and .   (a) Subtracting the second identity from the first makes the and terms cancel, leaving only the dot product: Substituting the two given lengths, and therefore .  It is worth pausing to check that the data are consistent. Adding the two identities instead of subtracting gives the parallelogram law, and indeed , exactly as it should be.   (b) We are told and , so A length is never negative, so .   (c) For non-zero vectors, , so and therefore    (d) Since and the lengths are positive, . Hence and the angle is obtuse . Notice that we could have answered this part immediately after part (a), without knowing either length: the sign of the dot product already decides the type of angle.   The parallelogram built on and . Its diagonals are , of length , and , of length . One short diagonal together with one long one forces the angle between the sides to be obtuse.    A parallelogram with two vectors u and v drawn from a common corner, showing the short diagonal u plus v and the long diagonal u minus v, with an obtuse angle marked between u and v.             \\theta    \\mathbf u,\\ \\|\\mathbf u\\| = 7    \\mathbf v,\\ \\|\\mathbf v\\| = 4\\sqrt3    \\mathbf u+\\mathbf v,\\ \\text{length } 5    \\mathbf u-\\mathbf v,\\ \\text{length } 13                  A remark on the data. The two diagonal lengths by themselves already determine , and the condition then follows automatically from the parallelogram law. So the individual lengths are not pinned down by that data alone: the pair , fits equally well and gives the same angle, while other splits of give different angles. This is why the extra condition is needed for parts (b) and (c).         Find the area of the triangle with vertices , , .    Find the equation of the plane containing the triangle.       Take as the base vertex and form two edge vectors: Their cross product is    The magnitude of the cross product is the area of the parallelogram spanned by and , so the triangle has half that area:     The cross product is normal to the plane, so the plane has the form . Substituting the point gives , hence          Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The cross product is perpendicular to both, hence perpendicular to the page. The right-hand rule (curl the fingers of the right hand from towards through the smaller angle) shows that it points out of the page , which we draw as a circle with a dot in it. Indeed, treating the vectors as lying in the -plane, and the -component is positive. Its length, , is the area of the parallelogram spanned by and . See .    points out of the page, drawn as a circle with a dot at its centre.    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. A circle with a dot at its centre represents u cross v, a vector pointing out of the page.           \\vec u    \\vec v    \\vec u\\times\\vec v                  *Circular Motion from a Perpendicular Force    Starred problem. This one is for the interested reader. It will not be examined.  Through this guided exercise, we prove that a force of constant magnitude that always points perpendicular to the velocity drives the particle around a circle. We then apply it to a charged particle in a magnetic field.  Both of the products you have met so far appear, and they do genuinely different jobs. Watch for them:   the dot product is used, through , to determine whether the speed of a particle acted upon by a perpendicular force can change,    the cross product is used to determine the direction and magnitude of the force that keeps a charged particle moving in a uniform magnetic field.         A particle of mass moves under a force of constant magnitude that is always perpendicular to its velocity . Show that the particle's speed is constant.    Since is perpendicular to , we have   Now consider the square of the speed, . Using the product rule for the dot product The product rule holds for the dot product just as it does for ordinary multiplication: . Taking makes the two terms equal, which gives the step used here, . and then Newton's second law , So never changes, and hence neither does the speed .   Why the dot product is the right tool here. The quantity is the rate at which the force does work on the particle. A force with a forward component speeds the particle up; a force with a backward component slows it down. Only the part of lying along can change the speed, and the dot product is exactly the mathematical tool that isolates that part. When it vanishes, can only change the direction of the velocity but not its magnitude, and so can only turn the particle, while the speed remains constant. See .   Only the component of along can change the speed. On the left that component is non-zero, so the particle speeds up; on the right , the component is zero, and the speed cannot change.    Two panels. In the left panel a force arrow leans forward over the direction of motion and its component along the velocity is drawn in green, so the dot product is non-zero and the speed changes. In the right panel the force is perpendicular to the velocity, marked with a right angle, so it has no component along the velocity, the dot product is zero, and the speed stays constant.     pathA(t) = (t, 0.09*t^2)  pathB(t) = (t + 9, 0.09*t^2)          \\vec v  \\vec F   \\text{component along }\\vec v    \\vec F\\cdot\\vec v \\ne 0 \\;\\Rightarrow\\; \\text{speed changes}         \\vec v  \\vec F   \\text{no component along }\\vec v    \\vec F\\cdot\\vec v = 0 \\;\\Rightarrow\\; \\text{speed constant}                    During a short time interval , show that the direction of the velocity turns through the angle (Hint: draw the two velocity vectors, which have equal length, from a common tail.)    By the previous task the velocity never changes length; it only swings around. So and are two vectors of the same length , separated by the small angle we are after. Drawn from a common tail they form an isosceles triangle whose third side is , as in .  The tips of the two vectors both lie on a circle of radius . The straight side is the chord cutting off the arc of angle on that circle, and for a small angle a chord is very nearly the arc it subtends:   On the other hand Newton's second law over the short interval gives Equating the two expressions for , which is what we wanted. Notice the rate of turning is a constant , since , and all are: the particle swings around at a steady angular rate.   The two velocities have equal length (dashed arc), so the triangle is isosceles and the chord has length .    Two velocity arrows of equal length v are drawn from a common tail, separated by a small angle delta theta, with a dashed circular arc of radius v joining their tips to show the lengths are equal. A third arrow, delta v, runs from the first tip to the second; its length is about v times delta theta.             \\Delta\\theta    \\vec v(t)    \\vec v(t+\\Delta t)    \\Delta\\vec v    v  v   \\text{equal lengths} \\;\\Rightarrow\\; \\|\\Delta\\vec v\\| \\approx v\\,\\Delta\\theta    \\text{Newton:}\\; \\|\\Delta\\vec v\\| = \\tfrac{F}{m}\\Delta t \\;\\Rightarrow\\; \\Delta\\theta = \\tfrac{F}{mv}\\Delta t                     Combine with the arc-length formula to prove that     In time the particle covers the arc length . If that arc bends through the angle , then the radius of the arc is defined by . Solving for and substituting both expressions,       Conclude that the trajectory is a circle.    The quantity is built from , and , every one of which is constant — because of the first task, and by hypothesis. So the path bends through equal angles over equal arc lengths, everywhere along the trajectory: its radius of curvature is the same constant at every point.  A plane curve with constant radius of curvature is a circle. Concretely, the centre of the turn always lies a fixed distance from the particle in the direction of .   The velocity is tangent to the circle and the force points straight at the centre. Equal arcs subtend equal angles , and the ratio of the two is the constant radius .    A circle of radius R centred at O. At a point on the circle the velocity arrow is tangent and the force arrow points from the particle straight in toward the centre, meeting the velocity at a right angle. Two dashed radii mark a small angle delta theta at the centre, and the arc between them, of length delta s equals R delta theta, is highlighted.           \\Delta\\theta          O  R  \\vec v  \\vec F   \\Delta s = R\\,\\Delta\\theta    \\Delta s = v\\,\\Delta t \\quad\\text{and}\\quad \\Delta\\theta = \\tfrac{F}{mv}\\Delta t    \\Rightarrow\\;\\; R = \\dfrac{\\Delta s}{\\Delta\\theta} = \\dfrac{mv^2}{F} \\;\\;\\text{— a constant}                       A particle of charge enters a uniform magnetic field with its velocity perpendicular to the field. The magnetic force is Show that this force has magnitude .    The length of a cross product is , where is the angle between and . Here the velocity is perpendicular to the field, so and . Therefore Since is constant (we are about to confirm this) and is uniform, this magnitude is constant — the first hypothesis of part .      Explain why this force is always perpendicular to the velocity — not just at the initial instant, but at every moment of the motion.    This is the defining property of the cross product: is perpendicular to both factors, whatever they happen to be. So is perpendicular to automatically, at every instant, with no computation and no special assumption about where the particle is or which way it is heading.  If you would like it verified rather than quoted, the dot product does it in one line. Two facts are doing the work. First, the scalar triple product equals the determinant whose rows are , and . Second, a determinant with two equal rows is zero, since interchanging those two rows both leaves the determinant unchanged and reverses its sign. Taking ,   So such a magnetic field can never change the speed of a charged particle, no matter how strong it is. Here the magnetic force does no work and it solely changes the direction of the velocity.      Deduce that the particle moves in a circle, and find the radius of that circle.    The previous two tasks establish exactly the two hypotheses of part : the magnetic force has constant magnitude , and it is always perpendicular to the velocity. The argument of parts – therefore applies verbatim, and the particle travels in a circle at constant speed.  For the radius, put into : Equivalently, the magnetic force supplies precisely the inward force that circular motion demands: See . Faster particles and heavier particles travel on wider circles; stronger fields and larger charges wind them tighter.   A positive charge in a uniform field directed into the page. The force is perpendicular to automatically, so it never changes the speed — it only bends the path into a circle of radius .    A uniform magnetic field into the page, shown as a grid of small crosses. A positive charge travels counter-clockwise around a circle of radius r centred at O. At the rightmost point of the circle its velocity points straight up, tangent to the circle, and the magnetic force q v cross B points straight in toward the centre, at a right angle to the velocity.       \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times             O  r  \\vec v  \\vec F  q>0   \\vec B \\text{ into the page}    \\vec F = q\\,\\vec v\\times\\vec B \\;\\Rightarrow\\; \\|\\vec F\\| = |q|vB, \\;\\; \\vec F\\perp\\vec v \\text{ automatically}    |q|vB = \\dfrac{mv^2}{r} \\;\\;\\Longrightarrow\\;\\; r = \\dfrac{mv}{|q|B}                      *Speed and direction of a projectile    Starred problem. This one is for the interested reader. It will not be examined.  A particle is projected from with speed at an elevation to the horizontal, as in . At time it is at the point , moving with speed in a direction making an angle with the horizontal. Show that and    A particle projected from with speed at elevation . At the point reached after time , the velocity is tangent to the path and makes an angle with the horizontal; is the depth of below the directrix.      f(x) = 0.2*x*(8 - x)      \\text{directrix}      h    \\theta  v_0     v\\cos\\phi  v\\sin\\phi    \\phi  v     O  P                         Take the origin at with horizontal and vertical axes. The coordinates of at time are The horizontal and vertical components of the velocity are the time derivatives of these, so Squaring and adding eliminates : which gives the speed at time . Dividing the vertical component by the horizontal component gives the direction, that is, .     *Free fall from the directrix    Starred problem. This one is for the interested reader. It will not be examined.  The directrix of the parabolic path is the horizontal line at height above . Using the previous exercise, show that the speed of the particle at is equal to the speed it would acquire by falling freely from the level of the directrix down to . That is, if denotes the depth of below the directrix (see ), then .    From the previous exercise, since is the height of . Writing this as and recognizing as the height of the directrix above , the quantity is exactly the depth of below the directrix. Hence , the square of the speed gained by falling freely through the height .     *A collision on the directrix    Starred problem. This one is for the interested reader. It will not be examined.  Two objects move under gravity. The first is the projectile of the two previous exercises: launched from with speed at an elevation to the horizontal. The second is a ball released from rest at a point on the directrix, the horizontal line at height above . We want the two to collide at the moment the projectile is at half of its maximum height, on the way down . See .   The projectile reaches half of its maximum height at the point on the way down. The ball is released from rest at the point vertically above on the directrix, and falls the depth to meet it.     f(x) = 0.55*x*(8 - x)  C = (6.83, 4.4)      \\text{directrix } y = \\frac{v_0^2}{2g}     \\text{projectile}      H  \\frac{H}{2}       h   B  C  O                   Show that the projectile is at half of its maximum height at the two times and say which of these is on the descending branch.    The vertical motion is . It is greatest when , that is at , which gives the maximum height Setting gives the quadratic equation whose discriminant is . Hence These straddle the apex time symmetrically, as they must. The descending crossing is the later one,       Find the point on the directrix from which the ball must be released.    Released from rest, the ball has no horizontal velocity, so it falls along a vertical line: must be directly above the collision point . The projectile's horizontal coordinate at time is so the release point is In terms of the range this is comfortably past the apex at and short of the landing point, as shows.      Find how long after the projectile is launched the ball must be released.    The depth of below the directrix is Falling from rest through takes a time with , so The ball must therefore be released seconds after the projectile is launched.      Show that at the instant of the collision the two objects have exactly the same speed.    By , a projectile at depth below its directrix has speed . The ball starts from rest on the directrix and has fallen the same depth , so its speed is The two are equal. This is not a coincidence of our particular choice of : the projectile always carries exactly the speed it would have gained by falling freely from the directrix, and the ball is doing precisely that fall. Wherever on the path we arrange the collision, the two objects meet with the same speed, here Their directions of course differ: the ball moves straight down, while the projectile moves down and forward at the angle of .      Is always positive? Find the elevations for which the ball is released after the projectile is launched, and explain what a negative would mean.    Requiring means and squaring gives , that is For flatter launches the required release time is negative: the ball would have to be dropped before the projectile is fired, because a shallow trajectory reaches its (low) half-height point sooner than the ball can fall the long way down from the directrix.      puts the whole scenario in motion: the projectile rises to , the ball is released from at the time , the two meet at , and the velocity arrows there have the same length.     Animation: the projectile and the ball, released from rest on the directrix, collide at half of the maximum height with equal speeds.         Consider the curve of intersection of the surfaces and .   Parametrize the curve.    Find the projection of the curve onto the -plane, and give a Cartesian equation for it.        (a) The first surface does not involve ; dividing by , which is an ellipse in the -plane with semi-axes (in ) and (in ). It is parametrized by , . The second surface simply forces , so    (b) Projecting onto the -plane just means forgetting the -coordinate, so the projected curve is parametrized by the first two components alone, To turn that into a Cartesian equation, eliminate with : The shadow is an ellipse in the -plane with semi-axes in the -direction and in the -direction. This is the same ellipse we started from in the -plane, which is no accident: the plane carries the -coordinate over to the -coordinate unchanged.      Find the intersection of the line and the plane .    The parametric equations of the line are Substituting into the equation of the plane, and , , . The intersection is the point .      Find the distance between the two planes     Dividing the second equation by gives , so both planes have the same normal vector and are therefore parallel . (They are distinct, since .)  Pick any point on the first plane, say , and any point on the second, say . Then , and the distance between the planes is the length of the projection of onto :       Find the angle between the planes and .    The angle between two planes equals the angle between their normal vectors, and : so .      There is a line parametrized by , , . The line passes through some point whose -coordinate is . Find an equation for the plane through normal to .    First locate . Setting , so and , i.e. .  A plane normal to has the direction vector of as its normal vector, . Therefore the plane is       A surveyor determines that the three points all lie on a flat surface .   Find the point of that is closest to the point .    Find parametric equations for a line that passes through , never crosses , and satisfies .        Finding the plane. Two vectors lying in are A normal vector is their cross product: Note , which will be convenient. Using the point , the plane is (Check: gives and gives .)   (a) The closest point of a plane to a given point is the foot of the perpendicular from , which we reach by moving from in the direction of the normal. So consider and find the value of for which this point lies on : Therefore the closest point is (Check: .) Incidentally, the distance from to is . See .   Schematic picture of . From we travel along the normal direction until we hit , arriving at . Any line through whose direction is perpendicular to stays parallel to and never meets it.    A tilted plane W drawn as a parallelogram, with the point Q below it. A normal arrow runs from Q up to the foot of the perpendicular on the plane, and a second line through Q is drawn parallel to the plane, never meeting it.       (b) A line never crosses the plane exactly when it is parallel to and does not lie in it. Since is not on (we saw ), we only need the direction vector to be perpendicular to the normal:   The extra requirement forces the two lines and to agree for all , which happens exactly when . Substituting , Choosing and gives , and the line is Indeed for every , and , so the line is parallel to and, starting from a point off , never reaches it.     *A Parabolic Antenna    Starred problem. This one is for the interested reader. It will not be examined.  A parabolic antenna has the shape of a paraboloid of revolution: it is created by rotating part of a parabola around its axis. By the reflection property, all signals arriving parallel to the axis are concentrated at the focus after reflecting off the dish, so that is where the receiver is mounted. The axial cross-section of the dish is described by two measurements: the diameter  of the dish and its depth  . Placing the vertex at the origin with the dish opening upward, the cross-section is the parabola , and the rim passes through the points .  Consider a dish antenna with diameter cm and depth cm, suitable for the amateur radio band at GHz.   Cross-section of the parabolic antenna: diameter , depth , focus , and opening angle .    A parabola opening upward with vertex at the origin. The rim points at (minus d over 2, h) and (d over 2, h) are joined by a horizontal double arrow labeled d. A vertical double arrow labeled h shows the depth from the rim down to the axis level. The focus F(0,p) lies on the y axis above the rim, and two segments run from the focus to the rim points, enclosing the opening angle two phi.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)        2\\varphi    d   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                        Determine the optimal location for the receiver, that is, find the distance from the vertex of the dish to the focus.    The receiver must sit at the focus . The rim point lies on the parabola , so   The receiver should be mounted on the axis about cm above the vertex of the dish. Note that here, so the focus sits above the rim of this shallow dish.      Find the quadratic function (explicit form) that describes the curvature of the dish, and graph it (for example, in GeoGebra or Desmos).    Solving for with gives   The graph captures the true curvature of the dish provided both axes use the same scale.      The opening angle  of the dish is the angle at which the two edges of the rim are seen from the focus. Compute it.    The focus , the point , and the rim point form a right triangle with legs (vertical) and (horizontal), and is the angle at the focus. Hence    The right triangle used to compute the half opening angle : legs and .    The same parabola and focus as before, with a red right triangle drawn from the focus: a vertical leg of length p minus h down to the rim level, a horizontal leg of length d over 2 out to the right rim point, and the segment from the focus to the rim point as hypotenuse. The angle phi at the focus is marked.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)            \\varphi   p-h  d\/2   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                    The opening angle of the dish is .       Identify and sketch the surface .    Dividing by , we can rewrite the equation as which forces , i.e. or . Let us look at the traces:   Intersection with the plane : , a hyperbola.    Intersection with the plane : ; when , we have ellipses as intersections.    Intersection with the plane : , a hyperbola.   The surface is a hyperboloid of two sheets along the -axis, with vertices and . See .   The hyperboloid of two sheets : two bowl-shaped sheets opening along the -axis, with vertices at .    Two bowl shaped surfaces in a three dimensional coordinate system, opening away from each other along the horizontal y axis. The left sheet has its vertex at zero comma negative two comma zero and opens to the left; the right sheet has its vertex at zero comma two comma zero and opens to the right. Each sheet ends in an ellipse.         Which of These Are Hyperboloids?   None of the equations below is in standard position. Complete the square where necessary, then select every equation whose surface is a hyperboloid, of one sheet or of two.       Correct. Completing the square gives : one negative square, equal to a positive constant, so a hyperboloid of one sheet.       No. This is — every square is positive, so it is an ellipsoid.       Correct. Two negative squares against a positive constant gives a hyperboloid of two sheets.       No — and this is the trap. It has the same signs as the first option, but it equals rather than a positive constant. That degenerates the hyperboloid into an elliptic cone , the surface the two families of hyperboloids approach asymptotically.       No. The word hyperbolic is a red herring: this is linear in , so it is a hyperbolic paraboloid (a saddle) with vertex at , not a hyperboloid.      Completing the square in the first and second, Reading off the signs: one negative square against is a hyperboloid of one sheet; two negative squares against is a hyperboloid of two sheets. So the first and third are hyperboloids. The second is an ellipsoid, the fourth equals and so is a cone, and the fifth is linear in and so is a hyperbolic paraboloid.     Graphing a Parabolic Cylinder   Sketch the graph of over the rectangle , in the -plane. Why is this surface called a parabolic cylinder ?    Since the equation does not involve , every cross-section of the surface at a fixed value of is the same parabola in the -plane, opening downward from its vertex at . Sliding that parabola along the -axis from to sweeps out the surface.  Over , the parabola satisfies , with equality exactly at , so the surface touches the -plane along the two edges of the rectangular region and rises to a maximum height of along the ridge . Because it is generated by sliding a fixed curve along a straight line, rather than curving in the direction as well, it is called a parabolic cylinder , shown in .   The parabolic cylinder over the rectangle , . Every slice at a fixed is the same downward-opening parabola.    A curved sheet shaped like a downward opening parabola in the x z plane, extended without change along the y direction over a rectangular region in the x y plane, forming an arched, tunnel-like surface.         A Solid Bounded by a Cylinder and a Paraboloid   Consider the solid bounded by the three surfaces    Describe each of the three bounding surfaces.    Describe the solid region they enclose.    Describe the cross-section of the solid in the plane .        (a) The equation is the -plane. The equation is a paraboloid opening upward from its vertex at the origin. The equation is missing , so it is the infinite cylinder of radius whose axis is the -axis. The paraboloid meets that cylinder exactly where , at height .   (b) The solid consists of the points inside the cylinder lying between the flat base and the paraboloid: Near the -axis this range for is almost nothing, since there, while at the rim it is the full interval . The solid is therefore shaped like a shallow bowl carved out from underneath the paraboloid: thin at the center and rising to its full height at the cylinder wall, shown in .   (c) Setting restricts the solid's defining inequalities to and : the region under the parabola , above the -axis, between and , shown in .   The cross-section of the solid in the plane : the region under the parabola for .    A two dimensional graph in the x z plane. A shaded region lies under the upward opening parabola z equals x squared, above the x axis, between x equals negative two and x equals two.       The solid bounded by , the paraboloid , and the cylinder . The solid fills the region under the paraboloid, thin near the -axis and reaching full height where the paraboloid meets the cylinder wall.    A paraboloid opening upward from the origin, shown as a shaded bowl sitting inside a cylindrical wall of radius two. The bowl's rim meets the top of the cylinder, and a shaded disk in the x y plane forms the flat base of the solid beneath the bowl.          Which Identity Fails?   Exactly one of the following is not valid for all vectors in . Which one?         This one is valid. Both sides equal the determinant with rows , so the dot and the cross may be interchanged.         Correct — the cross product is not associative . Take and . Then The left side lies in the plane of and ; the right side lies in the plane of and . There is no reason for those to agree.         This one is valid — the cross product is distributive over addition. (It is only associativity that fails.)         This one is valid: it is the BAC-CAB triple product expansion. It looks the most exotic of the four, which is exactly why it is worth remembering that it is true.       Distance Between Skew Lines   Consider the two lines They are skew. Let be the direction vectors and let join a point of to a point of .  The absolute value of the scalar triple product equals .  The distance between the two lines, to three decimal places, is .      Correct.     Nearly — the triple product itself is , but the question asks for its absolute value .       Correct.     That is , the denominator . You still need to divide the triple product by it.      You appear to have divided by rather than by .       The vector is perpendicular to both lines, so the distance is the length of the projection of onto it: .    With and , Taking ,      Why a Magnetic Field Cannot Change a Particle's Speed   Arrange the steps below into a correct proof that the magnetic force does no work, and therefore that a charged particle in a magnetic field moves at constant speed.      Let a particle of mass and charge move with velocity through a magnetic field .    The force on the particle is .    By definition, a cross product is perpendicular to both of its factors, so is perpendicular to .    Hence .    The kinetic energy satisfies .    Therefore , so is constant: the field changes the particle's direction but never its speed.     "
},
{
  "id": "ex-3d-describe-more",
  "level": "2",
  "url": "worksheet-review-problems-2.html#ex-3d-describe-more",
  "type": "Worksheet Exercise",
  "number": "5.8.1",
  "title": "Describing More Equations and Inequalities Geometrically.",
  "body": " Describing More Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the set of all points whose -coordinate equals , that is . Both and are unrestricted, so it is a plane parallel to the -plane, sitting two units to the negative side of it, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the x z plane, offset from it in the negative y direction, representing the plane y equals negative two.       B. This is the intersection of the two planes and , which is a line. Only is unrestricted, so the line is parallel to the -axis and passes through the point , as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for y equals negative two and one for z equals one, crossing each other. Their intersection is a red line parallel to the x axis.       C. Comparing with the standard equation of a sphere, this is the sphere of radius centered at . Note the center lies in the -plane, and since the radius is the sphere reaches from up to , as shown in .   Part C : the sphere , of radius centered at .    A shaded sphere of radius three, offset from the origin toward the point two, negative one, zero, with a dotted segment from the origin to its center and a dashed ellipse marking its equator.       D. Replacing the equality by gives the solid ball: every point whose distance from is at most . The extra condition keeps only the points on one side of the plane . That plane passes through the center of the ball, so exactly half of the ball survives: the region is a solid half-ball of radius , whose flat face is the disk of radius cut out of the plane , shown in .   Part D : the half-ball of radius centered at , cut by the condition , a plane through its center.    A shaded hemisphere sitting above a flat disk face at the plane y equals negative one, offset from the origin toward the point two, negative one, zero, with a dotted segment from the origin to the center of the disk.       E. In the -plane, is a circle of radius centered at the origin. In space is unrestricted, so the equation represents an infinitely long cylinder of radius whose axis is the -axis. Had the missing variable been instead, the axis would have been the -axis: the axis of the cylinder is always the axis of the variable that does not appear. The left half of shows this cylinder.   F. The extra condition cuts the cylinder of part E down to a piece of length , running from the circle in the plane to the circle in the plane , as on the right of . It is a tube, not a solid: the two end disks are not included, since the equation forces exactly.   Parts E and F . On the left, the infinite cylinder , whose axis is the -axis; the dashed lines indicate that it continues without bound in both directions. On the right, the same cylinder cut down to .    Two pictures side by side. On the left, a tube of radius two lying along the x axis, with dashed lines continuing past both ends to show that it is unbounded. On the right, the same tube cut off by the plane x equals zero at one end and the plane x equals five at the other, leaving a piece of length five with open ends.       G. The condition says nothing about , so whenever a point satisfies it, so does the whole vertical line through that point. In the -plane the equation describes a line through the origin, and sweeping that line vertically gives a plane: the plane containing the -axis that cuts the -plane along the line , shown in . It is not parallel to any coordinate plane, unlike part A .   Part G : the plane . It contains the -axis and meets the -plane in the line , drawn in red.    A shaded plane standing vertically and cutting diagonally through the first and third octants. It contains the z axis, and the red line where it meets the horizontal x y plane runs diagonally between the x and y axes.       "
},
{
  "id": "ex-3d-cylinder-plane-solid",
  "level": "2",
  "url": "worksheet-review-problems-2.html#ex-3d-cylinder-plane-solid",
  "type": "Worksheet Exercise",
  "number": "5.8.2",
  "title": "A Solid Bounded by a Cylinder and a Plane.",
  "body": " A Solid Bounded by a Cylinder and a Plane   Consider the solid region bounded by the three surfaces restricted to . Describe each of the three bounding surfaces, and describe the solid region they enclose.    The equation is missing , so it is the infinite cylinder of radius whose axis is the -axis. The equation is the -plane, and is a plane tilted with respect to all three coordinate axes.  Solving the third equation for gives . Over the disk enclosed by the cylinder, this height stays positive: the largest value of on that disk is , attained in the direction , so throughout the disk. The tilted plane therefore never dips below the -plane over the region enclosed by the cylinder.  The solid is the piece of the solid cylinder lying between the flat base and the slanted lid : an oblique, truncated cylinder whose base is the disk of radius in the -plane and whose slanted top is an ellipse, shown in .   The solid bounded by , the cylinder , and the tilted plane . The disk in the -plane is the flat base, and the plane, hatched in pink, cuts the cylinder in an ellipse that forms the slanted top.    A cylinder of radius two centered on the z axis, standing on a shaded disk in the x y plane. The cylinder is sliced off at a slant by a tilted plane, hatched in pink, that meets it in an ellipse forming the top of the solid.       "
},
{
  "id": "pp-10",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-10",
  "type": "Worksheet Exercise",
  "number": "5.8.3",
  "title": "",
  "body": "  The vectors , and have their tails at the origin. Find the value of that will make their heads collinear.  Three points are collinear when they all lie on one straight line. Two points always do, so the condition is a condition on the third: it has to lie on the line already determined by the other two.    The heads are the points , , and , and we want all three on a single line. Two of them are already given, so the line is fixed: the line through the first two has slope For to lie on that same line, the slope from to must also be :   Equivalently, in vector language: the three heads are collinear exactly when the displacement vectors between them are parallel. Here and , and these are parallel exactly when , that is , giving again.   "
},
{
  "id": "m2b-1a",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2b-1a",
  "type": "Worksheet Exercise",
  "number": "5.8.4",
  "title": "",
  "body": "  Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The difference is the vector that, added to , gives . So when and are drawn from a common tail, is the arrow that runs from the tip of   to the tip of  . (Here it is .) It is easy to get this backwards; the check is that . See .    runs from the tip of to the tip of .    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. An orange arrow runs from the tip of u to the tip of v, representing v minus u.          \\vec u    \\vec v    \\vec v-\\vec u                "
},
{
  "id": "pp-11",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-11",
  "type": "Worksheet Exercise",
  "number": "5.8.5",
  "title": "",
  "body": "  Find the projection of on .    With and , so The negative scalar tells us the projection points opposite to , i.e. the angle between and is obtuse.   "
},
{
  "id": "m2a-1",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2a-1",
  "type": "Worksheet Exercise",
  "number": "5.8.6",
  "title": "",
  "body": "  Let be the vector from to .   Find a non-zero unit vector that is orthogonal to .    Find the angle between and .       First,    (a) We need any non-zero with . Writing , the condition is This is one equation in three unknowns, so there are infinitely many answers; we just pick a convenient one. Taking gives , so , works: Finally we normalize:    (b) With we have Therefore so The angle is slightly less than a right angle, which matches the fact that the dot product is positive but small.   "
},
{
  "id": "m2a-3",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2a-3",
  "type": "Worksheet Exercise",
  "number": "5.8.7",
  "title": "",
  "body": "  Let and . Find an equation for the set of all points such that is orthogonal to . Then sketch the resulting surface in three dimensions.    The two vectors are   Orthogonality means the dot product vanishes:   Now complete the square in and in :   This is the sphere of radius centred at . That centre is exactly the midpoint of and , and the radius is exactly half of . This is the three-dimensional version of the familiar fact from plane geometry: the points from which a given segment subtends a right angle form the circle having that segment as a diameter. See .   The set of points with is the sphere having as a diameter, namely .    A sphere in three dimensional space with the segment from A at zero, zero, one to B at zero, two, three drawn as a diameter. A point P is marked on the sphere and the two segments from P to A and from P to B meet at a right angle.       "
},
{
  "id": "m2b-1b",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2b-1b",
  "type": "Worksheet Exercise",
  "number": "5.8.8",
  "title": "",
  "body": "  Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The projection of onto is the shadow that casts on the line through , obtained by dropping a perpendicular from the tip of to that line. Algebraically, Because the angle between and is obtuse , the dot product is negative and the projection points in the direction opposite to . This is the feature of the picture the problem is testing. See .   Since the angle between and is obtuse, points opposite to .    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. A short dark red arrow along the line of u points backwards, away from u, with a dashed perpendicular from the tip of v, representing the projection of v onto u.            \\vec u    \\vec v    \\operatorname{proj}_{\\vec u}\\vec v                "
},
{
  "id": "dp-norms-geometry",
  "level": "2",
  "url": "worksheet-review-problems-2.html#dp-norms-geometry",
  "type": "Worksheet Exercise",
  "number": "5.8.9",
  "title": "",
  "body": "  Suppose and are non-zero vectors satisfying and Without finding the coordinates of either vector:   Compute .    Find .    Find the angle between and .    Determine whether the angle is acute, right, or obtuse.       The whole problem rests on one idea: the square of a length is a dot product, . Expanding with the distributive property, These two identities are the algebraic form of the parallelogram in : the diagonals of the parallelogram built on and are and .   (a) Subtracting the second identity from the first makes the and terms cancel, leaving only the dot product: Substituting the two given lengths, and therefore .  It is worth pausing to check that the data are consistent. Adding the two identities instead of subtracting gives the parallelogram law, and indeed , exactly as it should be.   (b) We are told and , so A length is never negative, so .   (c) For non-zero vectors, , so and therefore    (d) Since and the lengths are positive, . Hence and the angle is obtuse . Notice that we could have answered this part immediately after part (a), without knowing either length: the sign of the dot product already decides the type of angle.   The parallelogram built on and . Its diagonals are , of length , and , of length . One short diagonal together with one long one forces the angle between the sides to be obtuse.    A parallelogram with two vectors u and v drawn from a common corner, showing the short diagonal u plus v and the long diagonal u minus v, with an obtuse angle marked between u and v.             \\theta    \\mathbf u,\\ \\|\\mathbf u\\| = 7    \\mathbf v,\\ \\|\\mathbf v\\| = 4\\sqrt3    \\mathbf u+\\mathbf v,\\ \\text{length } 5    \\mathbf u-\\mathbf v,\\ \\text{length } 13                  A remark on the data. The two diagonal lengths by themselves already determine , and the condition then follows automatically from the parallelogram law. So the individual lengths are not pinned down by that data alone: the pair , fits equally well and gives the same angle, while other splits of give different angles. This is why the extra condition is needed for parts (b) and (c).   "
},
{
  "id": "pp-13",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-13",
  "type": "Worksheet Exercise",
  "number": "5.8.10",
  "title": "",
  "body": "     Find the area of the triangle with vertices , , .    Find the equation of the plane containing the triangle.       Take as the base vertex and form two edge vectors: Their cross product is    The magnitude of the cross product is the area of the parallelogram spanned by and , so the triangle has half that area:     The cross product is normal to the plane, so the plane has the form . Substituting the point gives , hence       "
},
{
  "id": "m2b-1c",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2b-1c",
  "type": "Worksheet Exercise",
  "number": "5.8.11",
  "title": "",
  "body": "  Two vectors and are drawn with a common tail; points up and to the right, points up and to the left, and the angle between them is slightly larger than a right angle. Sketch and clearly label a diagram showing , , and .    To make the picture concrete let us take and , which have roughly the directions described. Everything below is a statement about the geometry , so the same picture is correct for any pair of vectors in that configuration.  The cross product is perpendicular to both, hence perpendicular to the page. The right-hand rule (curl the fingers of the right hand from towards through the smaller angle) shows that it points out of the page , which we draw as a circle with a dot in it. Indeed, treating the vectors as lying in the -plane, and the -component is positive. Its length, , is the area of the parallelogram spanned by and . See .    points out of the page, drawn as a circle with a dot at its centre.    A blue arrow u points up and to the right and a green arrow v points up and to the left from a common tail. A circle with a dot at its centre represents u cross v, a vector pointing out of the page.           \\vec u    \\vec v    \\vec u\\times\\vec v                "
},
{
  "id": "ex-cross-circular-motion",
  "level": "2",
  "url": "worksheet-review-problems-2.html#ex-cross-circular-motion",
  "type": "Worksheet Exercise",
  "number": "5.8.12",
  "title": "*Circular Motion from a Perpendicular Force.",
  "body": " *Circular Motion from a Perpendicular Force    Starred problem. This one is for the interested reader. It will not be examined.  Through this guided exercise, we prove that a force of constant magnitude that always points perpendicular to the velocity drives the particle around a circle. We then apply it to a charged particle in a magnetic field.  Both of the products you have met so far appear, and they do genuinely different jobs. Watch for them:   the dot product is used, through , to determine whether the speed of a particle acted upon by a perpendicular force can change,    the cross product is used to determine the direction and magnitude of the force that keeps a charged particle moving in a uniform magnetic field.         A particle of mass moves under a force of constant magnitude that is always perpendicular to its velocity . Show that the particle's speed is constant.    Since is perpendicular to , we have   Now consider the square of the speed, . Using the product rule for the dot product The product rule holds for the dot product just as it does for ordinary multiplication: . Taking makes the two terms equal, which gives the step used here, . and then Newton's second law , So never changes, and hence neither does the speed .   Why the dot product is the right tool here. The quantity is the rate at which the force does work on the particle. A force with a forward component speeds the particle up; a force with a backward component slows it down. Only the part of lying along can change the speed, and the dot product is exactly the mathematical tool that isolates that part. When it vanishes, can only change the direction of the velocity but not its magnitude, and so can only turn the particle, while the speed remains constant. See .   Only the component of along can change the speed. On the left that component is non-zero, so the particle speeds up; on the right , the component is zero, and the speed cannot change.    Two panels. In the left panel a force arrow leans forward over the direction of motion and its component along the velocity is drawn in green, so the dot product is non-zero and the speed changes. In the right panel the force is perpendicular to the velocity, marked with a right angle, so it has no component along the velocity, the dot product is zero, and the speed stays constant.     pathA(t) = (t, 0.09*t^2)  pathB(t) = (t + 9, 0.09*t^2)          \\vec v  \\vec F   \\text{component along }\\vec v    \\vec F\\cdot\\vec v \\ne 0 \\;\\Rightarrow\\; \\text{speed changes}         \\vec v  \\vec F   \\text{no component along }\\vec v    \\vec F\\cdot\\vec v = 0 \\;\\Rightarrow\\; \\text{speed constant}                    During a short time interval , show that the direction of the velocity turns through the angle (Hint: draw the two velocity vectors, which have equal length, from a common tail.)    By the previous task the velocity never changes length; it only swings around. So and are two vectors of the same length , separated by the small angle we are after. Drawn from a common tail they form an isosceles triangle whose third side is , as in .  The tips of the two vectors both lie on a circle of radius . The straight side is the chord cutting off the arc of angle on that circle, and for a small angle a chord is very nearly the arc it subtends:   On the other hand Newton's second law over the short interval gives Equating the two expressions for , which is what we wanted. Notice the rate of turning is a constant , since , and all are: the particle swings around at a steady angular rate.   The two velocities have equal length (dashed arc), so the triangle is isosceles and the chord has length .    Two velocity arrows of equal length v are drawn from a common tail, separated by a small angle delta theta, with a dashed circular arc of radius v joining their tips to show the lengths are equal. A third arrow, delta v, runs from the first tip to the second; its length is about v times delta theta.             \\Delta\\theta    \\vec v(t)    \\vec v(t+\\Delta t)    \\Delta\\vec v    v  v   \\text{equal lengths} \\;\\Rightarrow\\; \\|\\Delta\\vec v\\| \\approx v\\,\\Delta\\theta    \\text{Newton:}\\; \\|\\Delta\\vec v\\| = \\tfrac{F}{m}\\Delta t \\;\\Rightarrow\\; \\Delta\\theta = \\tfrac{F}{mv}\\Delta t                     Combine with the arc-length formula to prove that     In time the particle covers the arc length . If that arc bends through the angle , then the radius of the arc is defined by . Solving for and substituting both expressions,       Conclude that the trajectory is a circle.    The quantity is built from , and , every one of which is constant — because of the first task, and by hypothesis. So the path bends through equal angles over equal arc lengths, everywhere along the trajectory: its radius of curvature is the same constant at every point.  A plane curve with constant radius of curvature is a circle. Concretely, the centre of the turn always lies a fixed distance from the particle in the direction of .   The velocity is tangent to the circle and the force points straight at the centre. Equal arcs subtend equal angles , and the ratio of the two is the constant radius .    A circle of radius R centred at O. At a point on the circle the velocity arrow is tangent and the force arrow points from the particle straight in toward the centre, meeting the velocity at a right angle. Two dashed radii mark a small angle delta theta at the centre, and the arc between them, of length delta s equals R delta theta, is highlighted.           \\Delta\\theta          O  R  \\vec v  \\vec F   \\Delta s = R\\,\\Delta\\theta    \\Delta s = v\\,\\Delta t \\quad\\text{and}\\quad \\Delta\\theta = \\tfrac{F}{mv}\\Delta t    \\Rightarrow\\;\\; R = \\dfrac{\\Delta s}{\\Delta\\theta} = \\dfrac{mv^2}{F} \\;\\;\\text{— a constant}                       A particle of charge enters a uniform magnetic field with its velocity perpendicular to the field. The magnetic force is Show that this force has magnitude .    The length of a cross product is , where is the angle between and . Here the velocity is perpendicular to the field, so and . Therefore Since is constant (we are about to confirm this) and is uniform, this magnitude is constant — the first hypothesis of part .      Explain why this force is always perpendicular to the velocity — not just at the initial instant, but at every moment of the motion.    This is the defining property of the cross product: is perpendicular to both factors, whatever they happen to be. So is perpendicular to automatically, at every instant, with no computation and no special assumption about where the particle is or which way it is heading.  If you would like it verified rather than quoted, the dot product does it in one line. Two facts are doing the work. First, the scalar triple product equals the determinant whose rows are , and . Second, a determinant with two equal rows is zero, since interchanging those two rows both leaves the determinant unchanged and reverses its sign. Taking ,   So such a magnetic field can never change the speed of a charged particle, no matter how strong it is. Here the magnetic force does no work and it solely changes the direction of the velocity.      Deduce that the particle moves in a circle, and find the radius of that circle.    The previous two tasks establish exactly the two hypotheses of part : the magnetic force has constant magnitude , and it is always perpendicular to the velocity. The argument of parts – therefore applies verbatim, and the particle travels in a circle at constant speed.  For the radius, put into : Equivalently, the magnetic force supplies precisely the inward force that circular motion demands: See . Faster particles and heavier particles travel on wider circles; stronger fields and larger charges wind them tighter.   A positive charge in a uniform field directed into the page. The force is perpendicular to automatically, so it never changes the speed — it only bends the path into a circle of radius .    A uniform magnetic field into the page, shown as a grid of small crosses. A positive charge travels counter-clockwise around a circle of radius r centred at O. At the rightmost point of the circle its velocity points straight up, tangent to the circle, and the magnetic force q v cross B points straight in toward the centre, at a right angle to the velocity.       \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times  \\times             O  r  \\vec v  \\vec F  q>0   \\vec B \\text{ into the page}    \\vec F = q\\,\\vec v\\times\\vec B \\;\\Rightarrow\\; \\|\\vec F\\| = |q|vB, \\;\\; \\vec F\\perp\\vec v \\text{ automatically}    |q|vB = \\dfrac{mv^2}{r} \\;\\;\\Longrightarrow\\;\\; r = \\dfrac{mv}{|q|B}                    "
},
{
  "id": "exercise-velocity-direction",
  "level": "2",
  "url": "worksheet-review-problems-2.html#exercise-velocity-direction",
  "type": "Worksheet Exercise",
  "number": "5.8.13",
  "title": "*Speed and direction of a projectile.",
  "body": " *Speed and direction of a projectile    Starred problem. This one is for the interested reader. It will not be examined.  A particle is projected from with speed at an elevation to the horizontal, as in . At time it is at the point , moving with speed in a direction making an angle with the horizontal. Show that and    A particle projected from with speed at elevation . At the point reached after time , the velocity is tangent to the path and makes an angle with the horizontal; is the depth of below the directrix.      f(x) = 0.2*x*(8 - x)      \\text{directrix}      h    \\theta  v_0     v\\cos\\phi  v\\sin\\phi    \\phi  v     O  P                         Take the origin at with horizontal and vertical axes. The coordinates of at time are The horizontal and vertical components of the velocity are the time derivatives of these, so Squaring and adding eliminates : which gives the speed at time . Dividing the vertical component by the horizontal component gives the direction, that is, .   "
},
{
  "id": "exercise-directrix-freefall",
  "level": "2",
  "url": "worksheet-review-problems-2.html#exercise-directrix-freefall",
  "type": "Worksheet Exercise",
  "number": "5.8.14",
  "title": "*Free fall from the directrix.",
  "body": " *Free fall from the directrix    Starred problem. This one is for the interested reader. It will not be examined.  The directrix of the parabolic path is the horizontal line at height above . Using the previous exercise, show that the speed of the particle at is equal to the speed it would acquire by falling freely from the level of the directrix down to . That is, if denotes the depth of below the directrix (see ), then .    From the previous exercise, since is the height of . Writing this as and recognizing as the height of the directrix above , the quantity is exactly the depth of below the directrix. Hence , the square of the speed gained by falling freely through the height .   "
},
{
  "id": "exercise-collision-directrix",
  "level": "2",
  "url": "worksheet-review-problems-2.html#exercise-collision-directrix",
  "type": "Worksheet Exercise",
  "number": "5.8.15",
  "title": "*A collision on the directrix.",
  "body": " *A collision on the directrix    Starred problem. This one is for the interested reader. It will not be examined.  Two objects move under gravity. The first is the projectile of the two previous exercises: launched from with speed at an elevation to the horizontal. The second is a ball released from rest at a point on the directrix, the horizontal line at height above . We want the two to collide at the moment the projectile is at half of its maximum height, on the way down . See .   The projectile reaches half of its maximum height at the point on the way down. The ball is released from rest at the point vertically above on the directrix, and falls the depth to meet it.     f(x) = 0.55*x*(8 - x)  C = (6.83, 4.4)      \\text{directrix } y = \\frac{v_0^2}{2g}     \\text{projectile}      H  \\frac{H}{2}       h   B  C  O                   Show that the projectile is at half of its maximum height at the two times and say which of these is on the descending branch.    The vertical motion is . It is greatest when , that is at , which gives the maximum height Setting gives the quadratic equation whose discriminant is . Hence These straddle the apex time symmetrically, as they must. The descending crossing is the later one,       Find the point on the directrix from which the ball must be released.    Released from rest, the ball has no horizontal velocity, so it falls along a vertical line: must be directly above the collision point . The projectile's horizontal coordinate at time is so the release point is In terms of the range this is comfortably past the apex at and short of the landing point, as shows.      Find how long after the projectile is launched the ball must be released.    The depth of below the directrix is Falling from rest through takes a time with , so The ball must therefore be released seconds after the projectile is launched.      Show that at the instant of the collision the two objects have exactly the same speed.    By , a projectile at depth below its directrix has speed . The ball starts from rest on the directrix and has fallen the same depth , so its speed is The two are equal. This is not a coincidence of our particular choice of : the projectile always carries exactly the speed it would have gained by falling freely from the directrix, and the ball is doing precisely that fall. Wherever on the path we arrange the collision, the two objects meet with the same speed, here Their directions of course differ: the ball moves straight down, while the projectile moves down and forward at the angle of .      Is always positive? Find the elevations for which the ball is released after the projectile is launched, and explain what a negative would mean.    Requiring means and squaring gives , that is For flatter launches the required release time is negative: the ball would have to be dropped before the projectile is fired, because a shallow trajectory reaches its (low) half-height point sooner than the ball can fall the long way down from the directrix.      puts the whole scenario in motion: the projectile rises to , the ball is released from at the time , the two meet at , and the velocity arrows there have the same length.     Animation: the projectile and the ball, released from rest on the directrix, collide at half of the maximum height with equal speeds.      "
},
{
  "id": "pp-19",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-19",
  "type": "Worksheet Exercise",
  "number": "5.8.16",
  "title": "",
  "body": "  Consider the curve of intersection of the surfaces and .   Parametrize the curve.    Find the projection of the curve onto the -plane, and give a Cartesian equation for it.        (a) The first surface does not involve ; dividing by , which is an ellipse in the -plane with semi-axes (in ) and (in ). It is parametrized by , . The second surface simply forces , so    (b) Projecting onto the -plane just means forgetting the -coordinate, so the projected curve is parametrized by the first two components alone, To turn that into a Cartesian equation, eliminate with : The shadow is an ellipse in the -plane with semi-axes in the -direction and in the -direction. This is the same ellipse we started from in the -plane, which is no accident: the plane carries the -coordinate over to the -coordinate unchanged.   "
},
{
  "id": "rw23-6",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rw23-6",
  "type": "Worksheet Exercise",
  "number": "5.8.17",
  "title": "",
  "body": "  Find the intersection of the line and the plane .    The parametric equations of the line are Substituting into the equation of the plane, and , , . The intersection is the point .   "
},
{
  "id": "rw17-5",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rw17-5",
  "type": "Worksheet Exercise",
  "number": "5.8.18",
  "title": "",
  "body": "  Find the distance between the two planes     Dividing the second equation by gives , so both planes have the same normal vector and are therefore parallel . (They are distinct, since .)  Pick any point on the first plane, say , and any point on the second, say . Then , and the distance between the planes is the length of the projection of onto :    "
},
{
  "id": "pp-12",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-12",
  "type": "Worksheet Exercise",
  "number": "5.8.19",
  "title": "",
  "body": "  Find the angle between the planes and .    The angle between two planes equals the angle between their normal vectors, and : so .   "
},
{
  "id": "pp-14",
  "level": "2",
  "url": "worksheet-review-problems-2.html#pp-14",
  "type": "Worksheet Exercise",
  "number": "5.8.20",
  "title": "",
  "body": "  There is a line parametrized by , , . The line passes through some point whose -coordinate is . Find an equation for the plane through normal to .    First locate . Setting , so and , i.e. .  A plane normal to has the direction vector of as its normal vector, . Therefore the plane is    "
},
{
  "id": "m2a-4",
  "level": "2",
  "url": "worksheet-review-problems-2.html#m2a-4",
  "type": "Worksheet Exercise",
  "number": "5.8.21",
  "title": "",
  "body": "  A surveyor determines that the three points all lie on a flat surface .   Find the point of that is closest to the point .    Find parametric equations for a line that passes through , never crosses , and satisfies .        Finding the plane. Two vectors lying in are A normal vector is their cross product: Note , which will be convenient. Using the point , the plane is (Check: gives and gives .)   (a) The closest point of a plane to a given point is the foot of the perpendicular from , which we reach by moving from in the direction of the normal. So consider and find the value of for which this point lies on : Therefore the closest point is (Check: .) Incidentally, the distance from to is . See .   Schematic picture of . From we travel along the normal direction until we hit , arriving at . Any line through whose direction is perpendicular to stays parallel to and never meets it.    A tilted plane W drawn as a parallelogram, with the point Q below it. A normal arrow runs from Q up to the foot of the perpendicular on the plane, and a second line through Q is drawn parallel to the plane, never meeting it.       (b) A line never crosses the plane exactly when it is parallel to and does not lie in it. Since is not on (we saw ), we only need the direction vector to be perpendicular to the normal:   The extra requirement forces the two lines and to agree for all , which happens exactly when . Substituting , Choosing and gives , and the line is Indeed for every , and , so the line is parallel to and, starting from a point off , never reaches it.   "
},
{
  "id": "exer-parabolic-antenna",
  "level": "2",
  "url": "worksheet-review-problems-2.html#exer-parabolic-antenna",
  "type": "Worksheet Exercise",
  "number": "5.8.22",
  "title": "*A Parabolic Antenna.",
  "body": " *A Parabolic Antenna    Starred problem. This one is for the interested reader. It will not be examined.  A parabolic antenna has the shape of a paraboloid of revolution: it is created by rotating part of a parabola around its axis. By the reflection property, all signals arriving parallel to the axis are concentrated at the focus after reflecting off the dish, so that is where the receiver is mounted. The axial cross-section of the dish is described by two measurements: the diameter  of the dish and its depth  . Placing the vertex at the origin with the dish opening upward, the cross-section is the parabola , and the rim passes through the points .  Consider a dish antenna with diameter cm and depth cm, suitable for the amateur radio band at GHz.   Cross-section of the parabolic antenna: diameter , depth , focus , and opening angle .    A parabola opening upward with vertex at the origin. The rim points at (minus d over 2, h) and (d over 2, h) are joined by a horizontal double arrow labeled d. A vertical double arrow labeled h shows the depth from the rim down to the axis level. The focus F(0,p) lies on the y axis above the rim, and two segments run from the focus to the rim points, enclosing the opening angle two phi.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)        2\\varphi    d   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                        Determine the optimal location for the receiver, that is, find the distance from the vertex of the dish to the focus.    The receiver must sit at the focus . The rim point lies on the parabola , so   The receiver should be mounted on the axis about cm above the vertex of the dish. Note that here, so the focus sits above the rim of this shallow dish.      Find the quadratic function (explicit form) that describes the curvature of the dish, and graph it (for example, in GeoGebra or Desmos).    Solving for with gives   The graph captures the true curvature of the dish provided both axes use the same scale.      The opening angle  of the dish is the angle at which the two edges of the rim are seen from the focus. Compute it.    The focus , the point , and the rim point form a right triangle with legs (vertical) and (horizontal), and is the angle at the focus. Hence    The right triangle used to compute the half opening angle : legs and .    The same parabola and focus as before, with a red right triangle drawn from the focus: a vertical leg of length p minus h down to the rim level, a horizontal leg of length d over 2 out to the right rim point, and the segment from the focus to the rim point as hypotenuse. The angle phi at the focus is marked.     d = 120  h = 20.3  p = d^2\/(16*h)  f(x) = x^2\/(4*p)            \\varphi   p-h  d\/2   h   \\left(-\\tfrac{d}{2},\\,h\\right)    \\left(\\tfrac{d}{2},\\,h\\right)    F(0,p)                    The opening angle of the dish is .    "
},
{
  "id": "rs19-3",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rs19-3",
  "type": "Worksheet Exercise",
  "number": "5.8.23",
  "title": "",
  "body": "  Identify and sketch the surface .    Dividing by , we can rewrite the equation as which forces , i.e. or . Let us look at the traces:   Intersection with the plane : , a hyperbola.    Intersection with the plane : ; when , we have ellipses as intersections.    Intersection with the plane : , a hyperbola.   The surface is a hyperboloid of two sheets along the -axis, with vertices and . See .   The hyperboloid of two sheets : two bowl-shaped sheets opening along the -axis, with vertices at .    Two bowl shaped surfaces in a three dimensional coordinate system, opening away from each other along the horizontal y axis. The left sheet has its vertex at zero comma negative two comma zero and opens to the left; the right sheet has its vertex at zero comma two comma zero and opens to the right. Each sheet ends in an ellipse.       "
},
{
  "id": "rs-multiselect-quadrics",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rs-multiselect-quadrics",
  "type": "Worksheet Exercise",
  "number": "5.8.24",
  "title": "Which of These Are Hyperboloids?",
  "body": " Which of These Are Hyperboloids?   None of the equations below is in standard position. Complete the square where necessary, then select every equation whose surface is a hyperboloid, of one sheet or of two.       Correct. Completing the square gives : one negative square, equal to a positive constant, so a hyperboloid of one sheet.       No. This is — every square is positive, so it is an ellipsoid.       Correct. Two negative squares against a positive constant gives a hyperboloid of two sheets.       No — and this is the trap. It has the same signs as the first option, but it equals rather than a positive constant. That degenerates the hyperboloid into an elliptic cone , the surface the two families of hyperboloids approach asymptotically.       No. The word hyperbolic is a red herring: this is linear in , so it is a hyperbolic paraboloid (a saddle) with vertex at , not a hyperboloid.      Completing the square in the first and second, Reading off the signs: one negative square against is a hyperboloid of one sheet; two negative squares against is a hyperboloid of two sheets. So the first and third are hyperboloids. The second is an ellipsoid, the fourth equals and so is a cone, and the fifth is linear in and so is a hyperbolic paraboloid.   "
},
{
  "id": "ex-3d-parabolic-cylinder",
  "level": "2",
  "url": "worksheet-review-problems-2.html#ex-3d-parabolic-cylinder",
  "type": "Worksheet Exercise",
  "number": "5.8.25",
  "title": "Graphing a Parabolic Cylinder.",
  "body": " Graphing a Parabolic Cylinder   Sketch the graph of over the rectangle , in the -plane. Why is this surface called a parabolic cylinder ?    Since the equation does not involve , every cross-section of the surface at a fixed value of is the same parabola in the -plane, opening downward from its vertex at . Sliding that parabola along the -axis from to sweeps out the surface.  Over , the parabola satisfies , with equality exactly at , so the surface touches the -plane along the two edges of the rectangular region and rises to a maximum height of along the ridge . Because it is generated by sliding a fixed curve along a straight line, rather than curving in the direction as well, it is called a parabolic cylinder , shown in .   The parabolic cylinder over the rectangle , . Every slice at a fixed is the same downward-opening parabola.    A curved sheet shaped like a downward opening parabola in the x z plane, extended without change along the y direction over a rectangular region in the x y plane, forming an arched, tunnel-like surface.       "
},
{
  "id": "ex-3d-cylinder-paraboloid-solid",
  "level": "2",
  "url": "worksheet-review-problems-2.html#ex-3d-cylinder-paraboloid-solid",
  "type": "Worksheet Exercise",
  "number": "5.8.26",
  "title": "A Solid Bounded by a Cylinder and a Paraboloid.",
  "body": " A Solid Bounded by a Cylinder and a Paraboloid   Consider the solid bounded by the three surfaces    Describe each of the three bounding surfaces.    Describe the solid region they enclose.    Describe the cross-section of the solid in the plane .        (a) The equation is the -plane. The equation is a paraboloid opening upward from its vertex at the origin. The equation is missing , so it is the infinite cylinder of radius whose axis is the -axis. The paraboloid meets that cylinder exactly where , at height .   (b) The solid consists of the points inside the cylinder lying between the flat base and the paraboloid: Near the -axis this range for is almost nothing, since there, while at the rim it is the full interval . The solid is therefore shaped like a shallow bowl carved out from underneath the paraboloid: thin at the center and rising to its full height at the cylinder wall, shown in .   (c) Setting restricts the solid's defining inequalities to and : the region under the parabola , above the -axis, between and , shown in .   The cross-section of the solid in the plane : the region under the parabola for .    A two dimensional graph in the x z plane. A shaded region lies under the upward opening parabola z equals x squared, above the x axis, between x equals negative two and x equals two.       The solid bounded by , the paraboloid , and the cylinder . The solid fills the region under the paraboloid, thin near the -axis and reaching full height where the paraboloid meets the cylinder wall.    A paraboloid opening upward from the origin, shown as a shaded bowl sitting inside a cylindrical wall of radius two. The bowl's rim meets the top of the cylinder, and a shaded disk in the x y plane forms the flat base of the solid beneath the bowl.       "
},
{
  "id": "rs-mc-vector-identity",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rs-mc-vector-identity",
  "type": "Worksheet Exercise",
  "number": "5.8.27",
  "title": "Which Identity Fails?",
  "body": " Which Identity Fails?   Exactly one of the following is not valid for all vectors in . Which one?         This one is valid. Both sides equal the determinant with rows , so the dot and the cross may be interchanged.         Correct — the cross product is not associative . Take and . Then The left side lies in the plane of and ; the right side lies in the plane of and . There is no reason for those to agree.         This one is valid — the cross product is distributive over addition. (It is only associativity that fails.)         This one is valid: it is the BAC-CAB triple product expansion. It looks the most exotic of the four, which is exactly why it is worth remembering that it is true.     "
},
{
  "id": "rs-fillin-skew-lines",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rs-fillin-skew-lines",
  "type": "Worksheet Exercise",
  "number": "5.8.28",
  "title": "Distance Between Skew Lines.",
  "body": " Distance Between Skew Lines   Consider the two lines They are skew. Let be the direction vectors and let join a point of to a point of .  The absolute value of the scalar triple product equals .  The distance between the two lines, to three decimal places, is .      Correct.     Nearly — the triple product itself is , but the question asks for its absolute value .       Correct.     That is , the denominator . You still need to divide the triple product by it.      You appear to have divided by rather than by .       The vector is perpendicular to both lines, so the distance is the length of the projection of onto it: .    With and , Taking ,    "
},
{
  "id": "rs-parsons-no-work",
  "level": "2",
  "url": "worksheet-review-problems-2.html#rs-parsons-no-work",
  "type": "Worksheet Exercise",
  "number": "5.8.29",
  "title": "Why a Magnetic Field Cannot Change a Particle’s Speed.",
  "body": " Why a Magnetic Field Cannot Change a Particle's Speed   Arrange the steps below into a correct proof that the magnetic force does no work, and therefore that a charged particle in a magnetic field moves at constant speed.      Let a particle of mass and charge move with velocity through a magnetic field .    The force on the particle is .    By definition, a cross product is perpendicular to both of its factors, so is perpendicular to .    Hence .    The kinetic energy satisfies .    Therefore , so is constant: the field changes the particle's direction but never its speed.    "
},
{
  "id": "worksheet-assignment-7",
  "level": "1",
  "url": "worksheet-assignment-7.html",
  "type": "Worksheet",
  "number": "5.9",
  "title": "Assignment 7",
  "body": " Assignment 7   These problems sketch domains of functions of two variables, reason about level curves, identify and sketch level surfaces, and ask when a limit of a function of two variables exists and how to show that one does not, and compute and estimate higher order partial derivatives. If you would like to review the material first, see , and .     Sketch the domain of .    The square root is defined exactly when its argument is non-negative, so the domain is the closed half-plane on and above the line . See .   The domain of is the shaded closed half-plane , including the boundary line itself.          y=3x    y\\ge 3x                  In are level curves of and for some function . What's wrong?   Two curves labelled and that cross each other.     d1(t) = (t, 0.55*t + 0.15*sin(2*t))  d2(t) = (t, 2.2 - 0.55*t - 0.15*sin(2*t))       P    g=2    g=3    g=2    g=3               Two level curves belonging to different values can never intersect. At the point where the drawn curves cross, the first curve says while the second says . Since is a function, it assigns exactly one output to the point , so — which is impossible. Hence no function can have the level curves shown.      Let be a function of 3 variables defined by Find the equation for the level surface of through the point and sketch this level surface. Label any points where the surface crosses a coordinate axis AND label the value of on the surface.    Evaluating at the given point, so the level surface is , i.e. This is an ellipsoid with semi-axes , , and . It crosses the axes at , , and . See .   The level surface , i.e. the ellipsoid , with its axis intercepts.    An ellipsoid centered at the origin, elongated along the y axis. It meets the x axis at plus and minus three, the y axis at plus and minus six, and the z axis at plus and minus two. Three dashed ellipses show its cross sections in the coordinate planes.          Sketch the level surface for .    The level surface is , i.e. Rewriting as shows that , so or : no part of the surface lies between the two horizontal planes . The traces are    with : , circles;     : , hyperbolas;     : , hyperbolas.   Hence the level surface is a hyperboloid of two sheets , symmetric about the -axis, with vertices . See .   The level surface : a hyperboloid of two sheets about the -axis with vertices .    Two bowl shaped sheets in a three dimensional coordinate system, one opening upward with its lowest point at zero comma zero comma two, and its mirror image opening downward with highest point at zero comma zero comma negative two. Each sheet is capped by an ellipse.         True or False   If exists, the function must be defined or continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We can for example define to be zero when and to be when . If we then pick , the limit of for exists but it is not equal to . We could also leave undefined at the origin to give another counterexample.     True or False   If as along any line through , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    One counterexample is Along every straight line passing through the origin this will be constant near the origin, but the limit approaching via the parabola is . See .   The counterexample. The function is on the shaded region and everywhere else. Every line through the origin leaves the shaded region near the origin, but the parabola stays inside it.     ptop(t) = (t, 2*t^2)  pmid(t) = (t, t^2)  ftop(t) = 2*t^2  fzero(t) = 0          y=2x^2    y=x^2    y=mx    f=1                   Discuss continuity of the following functions:                   This is obviously continuous whenever the denominator is nonzero, i.e. everywhere except at the origin. But at the origin it is not continuous (or rather we can't extend the function to the origin in a way which makes it continuous): if we approach the origin via any of the coordinate axes we get a limit of , but if we approach it via the path we get a limit Hence the limit does not exist.    This is continuous when the denominator is nonzero, so everywhere except at . At it can't be defined in a way which makes the function continuous: approaching via the -axis, we get the limit On the other hand, if we approach on the line we get the limit          Evaluate each of the following limits or show that it does not exist.                   Along the path : Along the path : Since , the limit does not exist.    We factor the numerator as a difference of squares:          Find the limit, if it exists, or show that it does not exist:     Along the path , (so that ): Along the path , (so that ): Since the limits computed along the two paths are not equal, the limit does not exist.      Find the following limit, if it exists, or show that it does not exist:     Along the path : Along the path : Since , the limit does not exist.      Higher order computation   Prove that is a solution of the diffusion equation     We compute the needed derivatives:   We see that the right hand side of the third equation is times the right hand side of the first, i.e. multiplying by gives exactly , showing that satisfies the diffusion equation.      Let . Compute and .    Note first that , which makes the differentiation easier. Treating the other variables as constants, For the mixed partial, differentiate first with respect to and then with respect to :       A metal plate occupies the square , , and is heated so that the temperature at the point is , measured in degrees Fahrenheit. Distances are measured in feet. The table below records some measured values of .   Measured temperatures in                    Approximate and interpret your answer, with units, in the context of the problem.    Approximate , and give its units.    An ant walks across the plate along the path Approximate the rate at which the temperature the ant feels is changing at the moment it is at the point , and give the units.        (a) A partial derivative is a limit of difference quotients, so with the data we have we approximate it by a difference quotient. Holding fixed and stepping forward in from to , The units are degrees Fahrenheit per foot. The interpretation: at the point , if the ant moves in the positive -direction while its -coordinate stays fixed, the temperature increases at a rate of about per foot.   (b) By definition , so we compute at two different values of and then take a difference quotient in . We already have , and in the same way Therefore The units are degrees Fahrenheit per foot per foot, i.e. . This says that as we move in the -direction, the rate at which the temperature rises in the -direction is itself decreasing.   (c) First we find the value of at which the ant is at . We need and indeed at , as required. Note that lies in the given interval .  Next we differentiate the path:   We also need , which we approximate from the table just as before, stepping forward in :   Now the chain rule gives The units are degrees Fahrenheit per unit of (per minute, if is measured in minutes). So the ant is cooling off at about per unit of time. This makes sense: the ant is moving slightly in the direction, which cools it a little, and it is moving in the direction, which cools it a lot. shows the situation.   The nine data points of and the ant's path. At the ant is at and its velocity is . Temperatures fall as we move up and to the left, so the ant is cooling.    A grid of nine labelled temperature readings on the x y plane, together with the ant's curved path passing through the point one comma one, and the velocity vector of the ant drawn at that point pointing up and slightly to the left.     ant(t) = (1 - log(2*t-3)\/8, 2^t\/4)                70   65  58  74  68  59  79  75  65   \\left\\langle x'(2), y'(2)\\right\\rangle    \\text{ant's path}                 "
},
{
  "id": "pp-26",
  "level": "2",
  "url": "worksheet-assignment-7.html#pp-26",
  "type": "Worksheet Exercise",
  "number": "5.9.1",
  "title": "",
  "body": "  Sketch the domain of .    The square root is defined exactly when its argument is non-negative, so the domain is the closed half-plane on and above the line . See .   The domain of is the shaded closed half-plane , including the boundary line itself.          y=3x    y\\ge 3x               "
},
{
  "id": "pp-27",
  "level": "2",
  "url": "worksheet-assignment-7.html#pp-27",
  "type": "Worksheet Exercise",
  "number": "5.9.2",
  "title": "",
  "body": "  In are level curves of and for some function . What's wrong?   Two curves labelled and that cross each other.     d1(t) = (t, 0.55*t + 0.15*sin(2*t))  d2(t) = (t, 2.2 - 0.55*t - 0.15*sin(2*t))       P    g=2    g=3    g=2    g=3               Two level curves belonging to different values can never intersect. At the point where the drawn curves cross, the first curve says while the second says . Since is a function, it assigns exactly one output to the point , so — which is impossible. Hence no function can have the level curves shown.   "
},
{
  "id": "rw17-6",
  "level": "2",
  "url": "worksheet-assignment-7.html#rw17-6",
  "type": "Worksheet Exercise",
  "number": "5.9.3",
  "title": "",
  "body": "  Let be a function of 3 variables defined by Find the equation for the level surface of through the point and sketch this level surface. Label any points where the surface crosses a coordinate axis AND label the value of on the surface.    Evaluating at the given point, so the level surface is , i.e. This is an ellipsoid with semi-axes , , and . It crosses the axes at , , and . See .   The level surface , i.e. the ellipsoid , with its axis intercepts.    An ellipsoid centered at the origin, elongated along the y axis. It meets the x axis at plus and minus three, the y axis at plus and minus six, and the z axis at plus and minus two. Three dashed ellipses show its cross sections in the coordinate planes.       "
},
{
  "id": "pp-25",
  "level": "2",
  "url": "worksheet-assignment-7.html#pp-25",
  "type": "Worksheet Exercise",
  "number": "5.9.4",
  "title": "",
  "body": "  Sketch the level surface for .    The level surface is , i.e. Rewriting as shows that , so or : no part of the surface lies between the two horizontal planes . The traces are    with : , circles;     : , hyperbolas;     : , hyperbolas.   Hence the level surface is a hyperboloid of two sheets , symmetric about the -axis, with vertices . See .   The level surface : a hyperboloid of two sheets about the -axis with vertices .    Two bowl shaped sheets in a three dimensional coordinate system, one opening upward with its lowest point at zero comma zero comma two, and its mirror image opening downward with highest point at zero comma zero comma negative two. Each sheet is capped by an ellipse.       "
},
{
  "id": "rm2-lim-1-a",
  "level": "2",
  "url": "worksheet-assignment-7.html#rm2-lim-1-a",
  "type": "Worksheet Exercise",
  "number": "5.9.5",
  "title": "True or False.",
  "body": " True or False   If exists, the function must be defined or continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We can for example define to be zero when and to be when . If we then pick , the limit of for exists but it is not equal to . We could also leave undefined at the origin to give another counterexample.   "
},
{
  "id": "rm2-lim-1-c",
  "level": "2",
  "url": "worksheet-assignment-7.html#rm2-lim-1-c",
  "type": "Worksheet Exercise",
  "number": "5.9.6",
  "title": "True or False.",
  "body": " True or False   If as along any line through , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    One counterexample is Along every straight line passing through the origin this will be constant near the origin, but the limit approaching via the parabola is . See .   The counterexample. The function is on the shaded region and everywhere else. Every line through the origin leaves the shaded region near the origin, but the parabola stays inside it.     ptop(t) = (t, 2*t^2)  pmid(t) = (t, t^2)  ftop(t) = 2*t^2  fzero(t) = 0          y=2x^2    y=x^2    y=mx    f=1                "
},
{
  "id": "rm2-lim-3",
  "level": "2",
  "url": "worksheet-assignment-7.html#rm2-lim-3",
  "type": "Worksheet Exercise",
  "number": "5.9.7",
  "title": "",
  "body": "  Discuss continuity of the following functions:                   This is obviously continuous whenever the denominator is nonzero, i.e. everywhere except at the origin. But at the origin it is not continuous (or rather we can't extend the function to the origin in a way which makes it continuous): if we approach the origin via any of the coordinate axes we get a limit of , but if we approach it via the path we get a limit Hence the limit does not exist.    This is continuous when the denominator is nonzero, so everywhere except at . At it can't be defined in a way which makes the function continuous: approaching via the -axis, we get the limit On the other hand, if we approach on the line we get the limit       "
},
{
  "id": "rw23-2",
  "level": "2",
  "url": "worksheet-assignment-7.html#rw23-2",
  "type": "Worksheet Exercise",
  "number": "5.9.8",
  "title": "",
  "body": "  Evaluate each of the following limits or show that it does not exist.                   Along the path : Along the path : Since , the limit does not exist.    We factor the numerator as a difference of squares:       "
},
{
  "id": "rw21-6",
  "level": "2",
  "url": "worksheet-assignment-7.html#rw21-6",
  "type": "Worksheet Exercise",
  "number": "5.9.9",
  "title": "",
  "body": "  Find the limit, if it exists, or show that it does not exist:     Along the path , (so that ): Along the path , (so that ): Since the limits computed along the two paths are not equal, the limit does not exist.   "
},
{
  "id": "rw22-6",
  "level": "2",
  "url": "worksheet-assignment-7.html#rw22-6",
  "type": "Worksheet Exercise",
  "number": "5.9.10",
  "title": "",
  "body": "  Find the following limit, if it exists, or show that it does not exist:     Along the path : Along the path : Since , the limit does not exist.   "
},
{
  "id": "rm2-pd-1",
  "level": "2",
  "url": "worksheet-assignment-7.html#rm2-pd-1",
  "type": "Worksheet Exercise",
  "number": "5.9.11",
  "title": "Higher order computation.",
  "body": " Higher order computation   Prove that is a solution of the diffusion equation     We compute the needed derivatives:   We see that the right hand side of the third equation is times the right hand side of the first, i.e. multiplying by gives exactly , showing that satisfies the diffusion equation.   "
},
{
  "id": "pp-28",
  "level": "2",
  "url": "worksheet-assignment-7.html#pp-28",
  "type": "Worksheet Exercise",
  "number": "5.9.12",
  "title": "",
  "body": "  Let . Compute and .    Note first that , which makes the differentiation easier. Treating the other variables as constants, For the mixed partial, differentiate first with respect to and then with respect to :    "
},
{
  "id": "q1-3",
  "level": "2",
  "url": "worksheet-assignment-7.html#q1-3",
  "type": "Worksheet Exercise",
  "number": "5.9.13",
  "title": "",
  "body": "  A metal plate occupies the square , , and is heated so that the temperature at the point is , measured in degrees Fahrenheit. Distances are measured in feet. The table below records some measured values of .   Measured temperatures in                    Approximate and interpret your answer, with units, in the context of the problem.    Approximate , and give its units.    An ant walks across the plate along the path Approximate the rate at which the temperature the ant feels is changing at the moment it is at the point , and give the units.        (a) A partial derivative is a limit of difference quotients, so with the data we have we approximate it by a difference quotient. Holding fixed and stepping forward in from to , The units are degrees Fahrenheit per foot. The interpretation: at the point , if the ant moves in the positive -direction while its -coordinate stays fixed, the temperature increases at a rate of about per foot.   (b) By definition , so we compute at two different values of and then take a difference quotient in . We already have , and in the same way Therefore The units are degrees Fahrenheit per foot per foot, i.e. . This says that as we move in the -direction, the rate at which the temperature rises in the -direction is itself decreasing.   (c) First we find the value of at which the ant is at . We need and indeed at , as required. Note that lies in the given interval .  Next we differentiate the path:   We also need , which we approximate from the table just as before, stepping forward in :   Now the chain rule gives The units are degrees Fahrenheit per unit of (per minute, if is measured in minutes). So the ant is cooling off at about per unit of time. This makes sense: the ant is moving slightly in the direction, which cools it a little, and it is moving in the direction, which cools it a lot. shows the situation.   The nine data points of and the ant's path. At the ant is at and its velocity is . Temperatures fall as we move up and to the left, so the ant is cooling.    A grid of nine labelled temperature readings on the x y plane, together with the ant's curved path passing through the point one comma one, and the velocity vector of the ant drawn at that point pointing up and slightly to the left.     ant(t) = (1 - log(2*t-3)\/8, 2^t\/4)                70   65  58  74  68  59  79  75  65   \\left\\langle x'(2), y'(2)\\right\\rangle    \\text{ant's path}                "
},
{
  "id": "worksheet-assignment-8",
  "level": "1",
  "url": "worksheet-assignment-8.html",
  "type": "Worksheet",
  "number": "5.10",
  "title": "Assignment 8",
  "body": " Assignment 8   These problems apply the chain rule to functions of several variables: differentiating a composition both by the chain rule and by substitution, deciding a True\/False statement about a rate along a curve, proving Euler's relation for homogeneous functions, and working through a dependency tree with two intermediate levels. They then use the gradient to compute directional derivatives, find directions of fastest change, and read a contour map. If you would like to review the material first, see and .     Compute the partial derivatives of with respect to for using both the chain rule and by plugging in and .    Using the chain rule:   Plugging in, we see and easily obtain the same partial derivatives.     True or False   Consider . Then at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Writing and , we see that Now we see from the chain rule that      Homogeneous functions   A function is called homogeneous of degree if it satisfies the equation for all , where is a positive integer and has continuous second order derivatives.   Verify that is homogeneous of degree 3.    Show that if is homogeneous of degree then (Hint: use the Chain Rule to differentiate with respect to .)    If is homogeneous of degree , show that for .               Using the chain rule we obtain On the other hand, the homogeneity condition shows that Now we can equate the right hand sides of equations and and set to obtain the desired equation.    We take the partial -derivative of both sides of the equation (this is just plugging in and instead of and ): Hence after canceling one , and plugging in , shows the desired equation.         Let Compute and .    The dependency tree is shown in . We first compute and at we have    The tree diagram for with , , and .    A tree diagram with w at the top. Three branches lead down from w to x, y, and z. From x, two branches lead to s and t; from y, two branches lead to s and t; from z, a single branch leads to t.      By the chain rule, since , Similarly,        Consider where . Compute its directional derivative at with respect to the unit vectors in (polar) directions . What about any other angle?    The function is symmetric with respect to rotations around the origin, so all the directional derivatives will be equal. Therefore it is sufficient to compute the derivative for , i.e. : Plugging in we see that this is zero. Hence the directional derivative at is in the directions , and by the same symmetry it is for every other angle as well.     True or False   If is a unit vector and has continuous second partials, then where .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We have that This simplifies to Note we needed to have continuous second partials to invoke Clairaut's Theorem.     A mountain lion on a mountain   A mountain lion runs on a mountain whose height above the point is .   In which direction(s) should the mountain lion run from point so that the height is increasing at the fastest possible rate? What is this fastest rate?    In which direction(s) should the mountain lion run from point so that the height is increasing at half of the fastest possible rate?          The fastest possible rate of increase is attained in the direction of the gradient: At , this gradient is simply , and the fastest possible rate of change is the length of the gradient, i.e. .    Half of the fastest possible rate of height increase at point is . Let be a unit vector in the desired direction. Then the directional derivative is the desired rate of change of height at in the direction of ; it can be calculated using the dot product with the gradient: Thus, and must be such that is unit, i.e. , from which and . Therefore, the desired directions in which the height is increasing at a rate equal to half of the fastest possible rate are and .         Suppose that is a function of two variables and let Suppose that at a point ,    Find the direction of the maximum rate of change at .    Find the maximum rate of change at .          Using , the two conditions become Hence , and the direction of the maximum rate of change at is given by      is the maximum rate of change.         Consider the function and the point .   Find the direction in which decreases the most rapidly at .    Find the directional derivative of at in the direction given by .       The gradient is    The direction of most rapid decrease is opposite to the gradient:     The unit vector in the direction of is , so          Suppose the temperature (in degrees Celsius) at a point is given by , where is a continuous function that has continuous partial derivatives, and distances in the -plane are measured in meters. We are given the following information about at the point :     C,    the derivative of at obtains its smallest (i.e. most negative) value in the direction toward the point  ,    the derivative of at in the direction of the vector  is  C\/m.      Find the derivative of at in the direction toward the point  .    If you start at and move along a straight path toward the point , approximately how far will you have to go in this direction until the temperature reaches  C?       First we determine at . The derivative is most negative in the direction of , and the direction from toward is Hence is a positive multiple of , i.e. for some .  The third piece of information fixes . The unit vector in the direction of is , since , so Therefore      The direction from toward is , whose length is , so the unit vector is and     The temperature must rise from  C to  C, i.e.  C, and along this direction it rises at approximately  C per meter. Using the linear approximation , where is the distance travelled,           is a nice function of and (i.e. is continuous and its partials exist). In are shown the level curves .   Let . Estimate .    Estimate .    Draw on the diagram a unit vector pointing in the same direction as .    At , draw a unit vector and label it , such that .    Estimate .    Which appears bigger, or ?      Level curves of at the values . The marked point is the highest point of the curve; lies midway between the and curves; lies midway between the and curves.     c0(t) = (t, -0.30 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c2(t) = (t, -0.08 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c4(t) = (t, 0.17 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c6(t) = (t, 0.75 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c8(t) = (t, 1.88 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c10(t) = (t, 2.98 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c12(t) = (t, 3.90 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))                 P    Q    R       f=12    f=10    f=8    f=6    f=4    f=2    f=0                    The directional derivative tells us roughly how much increases if we move one unit from in the direction , i.e. diagonally up and to the right at . Starting at and moving one unit that way lands us near , which is about two contours further along, and each contour step is spread over roughly one unit of travel. Reading the map,     At the level curve through that point is climbing at roughly , i.e. the level curve is parallel to . Moving along a level curve does not change the value of , so     The gradient is perpendicular to the level curve and points in the direction of increase . At the level curve runs up and to the right at about , and increases as we move upward, so points up and to the left , i.e. in the direction . See .    We need any direction of decrease at , i.e. any direction pointing toward the lower-valued level curves (toward , not away from it). Since the level curves below have smaller values, (straight down) works. See .     sits at the very top of its level curve, where the curve is horizontal . Walking in the direction from therefore keeps us on the same level curve for a while, so does not change to first order:      measures how fast changes as we move straight up, which is large where the contours are close together and small where they are far apart. At we only have to go up about units to move from one contour to the next, so . At we must go up about unit for the same change, so . Hence is bigger.      The vectors asked for in parts C and D: points perpendicular to the level curve toward increasing , while at points toward decreasing .     c0(t) = (t, -0.30 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c2(t) = (t, -0.08 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c4(t) = (t, 0.17 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c6(t) = (t, 0.75 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c8(t) = (t, 1.88 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c10(t) = (t, 2.98 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c12(t) = (t, 3.90 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))                \\nabla f(1,2)    u_2    P                The two problems that close this assignment repeat the three questions of in two more physical settings: find the direction of most rapid decrease, the rate along a prescribed direction, and the directions of no change.   Electric Potential on a Coated Plate   The electric potential on a thin coated plate, in volts, is with and in centimeters. Consider the point .     Find at and the electric field there. Along which unit vector does the potential drop most rapidly, and at what rate?    A test charge is nudged along . Compute at .    Find the two unit vectors along which the potential does not change, and name the curve they are tangent to.           , so and V\/cm. The potential drops fastest along , at the rate V\/cm.     in V\/cm. The potential rises slightly along this heading.     . These are tangent to the equipotential ellipse through , and they are orthogonal to , as they must be.       The potential on the plate. One route holds V along the equipotential ; the other follows a field line, on which at every point.        Sailing the Isobars of a Low   Near the center of a low-pressure system the sea-level pressure, in millibars, is modeled by with and in miles from the center of the low. A ship sits at .     Find the pressure at the ship and there. The pressure-gradient force per unit volume of air is a positive multiple of ; in which unit direction does it push, and what is in millibars per mile?    A second ship 40 miles from the center reports a stronger wind. Using this model, explain why supports that report.    The captain decides to hold a constant barometer reading. Give the two possible unit headings at , and describe the shape of the full route.           mb, and gives . The force points along , that is, inward toward the low, and mb\/mi.    Here grows linearly with distance from the center, so at 40 miles it is mb\/mi, nearly double the value at the first ship. (Real storms reverse this trend close to the eye; the model is only reasonable over a limited annulus.)     . Since the level curves of are the circles , holding the barometer steady means circling the storm at a fixed radius of miles.     Use the interactive figure to explore the problem further geometrically, switching between the two headings and watching how the barometer responds as the ship moves.    The pressure field around a low. One heading circles the eye at constant mb; the other runs outward along . The distance readout shows why grows with radius.       "
},
{
  "id": "rev-tp-4",
  "level": "2",
  "url": "worksheet-assignment-8.html#rev-tp-4",
  "type": "Worksheet Exercise",
  "number": "5.10.1",
  "title": "",
  "body": "  Compute the partial derivatives of with respect to for using both the chain rule and by plugging in and .    Using the chain rule:   Plugging in, we see and easily obtain the same partial derivatives.   "
},
{
  "id": "rev-tp-5",
  "level": "2",
  "url": "worksheet-assignment-8.html#rev-tp-5",
  "type": "Worksheet Exercise",
  "number": "5.10.2",
  "title": "True or False.",
  "body": " True or False   Consider . Then at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Writing and , we see that Now we see from the chain rule that    "
},
{
  "id": "rm2-cr-1",
  "level": "2",
  "url": "worksheet-assignment-8.html#rm2-cr-1",
  "type": "Worksheet Exercise",
  "number": "5.10.3",
  "title": "Homogeneous functions.",
  "body": " Homogeneous functions   A function is called homogeneous of degree if it satisfies the equation for all , where is a positive integer and has continuous second order derivatives.   Verify that is homogeneous of degree 3.    Show that if is homogeneous of degree then (Hint: use the Chain Rule to differentiate with respect to .)    If is homogeneous of degree , show that for .               Using the chain rule we obtain On the other hand, the homogeneity condition shows that Now we can equate the right hand sides of equations and and set to obtain the desired equation.    We take the partial -derivative of both sides of the equation (this is just plugging in and instead of and ): Hence after canceling one , and plugging in , shows the desired equation.      "
},
{
  "id": "rw21-1",
  "level": "2",
  "url": "worksheet-assignment-8.html#rw21-1",
  "type": "Worksheet Exercise",
  "number": "5.10.4",
  "title": "",
  "body": "  Let Compute and .    The dependency tree is shown in . We first compute and at we have    The tree diagram for with , , and .    A tree diagram with w at the top. Three branches lead down from w to x, y, and z. From x, two branches lead to s and t; from y, two branches lead to s and t; from z, a single branch leads to t.      By the chain rule, since , Similarly,    "
},
{
  "id": "rev-gr-1",
  "level": "2",
  "url": "worksheet-assignment-8.html#rev-gr-1",
  "type": "Worksheet Exercise",
  "number": "5.10.5",
  "title": "",
  "body": "  Consider where . Compute its directional derivative at with respect to the unit vectors in (polar) directions . What about any other angle?    The function is symmetric with respect to rotations around the origin, so all the directional derivatives will be equal. Therefore it is sufficient to compute the derivative for , i.e. : Plugging in we see that this is zero. Hence the directional derivative at is in the directions , and by the same symmetry it is for every other angle as well.   "
},
{
  "id": "rev-gr-3",
  "level": "2",
  "url": "worksheet-assignment-8.html#rev-gr-3",
  "type": "Worksheet Exercise",
  "number": "5.10.6",
  "title": "True or False.",
  "body": " True or False   If is a unit vector and has continuous second partials, then where .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We have that This simplifies to Note we needed to have continuous second partials to invoke Clairaut's Theorem.   "
},
{
  "id": "rm2-gr-2",
  "level": "2",
  "url": "worksheet-assignment-8.html#rm2-gr-2",
  "type": "Worksheet Exercise",
  "number": "5.10.7",
  "title": "A mountain lion on a mountain.",
  "body": " A mountain lion on a mountain   A mountain lion runs on a mountain whose height above the point is .   In which direction(s) should the mountain lion run from point so that the height is increasing at the fastest possible rate? What is this fastest rate?    In which direction(s) should the mountain lion run from point so that the height is increasing at half of the fastest possible rate?          The fastest possible rate of increase is attained in the direction of the gradient: At , this gradient is simply , and the fastest possible rate of change is the length of the gradient, i.e. .    Half of the fastest possible rate of height increase at point is . Let be a unit vector in the desired direction. Then the directional derivative is the desired rate of change of height at in the direction of ; it can be calculated using the dot product with the gradient: Thus, and must be such that is unit, i.e. , from which and . Therefore, the desired directions in which the height is increasing at a rate equal to half of the fastest possible rate are and .      "
},
{
  "id": "rw23-3",
  "level": "2",
  "url": "worksheet-assignment-8.html#rw23-3",
  "type": "Worksheet Exercise",
  "number": "5.10.8",
  "title": "",
  "body": "  Suppose that is a function of two variables and let Suppose that at a point ,    Find the direction of the maximum rate of change at .    Find the maximum rate of change at .          Using , the two conditions become Hence , and the direction of the maximum rate of change at is given by      is the maximum rate of change.      "
},
{
  "id": "rw21-8",
  "level": "2",
  "url": "worksheet-assignment-8.html#rw21-8",
  "type": "Worksheet Exercise",
  "number": "5.10.9",
  "title": "",
  "body": "  Consider the function and the point .   Find the direction in which decreases the most rapidly at .    Find the directional derivative of at in the direction given by .       The gradient is    The direction of most rapid decrease is opposite to the gradient:     The unit vector in the direction of is , so       "
},
{
  "id": "rw17-8",
  "level": "2",
  "url": "worksheet-assignment-8.html#rw17-8",
  "type": "Worksheet Exercise",
  "number": "5.10.10",
  "title": "",
  "body": "  Suppose the temperature (in degrees Celsius) at a point is given by , where is a continuous function that has continuous partial derivatives, and distances in the -plane are measured in meters. We are given the following information about at the point :     C,    the derivative of at obtains its smallest (i.e. most negative) value in the direction toward the point  ,    the derivative of at in the direction of the vector  is  C\/m.      Find the derivative of at in the direction toward the point  .    If you start at and move along a straight path toward the point , approximately how far will you have to go in this direction until the temperature reaches  C?       First we determine at . The derivative is most negative in the direction of , and the direction from toward is Hence is a positive multiple of , i.e. for some .  The third piece of information fixes . The unit vector in the direction of is , since , so Therefore      The direction from toward is , whose length is , so the unit vector is and     The temperature must rise from  C to  C, i.e.  C, and along this direction it rises at approximately  C per meter. Using the linear approximation , where is the distance travelled,       "
},
{
  "id": "pp-31",
  "level": "2",
  "url": "worksheet-assignment-8.html#pp-31",
  "type": "Worksheet Exercise",
  "number": "5.10.11",
  "title": "",
  "body": "   is a nice function of and (i.e. is continuous and its partials exist). In are shown the level curves .   Let . Estimate .    Estimate .    Draw on the diagram a unit vector pointing in the same direction as .    At , draw a unit vector and label it , such that .    Estimate .    Which appears bigger, or ?      Level curves of at the values . The marked point is the highest point of the curve; lies midway between the and curves; lies midway between the and curves.     c0(t) = (t, -0.30 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c2(t) = (t, -0.08 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c4(t) = (t, 0.17 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c6(t) = (t, 0.75 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c8(t) = (t, 1.88 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c10(t) = (t, 2.98 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c12(t) = (t, 3.90 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))                 P    Q    R       f=12    f=10    f=8    f=6    f=4    f=2    f=0                    The directional derivative tells us roughly how much increases if we move one unit from in the direction , i.e. diagonally up and to the right at . Starting at and moving one unit that way lands us near , which is about two contours further along, and each contour step is spread over roughly one unit of travel. Reading the map,     At the level curve through that point is climbing at roughly , i.e. the level curve is parallel to . Moving along a level curve does not change the value of , so     The gradient is perpendicular to the level curve and points in the direction of increase . At the level curve runs up and to the right at about , and increases as we move upward, so points up and to the left , i.e. in the direction . See .    We need any direction of decrease at , i.e. any direction pointing toward the lower-valued level curves (toward , not away from it). Since the level curves below have smaller values, (straight down) works. See .     sits at the very top of its level curve, where the curve is horizontal . Walking in the direction from therefore keeps us on the same level curve for a while, so does not change to first order:      measures how fast changes as we move straight up, which is large where the contours are close together and small where they are far apart. At we only have to go up about units to move from one contour to the next, so . At we must go up about unit for the same change, so . Hence is bigger.      The vectors asked for in parts C and D: points perpendicular to the level curve toward increasing , while at points toward decreasing .     c0(t) = (t, -0.30 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c2(t) = (t, -0.08 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c4(t) = (t, 0.17 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c6(t) = (t, 0.75 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c8(t) = (t, 1.88 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c10(t) = (t, 2.98 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))  c12(t) = (t, 3.90 + 2.2\/((1 + exp(-(t-1)\/0.55))*(1 + exp((t-4.2)\/0.9))))                \\nabla f(1,2)    u_2    P               "
},
{
  "id": "ex-electrostatic-plate",
  "level": "2",
  "url": "worksheet-assignment-8.html#ex-electrostatic-plate",
  "type": "Worksheet Exercise",
  "number": "5.10.12",
  "title": "Electric Potential on a Coated Plate.",
  "body": " Electric Potential on a Coated Plate   The electric potential on a thin coated plate, in volts, is with and in centimeters. Consider the point .     Find at and the electric field there. Along which unit vector does the potential drop most rapidly, and at what rate?    A test charge is nudged along . Compute at .    Find the two unit vectors along which the potential does not change, and name the curve they are tangent to.           , so and V\/cm. The potential drops fastest along , at the rate V\/cm.     in V\/cm. The potential rises slightly along this heading.     . These are tangent to the equipotential ellipse through , and they are orthogonal to , as they must be.       The potential on the plate. One route holds V along the equipotential ; the other follows a field line, on which at every point.      "
},
{
  "id": "ex-isobars-low",
  "level": "2",
  "url": "worksheet-assignment-8.html#ex-isobars-low",
  "type": "Worksheet Exercise",
  "number": "5.10.13",
  "title": "Sailing the Isobars of a Low.",
  "body": " Sailing the Isobars of a Low   Near the center of a low-pressure system the sea-level pressure, in millibars, is modeled by with and in miles from the center of the low. A ship sits at .     Find the pressure at the ship and there. The pressure-gradient force per unit volume of air is a positive multiple of ; in which unit direction does it push, and what is in millibars per mile?    A second ship 40 miles from the center reports a stronger wind. Using this model, explain why supports that report.    The captain decides to hold a constant barometer reading. Give the two possible unit headings at , and describe the shape of the full route.           mb, and gives . The force points along , that is, inward toward the low, and mb\/mi.    Here grows linearly with distance from the center, so at 40 miles it is mb\/mi, nearly double the value at the first ship. (Real storms reverse this trend close to the eye; the model is only reasonable over a limited annulus.)     . Since the level curves of are the circles , holding the barometer steady means circling the storm at a fixed radius of miles.     Use the interactive figure to explore the problem further geometrically, switching between the two headings and watching how the barometer responds as the ship moves.    The pressure field around a low. One heading circles the eye at constant mb; the other runs outward along . The distance readout shows why grows with radius.      "
},
{
  "id": "worksheet-assignment-9",
  "level": "1",
  "url": "worksheet-assignment-9.html",
  "type": "Worksheet",
  "number": "5.11",
  "title": "Assignment 9",
  "body": " Assignment 9   These problems find the tangent plane to a graph and lines lying in it, show that the radius of a sphere is orthogonal to its tangent plane, and use differentials to estimate a change in a function and to approximate a value. If you would like to review the material first, see .     Find an equation for the tangent plane to the graph of passing through the point .    We have and , so the tangent plane at a general point is given by   Plugging in our point , this becomes or equivalently       Find a parametric equation for a line contained in the tangent plane you found in the previous problem. (Any line will suffice.)    Note that the point lies on this plane, and the plane has normal vector . Any vector orthogonal to the normal vector will point along this plane. By inspection, we see that so the vector points along the plane. Thus is the direction vector of a line pointing along this plane. Combining this with the point on the plane that we have already found, we see that the line is contained in the tangent plane. We could find other lines contained in the plane by making different choices of direction vector. See .   The tangent plane to the graph of at , its normal vector , and the line contained in the plane.    A three dimensional coordinate system showing a tilted shaded parallelogram that represents the tangent plane. A red point P zero at pi over two comma one comma zero lies in the middle of the plane. A blue arrow perpendicular to the plane at P zero is the normal vector n, and a dark red line through P zero lying inside the plane is the line r of t.          Find the equation of the tangent plane at the point on the surface .    Let . Then and the normal to the tangent plane is The constant is so from , the tangent plane at is      True or False   Any tangent plane to a graph must meet that graph at exactly one point.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Consider the plane . The tangent plane to this graph at any point is the same as , so it meets the graph at infinitely many points.      Let be a sphere centered at the origin in , and consider any point on . Show that the vector is orthogonal to the tangent plane to at .    Let be the radius of the sphere, and write . Assume for the moment that lies on the top half of the sphere (i.e. ). Note that the top half of the sphere is the same as the graph of the function . We can compute so that the tangent plane to the graph at (which is the same as the tangent plane to at ) is given by   We can rewrite this as where we use the fact that to simplify things. From this we see that is a normal vector to the tangent plane. But , so this is exactly what we needed to show. See .  A similar argument (with in place of ) works when is on the bottom half of the sphere (i.e. ). When , we have to use a sideways graph of some function like , but other than that, pretty much everything is the same.   The vector from the center of the sphere to the point is a normal vector to the tangent plane to at .    A sphere centered at the origin O, drawn with a dashed equator. A point P sits on the upper right of the sphere. An arrow from O through P continues past the surface, and a small shaded parallelogram at P, perpendicular to the arrow, represents the tangent plane. A right angle marker at P shows that the vector O P is orthogonal to the tangent plane.          Find the equation of the tangent plane to the sphere at .    Write the sphere as the level surface . The gradient is normal to the level surface: Hence the tangent plane is which simplifies to . (Notice that the normal vector is parallel to the position vector , exactly as we proved for spheres centered at the origin.)      The tangent plane to at the point is . Find .    The tangent plane to the graph of at is so once it is expanded the coefficient of is and the coefficient of is . Comparing with gives and therefore (As a check, the plane passes through :  .)      Let . Use a linearization to approximate .    The point is close to the origin, where the function is easy to work with, so we linearize at : so and . The linearization is and therefore       Let and note that . Use an appropriate partial derivative to approximate .    We move from to . Only changes, and it changes by so the partial derivative we need is . Writing ,   At we have and , so   The linear approximation is   As a check, the exact value is , so the approximation is good to about .    "
},
{
  "id": "rev-tp-1",
  "level": "2",
  "url": "worksheet-assignment-9.html#rev-tp-1",
  "type": "Worksheet Exercise",
  "number": "5.11.1",
  "title": "",
  "body": "  Find an equation for the tangent plane to the graph of passing through the point .    We have and , so the tangent plane at a general point is given by   Plugging in our point , this becomes or equivalently    "
},
{
  "id": "rev-tp-2",
  "level": "2",
  "url": "worksheet-assignment-9.html#rev-tp-2",
  "type": "Worksheet Exercise",
  "number": "5.11.2",
  "title": "",
  "body": "  Find a parametric equation for a line contained in the tangent plane you found in the previous problem. (Any line will suffice.)    Note that the point lies on this plane, and the plane has normal vector . Any vector orthogonal to the normal vector will point along this plane. By inspection, we see that so the vector points along the plane. Thus is the direction vector of a line pointing along this plane. Combining this with the point on the plane that we have already found, we see that the line is contained in the tangent plane. We could find other lines contained in the plane by making different choices of direction vector. See .   The tangent plane to the graph of at , its normal vector , and the line contained in the plane.    A three dimensional coordinate system showing a tilted shaded parallelogram that represents the tangent plane. A red point P zero at pi over two comma one comma zero lies in the middle of the plane. A blue arrow perpendicular to the plane at P zero is the normal vector n, and a dark red line through P zero lying inside the plane is the line r of t.       "
},
{
  "id": "rs19-9",
  "level": "2",
  "url": "worksheet-assignment-9.html#rs19-9",
  "type": "Worksheet Exercise",
  "number": "5.11.3",
  "title": "",
  "body": "  Find the equation of the tangent plane at the point on the surface .    Let . Then and the normal to the tangent plane is The constant is so from , the tangent plane at is    "
},
{
  "id": "rf-8-a",
  "level": "2",
  "url": "worksheet-assignment-9.html#rf-8-a",
  "type": "Worksheet Exercise",
  "number": "5.11.4",
  "title": "True or False.",
  "body": " True or False   Any tangent plane to a graph must meet that graph at exactly one point.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Consider the plane . The tangent plane to this graph at any point is the same as , so it meets the graph at infinitely many points.   "
},
{
  "id": "rev-tp-3",
  "level": "2",
  "url": "worksheet-assignment-9.html#rev-tp-3",
  "type": "Worksheet Exercise",
  "number": "5.11.5",
  "title": "",
  "body": "  Let be a sphere centered at the origin in , and consider any point on . Show that the vector is orthogonal to the tangent plane to at .    Let be the radius of the sphere, and write . Assume for the moment that lies on the top half of the sphere (i.e. ). Note that the top half of the sphere is the same as the graph of the function . We can compute so that the tangent plane to the graph at (which is the same as the tangent plane to at ) is given by   We can rewrite this as where we use the fact that to simplify things. From this we see that is a normal vector to the tangent plane. But , so this is exactly what we needed to show. See .  A similar argument (with in place of ) works when is on the bottom half of the sphere (i.e. ). When , we have to use a sideways graph of some function like , but other than that, pretty much everything is the same.   The vector from the center of the sphere to the point is a normal vector to the tangent plane to at .    A sphere centered at the origin O, drawn with a dashed equator. A point P sits on the upper right of the sphere. An arrow from O through P continues past the surface, and a small shaded parallelogram at P, perpendicular to the arrow, represents the tangent plane. A right angle marker at P shows that the vector O P is orthogonal to the tangent plane.       "
},
{
  "id": "pp-33",
  "level": "2",
  "url": "worksheet-assignment-9.html#pp-33",
  "type": "Worksheet Exercise",
  "number": "5.11.6",
  "title": "",
  "body": "  Find the equation of the tangent plane to the sphere at .    Write the sphere as the level surface . The gradient is normal to the level surface: Hence the tangent plane is which simplifies to . (Notice that the normal vector is parallel to the position vector , exactly as we proved for spheres centered at the origin.)   "
},
{
  "id": "pp-34",
  "level": "2",
  "url": "worksheet-assignment-9.html#pp-34",
  "type": "Worksheet Exercise",
  "number": "5.11.7",
  "title": "",
  "body": "  The tangent plane to at the point is . Find .    The tangent plane to the graph of at is so once it is expanded the coefficient of is and the coefficient of is . Comparing with gives and therefore (As a check, the plane passes through :  .)   "
},
{
  "id": "pp-36",
  "level": "2",
  "url": "worksheet-assignment-9.html#pp-36",
  "type": "Worksheet Exercise",
  "number": "5.11.8",
  "title": "",
  "body": "  Let . Use a linearization to approximate .    The point is close to the origin, where the function is easy to work with, so we linearize at : so and . The linearization is and therefore    "
},
{
  "id": "q1-2",
  "level": "2",
  "url": "worksheet-assignment-9.html#q1-2",
  "type": "Worksheet Exercise",
  "number": "5.11.9",
  "title": "",
  "body": "  Let and note that . Use an appropriate partial derivative to approximate .    We move from to . Only changes, and it changes by so the partial derivative we need is . Writing ,   At we have and , so   The linear approximation is   As a check, the exact value is , so the approximation is good to about .   "
},
{
  "id": "worksheet-review-problems-3",
  "level": "1",
  "url": "worksheet-review-problems-3.html",
  "type": "Worksheet",
  "number": "5.12",
  "title": "Review Problems #3",
  "body": " Review Problems #3   These are problems from the Chapter 4 topics that were not assigned in Assignments 7, 8 and 9, collected here for review. They are not assigned, but they are fair game on an exam. If you would like to review the material first, see , , , , and .     Consider the function Sketch the level surface of that passes through the point . Clearly label the value of on that surface, and label the coordinate axes.    The level surfaces of are the surfaces . To find which one passes through we simply evaluate: So the level surface we want is .  Now we simplify the equation of that level surface:   This is a cone. Indeed, squaring gives , which is the full double cone; but the equation forces , so we keep only the lower nappe. The vertex is at the origin, and the horizontal trace at height (with ) is the circle of radius . In other words the cone opens downwards, and the slope of every straight line drawn on it from the vertex is . The point lies on it, since . See .   The level surface , that is the downward cone . It passes through , which lies on the circle in the plane .    A cone with its vertex at the origin opening downwards around the negative z axis. The horizontal circle of radius five is drawn on it in the plane z equals negative five, and the point three, four, negative five is marked on that circle.          Sketch three level curves of including the one that passes through the point . Clearly label the value of on each curve.    First we find the level through : So one of the three curves must be .  In general the level curve is Each of these is a parabola opening along the  -axis , with vertex at the origin. If it opens to the right, and if it opens to the left. Note that the domain of excludes , so the vertex itself, the origin, must be removed from every level curve.  Let us take the three levels , and : The larger is, the wider the parabola. These are drawn in .  One more remark: the level is special. There , so the level curve is not a parabola at all but the -axis with the origin removed.   Three level curves of . The curve through is the level , which opens to the left. The origin is excluded from every level curve, since is undefined when .    Three parabolas with vertices at the origin and axes along the x axis. One opens to the left and is labelled h equals negative four; two open to the right and are labelled h equals one and h equals four. The point negative one comma two is marked on the leftward parabola.     cm4(t) = (-t^2\/4, t)  c1(t) = (t^2, t)  c4(t) = (t^2\/4, t)         (-1,2)    h=-4    h=1    h=4                   True or False   To show that the limit at a point exists, it suffices to find two paths to the point where the limits of agree.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We would have to show the limit agrees on every path, but this is not feasible.      Show that the limit does not exist:     Approaching the limit along the -axis, i.e. , we need to consider which does not exist since the numerator has limit but the denominator has limit .      Evaluate the following limit or show that the limit does not exist:     Along the line : Along the line : Since , the limit does not exist.      Show that the following limit does not exist:     Along , we have hence approaches zero as along the line . Along , we have and hence as along . Since the limits computed along two different paths are not equal, we can conclude that does not exist.     True or False   If two functions and are both continuous at the point , then the quotient is also continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: are both continuous at . However, is not continuous at , since for example along ,        A metal plate occupies the square , , and is heated so that the temperature at the point is , measured in degrees Fahrenheit. Distances are measured in feet. The table below records some measured values of .   Measured temperatures in                    Approximate and interpret your answer, with units, in the context of the problem.    Approximate , and give its units.    An ant walks across the plate along the path Approximate the rate at which the temperature the ant feels is changing at the moment it is at the point , and give the units.        (a) Holding and stepping forward in , So at , moving in the positive -direction with held fixed, the temperature drops at a rate of about per foot.   (b) We need at a second value of : Then    (c) As in , the ant is at when , that is at , and then as required. Differentiating the path,   From the table,   By the chain rule, in degrees Fahrenheit per unit of . Here the ant is warming up : it moves in the direction, where the plate is hotter, and in the direction, where the plate is also hotter, so both contributions are positive. Compare this with , where the same computation gave a negative rate.       Let and , . Use the chain rule to compute at .    The chain rule gives   At we have and , so and . Also and . Hence        Find all points at which the direction of fastest change of the function is .    The direction of fastest change is , so we need to find all points such that . Then so Hence, the direction of fastest change is at all points on the line . See .   Level curves of , which are circles centered at . Along the line the gradient points in the direction .     c1(t) = (1 + 0.8*cos(t), 2 + 0.8*sin(t))  c2(t) = (1 + 1.6*cos(t), 2 + 1.6*sin(t))  c3(t) = (1 + 2.4*cos(t), 2 + 2.4*sin(t))             y=x+1    \\nabla f \\parallel \\langle 1,1\\rangle    (1,2)                  True or False    .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Since ,       A metal plate is placed on the -plane in such a way that the temperature at any point is given by  C.   What is the rate of change in temperature at in the direction of ?    At , in what direction is the temperature increasing most rapidly?    At , in what direction is the temperature decreasing most rapidly?          We first compute the gradient: so . The direction vector is with , so the unit vector is . Hence     The temperature increases most rapidly in the direction of the gradient:     The temperature decreases most rapidly in the direction opposite to the gradient:          Calculate the maximum rate of change of at the point and determine the direction in which it occurs.    The gradient is so at , The direction of maximum increase is and the maximum rate of increase is       Consider the function .   Find the directions in which increases and decreases most rapidly at .    Find the derivatives of in these directions at .          The gradient is The function increases most rapidly in the direction of the gradient, and decreases most rapidly in the opposite direction,     The directional derivatives are As expected, the largest possible rate of change is and the smallest is .         In the -plane, the temperature at the point is given by . You're at where the temperature is . Brrrr!   In what direction should you go, from , in order to warm up the fastest?    What is the directional derivative in that direction at the point ?    If you walk units in that direction, by about how many degrees will you warm up?          A function increases fastest in the direction of its gradient: So head in the direction (equivalently, the unit vector ).    In the direction of the gradient, the directional derivative equals the length of the gradient:     The directional derivative is the rate of change of temperature per unit of distance travelled, so by the linear approximation          A sheet of metal of varying density occupies the -plane. At the point , the density is . We move away from the point in the direction . Use the directional derivative to estimate about how far we'll have to go for the density to increase by .    Let . Then The given direction is already a unit vector, since , so   So the density increases at about units of density per unit of distance. To gain units of density we therefore need to travel approximately     The problem that closes this set repeats the three questions of in a different physical setting: find the direction of most rapid decrease, the rate along a prescribed direction, and the directions of no change.   The Fall Line on a Ski Slope   A mountainside has elevation, in feet, with and in feet. A skier stands at . Her gravitational potential energy is , so the downhill force she feels is a positive multiple of .     Find the fall line , the unit vector of steepest descent, and the grade of the slope there, expressed as a percent (feet dropped per hundred feet travelled).    A traverse is a route on which she neither climbs nor descends. Find the two unit vectors that accomplish this.    She wants a gentler line of exactly grade. Using , find the angle between her heading and the fall line.           , so . Steepest descent is along , and , a grade of about .     , tangent to the contour line of constant elevation through .     , so off the fall line, on either side.       Part (a) says the grade is . Here is what that number is, on the hill itself. The vertical plane through in the direction cuts the surface in the gold curve; the red line is that curve's tangent at ; and is the angle it makes with the horizontal. Since , the grade is the tangent of that angle. Swing with the slider: is largest along the fall line, where and , and it closes to nothing along the contour, where the tangent line lies flat.       The mountainside . Compare the fall line, the level traverse, and the line. Watch the grade readout drift away from as the skier leaves , since the angle in part (c) is computed at only.          You measure the magnitude of a force to be , but there could be an error of at most . You measure a mass to be with an error of at most . You are trying to use these two to approximate the magnitude of the acceleration . We have . Use the principle of the differential to find an upper bound on the absolute value of the error when assuming .    Treat as a function of the two measured quantities, . Its differential is At the measured values and (where indeed ), the coefficients are and .  Taking absolute values and using the triangle inequality with the worst-case errors and , So the error in the value is at most about .      Let , and note that . Use an appropriate partial derivative to approximate .    Only changes, by , so we need . Treating as a constant and using the chain rule,   At the point we have and , so   Therefore The exact value is , so again the approximation is quite good.      True or False   If every directional derivative exists at a point , then must be continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    False, and the failure is dramatic. Let For a unit vector with , and when . So every directional derivative exists. Yet along the parabola , which depends on — different parabolas approach different values, so does not exist and is not continuous at the origin. Existence of directional derivatives is a statement about behavior along straight lines only; continuity requires control along every approach.     Find the Error   Below is a student's computation of the derivative of at the point in the direction of . Exactly one line contains the error. Click on that line.    The error is in the third line. The formula requires a unit vector. Since , the correct direction is , giving not . Lines 1, 2 and 4 are each correct given the line before them — line 4 faithfully reports the (wrong) number produced by line 3.       So the directional derivative equals .    "
},
{
  "id": "q1-1",
  "level": "2",
  "url": "worksheet-review-problems-3.html#q1-1",
  "type": "Worksheet Exercise",
  "number": "5.12.1",
  "title": "",
  "body": "  Consider the function Sketch the level surface of that passes through the point . Clearly label the value of on that surface, and label the coordinate axes.    The level surfaces of are the surfaces . To find which one passes through we simply evaluate: So the level surface we want is .  Now we simplify the equation of that level surface:   This is a cone. Indeed, squaring gives , which is the full double cone; but the equation forces , so we keep only the lower nappe. The vertex is at the origin, and the horizontal trace at height (with ) is the circle of radius . In other words the cone opens downwards, and the slope of every straight line drawn on it from the vertex is . The point lies on it, since . See .   The level surface , that is the downward cone . It passes through , which lies on the circle in the plane .    A cone with its vertex at the origin opening downwards around the negative z axis. The horizontal circle of radius five is drawn on it in the plane z equals negative five, and the point three, four, negative five is marked on that circle.       "
},
{
  "id": "q2-1",
  "level": "2",
  "url": "worksheet-review-problems-3.html#q2-1",
  "type": "Worksheet Exercise",
  "number": "5.12.2",
  "title": "",
  "body": "  Sketch three level curves of including the one that passes through the point . Clearly label the value of on each curve.    First we find the level through : So one of the three curves must be .  In general the level curve is Each of these is a parabola opening along the  -axis , with vertex at the origin. If it opens to the right, and if it opens to the left. Note that the domain of excludes , so the vertex itself, the origin, must be removed from every level curve.  Let us take the three levels , and : The larger is, the wider the parabola. These are drawn in .  One more remark: the level is special. There , so the level curve is not a parabola at all but the -axis with the origin removed.   Three level curves of . The curve through is the level , which opens to the left. The origin is excluded from every level curve, since is undefined when .    Three parabolas with vertices at the origin and axes along the x axis. One opens to the left and is labelled h equals negative four; two open to the right and are labelled h equals one and h equals four. The point negative one comma two is marked on the leftward parabola.     cm4(t) = (-t^2\/4, t)  c1(t) = (t^2, t)  c4(t) = (t^2\/4, t)         (-1,2)    h=-4    h=1    h=4                 "
},
{
  "id": "rm2-lim-1-b",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rm2-lim-1-b",
  "type": "Worksheet Exercise",
  "number": "5.12.3",
  "title": "True or False.",
  "body": " True or False   To show that the limit at a point exists, it suffices to find two paths to the point where the limits of agree.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    We would have to show the limit agrees on every path, but this is not feasible.   "
},
{
  "id": "rm2-lim-2",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rm2-lim-2",
  "type": "Worksheet Exercise",
  "number": "5.12.4",
  "title": "",
  "body": "  Show that the limit does not exist:     Approaching the limit along the -axis, i.e. , we need to consider which does not exist since the numerator has limit but the denominator has limit .   "
},
{
  "id": "rf-3",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rf-3",
  "type": "Worksheet Exercise",
  "number": "5.12.5",
  "title": "",
  "body": "  Evaluate the following limit or show that the limit does not exist:     Along the line : Along the line : Since , the limit does not exist.   "
},
{
  "id": "rs19-6",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rs19-6",
  "type": "Worksheet Exercise",
  "number": "5.12.6",
  "title": "",
  "body": "  Show that the following limit does not exist:     Along , we have hence approaches zero as along the line . Along , we have and hence as along . Since the limits computed along two different paths are not equal, we can conclude that does not exist.   "
},
{
  "id": "rf-8-c",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rf-8-c",
  "type": "Worksheet Exercise",
  "number": "5.12.7",
  "title": "True or False.",
  "body": " True or False   If two functions and are both continuous at the point , then the quotient is also continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: are both continuous at . However, is not continuous at , since for example along ,    "
},
{
  "id": "q2-3",
  "level": "2",
  "url": "worksheet-review-problems-3.html#q2-3",
  "type": "Worksheet Exercise",
  "number": "5.12.8",
  "title": "",
  "body": "  A metal plate occupies the square , , and is heated so that the temperature at the point is , measured in degrees Fahrenheit. Distances are measured in feet. The table below records some measured values of .   Measured temperatures in                    Approximate and interpret your answer, with units, in the context of the problem.    Approximate , and give its units.    An ant walks across the plate along the path Approximate the rate at which the temperature the ant feels is changing at the moment it is at the point , and give the units.        (a) Holding and stepping forward in , So at , moving in the positive -direction with held fixed, the temperature drops at a rate of about per foot.   (b) We need at a second value of : Then    (c) As in , the ant is at when , that is at , and then as required. Differentiating the path,   From the table,   By the chain rule, in degrees Fahrenheit per unit of . Here the ant is warming up : it moves in the direction, where the plate is hotter, and in the direction, where the plate is also hotter, so both contributions are positive. Compare this with , where the same computation gave a negative rate.   "
},
{
  "id": "pp-29",
  "level": "2",
  "url": "worksheet-review-problems-3.html#pp-29",
  "type": "Worksheet Exercise",
  "number": "5.12.9",
  "title": "",
  "body": "  Let and , . Use the chain rule to compute at .    The chain rule gives   At we have and , so and . Also and . Hence    "
},
{
  "id": "rev-gr-2",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rev-gr-2",
  "type": "Worksheet Exercise",
  "number": "5.12.10",
  "title": "",
  "body": "  Find all points at which the direction of fastest change of the function is .    The direction of fastest change is , so we need to find all points such that . Then so Hence, the direction of fastest change is at all points on the line . See .   Level curves of , which are circles centered at . Along the line the gradient points in the direction .     c1(t) = (1 + 0.8*cos(t), 2 + 0.8*sin(t))  c2(t) = (1 + 1.6*cos(t), 2 + 1.6*sin(t))  c3(t) = (1 + 2.4*cos(t), 2 + 2.4*sin(t))             y=x+1    \\nabla f \\parallel \\langle 1,1\\rangle    (1,2)                "
},
{
  "id": "rm2-gr-1",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rm2-gr-1",
  "type": "Worksheet Exercise",
  "number": "5.12.11",
  "title": "True or False.",
  "body": " True or False    .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Since ,    "
},
{
  "id": "rf-6",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rf-6",
  "type": "Worksheet Exercise",
  "number": "5.12.12",
  "title": "",
  "body": "  A metal plate is placed on the -plane in such a way that the temperature at any point is given by  C.   What is the rate of change in temperature at in the direction of ?    At , in what direction is the temperature increasing most rapidly?    At , in what direction is the temperature decreasing most rapidly?          We first compute the gradient: so . The direction vector is with , so the unit vector is . Hence     The temperature increases most rapidly in the direction of the gradient:     The temperature decreases most rapidly in the direction opposite to the gradient:       "
},
{
  "id": "rs19-7",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rs19-7",
  "type": "Worksheet Exercise",
  "number": "5.12.13",
  "title": "",
  "body": "  Calculate the maximum rate of change of at the point and determine the direction in which it occurs.    The gradient is so at , The direction of maximum increase is and the maximum rate of increase is    "
},
{
  "id": "rw22-7",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rw22-7",
  "type": "Worksheet Exercise",
  "number": "5.12.14",
  "title": "",
  "body": "  Consider the function .   Find the directions in which increases and decreases most rapidly at .    Find the derivatives of in these directions at .          The gradient is The function increases most rapidly in the direction of the gradient, and decreases most rapidly in the opposite direction,     The directional derivatives are As expected, the largest possible rate of change is and the smallest is .      "
},
{
  "id": "pp-30",
  "level": "2",
  "url": "worksheet-review-problems-3.html#pp-30",
  "type": "Worksheet Exercise",
  "number": "5.12.15",
  "title": "",
  "body": "  In the -plane, the temperature at the point is given by . You're at where the temperature is . Brrrr!   In what direction should you go, from , in order to warm up the fastest?    What is the directional derivative in that direction at the point ?    If you walk units in that direction, by about how many degrees will you warm up?          A function increases fastest in the direction of its gradient: So head in the direction (equivalently, the unit vector ).    In the direction of the gradient, the directional derivative equals the length of the gradient:     The directional derivative is the rate of change of temperature per unit of distance travelled, so by the linear approximation       "
},
{
  "id": "pp-32",
  "level": "2",
  "url": "worksheet-review-problems-3.html#pp-32",
  "type": "Worksheet Exercise",
  "number": "5.12.16",
  "title": "",
  "body": "  A sheet of metal of varying density occupies the -plane. At the point , the density is . We move away from the point in the direction . Use the directional derivative to estimate about how far we'll have to go for the density to increase by .    Let . Then The given direction is already a unit vector, since , so   So the density increases at about units of density per unit of distance. To gain units of density we therefore need to travel approximately    "
},
{
  "id": "ex-fall-line",
  "level": "2",
  "url": "worksheet-review-problems-3.html#ex-fall-line",
  "type": "Worksheet Exercise",
  "number": "5.12.17",
  "title": "The Fall Line on a Ski Slope.",
  "body": " The Fall Line on a Ski Slope   A mountainside has elevation, in feet, with and in feet. A skier stands at . Her gravitational potential energy is , so the downhill force she feels is a positive multiple of .     Find the fall line , the unit vector of steepest descent, and the grade of the slope there, expressed as a percent (feet dropped per hundred feet travelled).    A traverse is a route on which she neither climbs nor descends. Find the two unit vectors that accomplish this.    She wants a gentler line of exactly grade. Using , find the angle between her heading and the fall line.           , so . Steepest descent is along , and , a grade of about .     , tangent to the contour line of constant elevation through .     , so off the fall line, on either side.       Part (a) says the grade is . Here is what that number is, on the hill itself. The vertical plane through in the direction cuts the surface in the gold curve; the red line is that curve's tangent at ; and is the angle it makes with the horizontal. Since , the grade is the tangent of that angle. Swing with the slider: is largest along the fall line, where and , and it closes to nothing along the contour, where the tangent line lies flat.       The mountainside . Compare the fall line, the level traverse, and the line. Watch the grade readout drift away from as the skier leaves , since the angle in part (c) is computed at only.      "
},
{
  "id": "pp-40",
  "level": "2",
  "url": "worksheet-review-problems-3.html#pp-40",
  "type": "Worksheet Exercise",
  "number": "5.12.18",
  "title": "",
  "body": "  You measure the magnitude of a force to be , but there could be an error of at most . You measure a mass to be with an error of at most . You are trying to use these two to approximate the magnitude of the acceleration . We have . Use the principle of the differential to find an upper bound on the absolute value of the error when assuming .    Treat as a function of the two measured quantities, . Its differential is At the measured values and (where indeed ), the coefficients are and .  Taking absolute values and using the triangle inequality with the worst-case errors and , So the error in the value is at most about .   "
},
{
  "id": "q2-2",
  "level": "2",
  "url": "worksheet-review-problems-3.html#q2-2",
  "type": "Worksheet Exercise",
  "number": "5.12.19",
  "title": "",
  "body": "  Let , and note that . Use an appropriate partial derivative to approximate .    Only changes, by , so we need . Treating as a constant and using the chain rule,   At the point we have and , so   Therefore The exact value is , so again the approximation is quite good.   "
},
{
  "id": "rs-tf-directional",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rs-tf-directional",
  "type": "Worksheet Exercise",
  "number": "5.12.20",
  "title": "True or False.",
  "body": " True or False   If every directional derivative exists at a point , then must be continuous at .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    False, and the failure is dramatic. Let For a unit vector with , and when . So every directional derivative exists. Yet along the parabola , which depends on — different parabolas approach different values, so does not exist and is not continuous at the origin. Existence of directional derivatives is a statement about behavior along straight lines only; continuity requires control along every approach.   "
},
{
  "id": "rs-clickable-error",
  "level": "2",
  "url": "worksheet-review-problems-3.html#rs-clickable-error",
  "type": "Worksheet Exercise",
  "number": "5.12.21",
  "title": "Find the Error.",
  "body": " Find the Error   Below is a student's computation of the derivative of at the point in the direction of . Exactly one line contains the error. Click on that line.    The error is in the third line. The formula requires a unit vector. Since , the correct direction is , giving not . Lines 1, 2 and 4 are each correct given the line before them — line 4 faithfully reports the (wrong) number produced by line 3.       So the directional derivative equals .   "
},
{
  "id": "worksheet-assignment-10",
  "level": "1",
  "url": "worksheet-assignment-10.html",
  "type": "Worksheet",
  "number": "5.13",
  "title": "Assignment 10",
  "body": " Assignment 10   These problems find absolute extrema on a closed region, classify critical points with the second derivative test, and use Lagrange multipliers to optimize a function subject to a constraint. If you would like to review the material first, see and .     Find the absolute maximum and minimum values of on the region bounded by the - and -axes and the line .    The gradient is , which vanishes only at , a point in the interior of the region. There . Since this is the only critical point on all of and it is a minimum (by the second derivative test), it is a global minimum. We now examine the three boundary segments to look for possible maxima.  On the -axis with , we have , which is maximized at .  On the -axis with , we have , which is maximized at .  Finally, on the line with , we have , which is maximized at .  Altogether, there is an absolute minimum and an absolute maximum .      Find and classify all the critical points of .    The gradient is Since the exponential factors, as well as and , are always positive, we might as well ignore them when finding the zeros. So we are left with , i.e. the only critical point is . The second derivatives of are Hence , so is a saddle point.      Find the maximum and minimum values of the function on the domain .     Critical points in the interior:  so is the only critical point, with .   The boundary: on the circle we have with , so and giving , i.e. , with At the endpoints (where ), and .  Comparing all the values, the maximum value of is , attained at and , and the minimum value is , attained at . See .   The disk , the interior minimum at , and the boundary maxima at .     circ(t) = (11*cos(t), 11*sin(t))         (1,0),\\ f=-7    \\left(-2,\\sqrt{117}\\right),\\ f=362    \\left(-2,-\\sqrt{117}\\right),\\ f=362                    The business manager for Acme Corporation plots a grid on a map of the region Acme serves and determines that the company's three most important customers are located at points , , and , where units are in miles. At what point should a warehouse be located in order to minimize the sum of the squares of the distances (NOT the square of the sum) from to , , and ?    The sum of the squares of the distances is Setting the partial derivatives equal to zero, so is the only critical point. The second derivatives are , , , so . Since and , the point is a local minimum.  Also, if we complete the squares we can see that this point is where the absolute minimum happens: where the first two terms are non-negative and vanish exactly at . See .   The three customers , , , and the warehouse location that minimizes the sum of the squares of the distances.               A(1,5)    B(0,0)    C(8,0)    W\\!\\left(3,\\frac53\\right)                    Find all local maxima, minima and saddle points for .    The first partials are Setting forces or .   If : gives , so the critical points are and .    If : gives , so the critical points are and .     The second partials are , , and , so the discriminant is Applying the second derivative test:    : , so both are saddle points .     : and , so this is a local minimum .     : and , so this is a local maximum .        Tangent Planes Parallel to a Given Plane   Find the points on the surface at which the tangent plane is parallel to the plane .    Multiplying by , the given plane is , with normal vector . The tangent plane to the ellipsoid is parallel to this plane exactly at the points of the ellipsoid that are closest to and farthest from it, so we minimize and maximize the distance to the plane subject to the constraint of lying on the ellipsoid.   A schematic cross-section. The tangent plane to the ellipsoid is parallel to the given plane exactly at the closest point and the farthest point , where is parallel to the plane's normal .     S1 = (sqrt(2), sqrt(2)\/2)  S2 = (-sqrt(2), -sqrt(2)\/2)  P = (2.5, 1)      g(x,y,z)=0       x+5y+2z=3         \\nabla g    S_1        \\nabla g    S_2           \\mathbf{n}=\\langle 1,5,2\\rangle    P(3,0,0)                     Choose a point on the plane, say . For a point on the ellipsoid, the distance from to the plane is Since is constant, it suffices to optimize the numerator subject to the constraint   The Lagrange condition gives so   Substituting into the constraint , so that   Therefore and the two points are The positive signs give , the point closest to the plane, and the negative signs give , the farthest. At both points the tangent plane is parallel to the plane .     Maximizing a Cobb-Douglas utility   A consumer has $600 to spend on two commodities, the first of which costs $20 per unit and the second $30 per unit. Suppose that the utility derived by the consumer from units of the first commodity and units of the second commodity is given by the Cobb-Douglas utility function How many units of each commodity should the consumer buy to maximize utility?    The budget constraint is , so we take with and , and maximize , whose partial derivatives are   The Lagrange condition gives the system Dividing the first equation by the second eliminates :   Substituting into the budget constraint, so and . The consumer should buy units of the first commodity and units of the second.      You have 24 square inches of cardboard and want to build a box in the shape of a rectangular prism. Find the dimensions of the box, if you would like it to have the largest possible volume. See .   A rectangular prism with dimensions , , and .    A rectangular box drawn in perspective, with the width labelled x on the front left edge, the depth labelled y along the top front edge, and the height labelled z on the left face.        The surface area of the box is so the constraint is , and the function to be maximized is . We compute The Lagrange system is Multiplying the equations by , , and respectively gives Equating the first two, , which simplifies to , i.e. . Equating the last two, , which simplifies to , i.e. .  So , and substituting into the constraint gives , or . Hence and these dimensions (a cube) will maximize the volume.      Use the method of Lagrange Multipliers to find the maximum and minimum values of subject to the constraint .    With , we have The system is Substituting into the constraint, For : , . For : , . Evaluating , See .   The constraint circle and the level lines of , which are tangent to the circle at the extrema and .     circ(t) = (2*cos(t), 2*sin(t))          \\left(\\sqrt2,-\\sqrt2\\right)    \\left(-\\sqrt2,\\sqrt2\\right)    f=4    f=-4                   Given .   Find the maximum and minimum values of on the circle , first using Lagrange multipliers, then again by parametrizing the circle.    Find the maximum and minimum values of over the disk .           Lagrange multipliers. With , the system reads Hence , and substituting into the constraint, , so and . Evaluating at these two points, and noting that on the circle, So the maximum on the circle is at and the minimum is at .   By parametrizing. On the circle, , , so Since ranges over , this ranges over , agreeing with the Lagrange computation.    Over the disk we must also check the interior. Setting gives the critical point , which does lie inside the disk since . There . (It is a local maximum: , , , so .)  Comparing with the boundary values from part A, the maximum over the disk is at , and the minimum is at . See .      The disk . The maximum of occurs at the interior critical point , and the minimum at the boundary point .     circ(t) = (3*cos(t), 3*sin(t))        (2,-2),\\ f=8    f=-9-\\frac{24}{\\sqrt2}                   You are in charge of erecting a radio telescope on a newly discovered planet. To minimize interference, you want to place it where the magnetic field of the planet is weakest. The planet is spherical, with a radius of 6 units. Based on a coordinate system whose origin is at the center of the planet, the strength of the magnetic field is given by Where should you locate the radio telescope?    We must minimize subject to the constraint that we stay on the surface of the planet, . The Lagrange system is The second equation factors as , so either or .   Case . The first and third equations become and . Substituting, , so and . The constraint then gives , i.e. . At these points    Case . From the third equation (with ; if then and the first equation gives , which is impossible). Substituting into the first, , i.e. . Combined with this gives so (giving , with ) or (giving , with or ).  Comparing all the candidate values , the magnetic field is weakest where . So the radio telescope should be located at     "
},
{
  "id": "ex-extrema-triangle",
  "level": "2",
  "url": "worksheet-assignment-10.html#ex-extrema-triangle",
  "type": "Worksheet Exercise",
  "number": "5.13.1",
  "title": "",
  "body": "  Find the absolute maximum and minimum values of on the region bounded by the - and -axes and the line .    The gradient is , which vanishes only at , a point in the interior of the region. There . Since this is the only critical point on all of and it is a minimum (by the second derivative test), it is a global minimum. We now examine the three boundary segments to look for possible maxima.  On the -axis with , we have , which is maximized at .  On the -axis with , we have , which is maximized at .  Finally, on the line with , we have , which is maximized at .  Altogether, there is an absolute minimum and an absolute maximum .   "
},
{
  "id": "rm2-ex-2",
  "level": "2",
  "url": "worksheet-assignment-10.html#rm2-ex-2",
  "type": "Worksheet Exercise",
  "number": "5.13.2",
  "title": "",
  "body": "  Find and classify all the critical points of .    The gradient is Since the exponential factors, as well as and , are always positive, we might as well ignore them when finding the zeros. So we are left with , i.e. the only critical point is . The second derivatives of are Hence , so is a saddle point.   "
},
{
  "id": "rw21-7",
  "level": "2",
  "url": "worksheet-assignment-10.html#rw21-7",
  "type": "Worksheet Exercise",
  "number": "5.13.3",
  "title": "",
  "body": "  Find the maximum and minimum values of the function on the domain .     Critical points in the interior:  so is the only critical point, with .   The boundary: on the circle we have with , so and giving , i.e. , with At the endpoints (where ), and .  Comparing all the values, the maximum value of is , attained at and , and the minimum value is , attained at . See .   The disk , the interior minimum at , and the boundary maxima at .     circ(t) = (11*cos(t), 11*sin(t))         (1,0),\\ f=-7    \\left(-2,\\sqrt{117}\\right),\\ f=362    \\left(-2,-\\sqrt{117}\\right),\\ f=362                 "
},
{
  "id": "rw23-4",
  "level": "2",
  "url": "worksheet-assignment-10.html#rw23-4",
  "type": "Worksheet Exercise",
  "number": "5.13.4",
  "title": "",
  "body": "  The business manager for Acme Corporation plots a grid on a map of the region Acme serves and determines that the company's three most important customers are located at points , , and , where units are in miles. At what point should a warehouse be located in order to minimize the sum of the squares of the distances (NOT the square of the sum) from to , , and ?    The sum of the squares of the distances is Setting the partial derivatives equal to zero, so is the only critical point. The second derivatives are , , , so . Since and , the point is a local minimum.  Also, if we complete the squares we can see that this point is where the absolute minimum happens: where the first two terms are non-negative and vanish exactly at . See .   The three customers , , , and the warehouse location that minimizes the sum of the squares of the distances.               A(1,5)    B(0,0)    C(8,0)    W\\!\\left(3,\\frac53\\right)                 "
},
{
  "id": "pp-35",
  "level": "2",
  "url": "worksheet-assignment-10.html#pp-35",
  "type": "Worksheet Exercise",
  "number": "5.13.5",
  "title": "",
  "body": "  Find all local maxima, minima and saddle points for .    The first partials are Setting forces or .   If : gives , so the critical points are and .    If : gives , so the critical points are and .     The second partials are , , and , so the discriminant is Applying the second derivative test:    : , so both are saddle points .     : and , so this is a local minimum .     : and , so this is a local maximum .      "
},
{
  "id": "exer-parallel-tangent-plane",
  "level": "2",
  "url": "worksheet-assignment-10.html#exer-parallel-tangent-plane",
  "type": "Worksheet Exercise",
  "number": "5.13.6",
  "title": "Tangent Planes Parallel to a Given Plane.",
  "body": " Tangent Planes Parallel to a Given Plane   Find the points on the surface at which the tangent plane is parallel to the plane .    Multiplying by , the given plane is , with normal vector . The tangent plane to the ellipsoid is parallel to this plane exactly at the points of the ellipsoid that are closest to and farthest from it, so we minimize and maximize the distance to the plane subject to the constraint of lying on the ellipsoid.   A schematic cross-section. The tangent plane to the ellipsoid is parallel to the given plane exactly at the closest point and the farthest point , where is parallel to the plane's normal .     S1 = (sqrt(2), sqrt(2)\/2)  S2 = (-sqrt(2), -sqrt(2)\/2)  P = (2.5, 1)      g(x,y,z)=0       x+5y+2z=3         \\nabla g    S_1        \\nabla g    S_2           \\mathbf{n}=\\langle 1,5,2\\rangle    P(3,0,0)                     Choose a point on the plane, say . For a point on the ellipsoid, the distance from to the plane is Since is constant, it suffices to optimize the numerator subject to the constraint   The Lagrange condition gives so   Substituting into the constraint , so that   Therefore and the two points are The positive signs give , the point closest to the plane, and the negative signs give , the farthest. At both points the tangent plane is parallel to the plane .   "
},
{
  "id": "exer-cobb-douglas",
  "level": "2",
  "url": "worksheet-assignment-10.html#exer-cobb-douglas",
  "type": "Worksheet Exercise",
  "number": "5.13.7",
  "title": "Maximizing a Cobb-Douglas utility.",
  "body": " Maximizing a Cobb-Douglas utility   A consumer has $600 to spend on two commodities, the first of which costs $20 per unit and the second $30 per unit. Suppose that the utility derived by the consumer from units of the first commodity and units of the second commodity is given by the Cobb-Douglas utility function How many units of each commodity should the consumer buy to maximize utility?    The budget constraint is , so we take with and , and maximize , whose partial derivatives are   The Lagrange condition gives the system Dividing the first equation by the second eliminates :   Substituting into the budget constraint, so and . The consumer should buy units of the first commodity and units of the second.   "
},
{
  "id": "rf-7",
  "level": "2",
  "url": "worksheet-assignment-10.html#rf-7",
  "type": "Worksheet Exercise",
  "number": "5.13.8",
  "title": "",
  "body": "  You have 24 square inches of cardboard and want to build a box in the shape of a rectangular prism. Find the dimensions of the box, if you would like it to have the largest possible volume. See .   A rectangular prism with dimensions , , and .    A rectangular box drawn in perspective, with the width labelled x on the front left edge, the depth labelled y along the top front edge, and the height labelled z on the left face.        The surface area of the box is so the constraint is , and the function to be maximized is . We compute The Lagrange system is Multiplying the equations by , , and respectively gives Equating the first two, , which simplifies to , i.e. . Equating the last two, , which simplifies to , i.e. .  So , and substituting into the constraint gives , or . Hence and these dimensions (a cube) will maximize the volume.   "
},
{
  "id": "rs19-10",
  "level": "2",
  "url": "worksheet-assignment-10.html#rs19-10",
  "type": "Worksheet Exercise",
  "number": "5.13.9",
  "title": "",
  "body": "  Use the method of Lagrange Multipliers to find the maximum and minimum values of subject to the constraint .    With , we have The system is Substituting into the constraint, For : , . For : , . Evaluating , See .   The constraint circle and the level lines of , which are tangent to the circle at the extrema and .     circ(t) = (2*cos(t), 2*sin(t))          \\left(\\sqrt2,-\\sqrt2\\right)    \\left(-\\sqrt2,\\sqrt2\\right)    f=4    f=-4                "
},
{
  "id": "pp-37",
  "level": "2",
  "url": "worksheet-assignment-10.html#pp-37",
  "type": "Worksheet Exercise",
  "number": "5.13.10",
  "title": "",
  "body": "  Given .   Find the maximum and minimum values of on the circle , first using Lagrange multipliers, then again by parametrizing the circle.    Find the maximum and minimum values of over the disk .           Lagrange multipliers. With , the system reads Hence , and substituting into the constraint, , so and . Evaluating at these two points, and noting that on the circle, So the maximum on the circle is at and the minimum is at .   By parametrizing. On the circle, , , so Since ranges over , this ranges over , agreeing with the Lagrange computation.    Over the disk we must also check the interior. Setting gives the critical point , which does lie inside the disk since . There . (It is a local maximum: , , , so .)  Comparing with the boundary values from part A, the maximum over the disk is at , and the minimum is at . See .      The disk . The maximum of occurs at the interior critical point , and the minimum at the boundary point .     circ(t) = (3*cos(t), 3*sin(t))        (2,-2),\\ f=8    f=-9-\\frac{24}{\\sqrt2}                "
},
{
  "id": "pp-39",
  "level": "2",
  "url": "worksheet-assignment-10.html#pp-39",
  "type": "Worksheet Exercise",
  "number": "5.13.11",
  "title": "",
  "body": "  You are in charge of erecting a radio telescope on a newly discovered planet. To minimize interference, you want to place it where the magnetic field of the planet is weakest. The planet is spherical, with a radius of 6 units. Based on a coordinate system whose origin is at the center of the planet, the strength of the magnetic field is given by Where should you locate the radio telescope?    We must minimize subject to the constraint that we stay on the surface of the planet, . The Lagrange system is The second equation factors as , so either or .   Case . The first and third equations become and . Substituting, , so and . The constraint then gives , i.e. . At these points    Case . From the third equation (with ; if then and the first equation gives , which is impossible). Substituting into the first, , i.e. . Combined with this gives so (giving , with ) or (giving , with or ).  Comparing all the candidate values , the magnetic field is weakest where . So the radio telescope should be located at    "
},
{
  "id": "worksheet-review-problems-4",
  "level": "1",
  "url": "worksheet-review-problems-4.html",
  "type": "Worksheet",
  "number": "5.14",
  "title": "Review Problems #4",
  "body": " Review Problems #4   These are the problems on extreme values and Lagrange multipliers that were not assigned in Assignment 10, collected here for review. They are not assigned, but they are fair game on an exam. If you would like to review the material first, see and .    True or False   If has two local maxima, then it must have a local minimum too.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    This is true for single-variable functions but no longer holds in two dimensions. For example, the function , shown in , has two local maxima at with a saddle point at the origin lying between them, and no local minimum.   The graph of : two local maxima with a saddle point between them, and no local minimum.    A three dimensional surface with two rounded peaks of equal height, one on the left and one on the right, separated by a saddle shaped dip in the middle. Away from the peaks the surface falls off in every direction, so there is no lowest point.          Let . Find all the critical points and classify them as local maxima, local minima, and saddle points.    The first and second partial derivatives are Setting gives and gives , so the only critical point is . The Hessian is so is a saddle point since the Hessian is negative.      Find the absolute maximum and absolute minimum of in the closed triangular region with vertices given by , , and .     Critical points:  so the only critical point is . Note that this point is NOT in the closed region , so we only need to check the boundary.   The boundary: we check the three sides of the triangle.    : , . Here , with maximum at and minimum at .     : , . Here , with maximum at and minimum at .     : , . Here and gives , , with . The endpoints of give the previously found values and .     Comparing all the values, the absolute maximum of is , attained at , and the absolute minimum is , attained at . See .   The triangular region with vertices , , and . The critical point lies outside ; the absolute maximum occurs at and the absolute minimum at .            (0,0),\\ f=2    (1,0),\\ f=0    (1,2)\\notin R    R                    The porosity of the soil beneath an elliptical section of a field, , is given by Find the location(s) in this section of the field where water will drain the fastest and slowest, i.e. the locations where porosity is an absolute maximum or absolute minimum.    The region is closed and bounded and is a polynomial, hence continuous, so by the Extreme Value Theorem absolute extrema exist. We check the interior and the boundary.   Interior critical points:  The point satisfies , so it lies inside the region, and    The boundary: on we have with , so a function of the single variable . Setting its derivative to zero, with . At the endpoints of the interval,   Comparing all the values , the porosity is an absolute maximum of at — where water drains the fastest — and an absolute minimum of at — where water drains the slowest. See .   The elliptical section . The porosity is largest at the boundary point and smallest at the interior critical point .     ell(t) = (5*cos(t), 2.5*sin(t))          (-5,0),\\ f=115    \\left(\\frac94,0\\right),\\ f=\\frac{79}{8}    f=19                  A product on a circle   Find the maximum and minimum values of the function subject to the constraint .    Write the constraint as so that and , while and . The Lagrange condition gives   Solving each equation for , Substituting into the constraint gives , so Hence there are four extrema: , , , .  Evaluating at the four candidates:                          The maximum value is , attained at and ; the minimum value is , attained at and .   Geometric interpretation. A rectangle with corners inscribed in the circle has area exactly . As the corner moves along the circle, we obtain rectangles of different areas.   Some of the possible rectangles inscribed in the circle . Each has corners for a point on the circle, and therefore area .     r = sqrt(8)  A = (r*cos(pi\/9), r*sin(pi\/9))  B = (r*cos(11*pi\/36), r*sin(11*pi\/36))  C = (r*cos(7*pi\/18), r*sin(7*pi\/18))       x^2+y^2=8         (x,y)                   The values of that maximize are exactly the values that maximize the area of the inscribed rectangle.   The optimal solution: the inscribed rectangle with corners , whose area is the largest possible.          x^2+y^2=8       \\text{Area} = 4xy      (2,2)    (-2,2)    (-2,-2)    (2,-2)                         Consider and . We assume .   Why do we need here?    Find the extreme values of subject to the above constraints.          Else a minimum and maximum would not exist, since we could just pick very large and would also have a very large magnitude, resulting in a very large or very negative value of .    The constraint describes the portion of the parabola in the third and fourth quadrant. This shape is closed and bounded so we are guaranteed the existence of global maxima and minima. The two boundary points, which occur at , need to be handled separately; this part is not very hard, since we immediately see that has value on them.  Now we proceed to find the critical points of on the parabola . The system of equations we need to solve is obtained from and . It is Combining the first two equations we see that , and using the third, , so and . Computing the value of at these points, we see that the global maximum of is at with a value of , while the global minimum with value is at . See .      The constraint curve with , and the level curves and of . The extrema occur at and , where the level curves are tangent to the parabola.     par(t) = (t, t^2 - 12)  hypp(t) = (t, 16\/t)  hypm(t) = (t, -16\/t)          y=x^2-12    (-2,-8)    (2,-8)    xy=16    xy=-16                   Find the point(s) on the surface closest to the origin.    The distance of a point from the origin is , so it suffices to minimize with the constraint . The Lagrange system is Multiplying the first equation by and using , and similarly and , hence .  Substituting into the constraint, Since , we know that , , and are either all positive or two are negative and the third one is positive. Hence, the closest points are       Find the point closest to the origin on the plane .    The distance from the origin is , so it suffices to minimize the function subject to the constraint . We compute   The Lagrange system is Substituting into the equation of the plane, Hence the closest point is   (Only one critical point arises, and the distance certainly has a minimum on the plane but no maximum, so this point must be the minimizer.)      Find the minimum value of along the part of the plane in the first octant ( ). The solution found by Lagrange multipliers gives the minimum. Use common sense for the maximum value.    Let and . Then and gives Hence , , and (taking the positive root, since ). From the constraint, , which is positive, so the point is in the first octant.  The minimum value is therefore   For the maximum, note that the region is a triangle with vertices , , and . Since the largest power dominates, the largest value should occur at the vertex where all the weight is on . Checking the three vertices, so the maximum value is , attained at .      Classify the Critical Points   The function has four critical points. Drag each one into the correct category.      Local minimum     Local maximum      Saddle point     From and we get and , giving four critical points. Since , and , So at and , while at and — both saddles. Among the two with , the sign of decides: gives a local minimum, and gives a local maximum.    "
},
{
  "id": "rm2-ex-1",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rm2-ex-1",
  "type": "Worksheet Exercise",
  "number": "5.14.1",
  "title": "True or False.",
  "body": " True or False   If has two local maxima, then it must have a local minimum too.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    This is true for single-variable functions but no longer holds in two dimensions. For example, the function , shown in , has two local maxima at with a saddle point at the origin lying between them, and no local minimum.   The graph of : two local maxima with a saddle point between them, and no local minimum.    A three dimensional surface with two rounded peaks of equal height, one on the left and one on the right, separated by a saddle shaped dip in the middle. Away from the peaks the surface falls off in every direction, so there is no lowest point.       "
},
{
  "id": "rs19-8",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rs19-8",
  "type": "Worksheet Exercise",
  "number": "5.14.2",
  "title": "",
  "body": "  Let . Find all the critical points and classify them as local maxima, local minima, and saddle points.    The first and second partial derivatives are Setting gives and gives , so the only critical point is . The Hessian is so is a saddle point since the Hessian is negative.   "
},
{
  "id": "rw21-9",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rw21-9",
  "type": "Worksheet Exercise",
  "number": "5.14.3",
  "title": "",
  "body": "  Find the absolute maximum and absolute minimum of in the closed triangular region with vertices given by , , and .     Critical points:  so the only critical point is . Note that this point is NOT in the closed region , so we only need to check the boundary.   The boundary: we check the three sides of the triangle.    : , . Here , with maximum at and minimum at .     : , . Here , with maximum at and minimum at .     : , . Here and gives , , with . The endpoints of give the previously found values and .     Comparing all the values, the absolute maximum of is , attained at , and the absolute minimum is , attained at . See .   The triangular region with vertices , , and . The critical point lies outside ; the absolute maximum occurs at and the absolute minimum at .            (0,0),\\ f=2    (1,0),\\ f=0    (1,2)\\notin R    R                 "
},
{
  "id": "rw17-7",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rw17-7",
  "type": "Worksheet Exercise",
  "number": "5.14.4",
  "title": "",
  "body": "  The porosity of the soil beneath an elliptical section of a field, , is given by Find the location(s) in this section of the field where water will drain the fastest and slowest, i.e. the locations where porosity is an absolute maximum or absolute minimum.    The region is closed and bounded and is a polynomial, hence continuous, so by the Extreme Value Theorem absolute extrema exist. We check the interior and the boundary.   Interior critical points:  The point satisfies , so it lies inside the region, and    The boundary: on we have with , so a function of the single variable . Setting its derivative to zero, with . At the endpoints of the interval,   Comparing all the values , the porosity is an absolute maximum of at — where water drains the fastest — and an absolute minimum of at — where water drains the slowest. See .   The elliptical section . The porosity is largest at the boundary point and smallest at the interior critical point .     ell(t) = (5*cos(t), 2.5*sin(t))          (-5,0),\\ f=115    \\left(\\frac94,0\\right),\\ f=\\frac{79}{8}    f=19                "
},
{
  "id": "exer-xy-on-circle",
  "level": "2",
  "url": "worksheet-review-problems-4.html#exer-xy-on-circle",
  "type": "Worksheet Exercise",
  "number": "5.14.5",
  "title": "A product on a circle.",
  "body": " A product on a circle   Find the maximum and minimum values of the function subject to the constraint .    Write the constraint as so that and , while and . The Lagrange condition gives   Solving each equation for , Substituting into the constraint gives , so Hence there are four extrema: , , , .  Evaluating at the four candidates:                          The maximum value is , attained at and ; the minimum value is , attained at and .   Geometric interpretation. A rectangle with corners inscribed in the circle has area exactly . As the corner moves along the circle, we obtain rectangles of different areas.   Some of the possible rectangles inscribed in the circle . Each has corners for a point on the circle, and therefore area .     r = sqrt(8)  A = (r*cos(pi\/9), r*sin(pi\/9))  B = (r*cos(11*pi\/36), r*sin(11*pi\/36))  C = (r*cos(7*pi\/18), r*sin(7*pi\/18))       x^2+y^2=8         (x,y)                   The values of that maximize are exactly the values that maximize the area of the inscribed rectangle.   The optimal solution: the inscribed rectangle with corners , whose area is the largest possible.          x^2+y^2=8       \\text{Area} = 4xy      (2,2)    (-2,2)    (-2,-2)    (2,-2)                      "
},
{
  "id": "rm2-lm-1",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rm2-lm-1",
  "type": "Worksheet Exercise",
  "number": "5.14.6",
  "title": "",
  "body": "  Consider and . We assume .   Why do we need here?    Find the extreme values of subject to the above constraints.          Else a minimum and maximum would not exist, since we could just pick very large and would also have a very large magnitude, resulting in a very large or very negative value of .    The constraint describes the portion of the parabola in the third and fourth quadrant. This shape is closed and bounded so we are guaranteed the existence of global maxima and minima. The two boundary points, which occur at , need to be handled separately; this part is not very hard, since we immediately see that has value on them.  Now we proceed to find the critical points of on the parabola . The system of equations we need to solve is obtained from and . It is Combining the first two equations we see that , and using the third, , so and . Computing the value of at these points, we see that the global maximum of is at with a value of , while the global minimum with value is at . See .      The constraint curve with , and the level curves and of . The extrema occur at and , where the level curves are tangent to the parabola.     par(t) = (t, t^2 - 12)  hypp(t) = (t, 16\/t)  hypm(t) = (t, -16\/t)          y=x^2-12    (-2,-8)    (2,-8)    xy=16    xy=-16                "
},
{
  "id": "rw23-5",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rw23-5",
  "type": "Worksheet Exercise",
  "number": "5.14.7",
  "title": "",
  "body": "  Find the point(s) on the surface closest to the origin.    The distance of a point from the origin is , so it suffices to minimize with the constraint . The Lagrange system is Multiplying the first equation by and using , and similarly and , hence .  Substituting into the constraint, Since , we know that , , and are either all positive or two are negative and the third one is positive. Hence, the closest points are    "
},
{
  "id": "rw22-5",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rw22-5",
  "type": "Worksheet Exercise",
  "number": "5.14.8",
  "title": "",
  "body": "  Find the point closest to the origin on the plane .    The distance from the origin is , so it suffices to minimize the function subject to the constraint . We compute   The Lagrange system is Substituting into the equation of the plane, Hence the closest point is   (Only one critical point arises, and the distance certainly has a minimum on the plane but no maximum, so this point must be the minimizer.)   "
},
{
  "id": "pp-38",
  "level": "2",
  "url": "worksheet-review-problems-4.html#pp-38",
  "type": "Worksheet Exercise",
  "number": "5.14.9",
  "title": "",
  "body": "  Find the minimum value of along the part of the plane in the first octant ( ). The solution found by Lagrange multipliers gives the minimum. Use common sense for the maximum value.    Let and . Then and gives Hence , , and (taking the positive root, since ). From the constraint, , which is positive, so the point is in the first octant.  The minimum value is therefore   For the maximum, note that the region is a triangle with vertices , , and . Since the largest power dominates, the largest value should occur at the vertex where all the weight is on . Checking the three vertices, so the maximum value is , attained at .   "
},
{
  "id": "rs-cardsort-critical",
  "level": "2",
  "url": "worksheet-review-problems-4.html#rs-cardsort-critical",
  "type": "Worksheet Exercise",
  "number": "5.14.10",
  "title": "Classify the Critical Points.",
  "body": " Classify the Critical Points   The function has four critical points. Drag each one into the correct category.      Local minimum     Local maximum      Saddle point     From and we get and , giving four critical points. Since , and , So at and , while at and — both saddles. Among the two with , the sign of decides: gives a local minimum, and gives a local maximum.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
