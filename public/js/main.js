$(document).ready(function () {
	// Открыть/Закрыть мобильное меню
	$('.js-catalog-menu-mark').click(function(e){
		e.preventDefault();
		if($(this).hasClass("opened")){
			$(this).siblings('.js-catalog-menu-sub').slideUp();
		}else{
			$(this).siblings('.js-catalog-menu-sub').slideDown();
		}
		$(this).toggleClass('opened');
	});

	// Стилизация выпадающего списка
	$('.js-select').chosen({
		disable_search: true,
	});

	// Слайдер товаров
	if ($('.js-catalog-slider').length) {
		$('.js-catalog-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			// responsive: [
			// 	{
			// 		breakpoint: 768,
			// 		settings: {
			// 			arrows: false,
			// 			dots: true,
			// 		}
			// 	},
			// ]
		});
	}

	// Слайдер товаров в карточке товаров
	if ($('.js-cat-detail-slider').length) {
		$('.js-cat-detail-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		});
	}

	// Слайдер категорий на главной
	if ($('.js-category-main').length) {
		$('.js-category-main').slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 1,
		});
	}

	// Слайдер карточки товаров
	 $('.js-product-slide-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		vertical: true,
		focusOnSelect: true,
		asNavFor: '.js-product-slide-thumb'
	});

	$('.js-product-slide-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-product-slide-img',
		dots: false,
		arrows: true,
		vertical: true,
		focusOnSelect: true
	});

	// Раскрывающийся блок
	$(".js-unwrap-block").on('click','.js-unwrap-head',function(event){
		event.preventDefault();
		$(this).parent().toggleClass("opened");
		if($(this).parent().hasClass("opened")){
			$(this).parent().children(".js-unwrap-content").slideDown(400);
		}
		else{
			$(this).parent().children(".js-unwrap-content").slideUp(400);
		}
	});

	// Включаем фоновое видео в блоке
	$('.js-video-play').click(function(e){
		$(this).parent('.js-video-content').addClass('hidden');
		$(this).parent('.js-video-content').siblings('.js-video').trigger('play');
	});

	// //---------- Маска для телефона -------------
	// $.mask.definitions['~'] = "[+-]";
	// $("#phone").mask("(999) 999-9999");

	// // Вызов функции подгрузки изображений
	// loadBigImg();
	// loadBigBacground();

	// // Вызов функции прижатия футера к низу экрана
	// footerBind('.js-main','.js-header,.js-footer');
	// $(window).on('resize',function(){footerBind('.js-main','.js-header,.js-footer')});
});

// // Загрузка больших изображений
// function loadBigImg() {
// 	var $imgDefer = $('[data-src]');

// 	$imgDefer.each(function(indx, element){
// 		var urlImgBig = $(this).attr("data-src");
// 		$(this).attr("src", urlImgBig);
// 	});
// }

// function loadBigBacground() {
// 	var $imgDefer = $('[data-background]');

// 	$imgDefer.each(function(indx, element){
// 		var urlBackgroundBig = $(this).attr("data-background");
// 		$(this).css("background-image", "url("+ urlBackgroundBig +")");
// 	});
// }