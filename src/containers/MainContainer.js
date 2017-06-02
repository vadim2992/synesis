import React, {Component} from 'react';
import HousesListComponent from '../components/HousesListComponent';
import HouseResidentsComponent from '../components/HouseResidentsComponent';

export default class MainContainer extends Component {
    render() {
        const {model, actions} = this.props;

        return (<div>
            <HousesListComponent model={model} actions={actions}/>
            {model.selectedHouseId ? <HouseResidentsComponent model={model} actions={actions}/> : ''}
        </div>);
    }
}