
	$('.fancybox').fancybox({});
	
	$('.fancybox img').captify();
	
	$('.gallery-list').hover(
		function() {},
		function()
		{
			$(this).find('li img').animate({opacity:1},250);
		}	
	);
	
	$('.gallery-list li').hover(
		function() 
		{
			$(this).siblings('li').find('img').css('opacity',0.5);
			$(this).find('img').animate({opacity:1},250);
		},
		function()
		{
			$(this).find('img').css('opacity',1);	
		}
	);
	
	$('#slider').nivoSlider({directionNav:false});
	
	var coordinate=new google.maps.LatLng(55.818584,37.502849);
   var mapOptions= 
	{
		zoom:10,
		center:coordinate,
		mapTypeId:google.maps.MapTypeId.ROADMAP
   };
									
	map=new google.maps.Map(document.getElementById('map'),mapOptions);