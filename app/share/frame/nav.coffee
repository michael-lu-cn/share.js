items = 
  book: "笔记本"
  note: "笔记"
  todo: "TODO"
class Page extends Block
  constructor: ->
    @attrs(
      "page"
      "items"
    )

  build: =>
    P.nav('navbar navbar-default').C(
      P.div('container-fluid').C(
        P.div('navbar-header').C(
          toggleButton = P.button('navbar-toggle collapsed').type('button').dataAttr('toggle', 'collapse').dataAttr('target', '#bs-example-navbar-collapse-1').attr('aria-expanded', 'false').C(
            P.span('sr-only').C('Toggle navigation')
            P.span('icon-bar')
            P.span('icon-bar')
            P.span('icon-bar')
          )
          P.a('navbar-brand').href('#').C('社区管理')
        )
        @collapse = P.div('collapse navbar-collapse').id('bs-example-navbar-collapse-1').C(
          P.ul('nav navbar-nav').C(
            @items = for key, value of items
              P.li("nav-item").C(
                P.a().href("##{key}").C(value).onclick ->
              ).onclick ->
                $(".nav-item").removeClass "select"
                $(@).addClass("select")
                console.log toggleButton.attr("aria-expanded")
                if toggleButton.attr("aria-expanded") is "true"
                  toggleButton.click()
          )
          P.form('navbar-form navbar-left').role('search').C(
            P.div('form-group').C(
              @input = P.input('form-control').type('text').placeholder('user id').onkeyup (e)=>
                if e.which is 13
                  if not @input.value()
                    return
                  window.location= "#profile?id=#{@input.value()}"
                  window.location.reload()

            )
            P.button('btn btn-default').type('submit').C('检索').onclick =>
              if not @input.value()
                return
              window.location= "#profile?id=#{@input.value()}"
          )
          P.ul('nav navbar-nav navbar-right').C(
            P.li().C(
              P.a().href('#').C('退出').onclick =>
                localStorage.removeItem "token"
            )
            # P.li().C(
            #   P.a().href('login.html').C('切换用户')
            # )
          )
        )
      )
    )

module.exports = new Page()
