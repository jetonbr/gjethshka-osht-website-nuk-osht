import React, { useEffect, useContext } from "react";
import FeedPage from "../app/FeedPage/FeedPage";
import NavHeader from "../app/partials/NavHeader";
import ProfilePage from "../app/ProfilePage/ProfilePage";
import PeoplePage from "../app/PeoplePage/PeoplePage";
import Footer from "../app/partials/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import PostDetails from "../app/PostDetails/PostDetails";
import LoginPage from "../app/LoginPage/LoginPage";
import Dashboard from '../dashboard/Dashboard'
import ChaterRoom from "../app/ChatterPage/ChatterPage";

import { AuthContext } from "../store/AuthProvider";
// import CustomChatAdded from "./chat/Chat";
import Chat from "../chat/Chat";

const DefaultRoutes = () => {
  const value = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavHeader />
      {!value.isLoggedIn ? (
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
        </Switch>
      ) : <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/people/:id" component={ProfilePage} />
        <Route path="/:type/:id" component={PostDetails} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={Chat} />
        <Route path="/chater" component={ChaterRoom} />
      </Switch>}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultRoutes;
