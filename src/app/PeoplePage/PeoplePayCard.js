/* eslint-disable max-len */
import React from 'react'
import '../App.css';
import { Container } from 'semantic-ui-react'

const ContainerExampleSponsor = () => (
  <Container className='PayCardConatiner'>
  <article>
   <h1 className='liner'>Zahlungsoption</h1>
  {/* <p className='textbod'>Beginnen Sie innerhalb von Minuten mit der Annahme wiederkehrender Zahlungen. <a className='textln' href="https://tolltref.com">Verwenden Sie die Rechnungsstellung, um Zahlungen von bestehenden Kunden einzuziehen, oder teilen Sie einen Zahlungslink, um ein Abonnement zu verkaufen – kein Code erforderlich. </a>Sobald Sie eingerichtet sind, können Sie direkt vom Dashboard aus Konten verwalten und detaillierte Finanz- und Umsatzberichte anzeigen.</p> */}
    {/* <hr/> */}
    {/* <h2 className='textcon'>ZAHLUNGSOPTION</h2> */} 
</article>
<Container className='vscardwrapp'>
        <div className='vscard'><img className='visac' src={require('../../assets/visa.svg')} alt="visa"/></div>
        <div className='vscard'><img className='masterc' src={require('../../assets/mastercard.svg')} alt="mastercard"/></div>
        <div className='vscard'><img className='paypalc' src={require('../../assets/paypal.svg')} alt="paypal"/></div>
        <div className='vscard'><img className='sofortc' src={require('../../assets/sofort.svg')} alt="sofort"/></div>
        <div className='vscard'><img className='klarnac' src={require('../../assets/klarna.svg')} alt="klarna"/></div>
        <div className='vscard'><img className='giropay' src={require('../../assets/giropay.svg')} alt="giropay"/></div>
        <div className='vscard'><img className='paysafec' src={require('../../assets/paysafecard.svg')} alt="paysafe"/></div>
        <div className='vscard'><img className='paydirekc' src={require('../../assets/paydirekt.svg')} alt="paydirekt"/></div>
      </Container>
  </Container>
)

export default ContainerExampleSponsor