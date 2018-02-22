$(function() {

	//E-mail Ajax Send
	$("#mail-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, Ваше сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

//back to top
$(document).ready(function(){
    $(function () {
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

$(window).scroll(function(){ 
  if($(window).scrollTop()>600){ 
    $('#back-top').show() 
  } else 
   { $('#back-top').hide() };
});

});



function initMap() { 
	var uluru = {lat: 46.960717, lng: 31.980674};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
  }