import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import login from './pages/signupandlogin/login'
import register from './pages/signupandlogin/register'
import home from './components/header/header.components'
import profile from './pages/home/profile'
import UpdateProfile from './pages/home/updateProfile'
 
class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={login} /> 
                    <Route path="/register" component={register} /> 
                    <Route path="/home" component={home} /> 
                    <Route path="/home/profile" component={profile} /> 
                    <Route path="/home/updateProfile" component={UpdateProfile} /> 
                </div>
            </Router>
        )
    }
}
export default App;