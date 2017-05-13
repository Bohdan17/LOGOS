$("span").click(function(event){
    $(this).parent().fadeOut();
    event.stopPropagation();
});
$("input[type='submit']").click(function(event){
    var text = $("textarea").val();
   $("textarea").val("");
    $(".content").append("<p>" + text + "</p>");
    event.preventDefault();
});