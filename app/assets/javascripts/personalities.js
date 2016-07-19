// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var data = {};
  if (!$('body').hasClass("statics secret")) { return false; }

  $.ajax({
    method: 'GET',
    url: '/personalities',
    success:function(resp) {
      window.testing = resp
      console.log(resp)
      data=resp;
    }
  })

  var mbti=$('#mbti').val();
  console.log(mbti);

})

