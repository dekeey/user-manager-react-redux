import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import Hint from '../hint/index';

function Select({ meta, input, hintPosition, options, onChangeAction, selectDefault, placeholder}) {

  const cssClass = classNames({
    'b-select': true,
  });

  const updateValue = (e) => {
    if ( onChangeAction!==undefined ) onChangeAction(e.target.value);
    input.onChange(e);
  };

  return (
    <div className={cssClass}>
      <select className='b-select__select' {...input} onChange={updateValue}>
        { selectDefault && <option> -- {placeholder} -- </option> }
        { options.map( (option, i) => {
            return <option
              className='b-select__option'
              value={option.value}
              key={i}
            >
              {option.text}
            </option>
          }
        )}
      </select>

      { meta.error && meta.touched &&
        <Hint position={hintPosition} content={ meta.error } />
      }
    </div>
  );
}

Select.defaultProps = {
  hintPosition: 'Right'
};

Select.propTypes = {
  selectDefault: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  meta: React.PropTypes.object.isRequired,
  input: React.PropTypes.object.isRequired,
  onChangeAction: React.PropTypes.func,
  hintPosition: React.PropTypes.oneOf(['Left', 'Right', 'Top', 'Bottom']),
  options : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      value: React.PropTypes.oneOfType[React.PropTypes.number, React.PropTypes.string],
      text: React.PropTypes.string
    })
  ).isRequired,

};

export default Select;
