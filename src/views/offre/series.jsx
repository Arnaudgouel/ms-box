import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react';
import box from './../../img/box-series.jpg'
import boxOnly from './../../img/box-only-series.jpg'
import remoteOnly from './../../img/remote-only-movies.jpg'
import hdmi from './../../img/hdmi.jpg'
import sectorCable from './../../img/sector-cable.jpg'
export const Series = () => {
  const [menu, setMenu] = useState('HD');
  const [screen, setScreen] = useState("1");

  const prices = {
    "HD" : [14.99, 18.99, 22.99, 26.99],
    "4K" : [24.99, 28.99, 32.99, 36.99]
  }

  const handleMenu = (event, newMenu) => {
    setMenu(newMenu);
  };

  const handleScreen = (event, newScreen) => {
    setScreen(newScreen);
  };
  return (
    <div className="container mt-5 px-5">
      <div className="row">
        <div className="col-6">
          <img src={box} alt="box" className='img-fluid' />
        </div>
        <div className="col-6">
          <h2>Offre Séries</h2>
          <h5>A partir de 14.99 € / mois*</h5>
          <h4 className='mt-3'>Choisissez votre formule</h4>
          <ToggleButtonGroup
            value={menu}
            exclusive
            color='primary'
            onChange={handleMenu}
            aria-label="menu"
            fullWidth={true}
          >
            <ToggleButton value="HD" aria-label="HD">
              HD
            </ToggleButton>
            <ToggleButton value="4K" aria-label="4K">
              4K
            </ToggleButton>
          </ToggleButtonGroup>
          <h4 className='mt-3'>Choisissez le nombre d'écrans souhaité</h4>
          <ToggleButtonGroup
            value={screen}
            exclusive
            color='primary'
            onChange={handleScreen}
            aria-label="menu"
            fullWidth={true}
          >
            <ToggleButton value="1" aria-label="1" className='flex-column'>
              <div>1</div>
              <div className='fw-bold text-lowercase'>{menu === "HD" ? prices["HD"][0] : prices['4K'][0]} € / mois</div>
            </ToggleButton>
            <ToggleButton value="2" aria-label="2" className='flex-column'>
              <div>2</div>
              <div className='fw-bold text-lowercase'>{menu === "HD" ? prices["HD"][1] : prices['4K'][1]} € / mois</div>
            </ToggleButton>
            <ToggleButton value="3" aria-label="3" className='flex-column'>
              <div>3</div>
              <div className='fw-bold text-lowercase'>{menu === "HD" ? prices["HD"][2] : prices['4K'][2]} € / mois</div>
            </ToggleButton>
            <ToggleButton value="4" aria-label="4" className='flex-column'>
              <div>4</div>
              <div className='fw-bold text-lowercase'>{menu === "HD" ? prices["HD"][3] : prices['4K'][3]} € / mois</div>
            </ToggleButton>
          </ToggleButtonGroup>
          <button className='btn btn-primary mt-5 w-100'>S'abonner</button>
        </div>
      </div>
      <div>* Offre sans engagement, possibilité de résilier à tout moment</div>
      <h2 className='mt-5 text-center'>Contenu du coffret</h2>
      <div className="row mt-4">
        <div className="col-3">
          <img src={boxOnly} alt="box only" className='img-fluid' />
        </div>
        <div className="col-3">
          <img src={remoteOnly} alt="box only" className='img-fluid' />
        </div>
        <div className="col-3">
          <img src={hdmi} alt="box only" className='img-fluid' />
        </div>
        <div className="col-3">
          <img src={sectorCable} alt="box only" className='img-fluid' />
        </div>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-3">
          Box x96 mini
        </div>
        <div className="col-3">
          Télécommande
        </div>
        <div className="col-3">
          Cable HDMI
        </div>
        <div className="col-3">
          Prise secteur
        </div>
      </div>
    </div>
  )
}