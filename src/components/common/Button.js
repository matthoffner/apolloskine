import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { GrayButton, LargeButton, StickyButton } from '../../styles/buttons';

const Button = ({
  large = false,
  sticky = false,
  text = 'button',
  callback,
  options = {},
}) => {
  if (large)
    return (
      <LargeButton onClick={callback} {...options}>
        {text}
      </LargeButton>
    );
  if (sticky)
    return (
      <StickyButton onClick={callback} {...options} transparent>
        {text}
      </StickyButton>
    );
  return (
    <GrayButton onClick={callback} {...options}>
      {text}
    </GrayButton>
  );
};

Button.propTypes = {
  large: PropTypes.bool,
  sticky: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  callback: PropTypes.func,
  options: PropTypes.object,
};

export default memo(Button);
