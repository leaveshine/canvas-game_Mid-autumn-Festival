function MoonCake(img) {
    this.speed = parseInt(Math.random()*3+3);
    this.img = img;
    this.x = parseInt(Math.random()*970);
    this.y = -50;
    this.paint = function () {
        ctx.drawImage(this.img,this.x,this.y);
    }
    this.move= function () {
        this.y+=this.speed;
    }
}

var _this;
var timerLR;
function left() {
    _this.x-=50;
    if(_this.x<0){
        _this.x=0;
    }
    setTimeout('left',10)
}
function right() {
    _this.x+=50;
    if(_this.x>880){
        _this.x=880;
    }
    setTimeout('right',10)
}
function Rabbit(x,width,img) {
    this.x = x;
    this.y = 500;
    this.width = width;
    this.img = img;
    _this = this;
    this.paint = function () {
        ctx.drawImage(this.img,this.x,this.y);
    }
    this.move = function () {
        document.onkeydown = function (e) {
            if (e.keyCode == 13 && e.shiftKey&&e.ctrlKey) {
                alert("触发中秋狂欢模式，增加分数1000！");
                score+=1000;
            }
            switch (e.keyCode){
                case 37:
                    left();
                    break;
                case 39:
                    right();
                    break;
            }
        }
    }
}

