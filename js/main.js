const imagesObj = {
	blue: {
		heroImg: '../images/full-size/blue.png',
		sideImg: '../images/sides/blue.jpg',
		smartCaseImg: '../images/case/blue.jpg',
	},
	red: {
		heroImg: '../images/full-size/red.png',
		sideImg: '../images/sides/red.jpg',
		smartCaseImg: '../images/case/red.jpg',
	},
	green: {
		heroImg: '../images/full-size/green.png',
		sideImg: '../images/sides/green.png',
		smartCaseImg: '../images/case/green.jpg',
	},
	black: {
		heroImg: '../images/full-size/black.png',
		sideImg: '../images/sides/black.png',
		smartCaseImg: '../images/case/black.jpg',
	},
	white: {
		heroImg: '../images/full-size/white.png',
		sideImg: '../images/sides/white.jpg',
		smartCaseImg: '../images/case/white.jpg',
	},
};

//! СДЕЛАТЬ СМЕНА БГы

const bgColorsObj = {
	red: 'linear-gradient(180deg,#f3d6d1 0%,rgba(235, 235, 235, 0) 100%)',
	blue: 'linear-gradient(180deg,#cadbeb 0%,rgba(235, 235, 235, 0) 100%)',
	green: 'linear-gradient(180deg,#ddead9 0%,rgba(235, 235, 235, 0) 100%)',
	black: 'linear-gradient(180deg,#b6b6b6 0%,rgba(235, 235, 235, 0) 100%)',
	white: 'linear-gradient(180deg,#fafafa 0%,rgba(235, 235, 235, 0) 100%)',
};

const heroSection = document.querySelector('.hero');
const heroImgTag = document.querySelector('#hero-image');
const compositionImageTag = document.querySelector('#composition-image');
const caseImageTag = document.querySelector('#case-image');
const chooseColorBtn = document.querySelector('.colors__list');

const displayImages = (color) => {
	heroSection.style.background = bgColorsObj[color];

	const { heroImg, sideImg, smartCaseImg } = imagesObj[color];

	heroImgTag.src = heroImg;
	compositionImageTag.src = sideImg;
	caseImageTag.src = smartCaseImg;
};

displayImages('blue');

chooseColorBtn.addEventListener('click', (e) => {
	if (e.target.classList.contains('colors__list--btn')) {
		const color = e.target.id;
		displayImages(color);

		const activeBtn = chooseColorBtn.querySelector(
			'.colors__list--btn--active'
		);
		if (activeBtn) {
			activeBtn.classList.remove('colors__list--btn--active');
		}

		e.target.classList.add('colors__list--btn--active');
	}
});
