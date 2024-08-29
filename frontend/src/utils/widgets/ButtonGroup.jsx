
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const ButtonsGroup = ({ buttons, disableElevation, variant, ariaLabel }) => {
  return (
    <ButtonGroup
      disableElevation={disableElevation}
      variant={variant}
      aria-label={ariaLabel}
    >
      {buttons.map((button, index) => (
        <Button key={index} onClick={button.onClick}>
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

ButtonsGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  disableElevation: PropTypes.bool,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
};

ButtonsGroup.defaultProps = {
  disableElevation: false,
  variant: 'contained',
  ariaLabel: 'button group',
};

export default ButtonsGroup;