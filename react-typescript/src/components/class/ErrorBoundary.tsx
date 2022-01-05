import React from "react";

// interface Props {
//   children: React.ReactNode;
// }

// interface State {
//   hasError: boolean;
// }

// REFACTOR
type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

// TYPE ANNOTATION
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  // TYPE ANNOTATION
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // TYPE ANNOTATION
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
