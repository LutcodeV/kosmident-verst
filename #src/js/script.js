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


// MODALS
const modalContainer = document.querySelector('.modal-container')
// const modalContainerWrapper = document.querySelector('.modal-container__wrapper')
const modals = document.querySelectorAll('.modal')
const openModal = (modal) => {
	modalContainer.classList.add('active')
	modal.classList.add('active')
}
const closeAllModals = () => {
	document.querySelectorAll('.modal').forEach((item) => {
		item.classList.remove('active')
	});
	modalContainer.classList.remove('active')
}

if(modalContainer) {
	modals.forEach((modal) => {
		const openers = document.querySelectorAll(`[data-modal-open="${modal.id}"]`)
		const closes = modal.querySelectorAll('.modal__close, [data-modal-close]')

		closes.forEach((close) => {
			close.addEventListener('click', () => {
				closeAllModals()
			})
		})
		openers.forEach((opener) => opener.addEventListener('click', () => {
			closeAllModals()
			openModal(modal)
		}))
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
const heroCardSwiper = new Swiper('.hero-card-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	// loop: true,
})
const heroSwiper = new Swiper('.hero-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	// loop: true,
	thumbs: {
		swiper: heroCardSwiper,
	},
	navigation: {
		nextEl: '.swiper-hero-next',
		prevEl: '.swiper-hero-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
if(heroCardSwiper, heroSwiper) {
	heroCardSwiper.on('activeIndexChange', function () {
		console.log(this.activeIndex, heroSwiper.activeIndex)
		heroSwiper.slideTo(this.realIndex)
	})
}

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
const doctorSwiper = new Swiper('.doctor-swiper', {
	slidesPerView: 'auto',
	spaceBetween: 12,
	loop: true,
	navigation: {
		nextEl: '.swiper-doctor-next',
		prevEl: '.swiper-doctor-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
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
const gallerySwiper = new Swiper('.gallery-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: '.swiper-gallery-next',
		prevEl: '.swiper-gallery-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
		},
	},
})

// REVIEW
const previewReviews = document.querySelectorAll('.js-review-preview')
const previewReviewImages = document.querySelectorAll('.review-preview-images')
if(previewReviews.length > 0) {
	previewReviews.forEach((item) => {
		const previewReviewImage = item.querySelector('.review-preview-images')
		const previewReviewVideo = item.querySelector('.review-preview-video')

		if(previewReviewImage) {
			const previewReviewImageProgress = previewReviewImage.querySelector('.review-preview-images__progress')
			previewReviewImageProgress.addEventListener('input', () => {
				const value = previewReviewImageProgress.value
				previewReviewImage.style = `--progress: ${value}%`
			})
		}

		if(previewReviewVideo && previewReviewImage) {
			const previewReviewVideoVideo = previewReviewVideo.querySelector('video')
			previewReviewVideo.addEventListener('click', () => {
				if(!item.classList.contains('video')) {
					item.classList.toggle('video')
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
			previewReviewImage.addEventListener('click', () => {
				if(item.classList.contains('video')) {
					item.classList.toggle('video')
					previewReviewVideoVideo.pause()
					previewReviewVideo.classList.remove('active')
				}
			})
		}
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
			myMap.behaviors.disable('scrollZoom')
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

// LOTTIE
import { DotLottie } from "https://esm.sh/@lottiefiles/dotlottie-web";

if(document.getElementById("dotlottie-canvas")) {
	new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.getElementById("dotlottie-canvas"),
		src: "/assets/animation/error-page-animation.lottie",
	});
}

// DROPDOWN
const dropdowns = document.querySelectorAll('.dropdown')
if(dropdowns.length) {
	dropdowns.forEach((dropdown) => {
		const dropdownInput = dropdown.querySelector('.dropdown__input')
		const dropdownHeader = dropdown.querySelector('.dropdown__header')
		const dropdownListItems = dropdown.querySelectorAll('.dropdown__list-item')

		dropdownHeader.addEventListener('click', () => {
			dropdown.classList.toggle('active')
		})
		dropdownListItems.forEach(button => {
			button.addEventListener('click', () => {
				dropdownInput.value = button.innerText
				dropdown.classList.remove('active')
			})
		})
		window.addEventListener('click', (e) => {
			if(!e.composedPath().find(el => el.classList?.contains('dropdown'))) {
				dropdown.classList.remove('active')
			}
		})
	})
}

// COOKIES
const cookies = document.querySelector('.cookies')
if(cookies) {
	const isCookiesAccepted = localStorage.getItem('cookies-accepted')
	const cookiesButton = cookies.querySelector('button')
	if(!isCookiesAccepted) {
		cookies.classList.add('active')
		cookiesButton.addEventListener('click', () => {
			cookies.classList.remove('active')
			localStorage.setItem('cookies-accepted', 'true')
		})
	}
}

// DOCTOR-VIDEO
const modalVideo = document.querySelectorAll('.modal-video')
const videoOn = (video, wrapper) => {
	if(video === undefined || wrapper === undefined) return
	video.play()
	video.controls = true
	wrapper.classList.add('active')
}
const videoOff = (video, wrapper) => {
	if(video === undefined || wrapper === undefined) return
	video.pause()
	video.controls = false
	wrapper.classList.remove('active')
}
if(modalVideo.length) {
	modalVideo.forEach((item) => {
		const video = item.querySelector('video')
		const play = item.querySelector('.modal-video__play')
		const wrapper = item.querySelector('.modal-video__video-wrapper')
		play.addEventListener('click', () => video.paused ? videoOn(video, wrapper) : videoOff(video, wrapper))
		video.addEventListener('pause', () => videoOff(video, wrapper))
		video.addEventListener('ended', () => videoOff(video, wrapper))
	})
}
