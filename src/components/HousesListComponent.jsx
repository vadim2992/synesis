import React, {Component} from 'react';

export default class HousesListComponent extends Component {

    onItemClick(id) {
        const {actions} = this.props;
        actions.selectHouse(id);
    }

    render() {
        const {model} = this.props;
        if (model.houses) {
            return (<div className={model.selectedHouseId ? 'houses half' : 'houses'}>
                <h2>Houses:</h2>
                {model.houses.map((item, key) =>
                    <div className={item.id === model.selectedHouseId ? 'list-item selected' : 'list-item'} key={key}
                         onClick={this.onItemClick.bind(this, item.id)}>
                        {item.name}
                    </div>
                )}
            </div>);
        }

        return <div></div>;
    }
}