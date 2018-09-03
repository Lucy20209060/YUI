import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './button.css';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
export type ButtonSize = 'small' | 'medium' | 'mini';

export interface InterfaceBaseButtonProps {
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  icon?: string;
  children?: React.ReactNode;
}

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & InterfaceBaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends React.Component<ButtonProps, any> {
  public static defaultProps = {
    disabled: false,
    type: 'default'
  };

  public static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['medium', 'mini', 'small']),
    type: PropTypes.string,
  };

  constructor(props: ButtonProps) {
    super(props);
    this.state = {}
  }

  public handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  public render() {

    const { children, className, type, size, disabled } = this.props;
    const classes = classNames(
      className,
      `lu-button`, 
      {
        [`lu-button-${type}`]: type,
        [`lu-button-${size}`]: size,
      }
    );

    return (
      <button 
        disabled={disabled} 
        className={classes}
        onClick={this.handleClick}
      >
        <span>{children}</span>
      </button>
    );
  }
}
