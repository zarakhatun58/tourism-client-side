import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import AddBooking from './Pages/AddBooking/AddBooking';
import Booking from './Pages/Booking/Booking';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import PrivateRoute from './routes/PrivateRoute';
import MyBookings from './Pages/MyBookings/MyBookings';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <PrivateRoute exact path="/AddBooking">
              <AddBooking />
            </PrivateRoute>
            <PrivateRoute exact path="/Booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute exact path="/manageBookings">
              <ManageBookings />
            </PrivateRoute>
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
