import React, { useState, useContext } from "react";
import "../App.css";
import { Grid, Form, Button, Tab } from "semantic-ui-react";
// import { postData } from "../services/DataService";
import CheckboxExampleToggle from "./CheckAgb";
import DropdownExampleSearchSelection from "./CountryDropdown";
import ButtonExampleConditionals from "./Gender";
import axios from "axios";  
import { loginService } from "../services/auth";
import {AuthContext} from "../../store/AuthProvider";

const LoginPage = () => {
  const value = useContext(AuthContext);
  console.log(value)
  const panes = [
        {
          menuItem: "Login",
          render: () => <Tab.Pane>{loginRender()}</Tab.Pane>,
        },
        {
          menuItem: "Register",
          // render: () => <Tab.Pane>{registerRender()}</Tab.Pane>,
        },
      ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)

  }

  const _login = (e) => {
    e.preventDefault();
    let data = {
      email,
      password
    } 
    loginService(data)
      .then(res => {
        res.data
        const token = res.data['token'] 
        console.log(`res.data of login => `, res);
        value.setAuth(res.data);
      })
      .catch(e => {
        console.log('e => ', e);
        // TODO: ne rast se nuk ka funksionu e qet nje messazh pse nuk o tu funksionu requesti
      })
  }

  const onRegister = () => {

  }

  const loginRender = () => {
    return (
      <Form className="log-form" onSubmit={_login}>
        <Form.Field className='form-input-field'>
          <label>Username</label>
          <input
            placeholder="Username"
            name="username"
            value={email}
            onChange={handleEmail}
          />
        </Form.Field>
        <Form.Field className='form-input-field'>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <small style={{ color: "red" }}></small>
        </Form.Field>
        <Button className='logbtn' type="submit">
          Login
        </Button>
      </Form>
    );
  };

  // const registerRender = () => {
  //   return (
  //     <Form className='regform' onSubmit={onRegister}>
  //       <Form.Field>
  //         <label className='form-input-field'>Full Name</label>
  //         <input placeholder="Full Name" name={"name"} value={registerData.name} onChange={handleRegisterChange} />
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>Email</label>
  //         <input placeholder="Email" name={"email"} value={registerData.email} onChange={handleRegisterChange} />
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>Username</label>
  //         <input placeholder="Username" name={"username"} value={registerData.username} onChange={handleRegisterChange} />
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>Country</label>
  //         <DropdownExampleSearchSelection />
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>PLZ</label>
  //         <input placeholder="xxxxx" name={"plz"} value={registerData.plz} onChange={handleRegisterChange} />
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>Password</label>
  //         <input
  //           placeholder="Password"
  //           type="password"
  //           name={"password"} value={registerData.password}
  //           onChange={handleRegisterChange}
  //         />
  //         <small style={{ color: "red" }}>{errorRegister.password}</small>
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //         <label>Confirm Password</label>
  //         <input
  //           placeholder="Password"
  //           type="password"
  //           name={"confirmPassword"} value={registerData.confirmPassword}
  //           onChange={handleRegisterChange}
  //         />
  //         <small style={{ color: "red" }}>{errorRegister.confirmPassword}</small>
  //       </Form.Field>
  //       <Form.Field className='form-input-field'>
  //       </Form.Field>
  //       <Form.Field className="gendercon">
  //         <label>Ich bin</label>
  //         <ButtonExampleConditionals />
  //         <label>Ich Suche</label>
  //         <ButtonExampleConditionals />
  //       </Form.Field>
  //       <Form.Field id="check-agb">
  //         <CheckboxExampleToggle />
  //         <p className="agbtext">
  //           Ich habe die AGB gelesen und akzeptiere diese.
  //         </p>
  //       </Form.Field>
  //       <Button className='regbtn' type="submit">
  //         Register
  //       </Button>
  //     </Form>
  //   );
  // };

  return (
    <Grid id="login-page">
      <Grid.Row style={{ marginTop: "50px" }}>
        <Grid.Column width="one"></Grid.Column>
        <Grid.Column width="six">
          {/* <h1>Find Real Partner</h1>
                        <h2>Being deeply loved by someone gives you strength</h2>
                        <h2>Join here be loved too</h2>  */}
        </Grid.Column>
        <Grid.Column width="two"></Grid.Column>
        <Grid.Column width="six">
          <Tab panes={panes} defaultActiveIndex={0}  />
        </Grid.Column>
        <Grid.Column width="one"></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginPage;