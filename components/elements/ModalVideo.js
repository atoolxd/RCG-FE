var player = videojs("my-video", {
    controls: true,
    autoplay: false,
    preload: "auto",
    fluid: true,
    sources: [{
        src: "https://www.youtube.com/watch?v=gSjoX1c-ZWY&ab_channel=Go4x4",
        type: "video/mp4"
      },
      {
        src: "https://www.youtube.com/watch?v=gSjoX1c-ZWY&ab_channel=Go4x4",
        type: "video/webm"
      },
      {
        src: "https://www.youtube.com/watch?v=gSjoX1c-ZWY&ab_channel=Go4x4",
        type: "video/ogg"
      }
    ]
  });

  player.controlBar.addChild('PlayToggle');
player.controlBar.addChild('VolumeMenuButton');
player.controlBar.addChild('FullscreenToggle');

player.on('play', function() {
    console.log('Video is playing');
  });
  
  player.on('pause', function() {
    console.log('Video is paused');
  });
  
  player.on('ended', function() {
    console.log('Video has ended');
  });

  player.controlBar.addChild('ProgressControl', {
    vertical: true,
    width: 10,
    height: 80
  });
  
  player.controlBar.addChild('BigPlayButton', {
    width: 72,
    height: 72,
    fontSize: 36
  });