###
# 页面间的通讯主要靠url, 也即 window.onhashchange 事件
#
# 页面内的操作，要在url上保存状态。直接调用即可，没必要使用事件，url trigger。
#
#
###
class RouterClass extends Quite
  constructor: ->
    @attrs(
      'currentHash'
      'currentPage'
      'hash'
      'frame'
      'index'
    )

  changePage: =>
    @currentHash @hash()
    page = null
    # console.log "pages/#{@_hash.pageName()}"
    try 
      page = require "pages/#{@_hash.pageName()}"
    catch e
      # console.error 'page not found', e
      page = require "pages/#{@_index}"
    # console.log {page}
    @currentPage page
    @frame().page(page).update()
    # navName = page._navName or @_hash.pageName()
    if page.onload
      page.onload()
    @changeParams()

  changeParams: =>
    console.log "change params"
    # @currentPage().render()

  changeParam: =>

  change: =>
    if not @hash()
      return
    if not @currentHash()
      @changePage()
    else if @hash().pageName() isnt @currentHash().pageName()
      @changePage()
    else
      @changeParams()


module.exports = Router = new RouterClass()
frame = require './frame'
window.onhashchange = =>
  # console.log 'change'
  pageName = new Hash().parse().pageName()
  # if not pageName or (pageName[0] is '_')
  #   return
  Router.hash new Hash().parse()
    .change()
  # frame.init pageName
