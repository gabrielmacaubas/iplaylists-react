import { useState } from 'react'
import './App.css'


function App() {

  return (
    <div className="bg-dark" id="all">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">IPlaylists</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
          
        </div>
    
      </nav>
      <div className="container ">
        <h2 className="text-center my-5">
          Add and Check out Your Playlists Down Here!
        </h2>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header text-dark">
            <h5 id="offcanvasRightLabel ">New Playlist</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body text-dark">
            <form id="formPlaylist">
              <div className="mb-3">
                <label for="title" className="form-label">Playlist's name: </label>
                <input type="text" className="form-control" id="inputPlaylist" />
              </div>
              <div>
                <button type="submit" id="submitPlay" className="btn btn-primary border text-dark bg-lightdark">
                  Submit playlist
                </button>
              </div>
            </form>
            <form id="formSong">
              <div className="my-3">
                <label for="title" className="form-label">Song's name: </label>
                <input type="text" className="form-control" id="inputSong" />
              </div>
              <div className="mb-3">
                <label for="select" className="form-label">Select Playlist</label>
                <select id="dselect" className="form-select">
                </select>
              </div>
              <div>
                <button type="submit" className="btn btn-primary border text-dark bg-lightdark">
                  Submit song
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container ">
        <h2 className="text-center mt-5"></h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
          <div className="col">
            <div className="card text-light bg-dark mx-auto border-2 border-warning">
              <div className="card-header ">
                Playlists
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
              </ul>
            </div>
          </div>
          
          <div className="col">
            <div className="card text-light bg-dark border-2 border-warning">
              <div className="card-header songs-title">
                <p id="songsTitle">Songs of playlist:</p>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
