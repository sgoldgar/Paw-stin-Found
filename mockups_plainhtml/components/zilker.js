$(document).ready(function() {
  $(".speech-bubble").hide();
  $(".backpack-items").hide();


  $( ".close" ).click(function() {
    $("#initial-instructions").hide();
  });


  $(".ginny" ).click(function() {
    if($('.backpack-sheep').hasClass('highlighted-item')){
      $(".speech-bubble p").text('Thank you for finding my sheep!');
      $(".speech-bubble").show();
      $( ".backpack-sheep" ).animate({
        top: "250px",
        left: "-500px",
      }, 800, function() {
      });
      $(".backpack-sheep").hide();
    } else {
      $(".speech-bubble").show();
    }


  });

  $(".sheep-toy").click(function(){
    $( ".sheep-toy" ).animate({
      left: "150px",
      top: "150px",
      display: 'none'
    }, 800, function() {
    });
  })


  $(".backpack").click(function() {
    $(".backpack-items").toggle();
  });

  $(".backpack-sheep").click(function() {
    $(this).toggleClass('highlighted-item');
  });







//end doc.ready
});
