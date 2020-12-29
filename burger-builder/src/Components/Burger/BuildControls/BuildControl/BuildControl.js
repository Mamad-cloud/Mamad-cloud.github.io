import React from 'react';
import classes from './BuildControl.module.css';
import PropTypes from 'prop-types';


const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.addIngredient} className={classes.More}>
        More
      </button>
      <button
        onClick={props.removeIngredient}
        disabled={props.disabledInfo}
        className={classes.Less}
      >
        Less
      </button>
    </div>
  );
};

buildControl.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,

}

export default buildControl;