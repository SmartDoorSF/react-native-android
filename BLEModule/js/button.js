// Add a JS button
var React = require('react-native');
var {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    StyleSheet,
    View,
    Text
} = React;

var SampleButton = React.createClass({
    buttonClicked: function() {
        console.log('button clicked');
    },
    render: function() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        return (
            <View style={buttonStyles.container}>
              <Text style={buttonStyles.welcome}>
                A sample button/scanning bluetooth device!
              </Text>
              <TouchableElement
                onPress={this.buttonClicked}>
                <View>
                    <Text>SCAN</Text>
                </View>
              </TouchableElement>
            </View>
        )
    }
})

var buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

module.exports = SampleButton;
