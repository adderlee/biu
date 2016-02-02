var initCCL = function() {
  var cm = new CommentManager($('#ccl-stage').get(0));
  cm.init();
  cm.start();
  cm.options.global.scale = 2
  return cm;
};

function launchFullScreen(element) {
  CM.setBounds();
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

var loadVideo = function(url) {
  var vp = $('#video-player');
  player = vp.get(0);
  player.pause();
  player.src = ''; 
  player.load(); 
  
  var pic = $('#prg-picture')[0];
  pic.hidden = true;
  
  player.src = url; 
  player.load(); 
  player.hidden = false;
  player.play();
};

var loadPicture = function(url) {
  var pic = $('#prg-picture')[0];
  pic.src = url;
  var player = $('#video-player')[0];
  player.pause();
  player.src = ''; 
  player.load(); 
  player.hidden = true;
  pic.hidden = false;
};

$(document).ready(function() {
  window.CM = initCCL();

  var pic = $('#prg-picture')[0];
  pic.hidden = true;
  var wrapper = $("#ccl-wrapper").get(0);
  wrapper.addEventListener("dblclick", function(e) {
    launchFullScreen(wrapper);
  });
});

var socket = io(); //开启流

socket.on('load-movie', function(cmd) {
  loadVideo(cmd.file);
});

socket.on('load-picture', function(cmd) {
  loadPicture(cmd.file);
});

socket.on('comment-msg', function(data) {
  CM.send(data);
});
