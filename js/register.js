$('#register-button').click(function(event){
  event.preventDefault()

  let email = $('#email').val()
  let password = $('#password').val()
  let confirmPassword = $('#confirm-password').val()
  let error = false

  if (email === '') {
    $('#email').addClass('is-invalid')
    error = true
  } else {
    $('#email').removeClass('is-invalid')
  }

  if (password === '') {
    $('#password').addClass('is-invalid')
    error = true
  } else {
    $('#password').removeClass('is-invalid')
  }

  if (confirmPassword !== password || confirmPassword === '') {
    $('#confirm-password').addClass('is-invalid')
    error = true
  } else {
    $('#confirm-password').removeClass('is-invalid')
  }

  if (!error) {
    $('#register-form').submit()
  }
})