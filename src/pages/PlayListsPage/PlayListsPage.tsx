import { Link, useParams, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";

import "./PlayListsPage.css";
import { ChangeEvent } from "react";

export function PlayListsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({
      searchGenre: value.toLowerCase(),
     
    });
  };

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({
      searchName: value.toLowerCase(),
      
    });
  };

  const searchGenre = searchParams.get("searchGenre") || "";
  const searchName = searchParams.get("searchName") || "";

  const filterList = PLAYLISTS.filter((item) => {
    return (
      item.genre.toLowerCase().includes(searchGenre.toLowerCase()) &&
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );
  });

  return (
    <div className="playList">
      <h2>PlayListsPage</h2>
      <form name="filterList">
        <div className="playList__input">
          <span>Жанр: </span>
          <input
            type="search"
            value={searchGenre}
            onChange={handleSearchGenre}
          />
        </div>
        <div className="playList__input">
          <span>Название: </span>
          <input type="search" value={searchName} onChange={handleSearchName} />
        </div>
      </form>
      <div className="list">
        {filterList.length ? (
          filterList.map((item) =>
            item.songs.length ? (
              <Link
                className="listLink"
                to={`/playlists/${item.id}`}
                key={item.id}
              >
                {item.name}
              </Link>
            ) : null
          )
        ) : (
          <span>Список пуст</span>
        )}
      </div>
    </div>
  );
}
