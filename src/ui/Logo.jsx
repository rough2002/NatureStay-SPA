import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 12rem; /* Increase size */
  width: 12rem; /* Maintain aspect ratio with fixed width */
  border-radius: 50%; /* Make the image rounded */
  object-fit: cover; /* Ensure the image covers the rounded area */
`;

const LogoText = styled.div`
  font-family: "Pacifico", cursive; /* Example of a stylish font */
  font-size: 2rem;
  color: var(--color-primary); /* Adjust to your theme color */
  margin-top: 1rem; /* Space between the image and text */
`;

function Logo() {
  const src = "/logo-bookingo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <LogoText>Bookingo</LogoText>
    </StyledLogo>
  );
}

export default Logo;
