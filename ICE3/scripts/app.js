console.log('animations.js loaded successfully')

// TODO: function fadeInOutTo()
// add following fade in out to the appropriate boxes
// fade out - display none 3000 ms (red-box)
// fade in- display to 1500 ms (red-box)
// fade to 2000 ms with 30% opacity (green-box)
// fade to 1000 ms with 50% opacity (blue-box)
// toggle the display (blue-box)


// TODO: function hideElement()
// for the green box, toggle the display with hide, 1000 ms timeout
// for the green box, toggle the display with show, 1000 ms timeout
// for the green box, slide up 1000 ms timeout
// for the green box, slide down 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout
// for the green box, toggle slide state 1000 ms timeout

// TODO: function chainAnimations()
// for the blue box, fade to 50% opacity with 1000 ms timeout
// for the green box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout (use chaining)
// for the red box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout, delay by 1000ms, fade to 100% opacity with 1000ms timeout, delay  1000ms, then fade out (use chaining)

// testing functions
// fadeInOutTo()
// hideElement() 
// chainAnimations() 
// animations.js
// Log a message indicating successful loading of the animations.js file

console.log('app.js loaded successfully');

// TODO: Define a function named fadeInOutTo()
function fadeInOutTo() {
    // Fade out the elements with the class 'red-box' over a duration of 3000 milliseconds
    $('.red-box').fadeOut(3000, function() {
        // Set the display property to 'none' when the fade-out animation is complete
        $(this).css('display', 'none');
    });

    // Delay for 3000 milliseconds and then fade in the elements with the class 'red-box' over a duration of 1500 milliseconds
    $('.red-box').delay(3000).fadeIn(1500);

    // Fade the elements with the class 'green-box' to 0.3 opacity over a duration of 2000 milliseconds
    $('.green-box').fadeTo(2000, 0.3);

    // Fade the elements with the class 'blue-box' to 0.5 opacity over 1000 milliseconds, delay for 1000 milliseconds, then fade back to 1 opacity over 1000 milliseconds
    $('.blue-box').fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1);
}

// Define a function named hideElement()
function hideElement() {
    // Hide the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').hide(1000);

    // Delay for 1000 milliseconds, then show the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').delay(1000).show(1000);

    // Delay for 2000 milliseconds, then slide up the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').delay(2000).slideUp(1000);

    // Delay for 3000 milliseconds, then slide down the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').delay(3000).slideDown(1000);

    // Delay for 4000 milliseconds, then toggle the sliding state of the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').delay(4000).slideToggle(1000);

    // Delay for 5000 milliseconds, then toggle the sliding state of the elements with the class 'green-box' over a duration of 1000 milliseconds
    $('.green-box').delay(5000).slideToggle(1000);
}

// Define a function named chainAnimations()
function chainAnimations() {
    // Fade the elements with the class 'blue-box' to 0.5 opacity over a duration of 1000 milliseconds
    $('.blue-box').fadeTo(1000, 0.5);

    // Delay for 1000 milliseconds, then fade out, fade in, and fade to 0.5 opacity the elements with the class 'green-box' sequentially
    $('.green-box').delay(1000).fadeOut(1000).delay(1000).fadeIn(1000).fadeTo(1000, 0.5);

    // Delay for 2000 milliseconds, then fade to 0.5 opacity, delay for 1000 milliseconds, fade to 1 opacity, delay for 1000 milliseconds, and fade out the elements with the class 'red-box'
    $('.red-box').delay(2000).fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1).delay(1000).fadeOut(1000);
}
