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


		$('#slide-submenu').on('click',function() {			        
			$(this).closest('.list-group').fadeOut('slide',function(){
				$('.mini-submenu').fadeIn();	
			});
			
		  });
	
		$('.mini-submenu').on('click',function(){		
			$(this).next('.list-group').toggle('slide');
			$('.mini-submenu').hide();
		})

	

});
