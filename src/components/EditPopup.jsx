import React, {Component} from 'react';
import Modal from 'react-modal';

export default class EditPopup extends Component {
    componentWillReceiveProps(props) {
        this.setState({
            modalIsOpen: props.modalIsOpen,
            name: props.item && props.item.name,
            description: props.item && props.item.description
        });
    }

    handleChange(event) {
        const type = event.target.getAttribute('data-type');
        const newState = {};

        newState[type] = event.target.value;
        newState.hasError = !event.target.value.length;
        this.setState(newState);
    }

    save() {
        const hasError = !this.state.name.length || !this.state.description.length;

        if (!hasError) {
            this.props.onSave(this.props.item.id, this.state.name, this.state.description);
        }
    }

    cancel() {
        this.props.onClose();
    }

    getStyles() {
        return {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '360px',
                overflow: 'visible',
                borderRadius: '0px'
            }
        };
    }

    render() {
        if (this.state) {
            const hasError = !this.state.name.length || !this.state.description.length;

            return (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={::this.cancel}
                    style={::this.getStyles()}
                    contentLabel="Modal"
                >
                    <h2 className="title">Edit resident</h2>
                    <div className="modal-content">
                        {hasError ? <span>Name and Description can't be empty.</span> : ''}
                        <div>
                            <span>Name:</span>
                            <input type="text"
                                   data-type="name"
                                   onChange={::this.handleChange}
                                   value={this.state.name}
                            />
                        </div>
                        <div>
                            <span>Description:</span>
                            <input type="text"
                                   data-type="description"
                                   onChange={::this.handleChange}
                                   value={this.state.description}
                            />
                        </div>
                    </div>
                    <div className="popup-buttons">
                        <input onClick={::this.save} type="button"
                               className="save-button" value="Save"/>
                        <input onClick={::this.cancel} type="button" className="cancel-button"
                               value="Cancel"/>
                    </div>
                </Modal>
            );
        } else {
            return false;
        }
    }
}