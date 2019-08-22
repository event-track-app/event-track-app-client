import React from 'react';
import { StyledText } from '../components/StyledText';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

// Props
// image_uri
// eventName
// eventDate

export function EventCard(props) {
  return (
    <View style={styles.cardContainer}>   
      <TouchableOpacity>
        <Image style={styles.imageContainer}
          source={require('../assets/images/mimosa-test.png')}
        />
        <View style={styles.cardTopTextViewContainer}>
          <View >
            <StyledText style={[styles.cardImageText, { fontSize: 20 }]}>Centered text</StyledText>
          </View>
        </View>
        <View style={styles.cardBotTextViewContainer}>
          <StyledText style={[styles.cardImageText, {fontSize: 16}]}>9/10 - 12/10</StyledText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

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