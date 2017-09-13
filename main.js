$(".tabs").click(e => {
  let target = $(e.target).attr("id");
  let targetId = target[target.length - 1]

  $(".content-container").addClass("hide");
  $(`.tab-container .${targetId}`).toggleClass("hide");

  $(".tabs").removeClass("show")
  $(e.target).addClass("show")
});

$(".menu").click(e => {
  $(".search-container").toggleClass("hide")
  $(".link-container").toggleClass("hide")
})

