$(document).ready( function (){
	$("input[name='name']").focusout( function(){
		if ($(this).val().length == 0){
			$("#nameWarning").css("display","inline");
			$("input[name='name']").css("border","2px solid red");
		}
		else{
			$("#nameWarning").css("display","none");
			$(this).css("border","1px solid gray ");
		}
	});	
	$("input[name='username']").focusout( function(){
		if ($(this).val().length < 6){
			$("#usernameWarning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#usernameWarning").css("display","none");
			$(this).css("border","1px solid gray ");
		}	
	});
	$("input[name='password']").focusout( function(){
		if ($(this).val().length < 6){
			$("#passwordWarning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#passwordWarning").css("display","none");
			$(this).css("border","1px solid gray ");
		}	
	}); 
	$("input[name='password1']").focusout( function(){
		if ($(this).val() == $("input[name='password']").val()){
			$("#password1Warning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#password1Warning").css("display","none");
			$(this).css("border","1px solid gray ");
		}	
	});
	$("#buttonstyle").click(function(){
		var x = $('#month option:selected');
			if (x.length < 1){
				$("#monthWarning").css("display","inline");
				$(this).css("border","2px solid red");
			}
			else{
				$("#monthWarning").css("display","none");
				$(this).css("border","1px solid gray ");
			}	
		});
	$("input[name='day']").focusout( function(){
		if ($(this).val() > 31 || $(this).val() < 1 || isNaN($(this).val())){
			$("#dayWarning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#dayWarning").css("display","none");
			$(this).css("border","1px solid gray ");
		}	
	});
	$("input[name='year']").focusout( function(){
		if ($(this).val() > 1917  || $(this).val() < 1999 || isNaN($(this).val())){
			$("#yearWarning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#yearWarning").css("display","none");
			$(this).css("border","1px solid gray ");
		}	
	});
	$("input[name='mobile']").focusout( function(){
		if ($(this).val().length < 10){
			$("#mobileWarning").css("display","inline");
			$(this).css("border","2px solid red");
		}
		else{
			$("#mobileWarning").css("display","none");
			$(this).css("border","1px solid gray ");
			console.log($("#month :selected").text());
		}	
	});	
});