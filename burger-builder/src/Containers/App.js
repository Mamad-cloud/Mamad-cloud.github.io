import classes from './App.module.css';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../Containers/BurgerBuilder/BurgerBuilder';

const app = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder />
      </Layout>      
    </div>
  );
}

export default app;
