import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import Hint from '../hint/index';


class Input extends React.Component {

  render() {

    const {
      placeholder,
      meta,
      input,
      hintPosition,
      onChangeAction,
    } = this.props;


      const updateValue = (e) => {
        if ( onChangeAction !== undefined ) onChangeAction(e.target.value);
        input.onChange(e);
      };

      const cssClass = classNames({
        'b-input': true,
      });


      return (
        <div className={cssClass}>
          <div className='b-input__label'></div>
            <input className='b-input__input'
                   {...input}
                   placeholder={placeholder}
                   onChange={updateValue}
            />
          { meta.error && meta.touched &&
            <Hint position={hintPosition} content={ meta.error } />
          }
        </div>
      );
    }

}

Input.defaultProps = {
  hintPosition: 'Right'
};

Input.propTypes = {
  id: React.PropTypes.string,
  meta: React.PropTypes.object.isRequired,
  input: React.PropTypes.object.isRequired,
  onChangeAction: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  hintPosition: React.PropTypes.oneOf(['Left', 'Right', 'Top', 'Bottom']),
};

export default Input;
