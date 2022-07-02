import { useRef, useEffect, useState } from "react"
import { Offcanvas } from "bootstrap"

function PlaylistOffCanvas() {
    const offcanvasref = useRef(null)
    const handleShow = () => {
        const offcanvas = new Offcanvas(offcanvasref);
        offcanvas.show();
    }
    const api = 'https://json-server.gabrielmacaubas.repl.co';
    
    async function readAll() {
        const res = await fetch(`${api}/data`);
        
        return await res.json();
  
    };

    const handleSubmitPlaylist = async function(e) { 
        e.preventDefault();
        
        const temp = {
            "name": e.target.inputPlaylist.value,
            "songs": []
        }
        
        const res = await fetch(`${api}/data`, {
            method: 'post',
            body: JSON.stringify(temp),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
             },
        });
        
        e.target.reset();

        return await res.json();
    }

    const handleSubmitSong = async function(e) {
        e.preventDefault();
        
        const all = await readAll();
        const songs = all[e.target.select.selectedIndex].songs;
        
        const temp = {
            "name": e.target.select.value,
            "songs": [...songs, e.target.inputSong.value]
        }
        
        const res = await fetch(`${api}/data/${e.target.select.selectedIndex+1}`, {
            method: 'put',
            body: JSON.stringify(temp),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
        });
        

        e.target.reset();
    }

    const [playlistOptions, setPlaylistOptions] = useState([])

    useEffect(() => {
        const loadPlaylistOptions = async () => {
          const playlistFetch = await fetch('https://json-server.gabrielmacaubas.repl.co/data');
          const dataPlaylists = await playlistFetch.json();
          const playlists = [];

          for (const playlist of dataPlaylists) {
            playlists.push(playlist)
          }
    
          setPlaylistOptions(playlists);
    
        };

        loadPlaylistOptions();
        
    }, []) 

    return (
        <div 
            ref={offcanvasref} 
            className="offcanvas offcanvas-end" 
            tabIndex="-1" id="offcanvasRight" 
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header text-dark">
                <h5 id="offcanvasRightLabel ">New Playlist</h5>
                <button 
                    type="button" 
                    className="btn-close text-reset" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"
                >
                </button>
            </div>
            <div className="offcanvas-body text-dark">
                <form id="formPlaylist" onSubmit={handleSubmitPlaylist}>
                    <div className="mb-3">
                        <label 
                            htmlFor="title" 
                            className="form-label"
                        >
                        Playlist's name: 
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputPlaylist" 
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            id="submitPlay" 
                            className="btn btn-primary border text-dark bg-lightdark"
                        >
                        Submit playlist
                        </button>
                    </div>
                </form>
                <form id="formSong" onSubmit={handleSubmitSong}>
                    <div className="my-3">
                        <label htmlFor="title" className="form-label">Song's name: </label>
                        <input type="text" className="form-control" id="inputSong" />
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="select" 
                            className="form-label"
                        >
                        Select Playlist
                        </label>
                        <select id="select" className="form-select">
                            {  
                                playlistOptions.map((ele, i) => (
                                <option key = {i} id={ele.id}>{ele.name}</option>
                                )) 
                            }
                        </select>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="btn btn-primary border text-dark bg-lightdark"
                        >
                        Submit song
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PlaylistOffCanvas;