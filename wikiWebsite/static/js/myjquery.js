$(function() {

    $('.search-icon').on('click', function() {
      $(this).hide();
      $('.search-bar-list-item').fadeIn(200);
      $('.search-bar').focus();
      
      return false;
    });

    $('.search-bar').focusout(function() {
        $('.search-bar-list-item').fadeOut(100);
        setTimeout(function() {
            $('.search-icon').fadeIn(100);
        }, 100);
    });

    // Hide and show password text
    $('.bi-eye-fill').on('click', function() {
        $(this).hide();
        $('.bi-eye-slash-fill').show()
        $('#password').attr('type', 'text');
    });
    $('.bi-eye-slash-fill').on('click', function() {
        $(this).hide();
        $('.bi-eye-fill').show()
        $('#password').attr('type', 'password');
    });
});