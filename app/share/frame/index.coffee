nav = require "./nav"
class Page extends Block
  constructor: ->
    @attrs(
      "currentPage"
      "page"
    )

  build: =>
    P.div().id("frame").C(
      P.div("main-header").C(
        nav.build()
      )
      @mainWrapper = P.div().id("main-wrapper")
    )

  update: =>
    @mainWrapper.reC @_page.build()
    @_page.render()
    

module.exports = new Page()
