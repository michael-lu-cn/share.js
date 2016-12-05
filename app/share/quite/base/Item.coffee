window.Item = class Item extends Block 
  constructor: ->
    @attrs(
      'set'
      'linker'
    )
    @_selectClassName = 'select'

  select: ->
    @piece().addClass @_selectClassName
  unselect: ->
    @piece().removeClass @_selectClassName
  
  trigger: ->
    # console.log @link
    @linker().click()
