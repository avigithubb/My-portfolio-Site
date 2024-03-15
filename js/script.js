$(window).scroll(function()
{
  $(".main-head").css("opacity", 1 - $(window).scrollTop() / 300);
});

$(window).scroll(function()
{
  $(".acc").css("opacity", 1 - $(window).scrollTop() / 300);
});