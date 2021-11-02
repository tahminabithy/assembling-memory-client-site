import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPlaces from './components/AddPlaces/AddPlaces';
import AllBookings from './components/AllBookings/AllBookings';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu></Menu>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/addplace'>
            <AddPlaces></AddPlaces>
          </Route>
          <Route path='/allbookings'>
            <AllBookings></AllBookings>
          </Route>
          <Route path='/mybookings'>
            <MyBookings></MyBookings>
          </Route>
          <PrivateRoute path='/placebooking/:id'>
            <PlaceBooking></PlaceBooking>
          </PrivateRoute>
          <Route>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
