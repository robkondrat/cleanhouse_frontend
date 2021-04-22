import axios from "axios";
import styled, { keyframes } from "styled-components";
import useForm from "../lib/useForm";
// import Form from "./styles/Form";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
    .post("/api/sessions", inputs)
    .then((response) => {
      axios.defaults.headers.common["Authorization"] =
        "Bearer" + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      {/* <Error error={error} /> */}
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}
