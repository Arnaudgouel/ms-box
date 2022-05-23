import imgJeremy from '../img/jeremy.png'
import imgSteven from '../img/steven.png'

export const About = () => {
  return (
    <div className="container">
      <h1>BIENVENUE CHEZ MSBOX/WELCOME ON MSBOX</h1>
      <h2>Qui sommes nous ?</h2> 
      <h4 className='mt-5 mb-4'>Jeremy ATTALI : 26 ans, fondateur de la société MSBOX</h4>
      <img className='img-fluid' width={`500px`} src={imgJeremy} alt="Jeremy"/>
      <h4 className='mt-5 mb-4'>Steven JOURDAIN : 29 ans, co-fondateur de la société MSBOX</h4>
      <img className='img-fluid' width={`500px`} src={imgSteven} alt="Steven"/>
      <p className='mt-5'>
        Afin de lutter contre le téléchargement illégal, la société MSBOX vous propose un abonnement vous permettant de regarder l'intégralité des films et séries existant sur le marché 17 mois après leur sortie.
        Cet abonnement est sans engagement et il vous suffira simplement d'une connexion internet, une box et une télécommande. Juste après cette présentation, vous découvrirez les différents abonnements que nous vous proposons
      </p>
      <div className="small"><em>L’article L.335-2 du code de la propriété intellectuelle en France interdit clairement de télécharger gratuitement des Oeuvres (films, musiques, livres, jeux vidéos, logiciels) payantes. Ce délit, assimilable à de la contrefaçon, est passible d’une peine de prison de 3 ans et de 300 000 euros d’amende.</em></div>
    </div>
  )
}