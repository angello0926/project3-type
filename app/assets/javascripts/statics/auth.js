$(document).ready(function() {

  function setWelcomePage(){
    $('.signup-detail').hide();
    $('.header').hide();
    $('.welcome').show();
  }


  function setSignupdetails(){
    $('#signup-modal').modal('hide');
    $('.welcome').hide();
    $('.header').show();
    $('.signup-detail').show();
  }

  function afterLoggedIn(){
     $('#login-modal').modal('hide');
     $('.welcome').hide();
     $('.header').show();
     $('.signup-detail').hide();
  }

  if ($.auth.user.signedIn){
     afterLoggedIn();
  }else{
    setWelcomePage();
  }

  $('#login').click(function(e){
    e.preventDefault();
    $('#login-modal').modal();
    $('#login-btn').click(function(e){
     e.preventDefault();
     $.auth.emailSignIn({
        email: $('#login-modal #login-form input[name="email"]').val(),
        password: $('#login-modal #login-form input[name="password"]').val()
      }).then(function(user){
         afterLoggedIn();
         console.log(user);
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
         setSignupdetails();
      }).fail(function(resp){
        console.log(resp);
      });
    });
  });

  $('#logout').on('click', function(){
    $.auth.signOut();
    console.log('logout');
    setWelcomePage();
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

    //------->calculate horoscopes
    var zodiacSign='';
    var month=parseInt(monthStr);
    var day=parseInt(dayStr);
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
       zodiacSign='1'; //Capricorn
     } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
       zodiacSign='4'; //Aquarius
     } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
       zodiacSign='7'; //Pisces
     } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
       zodiacSign='10'; //Aries
     } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
       zodiacSign='2';//Taurus
     } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
       zodiacSign='5'; //Gemini
     } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
       zodiacSign='8'; //Cancer
     } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
       zodiacSign='11'; //Leo
     } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
       zodiacSign='3'; //Virgo
     } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
       zodiacSign='6'; //Libra
     } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
       zodiacSign='9'; //Scorpio
     } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
       zodiacSign='12'; //Sagittarius
     }

     console.log(zodiacSign);

     $.auth.updateAccount({
       name: $('#username').val(),
       birth_dd: day,
       birth_mm: month,
       birth_yy: parseInt(yearStr),
       gender: $('input[name=gender]:checked').val(),
       numerology_id: numberType,
       horoscope_id: zodiacSign
     });

     console.log($.auth.user);
     afterLoggedIn();


});

});


