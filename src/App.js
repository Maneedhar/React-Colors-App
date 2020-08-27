import React, { Component } from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';

export default class App extends Component {
	render() {
		return (
			<div>
				<Palette palette={generatePalette(seedColors[4])} />
			</div>
		);
	}
}
