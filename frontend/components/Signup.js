import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';


const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
       signup(email: $email, name: $name, password: $password) {
        id
        email
        name
       }
    }
`;

export class Signup extends Component {

  state = {
      email: '',
      name: '',
      password: '',
  };

  saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
      e.preventDefault();
      console.log(12321);
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
          {(signup, { error, loading}) => {
            return (
                <Form method={"POST"} onSumbit={(e) => {
                    e.preventDefault();
                    signup();
                }}>
                    <fieldset disabled={loading} aria-busy={loading}>
                        <h2>Sign Up for an Account</h2>
                        <Error error={error} />
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="Please Enter Your Email Address Here"
                                value={this.state.email}
                                onChange={this.saveToState}
                            />
                        </label>
                        <label htmlFor="name">
                            Name
                            <input
                                type="text"
                                name="name"
                                placeholder="Please Enter Your Full Name Here (First and Last)"
                                value={this.state.name}
                                onChange={this.saveToState}
                            />
                        </label>
                        <label htmlFor = "password">
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="Please Enter Your Password Here"
                                value={this.state.password}
                                onChange={this.saveToState}
                            />
                        </label>
                        <button type="submit">Signup</button>
                    </fieldset>
                </Form>
            )
          }}
      </Mutation>
    )
  }
}

export default Signup
