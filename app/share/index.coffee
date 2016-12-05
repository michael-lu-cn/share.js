window.json = JSON
require './quite'
require './box'
require './under'
window.Hash = require './hash'
window.Router = require './router'
frame = require './frame'
# frame = require "pages/nav"
window.onload = ->
  document.body.insertBefore frame.build().elmt, document.body.childNodes[0]
  # nav = responsiveNav(".nav-collapse")
  # console.log "ok"
  Router.frame(frame).index('todo')
  Router.hash(new Hash().parse()).change()
  # pageName = new Hash().parse().pageName()
  # frame.init pageName
