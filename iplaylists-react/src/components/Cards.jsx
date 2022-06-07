function Cards({title}) {
  return (
      <div className="col">
          <div className="card text-light bg-dark mx-auto border-2 border-warning">
              <div className={"card-header "+title+"-title"}>
              <p id={title+"Title"}>{title}</p>
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
  )
}

export default Cards;