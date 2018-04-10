# etchasketch2.0
##Etch-a-sketch with javascript.

The project was to create a simple grid based etch-a-sketch that fulfilled the following requirements:

* Create a grid of squares in a div using only JavaScript.
* Change the colour of the squares on mouseover.
* Allow the user to clear the grid.
* Allow the user to change the size of the grid.
* Allow the user to change the colour used to colour grid squares.

The function I used to create the squares falls under the "Ugly but functual" method, using a forloop to create multiple rows of divs. This has the downside of only being able to set the number of rows instead of the amount of grid squares. It also runs into a problem rendering large amounts of squares as anything over 64x64 causes the browser to hang.

There is a small piece of math that I really don't like using:

```javascript
cell.style.width = (750 / gridSize - 2).toString() + 'px'
```

The purpose of this piece was to make sure that the cells stayed within their container without expanding it. I'm going to say something that will made a lot of devs nod knowingly but it must be said:

I'm sure I'll come back and fix that later.
