import React from 'react'
import { Redirect } from 'react-router'

import Home from './components/Home'
import Login from './components/Account/Login/'

import fakeAuth from './actions/Auth'

export const routes = [
	{
		path:'/',
		component: Home,
		exact: true
	},
	{
		path:'/auth',
		component: () => (fakeAuth.isAuthenticated ? (<Home />) : (<Redirect to={{ pathname: '/login', state: { from: '/home' } }} />)),
		exact: true
	},
	{
		path:'/login',
		component: Login
	}
]