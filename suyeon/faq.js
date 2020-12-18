$(".cards li").click(function () {
  var i = $(this).index()
  $(".faq_g").hide()
  $(".faq_g").eq(i).show()
})
$(".cards li a").click(function (e) {
  e.preventDefault()
  $(".cards li a").removeClass("on")
  $(this).addClass("on")
})

$(".btn").click(function () {
  $(".lv2").slideUp()
  $(this).parent().next().slideToggle()
})

$(".vol_info li").mouseenter(function () {
  var i = $(this).index()
  $(".vol_info li").eq(i).animate({ "margin-top": "-10px" })
})
$(".vol_info  li").mouseleave(function () {
  var i = $(this).index()
  $(".vol_info li").eq(i).animate({ "margin-top": "0px" })
})
