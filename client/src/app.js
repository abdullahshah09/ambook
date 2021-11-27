import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import login from './pages/signupandlogin/login'
import register from './pages/signupandlogin/register'
import home from './components/header/header.components'
 
class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={login} /> 
                    <Route path="/register" component={register} /> 
                    <Route path="/home" component={home} /> 
                </div>
            </Router>
        )
    }
}
export default App;