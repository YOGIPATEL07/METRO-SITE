$(document).ready(function(){
  //calling the html
    $(function(){ 
        $("#head1").load("meta.html");
        $("#header").load("header.html");  
        $(".footer").load("footer.html");  
      }); 
       
      $('#dropdown1, #dropdown2, #dropdown3, #dropdown4').hide();

      // show/hide dropdowns when labels are clicked
      $('label[for="dropdown1"]').click(function() {
        $('#dropdown1').toggle();
      });
      $('label[for="dropdown2"]').click(function() {
        $('#dropdown2').toggle();
      });
      $('label[for="dropdown3"]').click(function() {
        $('#dropdown3').toggle();
      });
      $('label[for="dropdown4"]').click(function() {
        $('#dropdown4').toggle();
      });

      
      $(".work-text").hide(); // Hide all work-text initially
    
    $(".image1").hover(function() { // When image1 is hovered over
        $(".work-text").hide(); // Hide all work-text
        $(".work-text:eq(0)").show(); // Show the work-text corresponding to image1
    });
    
    $(".image2").hover(function() { // When image2 is hovered over
        $(".work-text").hide(); // Hide all work-text
        $(".work-text:eq(1)").show(); // Show the work-text corresponding to image2
    });
    
    $(".image3").hover(function() { // When image3 is hovered over
        $(".work-text").hide(); // Hide all work-text
        $(".work-text:eq(2)").show(); // Show the work-text corresponding to image3
    });

    $('.details').hide();

    // toggle display of details when an image is clicked
    $('.products img').click(function() {
      $(this).siblings('.details').toggle();
    });

 // Select all elements with the class "inputField"
inputFields = $('.inputField');

// Select the element with the ID "alertBox"
box = $('#alertBox');

// Select the element with the ID "form"
formSend = $('#form');

// Select the element with the ID "close"
closeBtn = $('#close');

// Select the element with the ID "confirm"
confirmBtn = $('#confirm');

// Add a submit event listener to the form element
formSend.on('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    box.css('display', 'block'); // Display the alert box
});

// Add a click event listener to the close button element
closeBtn.on('click', function() {
    box.css('display', 'none'); // Hide the alert box
});

// Add a click event listener to the confirm button element
confirmBtn.on('click', function() {
    box.css('display', 'none'); // Hide the alert box
    inputFields.addClass('disabled'); // Add the "disabled" class to all inputFields elements
});

 Btn = $('.btn1');
 closeBtn = $('#close');
 popup = $('.popupContainer');

Btn.on('click', function() {
  popup.addClass('popupActive');
});

closeBtn.on('click', function() {
  popup.removeClass('popupActive');
});
 

});