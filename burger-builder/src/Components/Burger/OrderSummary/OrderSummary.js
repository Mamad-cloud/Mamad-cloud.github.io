import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {

    ingredientSummary = Object.keys(this.props.ingredients).map(igrKey => {
        return (
          <li key={igrKey}>
            <span style={{ textTransform: "uppercase" }}>{igrKey} : </span>
            {this.props.ingredients[igrKey]}
          </li>
        );
    });

    render() {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>a delecious burger with the following ingredients:</p>
                <ul>    
                    {this.ingredientSummary}
                </ul>
                <p>the price would be : <strong>{this.props.price.toFixed(2)}$</strong></p>  
                <Button clicked={this.props.purchaseContinued} type="Success">CONTINUE</Button>
                <Button clicked={this.props.purchaseCancelled} type="Danger">CANCEL</Button>
    
            </Aux>
        );
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.)
    // }

    componentDidUpdate() {
        console.log('[OrderSummary.js] did update.. (shouldnt be displayed)');
    }

    
}

OrderSummary.propTypes = {
    purchaseCancelled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.object.isRequired,

}

export default OrderSummary;