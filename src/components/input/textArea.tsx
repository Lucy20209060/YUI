import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './textArea.css';

interface InterfaceMyEventTarget extends EventTarget {
  value: string
}
interface InterfaceMyFormEvent<T> extends React.FormEvent<T> {
  target: InterfaceMyEventTarget
}

export interface InterfaceAutoSizeType {
  minRows?: number;
  maxRows?: number;
}

interface InterfaceTextAreaProps {
	autosize?: boolean | InterfaceAutoSizeType;
	className?: string;
	defaultValue?: string;
	disabled?: boolean;
	onChange?: React.EventHandler<InterfaceMyFormEvent<TextArea>>;
	placeholder?: string;
	value?: string;
}

type TextAreaProps = InterfaceTextAreaProps;

export default class TextArea extends React.Component<TextAreaProps, any> {
  public static defaultProps = {
    placeholder: '请输入内容'
  };

  public static propTypes = {
    className: PropTypes.string,
		placeholder: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'mini', 'small']),
    type: PropTypes.string,
  };

  constructor(props: TextAreaProps) {
    super(props);
    this.state = {}
  }

  public render() {

		const { className, defaultValue, value, autosize, ...otherProps } = this.props;
    const classes = classNames(
      className
    );
		const textareaValue = value || defaultValue;
	
		const minRows = autosize ? (autosize as InterfaceAutoSizeType).minRows : null;
		const maxRows = autosize ? (autosize as InterfaceAutoSizeType).maxRows : null;

		const styles = {
			maxHeight: `${maxRows ? 33 + 21 * (maxRows - 1) : null}px`,
			minHeight: `${minRows ? 33 + 21 * (minRows - 1) : null}px`
		};

    return (
      <div className="lu-textarea">
				<textarea 
					{...otherProps}
					className={classes}
					value={textareaValue}
					style={styles}
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
