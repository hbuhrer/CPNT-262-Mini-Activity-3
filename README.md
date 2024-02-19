# CPNT-262 Mini Activity 3

## Course and Assignment Information

Course: CPNT 262

Assignment: Control Flows and Error Handling

Author: Hendrich Buhrer
# 

I wanted to do a loading animation like the console screen from the matrix movies. The first Matrix movie is one of my favourite movies of all time, I thought this would make the project fun and in the beginning of my first semester in school it’s something I wanted to do. I didn’t have the skills for it yet, and I’m not sure I do right now, but with a little bit of guidance and online research I will be able to create this project. A loading screen with the matrix animation, I know it’s a bit of an extra step on top of it, but I think it still fits the “animate a loading message” category. 

First thing I did was try to write some pseudo code to what I think this code will look like:

1. **Pre-Start**: 
- Prepare a canvas or section in HTML, whatever is the most appropriate semantically for this animation. 
- Choose the Matrix characters to be used in animation.
- How fast should the letters fall?
- Make sure letters fall from top to bottom.
- Figure out how many columns of characters will fit on a screen.
- Figure out how to make columns resize with screen width.

2. **Start**:
- Start the Matrix rain effect:
- Keep track of where each raindrop is in each column.
- Resize with screen width dynamically
- Make sure “LOADING” message always in the middle and above animation.

3. **Drawing**: 
- Draw the Matrix rain effect:
- Fill the canvas with a slightly see-through black to make the characters fade.
- Pick a character and draw it at each raindrop's position in each column.
- If a raindrop hits the bottom, sometimes move it back to the top to keep things looking like the original matrix console.
- Move each raindrop down a bit for the next frame.

4. **Animation**:
   - Keep calling the draw function to make the rain fall at the chosen speed.

This is how I set up my code: 

**JavaScript:**

1. **Canvas Setup:** First, I set up a canvas element in the HTML file with an id of "matrix-rain" to draw on. Then, in the JS file, I grabbed the canvas element using `document.getElementById('matrix-rain')` and got its 2D drawing context with `getContext('2d')`. This context is what I used to actually draw things on the canvas.

2. **Alphabet and Font Size:** I created a string that includes all the characters I want to use in the rain effect. This includes Japanese katakana, Latin letters, and numbers. I also set a font size of 16 pixels, which determines the size of each character. In the movie they have actual special characters but I didn’t want to bother finding them so I thought the Japanese ones would be a fine replacement.

3. **Canvas Size:** I set the width and height of the canvas to match the size of the browser window using `window.innerWidth` and `window.innerHeight`. This makes sure the canvas fills the whole window.

4. **Columns and Raindrops:** I calculated the number of columns based on the canvas width and font size. Each column represents a vertical line where characters will fall. I also initialized an array called `raindrops` to keep track of the position of each character in each column.

5. **Drawing Function:** The `draw` function is where the everything really starts to happen, before this its all setting up. The function first fills the canvas with a slightly transparent black colour to create a fading effect. Then, it sets the colour to green (`#0F0`) and the font to a monospace font that is a close match to the movie one. It then loops through each column and randomly selects a character from the alphabet string to draw at the current position in the column. If a character reaches the bottom of the canvas, there's a small chance it will start again from the top to simulate the rain effect. (With the math.Random I added to the code)

6. **Resize Event:** To make sure the canvas and its contents resize when the window is resized, I added an event listener to the `window` object for the `resize` event. When the window is resized, it calls the `resizeCanvas` function, which updates the canvas size and recalculates the number of columns and initializes the `raindrops` array again. This was super hard and basically what I spent most of my time figuring out. Stack Overflow had a few people explaining how to add an lister event for window resizing. Basically, you can add an event listener for the resize event on the window object. This event will trigger whenever the window is resized.

7. **Drawing Loop:** Finally, I use `setInterval` to call the `draw` function every 30 milliseconds. This creates a continuous animation of characters falling down the canvas.

**CSS:**

I also used a bit of CSS to add the loading text to the screen and make sure it stays centred. 

1. **@import Font:** Import the VT323 font from Google Fonts, which has a retro, computer-like appearance.

2. **html Styles:** Sets the background colour of the HTML element to black (`hsl(0, 0%, 0%)`) and makes sure the HTML element takes up the full height of the viewport. It also sets the font family to "VT323”.

3. **body Styles:** Removes any default margins or padding from the body and ensures it also takes up the full height of the viewport.

4. **.loading-message Styles:** Style specifically for the loading message. It sets the colour to white (`hsl(0, 0%, 100%)`), positions the message in the centre of the screen using absolute positioning and a combination of `top: 50%`, `left: 50%`, and `transform: translate(-50%, -50%)`, sets the font size to 3em for a larger, more prominent display, and centres the text using `text-align: centre`.

Now for the first issue I had. I had been testing this without the type=module tag in my header. Just had the script in there with defer. I was going through the rest of the assignment to make sure I met all the requirements and noticed this module requirement. I added and immediately, my page would not work anymore. Did some googling and found this: 

[javascript - Access to Script at ' from origin 'null' has been blocked by CORS policy - Stack Overflow
](https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy)

So basically, ES6 modules are subject to same-origin policy. You need to run your script from a local server, opening the file directly with a browser will not work! So I ran it in my FileZilla server before uploading it to GitHub to make sure it would still work and, VOILA! It worked! 

Here is a link to my FileZilla server that I used to do troubleshooting for this issue: http://dev.saitnewmedia.ca/~hbuhrer/cpnt262/
