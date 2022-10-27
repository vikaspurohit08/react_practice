import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasErrors: false, error: "" };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasErrors: true, error: error });
  }

  render() {
    if (this.hasErrors) {
      <div>{this.error}</div>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
