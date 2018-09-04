import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './input.css';

export type InputSize = 'default'| 'medium' | 'small' | 'mini';

interface InterfaceMyEventTarget extends EventTarget {
  value: string
}
interface InterfaceMyFormEvent<T> extends React.FormEvent<T> {
  target: InterfaceMyEventTarget
}

interface InterfaceInputProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: React.EventHandler<InterfaceMyFormEvent<Input>>;
  placeholder?: string;
  size?: InputSize;
  type?: string;
  value?: string;
}

export type InputProps = InterfaceInputProps;

export default class Input extends React.Component<InputProps, any> {
  public static defaultProps = {
    disabled: false,
    placeholder: '请输入内容',
    size: 'default',
    type: 'text',
  };

  public static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['default', 'medium', 'mini', 'small']),
    type: PropTypes.string,
  };

  constructor(props: InputProps) {
    super(props);
    this.state = {}
  }

  public render() {
    const { className, defaultValue, type, size, value, disabled, placeholder } = this.props;
    const classes = classNames(
      className,
      `lu-input`, 
      {
        [`lu-input-${size}`]: size,
      }
    );
    const inputValue = value || defaultValue;

    return (
      <div className={classes} >
        <input 
          placeholder={placeholder}
          disabled={disabled}
          type={type} 
          value={inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  public handleChange = (e:any):any => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value);
    }
  }
}
