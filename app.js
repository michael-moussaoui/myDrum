// const allBtn = document.getElementsByClassName("btn");
// document.querySelectorAll(".btn").forEach((audio) => {
// 	audio.addEventListener("click", function (event) {
// 		if (this.paused) this.play();
// 		else this.pause();
// 	});
// });
const btn1 = document.getElementsByClassName(".btn1");
const btn2 = document.getElementsByClassName(".btn2");
const btn3 = document.getElementsByClassName(".btn3");
const sample1 = document.getElementById("sample1");
const sample2 = document.getElementById("sample2");
const sample3 = document.getElementById("sample3");

const allBtn = document.getElementsByClassName("btn");
// for (let i = 0; i < buttons.length; i++) {
// 	let self = buttons[i];

//self.addEventListener("click", function (event) {

/****sample1 */
sample1.onplaying = function () {
	isPlaying1 = true;
};
sample1.onpause = function () {
	isPlaying1 = false;
};
//});

let isPlaying1 = false;

function togglePlay1() {
	if (isPlaying1) {
		sample1.pause();
		btn1.classList.remove("btnClicked");
	} else {
		sample1.play();
		btn1.classList.add("btnClicked");
	}
}

/**** sample 2 */
sample2.onplaying = function () {
	isPlaying2 = true;
};
sample2.onpause = function () {
	isPlaying2 = false;
};
//});
let isPlaying2 = false;

function togglePlay2() {
	if (isPlaying2) {
		sample2.pause();
		btn2.classList.remove("btnClicked");
	} else {
		sample2.play();
		btn2.classList.add("btnClicked");
	}
}

/****sample3 */
sample3.onplaying = function () {
	isPlaying3 = true;
};
sample3.onpause = function () {
	isPlaying3 = false;
};
//});

let isPlaying3 = false;

function togglePlay3() {
	if (isPlaying3) {
		sample3.pause();
		btn3.classList.remove("btnClicked");
	} else {
		sample3.play();
		btn3.classList.add("btnClicked");
	}
}

// }

window.addEventListener("keydown", function (e) {
	const audio = document.querySelector(
		`audio[data-key="${e.keyCode}"]`
	);
	const box = this.document.querySelector(
		`.box[data-key="${e.keyCode}"]`
	);
	audio.currentTime = 0;
	audio.play();
	box.classList.add("playing");

	this.setTimeout(function () {
		box.classList.remove("playing");
	}, 300);
});
