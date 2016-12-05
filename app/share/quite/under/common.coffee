module.exports =
  jsonParse: (str) ->
    try 
      parsedStr = JSON.parse(str)
    catch e
      return str
    parsedStr

  parse: (str) ->
    try 
      str = JSON.parse(str)
    catch e
      return str
    str
  isjson: (str) ->
    try 
      JSON.parse(str)
    catch e
      return false
    true
  merge:(subject, guest) ->
    subject
      
  stringObject: (str) ->
    obj = {}
    items = str.split '\n'
    for item in items
      [key, value] = item.split /\s+/
      obj[key] = value
    obj

  stringArray: (str) ->
    str.split /\s+/
  clearSelection: ->
    if(document.selection && document.selection.empty) 
        document.selection.empty()
    else if(window.getSelection) 
        sel = window.getSelection()
        sel.removeAllRanges()
  move: (array, current, targetIndex) ->
    if typeof current isnt 'number'
      current = array.indexOf(current)
      # console.log current
    if targetIndex < 0
      targetIndex = 0
    # if targetIndex >= array.length
    array.splice targetIndex, 0, array.splice(current, 1)[0]

  insert: (array, item, position) ->
    array.splice position, 0, item
  keycode: (num) ->
    {keycode_dict} = require './constants'
    keycode_dict[num]

  url: (url) ->
    new Url url

  ajax: (url, params, cb)->
    params = 
      "params=#{json.stringify params}"
    # done = (data, status) =>
    #   console.log 'data', data
    #   @D = data
    #   console.log 'get', @D
    done = (data, status) =>
      if data.error
        console.log data.error
      cb null, data.result
    fail = ->
      console.log 'error'
    $.ajax(
      method: 'post'
      url: url
      data: params
      dataType: 'json'
      success: done
      error: fail
      async: false
    )
  keydown: (character) ->
    evt = document.createEvent("KeyboardEvent")
    init = evt.initKeyEvent || evt.initKeyboardEvent
    init "keydown", true, true, window,
      0, 0, 0, 0, 0, character.charCodeAt(0)
    document.body.dispatchEvent evt

class Url
  constructor: (@url) ->

  get: (attrName) ->
    $.url(attrName, @url)

