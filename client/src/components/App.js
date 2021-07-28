import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					<Route
            			exact
            			path="/forgotpassword"
            			component={ForgotPasswordScreen}
          			/>
         			<Route
            			exact
            			path="/passwordreset/:resetToken"
            			component={ResetPasswordScreen}
          			/>
					<UserRoute
						exact
						path='/user/dashboard'
						component={UserDashboard}
					/>
					<AdminRoute
						exact
						path='/admin/dashboard'
						component={AdminDashboard}
					/>
					<AdminRoute
						exact
						path='/admin/edit/product/:productId'
						component={AdminEditProduct}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
