var imageArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var i = 1;
var ref;

function imageGallery() {
    document.images[0].src = imageArray[i];
    i++;
    if (i < 4)
        i = 0;
}

function start () {
    ref = setInterval('imageGallery()', 1000);
}
function stop() {
    clearInterval(ref);
}