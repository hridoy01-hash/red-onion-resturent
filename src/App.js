import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Header from './Pages/Home/Header/Header';
import NotFound from './Pages/Notfound/NotFound';
import MealDetails from './Pages/MealDetails/MealDetails';
import Signup from './Pages/Signup/Signup';
import ContextProvider from './Context/ContextProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div> 
      <ContextProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
          <Home></Home>  
          </Route>
          <Route exact path="/home">
          <Home></Home>  
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/mealdetails/:foodId">
            <MealDetails></MealDetails>
          </PrivateRoute>
          <Route path="*">
             <NotFound></NotFound>
          </Route>  
        </Switch> 
      </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
