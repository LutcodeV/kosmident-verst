
// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]')
if(inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: '+7 (999) 999 - 99 - 99',
			placeholder: '+7 (___) ___ - __ - __',
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
const heroSwiper = new Swiper('.hero-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-hero-next',
		prevEl: '.swiper-hero-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
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
const articlesSwiper = new Swiper('.articles-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-articles-next',
		prevEl: '.swiper-articles-prev',
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
const servicesSwiper = new Swiper('.services-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
const reviewsSwiper = new Swiper('.review-swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	loop: true,
})
const benefitsSwiper = new Swiper('.benefits-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-benefits-next',
		prevEl: '.swiper-benefits-prev',
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

// REVIEW
const previewReview = document.querySelector('.review-preview')
const previewReviewImages = document.querySelector('.review-preview-images')
if(previewReview) {
	const previewReviewVideo = previewReview.querySelector('.review-preview-video')
	const previewReviewVideoVideo = previewReviewVideo.querySelector('video')

	previewReviewVideo.addEventListener('click', () => {
		if(!previewReview.classList.contains('video')) {
			previewReview.classList.toggle('video')
		} else {
			if(previewReviewVideoVideo.paused) {
				previewReviewVideo.classList.add('active')
				previewReviewVideoVideo.play()
			} else {
				previewReviewVideo.classList.remove('active')
				previewReviewVideoVideo.pause()
			}
		}
	})
	previewReviewImages.addEventListener('click', () => {
		if(previewReview.classList.contains('video')) {
			previewReview.classList.toggle('video')
			previewReviewVideoVideo.pause()
			previewReviewVideo.classList.remove('active')
		}
	})

}
if(previewReviewImages) {
	const previewReviewImagesProgress = previewReviewImages.querySelector('.review-preview-images__progress')
	previewReviewImagesProgress.addEventListener('input', () => {
		const value = previewReviewImagesProgress.value
		previewReviewImages.style = `--progress: ${value}%`
	})
}

// FAQS
const faqs = document.querySelectorAll('.faq')
if(faqs.length > 0) {
	faqs.forEach((faq) => {
		faq.addEventListener('click', () => {
			faq.classList.toggle('active')
		})
	})
}

// MAP
const map = document.querySelector('#map')
if(map) {
	ymaps.ready(init);
	function init(){
			const myMap = new ymaps.Map("map", {
					center: [55.702906, 37.940921],
					zoom: 17
			});
			const myPlacemark = new ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [55.702906, 37.940921]
				}
			});
			myMap.geoObjects.add(myPlacemark)
	}
}

// HERO
const heroBlock = document.querySelector('.hero');
if(heroBlock) {
	const heroContent = heroBlock.querySelector('.hero-content')
	const heroContentClose = heroContent.querySelector('.hero-content__close')

	heroContentClose.addEventListener('click', () => {
		heroContent.classList.toggle('active')
	})
}

// INCLUDE-SERVICE
const includeService = document.querySelector('.include-service')
if(includeService) {
	const includeServiceStepsItems = includeService.querySelectorAll('.include-service-steps__item')
	const includeServiceIncludesList = includeService.querySelector('.include-service-includes__list')
	const createIncludeList = (data) => {
		includeServiceIncludesList.innerHTML = ''
			data.forEach((item) => {
				const li = document.createElement('p')
				li.classList.add('include-service-includes__item')
				li.innerHTML = item
				includeServiceIncludesList.append(li)
			})
	}
	includeServiceStepsItems.forEach((item) => {
		const data = JSON.parse(item.getAttribute('data-items')) || []
		item.addEventListener('click', () => {
			if(item.classList.contains('active')) return
			includeServiceStepsItems.forEach((item) => item.classList.remove('active'))
			item.classList.add('active')
			createIncludeList(data)
		})
	})
	includeServiceStepsItems[0].click()
}
