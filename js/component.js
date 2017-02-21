function isActionTime(lastTime, interval) {
	if (lastTime == 0) {
		return true;
	}
	var currentTime = new Date().getTime();
	return currentTime - lastTime >= interval;
}

var rab = new Rabbit(500, 144, rabbit);
function McIn() {
	if (! isActionTime(lastTime, interval)) {
		return;
	}
	lastTime = new Date().getTime();
	imgRan = parseInt(Math.random() * 6 + 1);
	switch (imgRan) {
		case 1:
			moonCakes[moonCakes.length] = new MoonCake(m1);
			break;
		case 2:
			moonCakes[moonCakes.length] = new MoonCake(m2);
			break;
		case 3:
			moonCakes[moonCakes.length] = new MoonCake(m3);
			break;
		case 4:
			moonCakes[moonCakes.length] = new MoonCake(m4);
			break;
		case 5:
			moonCakes[moonCakes.length] = new MoonCake(m5);
			break;
		case 6:
			moonCakes[moonCakes.length] = new MoonCake(m6);
			break;
	}
}

function draw() {
	ctx.drawImage(bg, 0, 0);
	ctx.font = "30px 黑体";
	ctx.fillStyle = "white";
	ctx.fillText('剩余时间：' + parseInt(t / 100) + '秒', 800, 30);
	ctx.fillText('分数：' + score, 30, 30);
	rab.paint();
	for (var i = 0; i < moonCakes.length; i++) {
		moonCakes[i].paint();
	}

}

function step() {
	rab.move();
	for (var i = 0; i < moonCakes.length; i++) {
		moonCakes[i].move();
	}
}

function deleteMc() {
	for (var i = 0; i < moonCakes.length; i++) {
		if (moonCakes[i].y > 700) {
			moonCakes.splice(i, 1);
		}
	}
}

function addScore() {
	for (var i = 0; i < moonCakes.length; i++) {
		if (moonCakes[i].y >= 500 && (moonCakes[i].x > rab.x && moonCakes[i].x < rab.x + rab.width)) {
			score += moonCakes[i].speed * moonCakes[i].speed;
			moonCakes.splice(i, 1);
		}
	}
}

function timerOver() {
	t -= 1;
	if (t <= 0) {
		clearInterval(timer);
		ctx.font = "30px 微软雅黑";
		ctx.fillText('您的得分：' + score, 430, 450);
		ctx.drawImage(end, 0, 0);
	}
}

canvas.onclick = document.onkeydown = function() {
	state = 2;
}
