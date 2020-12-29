import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import Aux from '../../hoc/Aux/Aux';

const Burger = props => {

    const ingredients_arr = Object.keys(props.ingredients).map(ingrKey => {
        return [...Array(props.ingredients[ingrKey])].map((_, idx) => {
            return <BurgerIngredient key={ingrKey + idx} type={ingrKey} />
        });
    }).reduce((prevVal, currVal) => {
        return prevVal.concat(currVal);
    }, []);

    // Another Approach would be to use the flat() method which works as well
    // const ingredients_arr = Object.keys(props.ingredients).map(ingrKey => {
    //     return [...Array(props.ingredients[ingrKey])].map((_, idx) => {
    //         return <BurgerIngredient key={ingrKey + idx} type={ingrKey} />
    //     });
    // }).flat();


    let burgerIngredients = null;
    
    if(ingredients_arr.length === 0) {
        burgerIngredients = (
            <Aux>
                <h3>You Just Want Buns?!</h3>
                <h4>Add your ingredients down below in the Controls</h4>
            </Aux>
        );
    } else {
        burgerIngredients = [...ingredients_arr];
    }

    useEffect(() => {
        
    }, []);


    return (
      
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {burgerIngredients}
          <BurgerIngredient type="bread-bottom" />
        </div>
      
    );

}

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired,
}

export default Burger;