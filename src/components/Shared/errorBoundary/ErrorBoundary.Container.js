import React from "react";
import { connect } from "react-redux";
import { throwErrorFromBoundary } from "./store/error.store";
import ErrorBoundaryPresentation from "./ErrorBoundary.Presentation";

const mapStateToPropsErrorBoundary = state => {
    return {
        errorBoundary: state.calendar.errorBoundary
    };
};

const actionCreators = {
    throwErrorFromBoundary
};
const ErrorBoundaryContainer = connect(
    mapStateToPropsErrorBoundary,
    actionCreators
)(ErrorBoundaryPresentation);

export default ErrorBoundaryContainer;
