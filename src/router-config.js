import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { 
	Home,
	Login, 
	Protected 
} from './components';
import fakeAuth from './Auth';

export const routes = [
	{
		'path':'/',
		'component': Home,
		'exact': true
	},
	{
		'path':'/login',
		'component': Login
	},
	{
		'path':'/protected',
		'component': () => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}}}/>))
	}
]