$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home__img path");
  var counterUp = $(".counter__btn--up");
  var counterDown = $(".counter__btn--down");

  //   Выбор этажа мышкой
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current__floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  //   Этаж вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current__floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
    }
  });

  //   Этаж вниз
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current__floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
    }
  });
});
