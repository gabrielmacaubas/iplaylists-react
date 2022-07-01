import { useState, useEffect } from 'react'

function CardPlaylists() {

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
  const mostrar = (play) => {
    console.log(play.songs);
    setSongs(play.songs)
  }

  return (
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
                <li key = {i} className={"list-group-item "+ele.id} id="data" onClick={() => mostrar(ele)}>{ele.name}</li>
                )) 
              }
              {  
                songs.map((ele, i) => (
                <li key = {i} className={"list-group-item "} id="data">{ele}</li>
                )) 
              }
            </ul>
        </div>
    </div>
  )
}

export default CardPlaylists;