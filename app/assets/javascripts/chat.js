

  $(function() {

  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/messages/new', function (data) {
    alert(data);
  });
});


$("#chat").append("<%= escape_javascript render(@message) %>");
$("#new_message")[0].reset();

});