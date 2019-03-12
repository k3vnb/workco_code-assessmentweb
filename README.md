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

After styling the cards, I created a Nav component, responsive but initially created as a stateless component. Instead of bringing in font-awesome I imported a shopping-cart icon as a static asset. This is because it looks like the only icon I'll need for this project.

I then moved on to styling the checkout cart. I re-used the shopping cart icon and gave it 50% opacity to match the greyed out look of the mock up. I first rendered the shopping cart when there are no items, and I did not extract the component into a modal pop up yet (as indicated by the mock up), to concentrate first on the general styling. 

After working on the Cart component, it became apparent that it shared the Product component for rendering the cart items. I opted to add a boolean propType to determine if the current view is from the Cart or from the general product page. I also set up conditional rendering inside of the Product component based on that boolean prop.