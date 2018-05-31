import React, { Component } from 'react';
import './Popup.css';

const ToggleContext = React.createContext({
  open: false,
  toggle: () => {},
});

class Popup extends Component {
  static Button = ({ children }) => (
    <ToggleContext.Consumer>{children}</ToggleContext.Consumer>
  );

  static Content = ({ children }) => (
    <ToggleContext.Consumer>
      {({ open }) => {
        const wrapper = <div className="Popup__Content">{children}</div>;
        return open ? wrapper : null;
      }}
    </ToggleContext.Consumer>
  );

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  state = {
    open: false,
    toggle: this.toggle,
  };

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        <div className="Popup">{this.props.children}</div>
      </ToggleContext.Provider>
    );
  }
}

// function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
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
