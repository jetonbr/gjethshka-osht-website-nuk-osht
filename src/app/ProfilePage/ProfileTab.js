import React from "react";
import "../App.css";
import { Tab, Grid } from "semantic-ui-react";
import AccordionExampleFluid from "./ProfileAccordion";
// import GridExampleColumnCount from "./ProfileEditForm";
import { ImageViewer } from "react-image-viewer-dv";
import img from "../../assets/foto-1.jpg";

// import LabelExampleHorizontal from './ProfileEditForm'
// import FormExampleSize from './ProfileUpdate'

const panes = [
  {
    menuItem: "Profile",
    render: () => (
      <Tab.Pane className="profiletab" attached={false}>
        {/* <GridExampleColumnCount /> */}
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
               
              <ImageViewer className='gllrybox'>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
            <Grid.Column>
              <ImageViewer>
                <img className="usrgllry" src={img} alt="Your image" />
              </ImageViewer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Update",
    render: () => (
      <Tab.Pane className="profiletab" attached={false}>
        <AccordionExampleFluid />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Edit Profile",
    render: () => (
      <Tab.Pane className="profiletab" attached={false}>
        Edit Profile inputs
      </Tab.Pane>
    ),
  },
];

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default TabExampleSecondaryPointing;

