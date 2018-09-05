import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
type ButtonSize = 'small' | 'medium' | 'mini';

interface InterfaceTextAreaProps {
	className?: string;
	defaultValue?: string;
  disabled?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  icon?: string;
	children?: React.ReactNode;
	value?: string;
}

type TextAreaProps = InterfaceTextAreaProps;

export default class TextArea extends React.Component<TextAreaProps, any> {
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

  constructor(props: TextAreaProps) {
    super(props);
    this.state = {}
  }

  public render() {

		const { className, defaultValue, type, size, value, ...otherProps } = this.props;
    const classes = classNames(
      className,
      `lu-textarea`, 
      {
        [`lu-textarea-${size}`]: size,
      }
    );
    const textareaValue = value || defaultValue;

    return (
      <div>
				<textarea 
					{...otherProps}
					className={classes}
					value={textareaValue}
				/>
      </div>
    );
  }
}
