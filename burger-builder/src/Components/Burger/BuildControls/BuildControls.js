import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import PropTypes from 'prop-types';


const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];



const BuildControls = props => {

    
    const _build_controls = controls.map((ctrl, idx) => {
      //console.log(props.disabledInfo);
      return (
        <BuildControl
          key={idx}
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          removeIngredient={() => props.removeIngredient(ctrl.type)}
          disabledInfo={props.disabledInfo[ctrl.type]}
        />
      );
    });

    return (
      <div className={classes.BuildControls}>
        <p>
          the burger price: <strong>{props.price.toFixed(2)}$</strong>
        </p>
        {_build_controls}
        <button
          onClick={props.showModal}
          disabled={!props.purchasableInfo}
          className={classes.OrderButton}
        >
          ORDER NOW!
        </button>
      </div>
    );

    


}


BuildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,

}

export default BuildControls;