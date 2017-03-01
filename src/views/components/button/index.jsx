import React from 'react';
import classNames from 'classnames';
import './styles.scss';


function Button({ onClick, additionalClassName, text, style, inlineStyle }) {

  const cssClass = classNames({
    'b-button': true,
    [`b-button_${style}`]: !!style,
    [`${additionalClassName}`]: !!additionalClassName
  });


  return (
    <div onClick={onClick} className={cssClass} style={inlineStyle}>
      {text}
    </div>
  );
}

Button.propTypes = {
  additionalClassName: React.PropTypes.string,
  onClick: React.PropTypes.func,
  style: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  inlineStyle: React.PropTypes.object
};

export default Button;
