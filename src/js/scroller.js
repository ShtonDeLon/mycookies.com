document.querySelectorAll('.product-scroller').forEach(element => {
  force_scroll_sideways(element);
});

function force_scroll_sideways(element) {
  element.addEventListener("wheel", (event) => {
    event.preventDefault();

    let [x, y] = [event.deltaX, event.deltaY];
    let magnitude;

    if (x === 0) {
      magnitude = y > 0 ? -30 : 30;
    } else {
      magnitude = x;
    }

    //console.log({ x, y, magnitude });
    element.scrollBy({
      left: magnitude
    });
  });
}