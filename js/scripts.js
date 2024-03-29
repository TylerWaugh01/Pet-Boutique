$(function () {
    $(".carousel").carousel({ interval: 4000 });
    $("#carouselButton").on('click', function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    
    $('[data-toggle="popover"]').popover(); 

    $('#loginButton').on('click', function() {
        $('#loginModal').modal('show');
    });


$('.cardOneChange').hide();

$('#brandOneButton').on('click', function() {
    $('.cardOneStandard, .cardOneChange').toggle()
  }
);

$('.cardTwoChange').hide();

$('#brandTwoButton').on('click', function() {
    $('.cardTwoStandard, .cardTwoChange').toggle()
  }
);

$('.cardThreeChange').hide();

$('#brandThreeButton').on('click', function() {
    $('.cardThreeStandard, .cardThreeChange').toggle()
  }
);

});




