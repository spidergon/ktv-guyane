import 'node_modules/video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

export default function HeroPlayer({ src }) {
  return (
    <Player playsInline autoPlay muted aspectRatio="16:9">
      <BigPlayButton position="center" />
      <source src={src} />
    </Player>
  );
}
