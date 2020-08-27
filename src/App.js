import React, { Component } from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';

export default class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColors[4]} />
			</div>
		);
	}
}
