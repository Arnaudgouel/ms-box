import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export const Contact = () => {
  return (
    <div className="container">
      <div className="mt-3 fs-3">Contact</div>
      <form className="needs-validation">
        <div class="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label className="form-label" htmlFor="objet">Objet du contact</label>
          <input type="text" className="form-control" id="objet" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Votre commentaire</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mt-2">Envoyer</button>
      </form>
      <div className="mt-5">
        <h2 className='text-center'>FAQ</h2>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>De quel type de connexion internet avons-nous besoin ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Pouvons-nous prendre un abonnement HD sur une TV 4K ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Pouvons-nous accéder aux chaines de télévision avec un abonnement MSBOX ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}