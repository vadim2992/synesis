import React, {Component} from 'react';
import EditPopup from '../components/EditPopup';

export default class HouseResidentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {modalIsOpen: false, editItem: false};
    }

    openEditPopup(event) {
        this.setState({
            modalIsOpen: true,
            editItem: event
        });
    }

    onSave(id, newName, newDescription) {
        const {model, actions} = this.props;
        let editItem = model.selectedHouseResidents.find(item => item.id === id);
        editItem.name = newName;
        editItem.description = newDescription;
        actions.editHousesModel(model.houses);
        this.setState({modalIsOpen: false});
    }

    onClose() {
        this.setState({modalIsOpen: false});
    }

    allowDrop(event) {
        event.preventDefault();
    }

    drag(event) {
        const target = event.currentTarget;
        event.dataTransfer.setData('dragItemIndex', target.getAttribute('data-index'));
    }

    drop(event) {
        const {model, actions} = this.props;
        const target = event.currentTarget;
        const dragItemIndex = JSON.parse(event.dataTransfer.getData('dragItemIndex'));
        const dropItemIndex = target.getAttribute('data-index');

        this.swap(model.selectedHouseResidents,dragItemIndex,dropItemIndex);
        actions.editHousesModel(model.houses);

    }

    swap(residentsArray, fistIndex, secondIndex){
        let swapItem = residentsArray[fistIndex];
        residentsArray[fistIndex] = residentsArray[secondIndex];
        residentsArray[secondIndex] = swapItem;
    }

    render() {
        const {model} = this.props;

        return (<div className="residents">
            <h2>Residents:</h2>
            {model.selectedHouseResidents.map((item, key) =>
                <div className="list-item"
                     data-index={key}
                     key={key}
                     draggable="true"
                     onDragStart={::this.drag}
                     onDrop={::this.drop}
                     onDragOver={::this.allowDrop}
                     onDoubleClick={this.openEditPopup.bind(this, item)}>
                    {item.name}
                </div>
            )}

            <EditPopup modalIsOpen={this.state.modalIsOpen}
                       item={this.state.editItem}
                       onSave={::this.onSave}
                       onClose={::this.onClose}/>
        </div>);
    }
}
