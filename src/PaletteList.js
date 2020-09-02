import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white'
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%'
	}
};

export default withStyles(styles)(
	class PaletteList extends Component {
		render() {
			const { palettes, classes } = this.props;
			return (
				<div className={classes.root}>
					<div className={classes.container}>
						<nav className={classes.nav}>
							<h1>React Colors</h1>
						</nav>
						<div className={classes.palettes}>{palettes.map((palette) => <MiniPalette {...palette} />)}</div>
					</div>
				</div>
			);
		}
	}
);