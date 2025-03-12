import { useParams, Link } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlayListInfoPage.css";

export function PlayListInfoPage() {
  const { playlistId } = useParams();
  const list = PLAYLISTS.filter((item) => item.id === Number(playlistId));

  const songsList = list[0];

  return (
    <div className="infoPage">
      <h2 className="infoPage__title">PlayListInfoPage</h2>
      <div className="infoPage__line">
        <span>Жанр:</span>
        <Link
          className="infoPage__btn"
          to={`/playlists?searchGenre=${songsList.genre}`}
        >
          {songsList.genre}
        </Link>
      </div>
      <div className="infoPage__line">
        <span>
          Название: <b>{songsList.name}</b>
        </span>
      </div>
      <hr />
      <div className="infoPage__list">
        {songsList.songs.map((song) => (
          <span className="infoPage__song" key={song}>
            - {song}
          </span>
        ))}
      </div>
    </div>
  );
}
