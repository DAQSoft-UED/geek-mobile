/*
* @Author: hejianping
* @Date:   2018-05-22 09:41:05
* @Last Modified by:   hejianping
* @Last Modified time: 2018-05-22 11:03:54
*/
;(function () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
                                  window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime()
      console.log(currTime, lastTime)
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      var interval = currTime - lastTime
      var id = window.setTimeout(function () {
        callback(interval)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
})()
