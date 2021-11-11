$(document).ready(function () {
    // Toggle Blue Click Handler
    // User click the school div to turn the circle into blue
    $('.school').click(function () {
        $(this).find('.school-btn-real').toggleClass('blue');
    });

    // Prevent the circle button to have the toggle Blue Click Handler
    // This allows us to manipulate the Red Click Handler
    $('.school-btn').on('click', function(e) {
        e.stopPropagation();
     });

    // Red Click Handler
    // The logic begins with the click of the school button
     $('.school-btn-real').on('click', function(e) {
        // Display the two new buttons by giving a class active 
        $('.new-buttons').addClass('active');

        // Hide the current container
        $('.container').hide();

        // Apply red color to the circle if red button is clicked
        $('.button-red').on('click', function() {
            // Retreive the circle object and save it in a variable
            let currentElement = e.currentTarget;
            // Apply the red class to change into red
            $(currentElement).addClass('red');
        });

        // Return button to view the container
        $('.button-return').click(function () {
            // Display the container
            $('.container').show();
            // Hide the buttons by removing active class
            $('.new-buttons').removeClass('active');
        });
     });

});