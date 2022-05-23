import { Link } from 'react-router-dom'
import logo from './../img/logo.png'


export const Login = () => {
  return (
    <div className="w-100 h-100">
      <div className="position-absolute top-50 start-50 translate-middle bg-light shadow-lg text-center p-3 rounded">
        <Link to={`/`}><img className="img-fluid w-25" src={logo} alt="logo" /></Link>
        <div className="mt-3 fs-3">Connexion</div>
        <form className="needs-validation">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
          <label className="form-label" htmlFor="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" />
          <div className="row text-start mt-1"><a className='link'>Mot de passe oublié ?</a></div>
          <button className="btn btn-primary mt-2">Se connecter</button>
          <div className="row">
            <a className='link'>Première connexion ?</a>
          </div>
        </form>
      </div>
    </div>
  )
}