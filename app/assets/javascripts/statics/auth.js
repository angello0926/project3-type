$(document).ready(function(){

  function setWelcomePage(){
    $('.signup-detail').hide();
    $('.header').hide();
    $('.welcome').show();
     $('.selection').hide();
     loginmodalshow();
      Signup ();

  }

  function setSignupdetails(){
    $('#signup-modal').modal('hide');
    $('.welcome').hide();
    $('.header').show();
    $('.signup-detail').show();
    submitSignupDetails();
  }

  function afterLoggedIn(){
     $('#login-modal').modal('hide');
     $('.welcome').hide();
     $('.header').show();
     $('.signup-detail').hide();
     $('.selection').show();
     logout();
    showPersonalityInfo();
  }

  function loginmodalshow(){
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
  }

  function Signup (){
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
  }

  function logout (){
    $('#logout').on('click', function(){
      $.auth.signOut();
      console.log('logout');
      setWelcomePage();
    });
  }

  function submitSignupDetails(){
    $('.submit-details').on('click', function(){
      var yearStr= $('#year').val();
      var monthStr= $('#month').val();
      var dayStr= $('#day').val();
      var numberType=calculateNumerology(dayStr,monthStr,yearStr);
      var month=parseInt(monthStr);
      var day=parseInt(dayStr);
      var zodiacSign=calculateHoroscope(day,month);
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
  }

  function Setpage (){
    PubSub.subscribe('auth.validation.success', function(ev, user) {

       afterLoggedIn();
      });
  }

  function calculateHoroscope (day,month){
    var zodiacSign='';
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
     return zodiacSign;
  }

  function calculateNumerology(day,month,year){
    var yearArr =[];
    var monthArr =[];
    var dayArr =[];
    for(var i=0;i<year.length;i++){
      yearArr[i]= parseInt(year[i]);
    }
    console.log(yearArr);
    for(var i=0;i<month.length;i++){
      monthArr[i]= parseInt(month[i]);
    }
    console.log(monthArr);
    for(var i=0;i<day.length;i++){
      dayArr[i]= parseInt(day[i]);
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
    return numberType;
  }

  function showPersonalityInfo(){
    var mbti = [
    "INTJ-Architect",
    "INTP-Logician",
    "ENTJ-Commander",
    "ENTP-Debater",
    "INFJ-Advocate",
    "INFP-Mediator",
    "ENFJ-Protagonist",
    "ENFP-Campaigner",
    "ISTJ-Logistician",
    "ISFJ-Defender",
    "ESTJ-Executive",
    "ESFJ-Consul",
    "ISTP-Virtuoso",
    "ISFP-Adventurer",
    "ESTP-Entrepreneur",
    "ESFP-Entertainer"];
  $("#mbti").autocomplete({
        source: mbti
    });

  var horoscope = [
    "Capricorn",
    "Taurus",
    "Virgo",
    "Aquarius",
    "Gemini",
    "Libra",
    "Pisces",
    "Cancer",
    "Scorpio",
    "Aries",
    "Leo",
    "Sagittarius"];
  $("#zodiac").autocomplete({
        source: horoscope
    });

  var numerology = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"];
    $("#numerology").autocomplete({
        source: numerology
    });

   var data={};
    $.ajax({
      method: 'GET',
      url: '/personalities',
      success:function(resp) {
        data=resp;
        console.log(data);
        var mbti={};
        var horoscope={};
        var numerology={};

        $('#mbti').on('autocompletechange change', function () {

          switch(this.value) {
            case 'INTJ-Architect':
              mbti=data.mbti[0];
              setdescription_png(mbti);
            break;

            case 'INTP-Logician':
              mbti=data.mbti[1];
              setdescription_png(mbti);
            break;

            case 'ENTJ-Commander':
              mbti=data.mbti[2];
              setdescription_png(mbti);
            break;

             case  "ENTP-Debater":
                mbti=data.mbti[3];
              setdescription_png(mbti);
            break;


            case "INFJ-Advocate":
               mbti=data.mbti[4];
              setdescription_png(mbti);
            break;

            case "INFP-Mediator":
             mbti=data.mbti[5];
              setdescription_png(mbti);
            break;

            case "ENFJ-Protagonist":
             mbti=data.mbti[6];
              setdescription_png(mbti);
            break;

            case "ENFP-Campaigner":
             mbti=data.mbti[7];
              setdescription_png(mbti);
            break;

            case "ISTJ-Logistician":
             mbti=data.mbti[8];
              setdescription_png(mbti);
            break;

            case "ISFJ-Defender":
             mbti=data.mbti[9];
              setdescription_png(mbti);
            break;

            case "ESTJ-Executive":
             mbti=data.mbti[10];
              setdescription_png(mbti);
            break;

            case "ESFJ-Consul":
             mbti=data.mbti[11];
              setdescription_png(mbti);
            break;

            case "ISTP-Virtuoso":
             mbti=data.mbti[12];
              setdescription_png(mbti);
            break;

            case "ISFP-Adventurer":
             mbti=data.mbti[13];
              setdescription_png(mbti);
            break;


            case "ESTP-Entrepreneur":
             mbti=data.mbti[14];
              setdescription_png(mbti);
            break;

            case "ESFP-Entertainer":
             mbti=data.mbti[15];
              setdescription_png(mbti);
            break;
          }
        }).change();

        $('#zodiac').on('autocompletechange change', function () {
          switch(this.value) {
            case 'Aquarius':
              horoscope=data.horoscope[3];
              setdescription_svg_horo(horoscope);
            break;

            case 'Aries':
              horoscope=data.horoscope[9];
              setdescription_svg_horo(horoscope);
            break;

            case 'Cancer':
              horoscope=data.horoscope[7];
              setdescription_svg_horo(horoscope);
            break;

             case  "Capricorn":
                horoscope=data.horoscope[0];
              setdescription_svg_horo(horoscope);
            break;


            case "Gemini":
               horoscope=data.horoscope[4];
              setdescription_svg_horo(horoscope);
            break;

            case "Leo":
             horoscope=data.horoscope[10];
              setdescription_svg_horo(horoscope);
            break;

            case "Libra":
             horoscope=data.horoscope[5];
              setdescription_svg_horo(horoscope);
            break;

            case "Pisces":
             horoscope=data.horoscope[6];
              setdescription_svg_horo(horoscope);
            break;

            case "Sagittarius":
             horoscope=data.horoscope[11];
              setdescription_svg_horo(horoscope);
            break;

            case "Scorpio":
             horoscope=data.horoscope[8];
              setdescription_svg_horo(horoscope);
            break;

            case "Taurus":
             horoscope=data.horoscope[1];
              setdescription_svg_horo(horoscope);
            break;

            case "Virgo":
             horoscope=data.horoscope[2];
              setdescription_svg_horo(horoscope);
            break;
          }
        }).change();


        $('#numerology').on('autocompletechange change', function () {
          switch(this.value) {
            case '1':
              number=data.numerology[0];
              setdescription_svg_num(number);
            break;

            case '2':
              number=data.numerology[1];
              setdescription_svg_num(number);
            break;

            case '3':
              number=data.numerology[2];
              setdescription_svg_num(number);
            break;

             case  "4":
                number=data.numerology[3];
              setdescription_svg_num(number);
            break;


            case "5":
               number=data.numerology[4];
              setdescription_svg_num(number);
            break;

            case "6":
             number=data.numerology[5];
              setdescription_svg_num(number);
            break;

            case "7":
             number=data.numerology[6];
              setdescription_svg_num(number);
            break;

            case "8":
             number=data.numerology[7];
              setdescription_svg_num(number);
            break;

            case "9":
             number=data.numerology[8];
              setdescription_svg_num(number);
            break;
          }
        }).change();
      }
    })
  }

  function findSuitableUsers(){
    var zodiac='';
    var numerology='';
    var mbti='';
      $('#zodiac').on('autocompletechange change', function () {
        zodiac=this.value;
      }).change();
      $('#numerology').on('autocompletechange change', function () {
        numerology=this.value;
      }).change();
      $('#mbti').on('autocompletechange change', function () {
        mbti=this.value;
      }).change();

    $.ajax({
      method: 'GET',
      data: {zodiac: zodiac , numerology: numerology, mbti: mbti.slice(0,4)},
      url: '/search',
      success:function(resp) {

      console.log(resp);
      $('.selection').hide();

      for (var i=0; i<resp.users.length;i++){
        var results='<li>Name:'+resp.users[i].name+'</li>';
        $('.foundusers').append(results);

      }

    }
  });


  }

  function setdescription_png(mbti){
    var description='<div class="col-md-2">'+'<img class="mbti_pic" src="/MBTI/'+mbti.name+'.png"/>'+'</div>'+'<div class="col-md-6">'+'<h2>'+mbti.name+'</h2>'+'<p>'+mbti.description+'</p>'+'</div>';
      $('.description').html('');
      $('.description').append(description);
  }

  function setdescription_svg_horo(horo){
    var description='<div class="col-md-2">'+'<img class="mbti_pic" src="/horo/'+horo.name+'.svg"/>'+'</div>'+'<div class="col-md-6">'+'<h2>'+horo.name+'</h2>'+'<p>'+horo.description+'</p>'+'</div>';
      $('.description').html('');
      $('.description').append(description);
  }

    function setdescription_svg_num(number){
    var description='<div class="col-md-2">'+'<img class="mbti_pic" src="/number/number-'+number.name+'.svg"/>'+'</div>'+'<div class="col-md-6">'+'<br>'+'<p>'+number.description+'</p>'+'</div>';
      $('.description').html('');
      $('.description').append(description);
  }


   setWelcomePage();

   Setpage();
   $('#findusers').click(function(e){
    e.preventDefault();
    findSuitableUsers();
   });



});


