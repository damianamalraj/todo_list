//Cheks the li
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function () {
    $(this).parent().remove();
});

$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        var todo = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>");
    }
});