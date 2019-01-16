import React from "react";
import { connect } from "react-redux";
import { throwErrorFromBoundary } from "../store";
import ErrorBoundaryPresentation from "../presentation/ErrorBoundary.Presentation";

const mapStateToPropsErrorBoundary = state => {
    return {
        errorBoundary: state.calendar.errorBoundary
    };
};

const mapDispatchToPropsErrorBoundary = dispatch => ({
    throwErrorFromBoundary: errorObj => dispatch(throwErrorFromBoundary(errorObj))
});
const ErrorBoundaryContainer = connect(
    mapStateToPropsErrorBoundary,
    mapDispatchToPropsErrorBoundary
)(ErrorBoundaryPresentation);

export default ErrorBoundaryContainer;