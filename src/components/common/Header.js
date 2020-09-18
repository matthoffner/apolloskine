import React from 'react';

import { Title, SubTitle } from '../../styles/titles';

const Header = ({ title, isTitle = true }) => {
    return isTitle ? <Title>{title}</Title> : <SubTitle>{title}</SubTitle>;
};

export default Header;
