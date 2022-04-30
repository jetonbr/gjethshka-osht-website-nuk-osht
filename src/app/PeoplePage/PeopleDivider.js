/* eslint-disable max-len */
import React from 'react'
import '../App.css';
import { Button, Card, Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


const ContainerExampleBasic = () => (
  <Container className='shopContainer'>
  <article>
   <h1 className='liner'>PaySafeCard</h1>
  {/* <p className='textbod'>Beginnen Sie innerhalb von Minuten mit der Annahme wiederkehrender Zahlungen. <a className='textln' href="https://tolltref.com">Verwenden Sie die Rechnungsstellung, um Zahlungen von bestehenden Kunden einzuziehen, oder teilen Sie einen Zahlungslink, um ein Abonnement zu verkaufen – kein Code erforderlich. </a>Sobald Sie eingerichtet sind, können Sie direkt vom Dashboard aus Konten verwalten und detaillierte Finanz- und Umsatzberichte anzeigen.</p>  */}
  {/* <hr/>
  <h2 className='textcon'>PaySafeCard</h2> */}
</article>
    <Card.Group className='payswrapper'>
    <Card className='payscard'>
      <Card.Content>
      {/* <Label as='a' color='teal' tag>
      Offers
    </Label> */}
        <Image
          floated='right'
          size='mini'
          src='https://i0.wp.com/fairy.co.nz/wp-content/uploads/2020/09/paysafecard-logo.png?fit=300%2C300&ssl=1'
        />
        <Card.Header>PaySafeCard</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
         <h1 className='payc'>25 €</h1>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
        <a className='buylink' href="/" target="_blank">
              <Button className='txtpsfc' color='purple'>
          Scratch
          </Button></a>
        </div>
      </Card.Content>
    </Card>
    <Card className='payscard'>
      <Card.Content>
      {/* <Label as='a' color='teal' tag>
      Offers
    </Label> */}
        <Image
          floated='right'
          size='mini'
          src='https://i0.wp.com/fairy.co.nz/wp-content/uploads/2020/09/paysafecard-logo.png?fit=300%2C300&ssl=1'
        />
        <Card.Header>PaySafeCard</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <h1 className='payc'>50 €</h1>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
        <a className='buylink' href="/" target="_blank">
              <Button className='txtpsfc' color='purple'>
          Scratch
          </Button></a>
        </div>
      </Card.Content>
    </Card>
    <Card className='payscard'>
      <Card.Content>
      {/* <Label as='a' color='teal' tag>
      Offers
    </Label> */}
        <Image
          floated='right'
          size='mini'
          src='https://i0.wp.com/fairy.co.nz/wp-content/uploads/2020/09/paysafecard-logo.png?fit=300%2C300&ssl=1'
        />
        <Card.Header>PaySafeCard</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <h1 className='payc'>100 €</h1>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
        <a className='buylink' href="/" target="_blank">
              <Button className='txtpsfc' color='purple'>
          Scratch
          </Button></a>
        </div>
      </Card.Content>
    </Card>
    <Card className='payscard'>
      <Card.Content>
      {/* <Label as='a' color='teal' tag>
      Offers
    </Label> */}
        <Image
          floated='right'
          size='mini'
          src='https://i0.wp.com/fairy.co.nz/wp-content/uploads/2020/09/paysafecard-logo.png?fit=300%2C300&ssl=1'
        />
        <Card.Header>PaySafeCard</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <h1 className='payc'>150 €</h1>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <a className='buylink' href="/" target="_blank">
              <Button className='txtpsfc' color='purple'>
          Scratch
          </Button></a>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
  </Container>
)

export default ContainerExampleBasic