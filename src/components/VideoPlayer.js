import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const opts = {
    width: "100%",
    height: "270px",
    playerVars: {
      autoplay: 1, // 자동 재생 여부
      modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
      loop: 1, // 반복 재생
      playlist: "", // 반복 재생을 위한 플레이리스트, 기본값으로 비디오 ID 넣을 필요 없음
    },
  };

  const onReady = (e) => {
    e.target.mute(); // 소리 끔
  };

  return (
    <div>
      <YouTube
        videoId="VvIPCfftxLM" // 동영상 주소
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        videoId="bnRxcdAx958" // 동영상 주소
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        videoId="piaYBZiUBHQ" // 동영상 주소
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
};

export default VideoPlayer;
