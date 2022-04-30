import React, { useState, useContext } from "react";
import "../App.css";
import { Grid, Form, Button, Tab } from "semantic-ui-react";
// import { postData } from "../services/DataService";
import CheckboxExampleToggle from "./CheckAgb";
import DropdownExampleSearchSelection from "./CountryDropdown";
import ButtonExampleConditionals from "./Gender";
import {AuthContext} from '../../UserContext';
import axios from "axios";


const LoginPage = () => {
  const value = useContext(AuthContext);
  const panes = [
    {
      menuItem: "Login",
      render: () => <Tab.Pane>{loginRender()}</Tab.Pane>,
    },
    {
      menuItem: "Register",
      render: () => <Tab.Pane>{registerRender()}</Tab.Pane>,
    },
  ];
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [registerData, setRegisterData] = useState({
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      plz: ""
  });
  const [errorLogin, setErrorLogin] = useState({
    userName: "",
    password: ""
  });
  const [errorRegister, setErrorRegister] = useState({
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      plz: ""
  });

  const onRegister = () => {};

  const onLogin = () => {
    // POST
    const userData = {
      email: 'zani@bbros.eu',
      password: 'zanizani' //This should be encoded
    }

    axios.post('https://back.tolltref.com/auth/login', userData)
    .then(res => {
      console.log(res.data);
        const responseData = res.data
        // if (responseData.status == 'success') {
        //   const user = responseData.user
        // } else {
        //   alert('Something went wrong while creating account')
        // }
    })



    value.addAuth("token", {user: {name: "bido"}})
  };

  const handleChange = (e) => {
      console.log(e.target.name, e.target.value)
      setLoginData({[e.target.name]: e.target.value})
  };

  const handleRegisterChange = (e) => {
    setRegisterData({[e.target.name]: e.target.value});
  }

  const loginRender = () => {
    return (
      <Form className="log-form" onSubmit={onLogin}>
        <Form.Field className='form-input-field'>
          <label>Username</label>
          <input
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <small style={{ color: "red" }}>{errorLogin.login}</small>
        </Form.Field>
        <Button className='logbtn' type="submit">
          Login
        </Button>
      </Form>
    );
  };

  const registerRender = () => {
    return (
      <Form className='regform' onSubmit={onRegister}>
        <Form.Field>
          <label className='form-input-field'>Full Name</label>
          <input placeholder="Full Name" name={"name"} value={registerData.name} onChange={handleRegisterChange} />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Email</label>
          <input placeholder="Email" name={"email"} value={registerData.email} onChange={handleRegisterChange} />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Username</label>
          <input placeholder="Username" name={"username"} value={registerData.username} onChange={handleRegisterChange} />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Country</label>
          <DropdownExampleSearchSelection />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>PLZ</label>
          <input placeholder="xxxxx" name={"plz"} value={registerData.plz} onChange={handleRegisterChange} />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name={"password"} value={registerData.password}
            onChange={handleRegisterChange}
          />
          <small style={{ color: "red" }}>{errorRegister.password}</small>
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Confirm Password</label>
          <input
            placeholder="Password"
            type="password"
            name={"confirmPassword"} value={registerData.confirmPassword}
            onChange={handleRegisterChange}
          />
          <small style={{ color: "red" }}>{errorRegister.confirmPassword}</small>
        </Form.Field>
        <Form.Field className='form-input-field'>
        </Form.Field>
        <Form.Field className="gendercon">
          <label>Ich bin</label>
          <ButtonExampleConditionals />
          <label>Ich Suche</label>
          <ButtonExampleConditionals />
        </Form.Field>
        <Form.Field id="check-agb">
          <CheckboxExampleToggle />
          <p className="agbtext">
            Ich habe die AGB gelesen und akzeptiere diese.
          </p>
        </Form.Field>
        <Button className='regbtn' type="submit">
          Register
        </Button>
      </Form>
    );
  };

  const clearState = () => {
    
  };

  
  return (
    <Grid id="login-page">
      <Grid.Row style={{ marginTop: "50px" }}>
        <Grid.Column width="one"></Grid.Column>
        <Grid.Column width="six">
          {/* <h1>Find Real Partner</h1>
                        <h2>Being deeply loved by someone gives you strength</h2>
                        <h2>Join here be loved too</h2> */}
        </Grid.Column>
        <Grid.Column width="two"></Grid.Column>
        <Grid.Column width="six">
          <Tab panes={panes} defaultActiveIndex={0} onClick={clearState} />
        </Grid.Column>
        <Grid.Column width="one"></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginPage;
