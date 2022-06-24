import { useState } from 'react';
import Player from '@components/Player.jsx';
import { vidUrl } from '@tools/constants.js';
import Styles from '@styles/Playlist.module.css';

export default function HeroPlaylist({ sources, title }) {
  const [videoId, setVideoId] = useState(sources[0].id);

  return (
    <div className={`${Styles.container} container grid`}>
      <div>{sources && <Player id={videoId} />}</div>
      <div className={Styles.playlist}>
        <h2>{title}</h2>
        <div>
          {sources &&
            sources.map(({ title, channel, id }) => (
              <button
                key={id}
                className={`flex ${Styles.item}${id === videoId ? ` ${Styles.active}` : ''}`}
                onClick={() => setVideoId(id)}
                title={`${title} - ${channel}`}
              >
                <div>
                  <img
                    src={`${vidUrl}${id}.jpg`}
                    // src={thumbnail_120_url}
                    alt={`${title} - ${channel}`}
                    width="120"
                    height="70"
                    loading="lazy"
                  />
                </div>
                <div className={`${Styles.content} flex`}>
                  <p>{title}</p>
                  <span>{channel}</span>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
