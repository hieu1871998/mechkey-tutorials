import React from 'react';
import YouTube from 'react-youtube';

const YoutubeEmbed = ({ videoId }: { videoId: string }) => {
  const opts = {
    width: '100%',
    height: '100%'
  }

  return <YouTube videoId={videoId} opts={opts}/>
}

export default YoutubeEmbed;