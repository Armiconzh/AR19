import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			
			<Text style={cantik.bio}>{this.props.title}</Text>
		)
	}
}

const cantik = {
	bio: {
		color: "#7D1313",
		fontSize: 80,
		fontWeight: 'bold'
	}

}

export default Judul;
