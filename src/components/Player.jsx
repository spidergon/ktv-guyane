import { useEffect, useState } from 'react';
import { Player, BigPlayButton } from 'video-react';
import { vidUrl } from '@tools/constants.js';
import 'node_modules/video-react/dist/video-react.css';

export default function HeroPlayer({ id }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (player) player.load();
  }, [id]);

  return (
    <Player playsInline autoPlay muted aspectRatio="16:9" ref={(p) => setPlayer(p)}>
      <BigPlayButton position="center" />
      <source src={`${vidUrl}${id}.mp4`} />
    </Player>
  );
}
