
//document.addEventListener('DOMContentLoaded', function () {
  const timeout_1 = setTimeout(function () {
    var videoObjYep = document.getElementsByTagName('twitch-live-player')
    if (videoObjYep[0]) {
      videoObjYep[0].remove()
    }

    var chatObjYep = document.getElementsByTagName('twitch-live-chat')
    if (chatObjYep[0]) {
      chatObjYep[0].remove()
    }
  }, 1000)
  //clearTimeout(timeout_1)

  const timeout_2 = setTimeout(function () {
    // var videoObjYep = document.getElementsByTagName('twitch-live-player')
    // videoObjYep[0].remove()

    // var chatObjYep = document.getElementsByTagName('twitch-live-chat')
    // chatObjYep[0].remove()
    var videoObjYep = document.getElementsByTagName('twitch-live-player')
    if (videoObjYep[0]) {
      videoObjYep[0].remove()
    }

    var chatObjYep = document.getElementsByTagName('twitch-live-chat')
    if (chatObjYep[0]) {
      chatObjYep[0].remove()
    }
  }, 2000)
  //clearTimeout(timeout_2)
//})	

