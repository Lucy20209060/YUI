import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './input.css';

export type InputSize = 'default'| 'medium' | 'small' | 'mini';

interface InterfaceInputProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  // onChange?: React.MouseEventHandler<HTMLInputElement>;
  size?: InputSize;
  type?: string;
  value?: string;
}
interface IMyEventTarget extends EventTarget {
  value: string
}

interface IMyFormEvent<T> extends React.FormEvent<T> {
  target: IMyEventTarget
}

interface InputChangeProps extends React.HTMLProps<Input> {
  onChange?: React.EventHandler<IMyFormEvent<Input>>;
}

export type InputProps = InterfaceInputProps & InputChangeProps;

export default class Input extends React.Component<InputProps, any> {
  public static defaultProps = {
    disabled: false,
    size: 'default',
    type: 'text',
  };

  public static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['default', 'medium', 'mini', 'small']),
    type: PropTypes.string,
  };

  constructor(props: InputProps) {
    super(props);
    this.state = {}
  }

  public render() {
    const { className, type, size, value, defaultValue } = this.props;
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
          type={type} 
          value={inputValue}
          // onChange={this.handleInputChange}
        />
      </div>
    );
  }

  // handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const { onChange } = this.props;
  //   if (onChange) {
  //     onChange(e);
  //   }
  // }
}
