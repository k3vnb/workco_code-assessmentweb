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
This has been an interesting project so far. I began by reviewing the structure of the app and gaining some insight into the flow of data, and looking at the component tree. I started applying styles to the products list, setting a layout structure with flexbox, based on the mockups provided in the Sketch file. 

I first implemented the design for the mobile view. While the mobile view worked, I quickly realized that I misplaced the images in the Product component - it needed to be in the ProductItem component so it could snap into place in relationship to the other elements when the view width was expanded. I refactored the code to bring the image into the ProductItem component.

After styling the cards, I created a Nav component, responsive but initially created as a stateless component. Instead of bringing in font-awesome I originally imported a shopping-cart icon as a static asset. This is because it looks like the only icon I'll need for this project.

I then moved on to styling the checkout cart. I re-used the shopping cart icon and gave it 50% opacity to match the greyed out look of the mock up. I first rendered the shopping cart when there are no items, and I did not extract the component into a modal pop up yet (as indicated by the mock up), to concentrate first on the general styling. 

After working on the Cart component, it became apparent that it shared the Product component for rendering the cart items. I opted to add a boolean propType to determine if the current view is from the Cart or from the general product page. I also set up conditional rendering inside of the Product component based on that boolean prop state.

I ultimately installed a collection of font-awesome libraries necessary to render a shopping cart icon in the Nav component. I realized the mock-up instructions wanted the icon to change colors to blue on hover, and an SVG based icon was necessary to make that happen accordingly. 

I also wanted to make the Nav component responsive to the state of the Cart. So I followed the model of wrapping it in a Container connected to the Redux store. I saw that the 'products' state was being passed in as an array, and so I wrote a forEach function to grab the quantity value from products and add them together. So each time you click 'Add to Cart' on the product page, it adds that item numerically to the cart count in the Nav section.

Finally, I added react-router-dom to change views from the Product Page to the Cart and back. This required a bit of refactoring and redoing some styles.  I utilized the HashRouter component from react-router-dom because it was best at maintaining state from one view to the next.

The home page is found at http://localhost:3000/#/ and the Cart page is at http://localhost:3000/#/cart. There is a link in the Nav to the Cart, and the 'X' will link back to the home page.

## Conclusion

This was a fun project, and I found it was challenging in a good way.  I did not implement new features into Redux, I kept my project largely one of styling components and using Redux functionality that already existed.  So, some of my buttons (ie, the increment/decrement buttons in the Cart view and the 'Remove' button) are not wired up.

If I were to refactor this project further, I would think about cleaning up some of my components, for example the Product component has become a bit bloated and could benefit from being broken down into more modular pieces. I would also try to implement more of a 'modal' look to the check out screen, as indicated in the mockup. 

One of the reasons I am applying for this internship is because I realize I have some strengths and some weaknesses regarding best practices for professional grade web development, and I could benefit from the opportunity to implement real world projects and receive professional feedback.

Thanks!