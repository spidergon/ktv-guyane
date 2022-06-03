import 'node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';

export default function HeroPlayer() {
  return (
    // <Player playsInline autoPlay muted fluid={false} height="100%" width="100%">
    <Player playsInline autoPlay muted aspectRatio="16:9">
      <source src="https://res.cloudinary.com/cserviusprod/video/upload/v1654282172/ktv/vids/WhatsApp_Video_2022-05-21_at_09.22.03.mp4" />
    </Player>
  );
}
