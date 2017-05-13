$(document).ready(function() {

  $('.other').on('change', function() {
    if (this.value == "others") {
      $(this).next('input').removeAttr('disabled');
      $(this).next('input').focus();
    } else {
      $(this).next('input').val("");
      $(this).next('input').attr('disabled', 'disabled');
    }

  });
});
