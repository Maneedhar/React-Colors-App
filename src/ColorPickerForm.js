import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles';

export default withStyles(styles)(
	class ColorPickerForm extends Component {
		constructor(props) {
			super(props);
			this.state = { currentColor: 'teal', newColorName: '' };
			this.updateCurrentColor = this.updateCurrentColor.bind(this);
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		componentDidMount() {
			ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
				this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
			ValidatorForm.addValidationRule('isColorUnique', (value) =>
				this.props.colors.every(({ color }) => color !== this.state.currentColor)
			);
		}

		updateCurrentColor(color) {
			this.setState({ currentColor: color.hex });
		}

		handleChange(e) {
			this.setState({
				[e.target.name]: e.target.value
			});
		}

		handleSubmit() {
			const newColor = { color: this.state.currentColor, name: this.state.newColorName };
			this.props.addNewColor(newColor);
			this.setState({ newColorName: '' });
		}

		render() {
			const { paletteIsFull, classes } = this.props;
			const { currentColor, newColorName } = this.state;
			return (
				<div className={classes.picker}>
					<ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} className={classes.picker} />
					<ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
						<TextValidator
							className={classes.colorNameInput}
							value={newColorName}
							variant="filled"
							margin="normal"
							placeholder="Color Name"
							name="newColorName"
							onChange={this.handleChange}
							validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
							errorMessages={[ 'Enter a Color Name', 'Color Name already exists', 'Color already exists' ]}
						/>
						<Button
							className={classes.addColor}
							variant="contained"
							type="submit"
							color="primary"
							style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
							disabled={paletteIsFull}
						>
							{paletteIsFull ? 'Palette Full' : 'Add Color'}
						</Button>
					</ValidatorForm>
				</div>
			);
		}
	}
);
