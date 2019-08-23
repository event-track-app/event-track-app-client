import React, { Component } from 'react';
import { StyledText } from '../components/StyledText';
import { withNavigation } from 'react-navigation';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// Props - imageUri, eventName, eventDate, eventId

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: 123
    }
    this._onCardPress = this._onCardPress.bind(this);
  }
  // UNUSED AT THIS POINT - 
  _onCardPress() {
    // identifying the card on press
    let self = this;
    alert(self.state.eventId)
  }
  render() {
    return (
      <View style={styles.cardContainer}>   
        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetail')}>
          <Image style={styles.imageContainer}
            source={require('../assets/images/mimosa-test.png')}
          />
          <View style={styles.cardTopTextViewContainer}>
            <View >
              <StyledText style={[styles.cardImageText, { fontSize: 20 }]}>TO BE SUPPLIED BY PROPS</StyledText>
            </View>
          </View>
          <View style={styles.cardBotTextViewContainer}>
            <StyledText style={[styles.cardImageText, {fontSize: 16}]}>PLACEHOLDER</StyledText>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(EventCard);

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    alignContent: 'center',
    padding: 10,
  },
  imageContainer: {
    borderColor: 'rgb(242, 242, 242)',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
    height: 200
  },
  cardImageText: {
    color: '#000000',
    fontWeight: '900',
  },
  cardTopTextViewContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start'
  },
  cardBotTextViewContainer: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 0,
    bottom: 15,
    justifyContent: 'flex-end'
  },
});