const renderPlayer = function(music) {
  const template = `
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>RealShuffle</title>
      <link rel="stylesheet" href="music.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      />
    </head>
    <body>
      <div id="app">
        <div class="music-app">
          <div class="music-head">
            <h2 class="music-title">${music.title}</h2>
            <h4 class="music-artist">${music.artist}</h4>
          </div>
          <div class="music-album">
            <img
              src="${music.cover}"
              alt="앨범 아트"
            />
          </div>
          <div class="music-control">
            <audio src="${music.audio}" controls autoplay></audio>
            <div class="music-time">
              <div class="time elapsed">00:00</div>
              <div class="time-bar"></div>
              <div class="time passed">01:30</div>
            </div>
            <div class="control-bar">
              <div class="prev"><i class="fas fa-backward"></i></div>
              <div class="play"><i class="far fa-play-circle"></i></div>
              <div class="next"><i class="fas fa-forward"></i></div>
            </div>
            <div class="option-bar">
              <div class="repeat"><i class="fas fa-redo"></i></div>
              <div class="volume">
                <div class="mute"><i class="fas fa-volume-up"></i></div>
                <div class="volume-bar">
                  <div class="volume-control"></div>
                </div>
              </div>
              <div class="shuffle">
                <i class="fas fa-random"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
