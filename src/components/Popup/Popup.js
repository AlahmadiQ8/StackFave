import React, { Component } from 'react';
import './Popup.css';

export const ToggleContext = React.createContext({
  open: false,
  toggle: () => {},
});

class Popup extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  onMouseOver = () => {
    this.setState({ mouseOver: true });
  };
  onMouseLeave = () => {
    this.setState({ mouseOver: false });
  };

  componentDidMount() {
    this.node.current.addEventListener('mouseenter', this.onMouseOver);
    this.node.current.addEventListener('mouseleave', this.onMouseLeave);
  }

  componentWillUnmount() {
    this.node.current.removeEventListener('mouseenter', this.onMouseOver);
    this.node.current.removeEventListener('mouseleave', this.onMouseLeave);
  }

  static Button = ({ children }) => (
    <ToggleContext.Consumer>{children}</ToggleContext.Consumer>
  );

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  close = () => {
    this.setState({ open: false });
  };

  state = {
    open: false,
    toggle: this.toggle,
    close: this.close,
    mouseOver: false,
  };

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        <div className="Popup" tabIndex="0" ref={this.node}>
          {this.props.children}
        </div>
      </ToggleContext.Provider>
    );
  }
}

//   return (
//     <Popup>
//       <Popup.Button>
//         {({ toggle, open }) => <button onClick={toggle} />}
//       </Popup.Button>
//       <Popup.Content>Popup content text</Popup.Content>
//     </Popup>
//   );
// }

export default Popup;
