$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});
$(function() {
	'use strict';
	
	$('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
		$field.addClass('field--not-empty');
	  } else {
		$field.removeClass('field--not-empty');
	  }
	});
  
	// Handle form submission
	$('form').on('submit', function(event) {
	  event.preventDefault(); // Prevent the default form submission
  
	  // Get the form data
	  const username = $('#username').val();
	  const password = $('#password').val();
  
	  // Prepare the request payload
	  const myHeaders = new Headers();
	  myHeaders.append("Content-Type", "application/json");
  
	  const raw = JSON.stringify({
		"username": username,
		"password": password
	  });
  
	  const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	  };
  
	  // Send the request to the server
	  fetch("http://localhost:5021/User/Login", requestOptions)
		.then((response) => response.text())
		.then((result) => {
		  console.log(result);
		  // Handle successful login here (e.g., redirect to another page)
		})
		.catch((error) => console.error('Error:', error));
	});
  });
  