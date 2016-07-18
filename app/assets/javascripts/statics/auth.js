$(document).ready(function() {

  //$('.welcome').hide();

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

  $('.submit-details').on('click', function(){

    var yearStr= $('#year').val();
    var monthStr= $('#month').val();
    var dayStr= $('#day').val();
    console.log(monthStr)
    var yearArr =[];
    var monthArr =[];
    var dayArr =[];
    // <----------------calculate numberology
    for(var i=0;i<yearStr.length;i++){
      yearArr[i]= parseInt(yearStr[i]);
    }
    console.log(yearArr);

    for(var i=0;i<monthStr.length;i++){
      monthArr[i]= parseInt(monthStr[i]);
    }
    console.log(monthArr);

     for(var i=0;i<dayStr.length;i++){
      dayArr[i]= parseInt(dayStr[i]);
    }
    console.log(dayArr);

    var yearSum=yearArr.reduce(function(a, b) { return a + b;}, 0);
    var monthSum=monthArr.reduce(function(a, b) { return a + b;}, 0);
    var daySum=dayArr.reduce(function(a, b) { return a + b;}, 0);
    var totalSum= yearSum+monthSum+daySum;
    console.log(totalSum);

    do{
      var totalSumStr=totalSum.toString();
      var totalSumArr=[];
      for(var i=0;i<totalSumStr.length;i++){
        totalSumArr[i]= parseInt(totalSumStr[i]);
      }
      totalSum=totalSumArr.reduce(function(a, b) { return a + b;}, 0);
    }while(totalSum>9)

    var numberType=totalSumArr.reduce(function(a, b) { return a + b;}, 0);

    console.log(numberType);
      // ---------------->calculate numberology

    var zodiacSign='';
    var month=parseInt(monthStr);
    var day=parseInt(dayStr);

    //------->calculate horoscopes
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
       zodiacSign='Capricorn';
     } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
       zodiacSign='Aquarius';
     } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
       zodiacSign='Pisces';
     } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
       zodiacSign='Aries';
     } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
       zodiacSign='Taurus';
     } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
       zodiacSign='Gemini';
     } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
       zodiacSign='Cancer';
     } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
       zodiacSign='Leo';
     } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
       zodiacSign='Virgo';
     } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
       zodiacSign='Libra';
     } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
       zodiacSign='Scorpio';
     } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
       zodiacSign='Sagittarius';
     }

     console.log(zodiacSign);
  });
});


