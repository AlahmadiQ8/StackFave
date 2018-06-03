import React, { Component } from 'react';
import { ToggleContext } from './Popup';

class Content extends Component {
  constructor(props) {
    super(props);
    this.contentNode = React.createRef();
  }

  state = {
    mouseOverContent: false,
  };

  onMouseOver = () => {
    this.setState({ mouseOverContent: true });
  };
  onMouseLeave = () => {
    this.setState({ mouseOverContent: false });
  };

  componentWillUnmount() {
    this.contentNode.current.removeEventListener(
      'mouseenter',
      this.onMouseOver
    );
    this.contentNode.current.removeEventListener(
      'mouseleave',
      this.onMouseLeave
    );
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.contentNode.current.focus();
      this.contentNode.current.addEventListener('mouseenter', this.onMouseOver);
      this.contentNode.current.addEventListener(
        'mouseleave',
        this.onMouseLeave
      );
      this.shouldClose = false;
    }
  }
  render() {
    const { open, close, mouseOver } = this.props;
    const wrapper = (
      <div
        className="Popup__Content"
        tabIndex="0"
        ref={this.contentNode}
        onBlur={() => {
          if (mouseOver && !this.state.mouseOverContent) {
            // close();
          } else {
            close();
          }
        }}
        onFocus={() => {}}
      >
        {this.props.children}
      </div>
    );
    return open ? wrapper : null;
  }
}

const ContentContainer = ({ children }) => (
  <ToggleContext.Consumer>
    {props => <Content {...props}>{children}</Content>}
  </ToggleContext.Consumer>
);

export default ContentContainer;
