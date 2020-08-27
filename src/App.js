import React, { Component } from 'react';
import './App.css';
import seedColor from './seedColor';
import Palette from './Palette';

export default class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColor[4]} />
			</div>
		);
	}
}
