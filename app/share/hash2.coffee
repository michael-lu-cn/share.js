partSpliter = "|"
paramSpliter = "&"
nameSpliter = "?"
valueSpliter = "="
defaultPartName = "page"

rewriteParam = (hash, paramName, value) ->
  if value is undefined
    params = paramName
    if _.isObject params
      return params
    return {}

  params = hash.params()
  if paramName.indexOf(".") > 0
    [partName, paramName] = paramName.split "."
    params[partName][paramName] = value
  else
    if value instanceof Object
      params[paramName] = value
    else
      params[defaultPartName][paramName] = value
  params

class HashClass extends Quite
  constructor: ->
    @attrs(
      "params"
      "hashStr"
    )

  parse: =>
    if not @_hashStr
      if not window.location.hash
        return @
      @_hashStr = window.location.hash[1..]

    partParams = @_hashStr.split partSpliter
    partParams = _.compact partParams
    @_params = {}
    for partParam in partParams
      [name, params] = partParam.split nameSpliter
      if not params
        continue
      params = params.split paramSpliter
      params = for param in params
        [key, value] = param.split valueSpliter
        if not value 
          continue
        value = _.jsonParse value
        [key, value]
      params = _.object params
      @_params[name] = params
    @

  stringify: =>
    @_hashStr = ""
    if not @_params
      return 
    partStrs = for name, param of @_params
      paramStrs = for key, value of param
        "" + key + valueSpliter + value
      paramStrs = paramStrs.join paramSpliter
      "" + name + nameSpliter + paramStrs
    @_hashStr = "#" + partStrs.join partSpliter
    # @
  set: (paramName, value) =>
    if paramName is undefined
      return @stringify()
    @params(rewriteParam @, paramName, value).stringify()

Hash = new HashClass()
Hash = _.extend Hash, 
  page: (pageName) ->
    new HashClass().params param=
      page:
        name: pageName
  init: ->
    new HashClass().parse()
  set: (paramName, value) ->
    hash = new HashClass().parse()
    params = {}
    if paramName isnt undefined
      params = rewriteParam hash, paramName, value
    hash.params(params).stringify()

module.exports = Hash

# sample = "#page?name=pool&id=3&size=5&position=imge3|table?pageSize=10&pageNum=2|tab?select=3|"
#  {
# 	"page": {
# 		"name": "pool",
# 		"id": "3",
# 		"size": "5",
# 		"position": "imge3"
# 	},
# 	"table": {
# 		"pageSize": "10",
# 		"pageNum": "2"
# 	},
# 	"tab": {
# 		"select": "3"
# 	}
# }
