## Reflection

## Required

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

User Stories
🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.
Requirements
🎯 Implement the useState hook to manage gallery state (e.g. selected image).
🎯 Use useEffect for initial fetching of images from an external API.
🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
🎯 Use the .map() function to render an array of images dynamically
🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
🎯 Ensure all images have meaningful alt text.
🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

#### Difficulties

There were a couple of major blockages; it took a long time to figure out that I needed to return imageData as an object from my API fetch to properly destructure this in my thumbnail container. This is yet another struggle with data shapes(?).

Manny offered some guidance on getting my thumbnails to be focusable with tab, and with some troubleshooting, I managed to get it to work only on enter or space key presses. Originally I just replicated the onClick with onKeyDown, but this worked for any key press, so I fixed that.

I think the largest struggle was understanding how data is transformed across states and components. I can read my code and understand what is happening, but if I had to write this again, I'd still be googling much of this, and I'd put money on me getting stuck for 30 minutes on
`const { imageData } = useAPIFetch();`
as initially, I had written
`const imageData = useAPIFetch();`
and employed surprised Pikachu when my `{imageData.map}` didn't work. I fixed this with some console logging and saw that the returned imageData was giving me unnamed rows.

References:

###### onKeyDown

https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-javascript-part2/

There's a block of plain JS in here that cleared up how to get the key press to work; simply "event.key" tracks the name of the key pressed, and after using onClick as a prop, translating eventListener into React was much simpler.

https://www.w3schools.com/js/js_objects.asp

Hopefully this misunderstanding of objects is now cleared up. Should have been sorted a while ago, but better late than never.

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling
