class Hash extends Quite
  constructor: ->
    @attrs(
      'pageName'
      'params'
      'hashStr'
    )

  parse: =>
    if not @_hashStr
      if window.location.hash
        @_hashStr = window.location.hash[1..]
      else
        return @

    [@_pageName, rest] = @_hashStr.split '?'
    @_params = {}
    if rest
      args = rest.split '&'
      params = for arg in args
        [key, value] = arg.split '='
        console.log {value}
        value = _.jsonParse value
        console.log {value}
        [key, value]
      @_params = _.object params
    @

  param: (key, value) =>
    @_params or= {}
    if value is undefined
      value = @_params[key]
      return _.jsonParse value
    if _.isObject value
      value = JSON.stringify value
    @_params[key] = value
    @

  mergeParams: (params) =>
    _.extend @_params, params
    @

  stringify: =>
    @_pageName or= 'courses'
    @_params or= {}
    @_hashStr = "##{@_pageName}"
    if not _.isEmpty(@_params)
      paramStrs = for key, value of @_params
        "#{key}=#{value}"
      @_hashStr = "#{@_hashStr}?#{paramStrs.join '&'}"
    @_hashStr

  trigger: =>
    @stringify()
    window.location.hash = @_hashStr
Hash.reload = ->
  new Hash().parse().trigger()
module.exports = Hash
