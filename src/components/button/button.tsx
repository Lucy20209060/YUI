import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './button.css';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
export type ButtonShape = 'circle-outline' | 'circle';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export interface InterfaceBaseButtonProps {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  icon?: string;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  ghost?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & InterfaceBaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & InterfaceBaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default class Button extends React.Component<ButtonProps, any> {
  public static propTypes = {
    block: PropTypes.bool,
    className: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    icon: PropTypes.string,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onClick: PropTypes.func,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    type: PropTypes.string,
  };
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      
    };
  }
  public render() {
    console.log(this.props)

    const { children, className, type, size } = this.props;

    const classes = classNames(
      className,
      `lu-button`, 
      {
        [`lu-button-${type}`]: type,
        [`lu-button-${size}`]: size,
      }
    );

    return (
      <button className={classes}>
        <span>{children}</span>
      </button>
    );
  }
}
