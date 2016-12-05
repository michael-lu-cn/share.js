window.Quite = class Quite 
  constructor: ->
    @_attrs = []
  attrs: (attrs...) ->
    @_attrs or @_attrs = []
    for attr in attrs
      do (attr) =>
        if attr instanceof Array
          @attrs attr...
        else 
          @_attrs.push attr
          @[attr] = (attrValue...) ->
            if attrValue.length is 0
              @["_#{attr}"]
            else if attrValue.length is 1
              @["_#{attr}"] = attrValue[0]
              @
            else
              @["_#{attr}"] = attrValue
              @


# console.log Quite
# class Person extends Quite
#   constructor: ->
#     super
#     @attrs(
#       'a'
#       'b'
#     )
#
# p = new Person()
# console.log p.a('c')
# console.log p.b('d')
  # Block: require 'slab/Block'
  # constructor: (expand) ->
  #   if expand && expand instanceof Object
  #     Object.keys(expand).forEach (key) =>
  #       @[key] = expand[key]
  #
  # proxy: (obj) ->
  #   _.functions(obj).forEach (name)=>
  #     @[name] = (args...) ->
  #       obj[name](args...)
  #
