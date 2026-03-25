import './App.css'
import Login from './components/Login'
import './components/Layout.css'; 
import Header from './components/Header'
import Success from './components/Success'
import { Switch, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Header/> 
    <div className="content-section">
    <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={Success} />
    </Switch>
    </div>
    </>
  )
}

export default App
