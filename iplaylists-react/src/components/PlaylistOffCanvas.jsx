import { useRef } from "react"
import { Offcanvas } from "bootstrap"

function PlaylistOffCanvas() {
    const offcanvasref = useRef(null)
    const handleShow = () => {
        const offcanvas = new Offcanvas(offcanvasref)
        offcanvas.show()
    }
    return (
        <div ref={offcanvasref} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header text-dark">
                <h5 id="offcanvasRightLabel ">New Playlist</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-dark">
                <form id="formPlaylist">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Playlist's name: </label>
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
                        <label htmlFor="title" className="form-label">Song's name: </label>
                        <input type="text" className="form-control" id="inputSong" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Select Playlist</label>
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
    )
}

export default PlaylistOffCanvas;