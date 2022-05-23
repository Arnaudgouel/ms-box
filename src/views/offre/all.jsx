import boxFull from './../../img/box-full.jpg'
import boxMovies from './../../img/box-movies.jpg'
import boxSeries from './../../img/box-series.jpg'


export const All = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img src={boxMovies} alt="x96q" className='img-fluid' />
        </div>
        <div className="col-6">
          <div>Découvrez plus de 65 000 films toute catégorie confondue de la création du cinéma à nos jours. En HD ou en 4K, découvrez ou re-découvrez vos films préférés avec plus d'une dizaine de langues possibles.</div>
          <div>Seul ou en famille, toutes nos offres feront votre bonheur</div>
          <div className="d-flex fs-1" style={{gap:"10px"}}>
          <div><i className="bi bi-badge-hd-fill"></i></div>
          <div><i className="bi bi-badge-4k"></i></div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <div>Découvrez plus de 30 000 séries toute catégorie confondue de la création du cinéma à nos jours. En HD ou en 4K, découvrez ou re-découvrez vos séries préférées avec plus d'une dizaine de langues possibles.</div>
          <div>Seul ou en famille, toutes nos offres feront votre bonheur</div>
          <div className="d-flex fs-1" style={{gap:"10px"}}>
            <div><i className="bi bi-badge-hd-fill"></i></div>
            <div><i className="bi bi-badge-4k"></i></div>
          </div>
        </div>
        <div className="col-6">
          <img src={boxSeries} alt="x96q" className='img-fluid' />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <img src={boxFull} alt="x96q" className='img-fluid' />
        </div>
        <div className="col-6">
          <div>Découvrez plus de 95 000 films et séries toute catégorie confondue de la création du cinéma à nos jours. En HD ou en 4K, découvrez ou re-découvrez vos films et séries préférés avec plus d'une dizaine de langues possibles.</div>
          <div>Seul ou en famille, toutes nos offres feront votre bonheur</div>
          <div className="d-flex fs-1" style={{gap:"10px"}}>
          <div><i className="bi bi-badge-hd-fill"></i></div>
          <div><i className="bi bi-badge-4k"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}