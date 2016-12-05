window.json = JSON
require 'quite'
require 'box'
require 'under'
window.Hash = require 'Hash'
window.Router = require 'router'
# require 'under'

class Login extends Block
  build: =>
    P.div('form-box').C(
      P.div('header').C('Sign In')
      P.div().C(
        P.form().method('post').C(
          P.div('body bg-gray').C(
            P.div('form-group').C(
              @username = P.inputBox('form-control').name('username').placeholder('User ID')
            )
            P.div('form-group').C(
              @password = P.input('form-control').type('password').name('password').placeholder('password')
            ).onkeyup (e)=>
              if e.which is 13
                @submit.click()

          )
        )
        @submit = P.button('btn bg-olive btn-block').type('submit').C('Sign me in').onclick =>
          username = @username.value()
          password =  @password.value()

          _.login username, password, (err, out) ->
            origin = window.location.href.split("?path=")[1]
            if err
              toastr.error "login failed"
              return
            if origin 
              origin = decodeURIComponent origin
              window.location = origin
            else
              window.location = "/"
      )
      P.div('footer').C(
        P.p().C(P.a().href('#').C('I forgot my password'))
        P.a('text-center').href('#').C('Register a new membership')
      )
      
    )


window.onload = ->
  login = new Login()
  document.body.appendChild login.build().elmt
  
