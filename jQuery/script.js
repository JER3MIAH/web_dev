//* manipulating css styles
$("h1").css("color", "red");

//* manipulating html
$("h1").html("<em>yooo</em>");

//* adding classes
$("footer").addClass("footer bold");

//* manipulating text
$("button").text("Tap me");

//* manipulating attributes
$("a").attr("href", "https://www.yahoo.com");

//* Adding event listeners
$("button").click(function () {
    $("h1").css("color", "yellow");
});

$(document).keydown(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "black");
});

//* Adding new elements
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

//* removing elements
$("button").remove();