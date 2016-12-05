window.Box = {}
if window.location.href.indexOf(':3') > 0 
  # _.extend Box, 
  #   env: 'dev'
  #   dataUrl: 'http://localhost:9002/'
  #   oldAdminUrl: 'http://localhost:9002/v2/index.html#'
  #   # appUrl: 'https://test.rjft.net/api/v2/'
  #   appUrl: 'https://test.rjft.net/api/v2/'
  #   authUrl: 'https://oauthtest.rjft.net/api/v2/login' 
  # _.extend Box, 
  #   env: 'dev'
  #   mallUrl: "http://mallmstest.rjfittime.com/"
  #   dataUrl: 'https://test.rjft.net/api/v2/'
  #   appUrl: 'https://test.rjft.net/'
  #   authUrl: 'https://oauthtest.rjft.net/api/v2/login'
  _.extend Box, 
    env: 'prod'
    mallUrl: "http://mallms.rjfittime.com/"
    dataUrl: 'https://api.rjft.net/api/v2/'
    appUrl: 'https://api.rjft.net/'
    authUrl: 'https://oauth.rjft.net/api/v2/login'

else if window.location.href.indexOf('test.') >= 0
  _.extend Box, 
    env: 'test'
    mallUrl: "http://mallmstest.rjfittime.com/"
    dataUrl: 'https://test.rjft.net/api/v2/'
    appUrl: 'https://test.rjft.net/'
    authUrl: 'https://oauthtest.rjft.net/api/v2/login'
else
  _.extend Box, 
    env: 'prod'
    mallUrl: "http://mallms.rjfittime.com/"
    dataUrl: 'https://api.rjft.net/api/v2/'
    appUrl: 'https://api.rjft.net/'
    authUrl: 'https://oauth.rjft.net/api/v2/login'
