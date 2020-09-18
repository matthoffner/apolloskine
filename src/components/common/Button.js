import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GrayButton, LargeButton, StickyButton } from '../../styles/buttons';

const Button = ({
    large = false,
    sticky = false,
    text = 'button',
    icon = 'chevron-left',
    callback,
    options = {}
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
                <FontAwesomeIcon icon={icon} size="2x" />
            </StickyButton>
        );
    return (
        <GrayButton onClick={callback} {...options}>
            <FontAwesomeIcon icon={icon} />
        </GrayButton>
    );
};

Button.propTypes = {
    large: PropTypes.bool,
    sticky: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    callback: PropTypes.func,
    options: PropTypes.object
};

export default memo(Button);
