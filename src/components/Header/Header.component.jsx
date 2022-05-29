import React from "react";
import PropTypes from "prop-types";
import { HeaderContainer, Title } from "./Header.styles";

function Header({ title }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
