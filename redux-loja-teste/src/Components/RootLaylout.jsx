import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import { Provider } from 'react-redux';
import store from '../store/store';
const RootLaylout = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLaylout;
