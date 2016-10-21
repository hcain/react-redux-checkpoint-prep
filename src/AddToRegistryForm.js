import React from 'react';

export default class extends React.Component {

    constructor () {
        super();
        this.state = {
            itemName: '',
            itemPrice: ''
        };
        this.updateItemName = this.updateItemName.bind(this);
        this.updateItemPrice = this.updateItemPrice.bind(this);
    }

    updateItemName (e) {
        this.setState({ itemName: e.target.value });
    }

    updateItemPrice (e) {
        this.setState({ itemPrice: e.target.value });
    }

    render () {
        const newName = this.updateItemName;
        const newPrice = this.updateItemPrice;
        return (
            <form>
                <div className="form-group">
                    <label>Item name: </label>
                    <input type="text" id="item-name-field" onChange={ newName }/>
                </div>
                <div className="form-group">
                    <label>Item price: </label>
                    <input type="text" id="item-price-field" onChange={ newPrice }/>
                </div>
                <button type="submit" onSubmit={ this.props.onSend(this.state) }>Add item to registry</button>
            </form>
        );
    }
}
