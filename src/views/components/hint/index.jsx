import React from 'react';
import classNames from 'classnames';
import './styles.scss';


function Hint({ content, position }) {

  const cssClass = classNames({
    'b-hint': true,
    'b-hint_left' : position === 'Left',
    'b-hint_right' : position === 'Right',
    'b-hint_top' : position === 'Top',
    'b-hint_bottom' : position === 'Bottom',
  });
  const margin = '10px';

  let divStyle;

  switch (position) {
    case 'Top':
      divStyle = { marginBottom: margin };
      break;
    case 'Bottom':
      divStyle = { marginTop: margin };
      break;
    case 'Left':
      divStyle = { marginRight: margin };
      break;
    case 'Right':
      divStyle = { marginLeft: margin };
      break;
  }


  return (
    <div className={cssClass} style={divStyle}>
      <div className='b-hint__content'>{content}</div>
      <div className='b-hint__arrow'></div>
    </div>
  );
}

Hint.defaultProps = {
  position: 'Right'
};

Hint.propTypes = {
  content: React.PropTypes.any.isRequired,
  position: React.PropTypes.oneOf(['Left', 'Right', 'Top', 'Bottom']).isRequired
};

export default Hint;
