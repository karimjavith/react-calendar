import React from "react";
class ErrorBoundaryPresentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
        // debugger;
        // return <h1>Something went wrong.</h1>;
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        this.props.throwErrorFromBoundary({ error: error, errorInfo: info });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="error-container">
                    <div className="error-descr">
                        <p><span className="glyphicon glyphicon-info-sign"></span></p>
                        <p><span>Something went wrong.</span></p>
                        <p>Please try again later!</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundaryPresentation;
