$(document).ready(function() {

  $('#login').click(function(e){

    e.preventDefault();
    $('#login-modal').modal();

    $('#login-btn').click(function(e){
         e.preventDefault();
      $.auth.emailSignIn({
        email: $('#login-modal #login-form input[name="email"]').val(),
        password: $('#login-modal #login-form input[name="password"]').val()
      }).then(function(user){
         $('#login-modal').modal('hide');
         $('.welcome').hide();
         console.log(current_user);
      }).fail(function(resp){
           console.log(resp)
      });
    });

  })

  $('#signup').click(function(e){
    e.preventDefault();
    $('#signup-modal').modal();
    $('#signup-btn').click(function(e){
         e.preventDefault();
      $.auth.emailSignUp({
        email: $('#signup-modal #signup-form input[name="email"]').val(),
        password: $('#signup-modal #signup-form input[name="password"]').val(),
        password_confirmation: $('#signup-modal #signup-form input[name="password_confirmation"]').val()
      }).then(function(user){
         $('#signup-modal').modal('hide');
          $('.welcome').hide();
      }).fail(function(resp){
        console.log(resp);
      });
    });
  });


  $('#logout').on('click', function(){
    $.auth.signOut();
    console.log('logout');
  });


  });
