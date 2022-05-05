import React from "react";
import "../App.css";
import { Card, Image, Button, Grid } from "semantic-ui-react";
import ModalExampleScrollingUserProfile from "./ProfileModalEye";
import ModalExampleScrollingUserMessage from "./MessageModal";

const CardExampleCard = () => (
  <Grid.Column className='cc-con'>
    <Card className="ccwrap">
      <Card.Content className="cd1">
        <Image
          className="ccimg"
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Header className="card-head">@Matthew</Card.Header>
        {/* <RatingExampleHeart /> */}
        <Card.Meta>
          {/* <span className='date'>Joined in 2015</span> */}
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic>
                <ModalExampleScrollingUserMessage />
              </Button>
              <Button basic>
                <ModalExampleScrollingUserProfile />
              </Button>
            </div>
          </Card.Content>
        </Card.Meta>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default CardExampleCard;
