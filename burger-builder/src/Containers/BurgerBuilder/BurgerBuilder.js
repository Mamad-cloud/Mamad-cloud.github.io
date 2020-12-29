import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import Burger from './../../Components/Burger/Burger';

const INGGREDIENT_PRICES = {
    salad: 1.3,
    bacon: 0.9,
    cheese: 0.3,
    meat: 2.6,
}

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        //console.log('[BurgerBuilder.js] -> constructor() - 1');

        this.state = {
            ingredients: {

                salad: 0,
                bacon: 0,
                cheese: 0,
                meat : 0,
                
            },
            burgerPrice: 3,
            purchasable: false,
            showModal: false,
        }
    }

    updatePurchaseState = (_ingredients) => {
        
        const sum = Object.keys(_ingredients).map((igrKey) => {
            return _ingredients[igrKey];
        }).reduce((prevEl, currEl) => {
            return prevEl + currEl;
        }, 0);
        this.setState({purchasable: sum > 0});

    }

    //#region event Handlers

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] += 1;
        //#region other soulution

        //const updatedIngredients = {...Ingredients};
        // const oldCount = this.state.ingredients[type];
        // const updatedCount = oldCount + 1;
        // const updatedIngredients = {...this.state.ingredients};
        // updatedIngredients[type] = updatedCount;
        //#endregion
        const priceAddition = INGGREDIENT_PRICES[type];
        const totalPrice = this.state.burgerPrice + priceAddition;
        this.setState({ ingredients: ingredients, burgerPrice: totalPrice });
        this.updatePurchaseState(ingredients);

    }


    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        let totalPrice = this.state.burgerPrice;
        const subtractedPrice = INGGREDIENT_PRICES[type];
        if (ingredients[type] > 0 ) {
            ingredients[type] -= 1;
            totalPrice -= subtractedPrice;
        } else {
            ingredients[type] = 0;
        }
        // ingredients[type] > 0 ? ingredients[type] -= 1 : ingredients[type] = 0;
        // const subtractedPrice = INGGREDIENT_PRICES[type];
        // const totalPrice = this.state.burgerPrice - subtractedPrice;
        this.setState({ingredients: ingredients, burgerPrice: totalPrice});
        this.updatePurchaseState(ingredients);

    }

    showModalHandler = () => {
      // this.setState((prevState, props) => {
      //     if(prevState.showModal) {
      //         return {showModal: false}
      //     } else {
      //         return {showModal: true}
      //     }
      // })

      this.setState({ showModal: true });
      //this.setState({ showModal: true });

    }

    modalCloseHandler = () => {
        this.setState({showModal: false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!!');
    }

    //#endregion

    render() {
        //console.log('[BurgerBuilder.js] -> render() - 2');

        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo) {
            if(disabledInfo[key] <= 0) {
                disabledInfo[key] = true;
            } else {
                disabledInfo[key] = false;
            }
        }

        // const _ingredeinets = {...this.state.ingredients};
        
        // const purchasableInfo = Object.keys(_ingredeinets).map((igrKey) => {
        //     return _ingredeinets[igrKey];
        // }).reduce((prevEl, currEl) => {
        //     return prevEl + currEl;
        // }, 0);
        // console.log(purchasableInfo);

        return (
          <Aux>
            {/* {this.state.showModal ? (
              <Modal>
                <OrderSummary price={this.state.burgerPrice} ingredients={this.state.ingredients} />
              </Modal>
            ) : null}*/}
            <Modal show={this.state.showModal} modalClosed={this.modalCloseHandler}>
              <OrderSummary
                purchaseCancelled={this.modalCloseHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.burgerPrice}
                ingredients={this.state.ingredients}
              />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              removeIngredient={this.removeIngredientHandler}
              addIngredient={this.addIngredientHandler}
              disabledInfo={disabledInfo}
              price={this.state.burgerPrice}
              purchasableInfo={this.state.purchasable}
              showModal={this.showModalHandler}
            />
          </Aux>
        );
    }

    componentDidMount() {
        //console.log('[BurgerBuilder.js] -> componentDidMount() - 3');
    }

    shouldComponentUpdate(prevProps, prevState) {
        //console.log('[BurgerBuilder.js] shouldComponentUpdate()');
        //console.log(prevProps);
        return true;
    }
}

export default BurgerBuilder;