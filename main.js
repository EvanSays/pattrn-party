$("ul.tabs li").click( (e) => {
  let className = $(e.target).attr("class")

  $("ul.tabs li").removeClass("show")
  $('.tab-content').removeClass("show")
  $(`.${className}`).toggleClass("show")
})

$("div.tabs").click( (e) => {
  let className = $(e.target).attr("id")
  let plusSign = $(e.target).next()[0]
  
  $(".tabs").removeClass("show")
  $('.tab-content').removeClass("show")

  $(e.target).toggleClass("show")
  $(`.tab-content.${className}`).toggleClass("show")

  $("#plus").text("+")
  $(plusSign).text("-")
 console.log(plusSign)
})
