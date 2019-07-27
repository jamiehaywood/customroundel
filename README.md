# <p align="center"> Custom Roundel <img width=10% src="https://github.com/jamiehaywood/customroundel/raw/master/roundel.png?raw=true"> </p>

<p align="center"> This is a simple tool to create a Transport for London roundel with custom text in the middle, and a choice of colours. </p>

---

## Font Scaling
An interesting problem that presented itself when I was developing this was **`how to scale the custom SVG text`** because the text size did not scale linearly.

To solve this, I plotted the character to visual width ratio for a selection of roundel images and calculated a [polynomial trendline](https://en.wikipedia.org/wiki/Polynomial_regression) that fit the points. The more the characters input, the smaller the font would scale.

## Future Features
- [ ] Custom colour input
- [ ] Save SVG to file