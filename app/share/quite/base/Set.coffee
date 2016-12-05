window.Set = class Set extends Block
  constructor: ->
    super
    @attrs(
      'itemClass'
      'size'
      'D'
      'setAttr'
      'spacePiece'
    )

  build: ->
    @_piece or @_piece = P.div('set')
    @_spacePiece or @_spacePiece = @_piece
    console.log 'piece', @_piece.elmt, @_spacePiece.elmt
    if @_size is undefined
      @_piece
    else
      @_spacePiece.C(
        for i in [1..@_size]
          item = new @_itemClass()
          @_members.push item
          item.build()

      )

  render: (@D)->
    @setData = @D
    if @_setAttr 
      @setData = @D[@_setAttr]

    @setData or @setData = []
    # console.log 'setdata', @setData
    for data, index in @setData
      if item = @_members[index]
        # console.log 'item', item
        if item._piece._hide
          item._piece.show()
        item.render(data)
      else
        item = new @_itemClass()
        item.build(data)
    for i in [index...@_size]
      @_members[i]._piece.hide()



