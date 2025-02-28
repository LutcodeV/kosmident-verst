
// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]')
if(inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: '+7 999 999 99 99',
			placeholder: '+7 XXX XXX XX XX',
		}).mask(input);
	})
}

// FORMS
const forms = document.querySelectorAll('form')
const formsMethods = {
	formRegistrationToReception: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formOrderHomeExit: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formOrderToReception: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formCouponForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formFaqForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formReviewForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
}
if(forms.length > 0) {
	forms.forEach((item) =>
		item.addEventListener('submit', (e) => {
			e.preventDefault()
			const form = e.target
			const formID = form.getAttribute('id')
			const formData = new FormData(form)

			if(formsMethods[formID]) {
				formsMethods[formID](formData)
			}
		})
	)
}

// HEADER
const header = document.querySelector('.header')
if(header) {
	const headerBurger = header.querySelector('.header__burger')
	const headerBottom = header.querySelector('.header__bottom')
	const headerNavLinks = [...header.querySelectorAll('.header-nav__link')]?.filter(item => item.querySelector('.header-nav__link-wrapper') !== null)

	headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('active')
		headerBottom.classList.toggle('active')
	})
	headerNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			item.classList.toggle('active')
		})
	})
}

// SWIPERS
const doctorsSwiper = new Swiper('.doctors-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-doctors-next',
		prevEl: '.swiper-doctors-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1440: {
			slidesPerView: 4,
		},
	},
})
