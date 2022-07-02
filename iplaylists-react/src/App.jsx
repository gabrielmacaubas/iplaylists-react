
import PlaylistOffCanvas from './components/PlaylistOffCanvas'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
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
        <Cards></Cards>
      </div>
    </div>
  )
}

export default App;