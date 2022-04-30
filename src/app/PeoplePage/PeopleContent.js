import React from 'react'
import '../App.css';
import { Button, Card, Image, Label } from 'semantic-ui-react'


const CardExampleGroups = () => (
  <Card.Group className='cardwrapper'>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      SchnupperPaket
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header><strong>For 24.99E</strong></Card.Header>
        <Card.Meta>120 Coins</Card.Meta>
        <Card.Description>
          <strong>For 24.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl'  color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      PremiumPaket S
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>PremiumPaket S</Card.Header>
        <Card.Meta>200 Coins</Card.Meta>
        <Card.Description>
          <strong>For 34.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy For 34.99E
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      PremiumPaket M
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>PremiumPaket M</Card.Header>
        <Card.Meta>550 Coins</Card.Meta>
        <Card.Description>
           <strong>For 89.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      Spezial Angebot
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>Spezial Angebot</Card.Header>
        <Card.Meta>700 Coins</Card.Meta>
        <Card.Description>
        <strong>For 99.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      PremiumPaket L
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>PremiumPaket L</Card.Header>
        <Card.Meta>1000 Coins</Card.Meta>
        <Card.Description>
           <strong>For 149.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='nmcard'>
      <Card.Content>
      <Label as='h1' color='red' ribbon>
      PremiumPaket XL
        </Label>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>PremiumPaket XL</Card.Header>
        <Card.Meta>2100 Coins</Card.Meta>
        <Card.Description>
           <strong>For 249.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    {/* <Card className='expcard'>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>PremiumPaket XXL</Card.Header>
        <Card.Meta>3300 Coins</Card.Meta>
        <Card.Description>
         <strong>For 349.99E</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card className='expcard2'>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://www.pngall.com/wp-content/uploads/10/USD-Coin-Logo-PNG-Photo.png'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons hvbtn'>
          <Button className='txtcl' color='red'>
            Buy Suprise Box
          </Button>
        </div>
      </Card.Content>
    </Card> */}
  </Card.Group>
  
)

export default CardExampleGroups;
