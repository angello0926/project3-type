$(document).ready(function(){
  var data = {};
  if (!$('body').hasClass("statics secret")) { return false; }

  $.ajax({
    method: 'GET',
    url: '/user',
    success:function(resp) {
      window.testing = resp
      console.log(resp)
      data=resp;
    }
  })
})

