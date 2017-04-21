import React from 'react';
import {
		Image,
  		StyleSheet,
  		Text,
  		View,
		} from 'react-native'
import styles from './../styles'




var Dude = React.createClass({


	render: function(){

		var imageHeight = 435
		var imageWidth = 276

		var percentage = this.props.percentage
		if (percentage > 100) {
			percentage = 100
		} else if (percentage < 0) {
			percentage = 0
		}

		var percentageOfPixels = imageHeight - (percentage / 100) * imageHeight
		var viewTopPosition = percentageOfPixels + 50

		var percentFontSize = 35

		return <View style={styles.dudeContainer}>

			<Image 
				style={{
						position: 'absolute',
						top: 0,
						left: 200,
						height: 120,
				}}
				source={require("./../images/dudePercent.png")}
				resizeMode={"cover"}>
					<Text style={{
						color: 'white',
						backgroundColor: '#fd3937',
						position: 'absolute',
						top: 25,
						fontSize: percentFontSize,
						fontFamily: 'AvenirNextCondensed-Heavy',
						left: 15,
						width: 90,
						textAlign: 'center'
					}}>{this.props.percentage}%</Text>
			</Image>

			<Image style={{
				position: 'absolute',
				top: 50,
				left: 30,
				bottom: 0,
				height: imageHeight,
				width: imageWidth
			}} 
			source={require("./../images/blankDude.png")}
			resizeMode={"cover"} />
			

			<View style={[{
		        overflow: 'hidden',
		        height: imageHeight,
		        width: imageWidth,

		        position: 'absolute',
				top: viewTopPosition,
				left: 30,
				bottom: 0,
				height: imageHeight,


		        backgroundColor: 'transparent'
		        }, this.props.style]}>
		        <Image style={{
		          position: 'absolute',
		          top: percentageOfPixels * -1,
		          left: 0 * -1,
		          width: imageWidth,
		          height: imageHeight,
		          opacity: 0.6
		        }}
		          source={require("./../images/blueDude.png")}
		          resizeMode={"cover"}>
		        </Image>
		      </View>
		    

		</View>
	},


	renderOld: function(){
		return (
			<View>
				<Text>Percentage: {this.props.percentage}</Text>


				<View style={styles.dudeContainer}>
				  <Image style={styles.dudeBlankImage} source={require("./../images/transparentDude.png")}>				    
				    <View style={styles.dudeOverlay} style={{
					     	backgroundColor: this.buildGradientBackgroundStyle()
					     }}>
					     <Image source={require("./../images/blankDude.png")}>

					     </Image>	
				    </View>
				  </Image>
				</View>


			</View>				
		)
	}
})

export default Dude