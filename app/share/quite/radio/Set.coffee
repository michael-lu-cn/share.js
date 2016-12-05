module.exports = class Set extends Block
  constructor: ->
    @attrs(
      'container'
      'items'
      'statusClassName'
    )
  build: ->
    @statusClassName or @statusClassName = 'select'
    @_piece = @container().C(
      for item, index in @items()
        item.set @
        itemPiece = item.build()
        item.triggerPiece or= itemPiece
        if index is 0
          @_select = item
          item.piece().addClass @statusClassName()
        do (item) =>
          item.triggerPiece().onclick =>
            @select item

        item.piece()
    )
    @_piece

  select: (item) ->
    if item is undefined
      @_select
    else
      if item isnt @_select
        @_select.piece().removeClass @statusClassName()
        item.piece().addClass @statusClassName()
        @_select = item
      @



