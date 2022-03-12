import React from 'react';
import Login from './Screens/auth/Login';
import Home from './Screens/Home';
import Register from './Screens/auth/Register'
import {Switch,Route} from 'react-router-dom'
import Header from './Components/Navbar/Header';
function App() {
	return (
		<>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/register" exact component={Register} />
		</Switch>
		</>
	);
}
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"
  rel="stylesheet"
/>
export default App;
