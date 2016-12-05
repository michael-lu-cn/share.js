window.Block = class Block extends Quite
  constructor: ->
    super
    @attrs(
      'page' # many member may have a reference of the page for in case usage
      'piece' # every block must have a piece
      'members' # a block may have some members
    )
    @_members = []
  D: {}
  show: ->
    @_piece or @build()

  render: (@D)->
    if @D is undefined
      @D = {}
    # console.log 'render', @_piece.elmt, @D
    # @update()
    for member in @_members
      member.render @D
    # @params || @params = {}
    # if @needAcnt
    #   @params.acntId = Bus.user.id
    #   @params.acntToken = Bus.user.token
    #
    # console.log @params
    # # console.log @dataSrc
    # console.log 'src', @dataSrc
    # if not @dataSrc
    #   return
    # done = (data, status) =>
    #   console.log 'data', data
    #   @D = data
    #   console.log 'get', @D
    # fail = ->
    #   console.log 'error'
    # $.ajax(
    #   url: @dataSrc
    #   data: @params
    #   dataType: 'json'
    #   success: done
    #   error: fail
    #   async: false
    # )


  # url: (name)->
  #   @_page || @_page = ''
  #   "##{@_page.config.name}/#{name}"

  remove: ->
    @piece.remove()
  
  # refresh: (attr)->
  #   if attr
  #     holder = $('.pieceHolder', @piece.elmt)[0]
  #     holder.innerText = @D[attr]
  #   else
  #     # model = @getTemplateData()
  #     element = @piece.elmt
  #     holders = element.getElementById('.pieceHolder')
  #     elmts = []
  #     for elmt in holders
  #       elmts.push elmt
  #
  #     if element.className?.indexOf('pieceHolder') != -1
  #       elmts.push element
  #
  #     for elmt in elmts
  #       attr = elmt.getAttribute('data-holderid')
  #       attrView = @["#{attr}View"]
  #       # if attrView?(@get attr)
  #       #   elmt.innerHTML = attrView(@get attr).elmt?.outerHTML
  #       # else
  #       elmt.innerText = @D[attr]




  C: (args...) ->
    @piece.C args...
    @

  build: ->
    P.div('block')

  update: (data)->
    # console.log 'update', @_piece.elmt, @D
    if data isnt undefined
      @D = data
    # model = @getTemplateData()
    element = @_piece.elmt
    holders = element.getElementsByClassName('pieceHolder')
    elmts = []
    for elmt in holders
      elmts.push elmt
    if element.className?.indexOf('pieceHolder') != -1
      elmts.push element

    for elmt in elmts
      attr = elmt.getAttribute('data-holderid')
      if attr is 'D'
        @render()


      attrView = @["#{attr}View"]
      if attrView?(@D[attr])
        elmt.innerHTML = attrView(@D[attr]).elmt?.outerHTML
      else
        # console.log 'elmt', elmt, attr, @D[attr]
        if attrName=elmt.getAttribute('data-attr')
          elmt.setAttribute attrName, @D[attr]
        else
          elmt.innerText = @D[attr]
    @
