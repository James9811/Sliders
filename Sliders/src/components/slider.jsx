import React, { Component } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

class RGBSlider extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		red: 0,
      		green: 0,
      		blue: 0,
			opacity: 1, 
			radius: '0',
			scale: '100',
			degree: '0'
    		};
	}

	updateColor = () => {
    	const { red, green, blue, opacity, scale, radius, degree} = this.state;
    	const colorBox = document.getElementById('colorBox');
    	colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
		colorBox.style.borderRadius = `${radius}%`
		colorBox.style.scale = `${scale}%`
		colorBox.style.rotate = `${degree}deg`
  	};

	handleSliderChange = (color) => (event, value) => {
		this.setState({ [color]: value }, this.updateColor);
	};

	render() {
		const { red, green, blue, opacity, scale, radius, degree } = this.state;
		return (
     		<div>
      			<div
          		id="colorBox"
          		style={{
            		width: '300px',
            		height: '300px',
            		backgroundColor: `rgb(${red}, ${green}, ${blue})`,
					borderRadius: `${radius}`,
					transform: `rotate(${degree})`}}>	
        		</div>
        		<div>
          			<Box sx={{ width: 300 }}>
						<p>Rojo</p>
            			<Slider
              				aria-label="Red"
              				value={red}
              				onChange={this.handleSliderChange('red')}
              				valueLabelDisplay="auto"
              				marks
              				min={0}
              				max={255}
			  				color="error"/>
          			</Box>
        		</div>
        		<div>
          			<Box sx={{ width: 300 }}>
						<p>Verde</p>
            			<Slider
              				aria-label="Green"
              				value={green}
              				onChange={this.handleSliderChange('green')}
              				valueLabelDisplay="auto"
              				marks
              				min={0}
              				max={255}
			  				color="success"/>
          			</Box>
        		</div>
        		<div>
          			<Box sx={{ width: 300 }}>
						<p>Azul</p>
            			<Slider
              				aria-label="Blue"
              				value={blue}
              				onChange={this.handleSliderChange('blue')}
              				valueLabelDisplay="auto"
              				marks
              				min={0}
              				max={255}/>
          			</Box>
				</div>
				<div>
					<Box sx={{ width: 300 }}>
						<p>Opacidad</p>
            			<Slider
             				aria-label="Opacity"
			 				value={opacity}
			 				onChange={this.handleSliderChange('opacity')}
			 				valueLabelDisplay="auto"
			 				marks
			 				min={0}
			 				max={1}
			 				step={0.1}
			 				color="secondary"/>
          			</Box>
				</div>
				<div>
          			<Box sx={{ width: 300 }}>
						<p>Forma</p>
            			<Slider
              				aria-label="Shape"
              				defaultValue={0}
              				value={radius}
							  onChange={this.handleSliderChange('radius')}
              				valueLabelDisplay="auto"
              				marks
              				min={0}
              				max={50}
			  				step={1}/>
          			</Box>
        		</div>
				<div>
					<Box sx={{ width: 300 }}>
						<p>Tamaño</p>
            			<Slider
			 				aria-label="Scale"
			 				value={scale}
			 				onChange={this.handleSliderChange('scale')}
			 				valueLabelDisplay="auto"
			 				marks
			 				min={10}
			 				max={200}
			 				step={1}/>
          			</Box>
				</div>
				<div>
					<Box sx={{ width: 300 }}>
						<p>Rotacion</p>
            			<Slider
			 				aria-label="Degree"
			 				value={degree}
			 				onChange={this.handleSliderChange('degree')}
			 				valueLabelDisplay="auto"
			 				marks
			 				min={0}
			 				max={360}
			 				step={1}/>
          			</Box>
				</div>
      		</div>
    	);
  	}
}

export default RGBSlider;