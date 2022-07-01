
import PlaylistOffCanvas from './components/PlaylistOffCanvas'
import NavBar from './components/NavBar'
import CardPlaylists from './components/CardPlaylists'
import CardsSongs from './components/CardsSongs'
import './App.css'


function App() {

  return (
    <div className="bg-dark" id="all">

      <NavBar></NavBar>

      <div className="container ">
        <h2 className="text-center my-5">
          Add and Check out Your Playlists Down Here!
        </h2>
      </div>

      <PlaylistOffCanvas></PlaylistOffCanvas>

      <div className="container ">
        <h2 className="text-center mt-5"></h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
          <CardPlaylists></CardPlaylists>

          <CardsSongs></CardsSongs>
        </div>
      </div>
    </div>
  )
}

export default App;