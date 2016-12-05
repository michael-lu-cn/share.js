window.RadioSet = class RadioSet extends Set
  constructor: ->
    super
    @_select = undefined

  build: ->
    super
    for member in @_members
      do (member) =>
        member.build().onclick =>
          @select @_members.indexOf(member)

  select: (index) ->
    if index is undefined
      @_select
    else
      if _.isObject index
        index = @_members.indexOf(index)
      if index isnt @_select
        @_members[index].select()
        if @_select or (@_select is 0)
          # console.log @_select
          @_members[@_select].unselect()
        @_select = index


