import image from './../img/offre-logo.jpg'
const Home = () => {
  return (
    <div className="container-fluid text-center mt-5">
      <img src={image} alt="home" className='img-fluid' />
      <h2 className='mt-4'>Découvrez tous les films et les séries existants</h2>
      <h2>Les nouveautés seulement 17 mois après leur sortie</h2>
      <h2 className='mt-5'>Retrouvez toutes nos offres</h2>
      <div className="row mt-5 text-center">
        <div className="col-4">
          <div className="">Offre Films</div>
          <div className="mt-2">
            <i className="bi bi-film" style={{fontSize:"3rem"}}></i>
          </div>
          <div className="mt-3">
            <button className='btn btn-outline-primary'>HD</button>
            <button className='btn btn-outline-primary ms-3'>4K</button>
          </div>
        </div>
        <div className="col-4">
          <div className="">Offre Séries</div>
          <div className="mt-2">
            <i className="bi bi-camera-video-fill" style={{fontSize:"3rem"}}></i>
          </div>
          <div className="mt-3">
            <button className='btn btn-outline-primary'>HD</button>
            <button className='btn btn-outline-primary ms-3'>4K</button>
          </div>
        </div>
        <div className="col-4">
          <div className="">Offre Films/Séries</div>
          <div className="mt-2">
            <i className="bi bi-camera-reels-fill" style={{fontSize:"3rem"}}></i>
          </div>
          <div className="mt-3">
            <button className='btn btn-outline-primary'>HD</button>
            <button className='btn btn-outline-primary ms-3'>4K</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Home }