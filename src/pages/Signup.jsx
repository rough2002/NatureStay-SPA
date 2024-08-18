import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SignUpForm from "../features/authentication/SignupForm"; // Make sure this path is correct
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const SignUpLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 55rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LoginLink = styled.p`
  text-align: center;
  font-size: 1.4rem;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignUp() {
  return (
    <SignUpLayout>
      <Logo />
      <Heading as="h4">Create a new account</Heading>
      <SignUpForm />
      <LoginLink>
        Already have an account? <Link to="/login">Log in</Link>
      </LoginLink>
    </SignUpLayout>
  );
}

export default SignUp;
