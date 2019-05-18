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

	// Раскрывающийся блок с заказами
	$(".js-order-unwap__item").on('click','.js-order-unwap-head',function(event){
		event.preventDefault();
		$(this).parent().toggleClass("opened");
		if($(this).parent().hasClass("opened")){
			$(this).parent().children(".js-order-unwap-content").slideDown(400);
			$(this).find('.js-order-unwap-arr').text('-');
		}
		else{
			$(this).parent().children(".js-order-unwap-content").slideUp(400);
			$(this).find('.js-order-unwap-arr').text('+');
		}
	});

	// Раскрывающийся блок с отзывами
	$(".js-review").on('click','.js-review-link-open',function(event){
		event.preventDefault();
		var $parent = $(this).parents('.js-review');
		$parent.toggleClass("opened");
		if($parent.hasClass("opened")){
			$parent.children(".js-review-answer").slideDown(400);
			$(this).text('Ответ магазина');
		}
		else{
			$parent.children(".js-review-answer").slideUp(400);
			$(this).text('Свернуть ответ');
		}
	});

	// Включаем фоновое видео в блоке
	$('.js-video-play').click(function(e){
		$(this).parent('.js-video-content').addClass('hidden');
		$(this).parent('.js-video-content').siblings('.js-video').trigger('play');
	});

	//---------- Добавление кода города для телефона -------------
	if ($('.js-phone').length) {
		$(".js-phone").intlTelInput({
			nationalMode: false,
			separateDialCode: true,
			initialCountry: 'ru',
		});
	}

	//---------- Маска для телефона -------------
	$.mask.definitions['~'] = "[+-]";
	$(".js-phone").mask("(999) 999-99-99");

	//---------- Реализация табов -------------
	if ($('.js-tabs-item').length) {
		$(".js-tabs-list .js-tabs-item:first").addClass("active")

		$(".js-tabs-content .js-tabs-content-item:first").fadeIn();

		$('.js-tabs-item').click(function(e) {
			e.preventDefault();
			$(".js-tabs-content-item").hide();
			$(".js-tabs-item").removeClass("active");
			$(this).addClass("active");
			$('#' + $(this).attr('data-item')).fadeIn();
		});
	}

	//---------- Переход по шагам оформления заказа -------------
	if ($('.js-form-step').length) {
		$('.js-form-step').submit(function (e) {
			e.preventDefault();
			$('.js-order-regist-step').removeClass('active');
			var numStep = $(this).parents('.js-order-regist-step').data('step') + 1;
			$('.js-order-regist-step[data-step='+numStep+']').addClass('active');

			if (numStep == 3) {
				$('.js-order-btn').removeClass('btn--inactive');
			}
		});
	}

});