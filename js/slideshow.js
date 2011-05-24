document.body.className = 'slidemode';

var i, current, count;
var slides = [];
var SV = 'slide view';
var SR = 'slide right';
var SL = 'slide left';
var J = 74, K = 75, Left = 37, Right = 39;
// スライドの各ページを取得(divタグのクラス名で判定)
var divs = document.body.getElementsByTagName('div');
for (i = divs.length; i--;){
    if(/^slide/i.test(divs[i].className)){
        divs[i].className = SR;
        slides.unshift(divs[i]);
    }
}
// 現在のページ
current = 0;
count = slides.length;

function next () {
    slides[current++].className = SL;
    slides[current].className = SV;
    location.hash = 'Page' + current;
}
function prev () {
    slides[current--].className = SR;
    slides[current].className = SV;
    location.hash = 'Page' + current;
}

function key_slide (evt) {
    if (!evt) {
        evt = window.event;
    }
    if ((evt.keyCode === K || evt.keyCode === Left) && slides[current - 1]) {
        prev();
        return false;
    } else if ((evt.keyCode === J || evt.keyCode === Right) && slides[current + 1]) {
        next();
        return false;
    }
}
document.onkeydown = key_slide;

// 初期表示
setTimeout(function () {
    var i, m;
    if ((m = location.hash.match(/^#Page(\d+)$/)) !== null){
        current = Number(m[1]);
        for (i = 0 ; i < current && slides[i]; i++){
            slides[i].className = SL;
        }
        slides[current].className = SV;
    } else {
        slides[0].className = SV;
    }
}, 500);
