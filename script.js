
// Functionality to switch between sections

const sections = document.querySelectorAll('.section');
const controls = document.querySelectorAll('.controls');
const control = document.querySelectorAll('.control');

const bodyContent = document.querySelector('.body-content');

function PageTransitions() {
	// Active class btn
	for(let i = 0; i < control.length; i++) {
		// https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners - Why an arrow function doesn't work here
		control[i].addEventListener('click', function() {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += ' active-btn';
		})
	}

	// Sections Active class
	bodyContent.addEventListener('click', (e) => {
		// console.log(e.target);
		const id = e.target.dataset.id;
		console.log(id);

		if(id) {
			// remove selected
			controls.forEach((contr) => {
				contr.classList.remove('active');
			})

			e.target.classList.add('active');

			// hide other sections
			sections.forEach((sect) => {
				sect.classList.remove('active');
			})

			const element = document.getElementById(id);
			element.classList.add('active');
		}
	})

	// Theme btn
	const themeBtn = document.querySelector('.theme-btn');
	themeBtn.addEventListener('click', () => {
		let elem = document.body;
		elem.classList.toggle('light-mode');
	});
}

PageTransitions()



// (function () {
// 	[...document.querySelectorAll(".control")].forEach(button => {
// 			button.addEventListener("click", function() {
// 					document.querySelector(".active-btn").classList.remove("active-btn");
// 					this.classList.add("active-btn");
// 					document.querySelector(".active").classList.remove("active");
// 					document.getElementById(button.dataset.id).classList.add("active");
// 			})
// 	});
// 	document.querySelector(".theme-btn").addEventListener("click", () => {
// 			document.body.classList.toggle("light-mode");
// 	})
// })();