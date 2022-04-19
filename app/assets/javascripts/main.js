// Validation added on fields for login page
$(document).on('turbolinks:load', function() {
    $('.login_form').validate({
      errorElement: 'span',
      rules: {
        'user[email]': {
          required: true,
          email: true
        },
        'user[password]': {
          required: true
        }
      },
      messages: {
        'user[email]': {
          required: 'Please enter user email',
          email: 'Please enter valid user email'
        },
        'user[password]': {
          required: 'Please enter user password'
        }
      }
    }); 
});