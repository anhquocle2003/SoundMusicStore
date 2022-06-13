window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const container = document.querySelector(".col-md-4");

    // Resizing the canvas
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Variables
    let painting = false;
    function startPosition() {
      painting = true;
      draw(e);
    }
    function finishedPosition() {
      painting = false;
      ctx.beginPath();
    }
    function draw(e) {
      var rect = canvas.getBoundingClientRect();
      if (!painting) return;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#e21818";
      ctx.lineTo(e.clientX - rect.left, e.clientY-rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX- rect.left, e.clientY-rect.top);
    }
    // EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});