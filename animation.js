var id = setInterval(frame, 10);

var box = document.getElementById("animation1");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;
var id = setInterval(frame, 10);

function frame() {
    if (xpos > 150 || xpos < 0) {
        xstep = -xstep;
    }
     if (ypos > 150 || ypos < 0) {
        ystep = -ystep;
    }

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    box.style.top = ypos + 'px';
    box.style.left = xpos + '5px';
}
