// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {

  $('#login-form').on('submit', function(e){
    e.preventDefault();

    $.auth.emailSignIn({
      email: $('#login-form input[name="email"]').val(),
      password: $('#login-form input[name="password"]').val(),
    }).then(function(resp){
      console.log(resp)
    }).fail(function(resp){
      console.log(resp)
    });
  });

    $('#signup-form').on('submit', function(e){
    e.preventDefault();

    $.auth.emailSignUp({
      email: $('#signup-form input[name="email"]').val(),
      password: $('#signup-form input[name="password"]').val(),
      password_confirmation: $('#signup-form input[name="password_confirmation"]').val()
    }).then(function(resp){
      console.log(resp)
    }).fail(function(resp){
      console.log(resp)
    });
  });



  $('#logout').on('click', function(){
    $.auth.signOut();
  });


  });
