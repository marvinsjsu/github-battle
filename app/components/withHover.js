import React from 'react';

export default function withHover (Component, hoverKey = 'hovering') {
  return class WithHover extends React.Component {
    state = {
      hovering: true
    };

    handleMouseOver = () => {
      this.setState({
        hovering: true
      });
    };

    handleMouseOut = () => {
      this.setState({
        hovering: false
      });
    };

    render () {

      const props = {
        [hoverKey]: this.state.hovering,
        ...this.props
      };

      return (
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Component {...props} />
        </div>
      );
    }
  }
}