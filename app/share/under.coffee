fail = (jqXHR, textStatus) ->
  console.log 'error',jqXHR, textStatus
_.extend _,
  formatDate: (date) ->
    date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()) + ' ' + date.getHours() + '点'
  getToken: ->
    token = localStorage.getItem 'token'
    if token
      token
    else
      console.log 'not token'
      href = encodeURIComponent(window.location.href)
      console.log {href}
      window.location = "login.html?path=#{href}"
      return


  appGet: (path, params, cb) =>
    fail = (jqXHR, textStatus) ->
      console.log 'error',jqXHR, textStatus
      cb "err"
    done = (data, status) ->
      if data.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    $.ajax(
      method: 'get'
      url: "#{Box.appUrl}#{path}"
      data: params
      # dataType: 'json'
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: fail
      # async: false
    )
  get: (path, params, cb) =>
    done = (data, status) ->
      if data?.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    $.ajax(
      method: 'get'
      url: "#{Box.dataUrl}#{path}"
      data: params
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: fail
    )
  delete: (path, params, cb) =>
    done = (data, status) ->
      if data?.error
        console.log '数据请求错误', data.error
        cb new Error("an error"), {}
      else
        cb null, data
    $.ajax(
      method: 'delete'
      url: "#{Box.appUrl}#{path}"
      data: params
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: done
    )
  post: (path, params, cb) =>
    localFail = (jqXHR, textStatus) ->
      console.log 'error',jqXHR, textStatus
      cb null
      # console.log 'error',jqXHR, textStatus
    done = (data, status) ->
      # data = json.parse data
      if data.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    url = path
    if path.indexOf('.') < 0 
      url = "#{Box.dataUrl}#{path}" 
    $.ajax(
      method: 'post'
      url: url
      data: params
      # dataType: 'json'
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: localFail
      # async: false
    )

  mallGet: (path, params, cb) =>
    done = (data, status) ->
      if data?.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    # console.log 'box url', Box, Box.dataUrl
    $.ajax(
      method: 'get'
      url: "#{Box.mallUrl}#{path}"
      data: params
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: fail
    )
  mallPost: (path, params, cb) =>
    localFail = (jqXHR, textStatus) ->
      console.log 'error',jqXHR, textStatus
      cb null
      # console.log 'error',jqXHR, textStatus
    done = (data, status) ->
      # data = json.parse data
      if data.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    # url = path
    # if path.indexOf('.') < 0 
    url = "#{Box.mallUrl}#{path}" 
    $.ajax(
      method: 'post'
      url: url
      data: params
      # dataType: 'json'
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: localFail
      # async: false
    )

  put: (path, params, cb) =>
    params = json.stringify params
    done = (data, status) ->
      # data = json.parse data
      if data?.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    console.log 'box url', Box, Box.dataUrl
    $.ajax(
      method: 'put'
      contentType: 'application/json; charset=utf-8'
      url: "#{Box.dataUrl}#{path}"
      data: params
      dataType: 'json'
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: fail
      # async: false
    )

  appPost: (path, params, cb) =>
    done = (data, status) ->
      # data = json.parse data
      if data.error
        console.log '数据请求错误', data.error
        cb new Error("an error"), {}
      else
        cb null, data
    console.log 'box url', Box, Box.dataUrl
    $.ajax(
      method: 'post'
      url: "#{Box.appUrl}#{path}"
      data: params
      # dataType: 'json'
      success: done
      headers: 
        'Authorization': "Bearer " + _.getToken()
      error: done
      # async: false
    )
  data: (path, params, cb)=>
    params = json.stringify params
    done = (data, status) ->
      data = json.parse data
      if data.error
        console.log '数据请求错误', data.error
        # _.toast '数据请求错误', 2000
      else
        cb null, data.result

    url = path
    if path.indexOf('.') < 0 
      url = "#{Box.dataUrl}#{path}" 
    $.ajax(
      method: 'post'
      url: url
      data: params
      # dataType: 'json'
      success: done
      error: fail
      # async: false
    )

  loginPost: (url, params, cb) =>
    loginFail = (jqXHR, textStatus) ->
      console.log 'error',jqXHR, textStatus
      cb jqXHR
    done = (data, status) ->
      # data = json.parse data
      if data.error
        console.log '数据请求错误', data.error
      else
        cb null, data
    $.ajax(
      method: 'post'
      url: url
      data: params
      # dataType: 'json'
      success: done
      error: loginFail
      # async: false
    )
  login: (username, password, cb) =>
    # url = 'https://oauthtest.rjft.net/api/v2/login'
    params = 
      username: username
      password: password
      deviceID: "1234212342"
      deviceType: "ios"
      clientVersion: "1.1.2"
    _.loginPost Box.authUrl, params, (err, out) ->
      if err
        return cb err
      if out and out.token
        localStorage.setItem 'token', out.token
        cb null
      else
        cb out.body
  updateActivity: (activity,param, cb) =>
    if param.is_reject is true
      param.weight = -1000
    else if param.is_reject is false
      param.weight = 0
    delete param.is_reject
    path = "activities/#{activity.id}"
    _.put path, param, cb


  updateRoster: (userId, userType, isTop=false, expireTime, cb) =>
    _.mallPost "userPool/edit.json", {userId, userType, isTop, expireTime}, cb

  getPopUsers:(params, cb) =>
    console.log {params}
    if ["stranger", "global"].indexOf(params.userType) >= 0
      params = 
        type: params.userType
        page: (params.offset / params.limit) + 1
        pageSize: params.limit
      _.mallGet "roster/list.json", params, (err, out) ->
        console.log {out}
        cb null, out.object.list

    else
      _.mallGet "userPool/queryList.json", params, (err, out) ->
        cb null, out.list

  getRosters: (userType, isTop, cb) =>
    offset = 0
    limit = 100
    params = {userType, isTop, offset, limit}
    _.mallGet "userPool/queryList.json", params, (err, out) ->
      cb null, out.list
  defaultImg: (profile) =>
    if not profile
      return
    if not profile.avatar_url or profile.avatar_url.indexOf("null")>0
      profile.avatar_url = "http://source.rjfittime.com/1ffda870265211e6a7f7bbfa18ac56c6"

  populateProfiles: (ids, cb) =>
    console.log "populateProfiles", ids
    params = 
      id: ids
    _.appGet "v3/list-user", params, (err, users) =>
      _.appGet "statistics/user/batch", params, (err, statistics) =>
        console.log {statistics}
        profiles = for user, index in users
          profile = user.user
          imgs = user.activities
          profile.imgs = []
          if imgs?.length
            imgs = for img in imgs
              img.image = [img.image]
              img
            imgs = _.sortBy imgs, (img) =>
              1 / new Date(img.create_time).valueOf()
            profile.imgs = imgs
          statistic = statistics[index]
          statistic.registDay = dateFns
            .differenceInCalendarDays new Date(), new Date(profile.create_time), new Date()
          if profile.imgs.length > 0
            statistic.lastPhotoTime = dateFns
              .differenceInCalendarDays new Date(), new Date(profile.imgs[0].create_time)
          profile.statistic = statistic
          profile
        console.log {profiles}
        cb null, profiles

