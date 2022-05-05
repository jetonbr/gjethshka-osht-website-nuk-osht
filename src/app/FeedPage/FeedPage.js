import React, { Component } from "react";
// import FeedList from "./FeedList";
import { Button, Grid, Container } from "semantic-ui-react";
import { postData } from "../services/DataService";
import "../App.css";
import CardExampleCard from "./FeedContent";
import ContainerExampleTitle from "./Feedtitle";
// import FeedChatButton from "./FeedChatButton";
// import ButtonExampleIcon from "./FeedChatButton";
// import StickyExampleOffset from "./FeedChatButton";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        show: false,
        icon: "add",
      },
      modal: {
        open: false,
      },
      reRender: false,
      errorMessage: "",
    };
    this.addButtonOnClick = this.addButtonOnClick.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.sendTextPost = this.sendTextPost.bind(this);
    this.sendImagePost = this.sendImagePost.bind(this);
    this.sendVideoPost = this.sendVideoPost.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addButton() {
    return (
      <div id="addButtons">
        {this.postButtons()}
        <Button
          circular
          icon={this.state.buttons.icon}
          color="orange"
          id="addButton"
          label="New post"
          onClick={this.addButtonOnClick}
        />
      </div>
    );
  }

  addButtonOnClick() {
    this.setState((prevState) => {
      return {
        buttons: {
          show: !prevState.buttons.show,
          icon: prevState.buttons.show ? "add" : "x",
        },
      };
    });
  }

  postButtons() {
    if (this.state.buttons.show === true) {
      return (
        <React.Fragment>
          <Button
            circular
            icon="picture"
            color="teal"
            id="imageButton"
            onClick={this.show("image")}
          />
          <Button
            circular
            icon="file text"
            color="red"
            id="postButton"
            onClick={this.show("text")}
          />
        </React.Fragment>
      );
    }
  }

  show = (type) => () =>
    this.setState({
      modal: {
        open: {
          text: false,
          image: false,
          video: false,
          [type]: true,
        },
      },
    });
  close = () =>
    this.setState({
      modal: {
        open: false,
      },
      buttons: {
        show: false,
        icon: "add",
      },
    });

  handleInput(e) {
    this.setState({ data: e.target.value });
  }

  isValidImage(input) {
    return (
      input.match(/\.(jpeg|jpg|gif|png)$/) != null &&
      input.match(/^(http|https):\/\//) != null
    );
  }

  isValidVideo(input) {
    return (
      input.match(/^https:\/\/www\.youtube\.com\/embed\//) != null ||
      input.match(/^https:\/\/www\.youtube\.com\/watch\?v=/) != null
    );
  }

  sendTextPost = () => {
    if (this.state.data.split(" ").join("") === "") {
      this.setState({ errorMessage: "Not valid" });
      return;
    }
    this.setState({
      modal: { open: false },
      buttons: {
        show: false,
        icon: "add",
      },
      errorMessage: "",
    });
    postData.postText(this.state.data).then(() => {
      this.setState((prevState, props) => ({
        reRender: !prevState.reRender,
        data: "",
      }));
    });
  };

  sendImagePost = () => {
    if (!this.isValidImage(this.state.data)) {
      this.setState({ errorMessage: "Not valid image URL" });
      return;
    }
    this.setState({
      modal: { open: false },
      buttons: {
        show: false,
        icon: "add",
      },
      errorMessage: "",
    });
    postData.postImage(this.state.data).then(() => {
      this.setState((prevState, props) => ({ reRender: !prevState.reRender }));
    });
  };

  sendVideoPost = () => {
    if (!this.isValidVideo(this.state.data)) {
      this.setState({ errorMessage: "Not valid video URL" });
      return;
    }
    this.setState({
      modal: { open: false },
      buttons: {
        show: false,
        icon: "add",
      },
      errorMessage: "",
    });
    postData.postVideo(this.state.data).then(() => {
      this.setState((prevState, props) => ({ reRender: !prevState.reRender }));
    });
  };

  render() {
    // /* if (_.isEmpty(this.state.data)) {
    //     return (<React.Fragment>
    //         {this.addButton()}
    //         <Loader />
    //         {this.modal()}
    //     </React.Fragment>
    //     )
    // } */
    return (
      <React.Fragment>
        {/* {this.addButton()} */}
        <Grid>
          <Grid.Row className="mod-row">
            <Grid.Column width="four"></Grid.Column>
            <Grid.Column width="eight">
              <ContainerExampleTitle />
              {/* <FeedList reRender={this.state.reRender} /> */}
            </Grid.Column>
            <Grid.Column width="four"></Grid.Column>
          </Grid.Row>
        </Grid>
        <Container>
          <Grid className='gr-down'>
            <Grid.Row className='s-down' columns={2}>
              {/* <Grid.Row columns={1} > */}
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              <CardExampleCard />
              {/* </Grid.Row> */}
            </Grid.Row>
          </Grid>
        </Container>
        {/* <ModalText open={this.state.modal.open.text} onClose={this.close} handleInput={this.handleInput} sendPost={this.sendTextPost} error={this.state.errorMessage} />
                <ModalImage open={this.state.modal.open.image} onClose={this.close} handleInput={this.handleInput} sendPost={this.sendImagePost} error={this.state.errorMessage} />
                <ModalVideo open={this.state.modal.open.video} onClose={this.close} handleInput={this.handleInput} sendPost={this.sendVideoPost} error={this.state.errorMessage} /> */}
        {/* <CardExampleCard />
                        <button onClick={() =>}>
                            Icon
                        </button> */}
        <Link
          style={{
            position: "fixed",
            bottom: 20,
            borderRadius: "50%",
            right: 20,
            width: 50,
            height: 50,
            backgroundColor: "#AFDADA",
            color: "white",
            boxShadow: "6px 5px 63px 23px rgba(0,0,0,0.1)",
          }}
          to={"/chat"}
        >
          {" "}
          *
          <SendIcon id="chat-ico" />
        </Link>{" "}
        *
      </React.Fragment>
    );
  }
}

export default FeedPage;
