import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
// import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = (history: History<unknown>) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      //   products: ProductsReducer,
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
};
export default createStore;
