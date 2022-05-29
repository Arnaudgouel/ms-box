import { Menu, MenuItem } from '@mui/material'
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../img/logo.png'

export const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            <img src={logo} alt="logo" width="100px"/>
          </Link>
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav col-10">
              <li className="nav-item">
                <div id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} className="nav-link text-black" aria-current="page" onClick={handleClick} style={{cursor:"pointer"}}>Nos offres</div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}><Link className='text-decoration-none text-black' to={`/box-movies`}>Offre Films</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className='text-decoration-none text-black' to={`/box-series`}>Offre Séries</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className='text-decoration-none text-black' to={`/box-full`}>Offre Films/Séries</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link className='text-decoration-none text-black' to={`/box-all`}>Toutes nos offres</Link></MenuItem>
                </Menu>
              </li>
              <li className="nav-item">
                <Link to={`/about`} className="text-decoration-none text-black nav-link">Qui sommes-nous?</Link>
              </li>
              <li className="nav-item">
              <Link to={`/contact`} className="text-decoration-none text-black nav-link">Contact</Link>
              </li>
              <li className="nav-item">
              <Link to={`/legals`} className="text-decoration-none text-black nav-link">Mentions Légales</Link>
              </li>
            </ul>
            <div className="col-2 text-end">
              <Link to={`/login`} className="text-decoration-none text-black nav-link">Se connecter</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </Fragment>
  )
}