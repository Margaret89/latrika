$(document).ready(function () {
	// Фиксированное меню
	showHeaderScroll('position-fixedmenu','header');

	// Фиксированная кнопка
	if ($('.js-catalog-card-btn-add').length) {
		showBtnScroll('position-btn-add','catalog-card-btn-add');
	}

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
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						arrows: true,
						infinite: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2.5,
						arrows: false,
						infinite: false,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1.5,
						arrows: false,
						infinite: false,
					}
				},
			]
		});
	}

	// Слайдер товаров в карточке товаров
	if ($('.js-cat-detail-slider').length) {
		$('.js-cat-detail-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
					arrows: true,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: true,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.5,
					arrows: false,
					infinite: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.5,
					arrows: false,
					infinite: false,
				}
			},
		]
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
		asNavFor: '.js-product-slide-thumb',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					vertical: false,
				}
			},
		]
	});

	$('.js-product-slide-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-product-slide-img',
		dots: false,
		arrows: true,
		vertical: true,
		focusOnSelect: true,
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

	//---------- Открыть/Закрыть настройки корзины -------------
	if ($('.js-btn-setting').length) {
		$('.js-btn-setting').on("click", function(event){
			$(this).toggleClass('active');
			$(this).parents('.js-basket-item').find('.js-setting').toggleClass('active');
		});
	}
	

	//---------- Открыть/Закрыть меню -------------
	var windowWidth = $(window).width();

	$('.js-btn-menu').on("click", function(event){
		if (windowWidth < 768) {
			$(this).toggleClass('active');
			$('.js-body').toggleClass('no-scroll');
			$('.js-header').toggleClass('open-menu');
		}
	});

	$(window).resize(function(){
		windowWidth = $(window).width();

		if (windowWidth > 767) {
			$('.js-btn-menu').removeClass('active');
			$('.js-body').removeClass('no-scroll');
			$('.js-header').removeClass('open-menu');
		}
	});

	//---------- Перемещение мобильного меню -------------
	var indentMenu = 0;
	var levelMenu = 0;

	$('.js-top-menu-arr').on("click", function(event){
		event.preventDefault();
		var $curItem = $(this).parent('.js-top-menu-link');
		var $subMenu = $curItem.siblings('.js-top-menu-sub');
		var curItemText = $curItem.text();
		indentMenu = indentMenu - 100;
		levelMenu++;

		$subMenu.addClass('active');
		$subMenu.children('.js-top-menu-back').text(curItemText);

		$('.js-top-menu').css('transform','translateX('+indentMenu+'%)');
	});

	$('.js-top-menu-back').on("click", function(event){
		indentMenu = indentMenu + 100;
		levelMenu--;

		$(this).parent('.js-top-menu-sub').removeClass('active');

		$('.js-top-menu').css('transform','translateX('+indentMenu+'%)');
	});

});

//-------------- Fixed Menu ---------------------
function showHeaderScroll(selPos,fixedMenu){

	var positionSensor = document.getElementById(selPos);

	if(positionSensor){
		var fixedMenu = document.getElementById(fixedMenu);
		var sensorTopPos = positionSensor.getBoundingClientRect().top;
		var typeMenu = '';

		if ($(fixedMenu).hasClass('opacity')) {
			typeMenu = 'opacity';
		}

		
		var menuHidden = true;
		if(sensorTopPos <= 0) {
			$(fixedMenu).css("top", "-100px");
			$(fixedMenu).animate({top: "0"}, {duration: 400, easing: "linear"});
			menuHidden = false;
		}

		$(window).on("scroll", function() {
			sensorTopPos = positionSensor.getBoundingClientRect().top;
			if(sensorTopPos <= 0) {
				if(menuHidden) {
					$(fixedMenu).css("top", "-100px");
					$(fixedMenu).animate({top: "0"}, {duration: 400, easing: "linear"});
					menuHidden = false;
				}

				$(fixedMenu).addClass('fixed');
				if (typeMenu == 'opacity') {
					$(fixedMenu).removeClass('opacity');
				}
			}else if (sensorTopPos > 0) {
				if(!menuHidden) {
					$(fixedMenu).animate({top: "0"}, {duration: 0, easing: "linear"});
					menuHidden = true;
				}

				$(fixedMenu).removeClass('fixed');
				if (typeMenu == 'opacity') {
					$(fixedMenu).addClass('opacity');
				}
			}
		});
	}
}

//-------------- Btn fixed ---------------------
function showBtnScroll(selPos,fixedBtn){

	var positionSensor = document.getElementById(selPos);

	if(positionSensor){
		var fixedBtn = document.getElementById(fixedBtn);
		var sensorTopPos = positionSensor.getBoundingClientRect().top;
		
		var btnHidden = true;
		if(sensorTopPos <= 0) {
			$(fixedBtn).addClass("active");
			btnHidden = false;
		}

		$(window).on("scroll", function() {
			sensorTopPos = positionSensor.getBoundingClientRect().top;
			if(sensorTopPos <= 0) {
				if(btnHidden) {
					$(fixedBtn).removeClass("active");
					btnHidden = false;
				}

				$(fixedBtn).addClass("active");
			}else if (sensorTopPos > 0) {
				if(!btnHidden) {
					$(fixedBtn).addClass("active");
					btnHidden = true;
				}

				$(fixedBtn).removeClass("active");
			}
		});
	}
}