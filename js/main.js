$(function(){
	$('.dropdown__profile__user').dropdown({
      inDuration: 100,
      outDuration: 225,
      hover: false, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
  })

	$('.dropdown__cat,.dropdown__mark').dropdown({
      inDuration: 100,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
    }
  );
	 $(".button-collapse").sideNav();
	 $('.slider').slider({
	 	height: 500
	 });

	//menu search nav
	$('#link__search, #link__search__mobile').on('click', function(e){
		e.preventDefault();
		$('#nav__search').slideToggle('fast');
        $('#search').focus();
	});

  $('.mdi__close__search').on('click', function(e){
    e.preventDefault();
    $('#nav__search').slideUp('fast');
      $('.row__result').css('display','none')
  });

	 $('.parallax').parallax();

     //item__products
      $('.product__item').mouseenter(function(){
        $(this).find('.actions>a').css('background-color','#263238');
        $(this).find('.actions>a').css('color','white');
    }).mouseleave(function(){
        $(this).find('.actions>a').css('background-color',' #fff');
        $(this).find('.actions>a').css('color','#263238');
    });

    $('.btn.action__link__show, .btn.action__link_add__card').mouseover(function() {
        $(this).addClass('blue');
    }).mouseleave(function(){
        $(this).removeClass('blue');
    });

     $("#flexiselNews").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 6000,
            pauseOnHover: true
        }
    });

     $('.materialboxed').materialbox();

    })//end
