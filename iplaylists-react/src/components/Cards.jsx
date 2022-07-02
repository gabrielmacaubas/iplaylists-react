import { useState, useEffect } from 'react'

function Cards() {

  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const loadPlaylist = async () => {
      const playlist = await fetch('https://json-server.gabrielmacaubas.repl.co/data');
      const dataPlaylist = await playlist.json();

      setPlaylist(dataPlaylist);

    };
    loadPlaylist();
    
  }, []) 

  const [songs, setSongs] = useState([])
  const showSongs = (play) => {
    setSongs(play.songs)
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
      <div className="col">
          <div className="card text-light bg-dark mx-auto border-2 border-warning">
              <div className={"card-header Playlists-title"}>
              <p id="PlaylistsTitle">Playlists</p>
                  <button
                      className="btn btn-light border-2 border-warning fw-bold float-end text-light"
                      type="button"
                      id="btnNewCard"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                  >
                      +
                  </button>
              </div>
              <ul className="list-group list-group-flush" id="playlists">  

                {  
                  playlist.map((ele, i) => (
                  <li key = {i} className={"list-group-item "+ele.id} id="data" onClick={() => showSongs(ele)}>{ele.name}</li>
                  )) 
                }
              </ul>
          </div>
      </div>
      <div className="col">
        <div className="card text-light bg-dark mx-auto border-2 border-warning">
            <div className="card-header Songs-title">
            <p id="SongsTitle">Songs</p>
                <button
                    className="btn btn-light border-2 border-warning fw-bold float-end text-light"
                    type="button"
                    id="btnNewCard"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    +
                </button>
            </div>
            <ul className="list-group list-group-flush" id="songs">
              {  
                songs.map((ele, i) => (
                <li key = {i} className={"list-group-item "} id="data">{ele}</li>
                )) 
              }
            </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Cards;