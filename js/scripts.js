//-------------------------JQUERY--------------------------
$(document).ready(function () {

    var actualSlide = 0;
    var totalSlides = $("#carousel .content").length;
    var gap = 100 / totalSlides;
    var lastSlide = $("#carousel .content").length - 1;

    $("#carousel").css("width", (100 * totalSlides) + "%");
    $("#carouselController .button:eq(" + actualSlide + ")").addClass("active");

    var slide = function () {

        if (actualSlide >= totalSlides)
            actualSlide = 0;

        $("#carouselController .button").removeClass("active");
        $("#carouselController .button:eq(" + actualSlide + ")").addClass("active");

        for (var i = 0; i < totalSlides; i++) {

            if (actualSlide != totalSlides)
                $("#carousel .content:eq(" + i + ")").css(
                    "left", ((gap * actualSlide) * -1) + "%"
                );
            else
                $("#carousel .content:eq(" + i + ")").css(
                    "left", "0%"
                );
        }
    }

    $("#carouselController .button").on("click", function () {
        actualSlide = $(this).index();
        slide();
    });

    window.setInterval(function () {
        if (!$("#carouselContainer").is(':hover')) {
            actualSlide += 1;
            slide();
        }
    }, 5000); // override the default duration here

});

/*-----------------------------List------------------------------*/


function listInit() {
    var myList = "";
    var cards = 6;
    var textList = ["CSS card hover effect", "3D images slideshow", "CSS grid list", "Flexbox Froggy", "Responsive cards section", "CSS clip path marker"];

    for (i = 0; i < cards; i++) {
        myList += '<article class="card' + (i + 1) + '"><section class="upperImg"></section><section class="leftImg"></section><section class="rightImg"></section></article>';
    }

    document.getElementById("mainList").innerHTML = myList;
}

$(document).ready(function () {
    $(".card1").click(function () {
        window.open('https://www.youtube.com/results?search_query=css+card+hover+effects', '_blank');
    });
});
$(document).ready(function () {
    $(".card2").click(function () {
        window.open('https://www.youtube.com/results?search_query=3d+gallery+slideshow', '_blank');
    });
});
$(document).ready(function () {
    $(".card3").click(function () {
        window.open('https://www.youtube.com/results?search_query=css+grid+list', '_blank');
    });
});
$(document).ready(function () {
    $(".card4").click(function () {
        window.open('https://flexboxfroggy.com', '_blank');
    });
});
$(document).ready(function () {
    $(".card5").click(function () {
        window.open('https://www.youtube.com/results?search_query=responsive+cards+section', '_blank');
    });
});
$(document).ready(function () {
    $(".card6").click(function () {
        window.open('https://bennettfeely.com/clippy/', '_blank');
    });
});



/*-----------------------------End List--------------------------*/
$(document).ready(function () {
    $(".menu").click(function () {
        $(".sidebar").toggle();
    });
});
//-------------------------Form-------------------------------
$(document).ready(function () {
    $("#submit-button").click(function () {
        window.location.href = 'List.html';
    });
});
