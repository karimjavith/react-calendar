import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../modal/store/modal.store";
import ModalPresentation from "./modal.presentation";

const mapStateToPropsForModal = state => {
    return {
        showModal: state.modal.showModal,
        modalElement: state.modal.modalElement,
        elementPosition: state.modal.elementPosition
    };
};

const mapDispatchToPropsForModal = dispatch => ({
    toggleModal: shouldShow => dispatch(toggleModal(shouldShow))
});

const ModalContainer = connect(
    mapStateToPropsForModal,
    mapDispatchToPropsForModal
)(ModalPresentation);

export default ModalContainer;
