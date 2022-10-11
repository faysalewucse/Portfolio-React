$(document).ready(function(){

    /* Mixitup |Portfolio Section| */
    var mixer = mixitup('.mycontainer');

    $(".btn-1").click(function(){
        $(".change").text("For the Project at first I mostly ask questions and talk with my clients about what and how they want to complete their project. I want to get a super clear ideae of what they want and need. Only then can I deliver a product that both parties are happy with.");
    });
    $(".btn-2").click(function(){
        $(".change").text("After I have a rough enough understanding of the client’s needs then I start designing the first part of the website.First I send a rough design to the clients when they are satisfied with the design then I visualize the Design with unique attractive features");
    });
    $(".btn-3").click(function(){
        $(".change").text("When the design is done and my client is happy with the final design I go on with installing WordPress and all the plugins that I need for the project.Then I will start creating the pages one by one and send my client preview links along the process.");
    });
    $(".btn-4").click(function(){
        $(".change").text("After all the pages are developed inside of WordPress I share a final preview link to my client. We will look at the result and edit any detail to make the website perfect. After a final check I will put the website live and give it the necessary optimisation for Google.");
    });
    $('.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
      });
    $(window).scroll(function(){
        $('.radial-progress').each(function( index, value ) { 
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
          if ( 
              $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
              $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
          ) {
              // Get percentage of progress
              percent = $(value).data('percentage');
              // Get radius of the svg's circle.complete
              radius = $(this).find($('circle.complete')).attr('r');
              // Get circumference (2πr)
              circumference = 2 * Math.PI * radius;
              // Get stroke-dashoffset value based on the percentage of the circumference
              strokeDashOffset = circumference - ((percent * circumference) / 100);
              // Transition progress for 1.25 seconds
              $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
          }
        });
      }).trigger('scroll');
      
      $("body").floatingSocialShare({
        buttons: [
          "facebook", "linkedin", "pinterest", "reddit", 
          "telegram", "tumblr", "twitter", "viber", "vk", "whatsapp"
        ],
        text: "share with: ",
        url: "https://github.com/ozdemirburak/jquery-floating-social-share"
      });

});