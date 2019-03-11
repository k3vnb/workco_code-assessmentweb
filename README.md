# Work & Co Web Code Assessment - Kevin Boyle

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

```
yarn
```

To start a development server:

```
yarn start
```

## Notes
This has been an interesting project so far. I began by reviewing the structure of the app and gaining some insight into the flow of data, and looking at the component tree. I started applying styles to the products list, setting a layout structure will flexbox, based on the mockups provided in the Sketch file. 

I first implemented the design for the mobile view. While the mobile view worked, I quickly realized that I misplaced the images in the Product component - it needed to be in the ProductItem component so it snap into place in relationship to the other elements when the view width was expanded. I refactored the code to bring the image into the ProductItem component.