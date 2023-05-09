import './App.css';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './components/Landing/LandingPage'
import Home from './components/Home/Home'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'
import Detail from './components/Detail/DetailPage'

function App() {
  return (
    
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/create' component={RecipeCreate}/>
      <Route path = '/detail/:id' component={Detail}/>
      </Switch>
)
};


export default App;
