import React from 'react';
import { StyledText } from '../components/StyledText'; 
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';


export default function EventDetailScreen(props) {
  return (
    <View style={styles.topLevelContainer}>
      <View style={styles.eventDetailContainer}>
        <View>
          <Image style={styles.innerImage}
            source={require('../assets/images/mimosa-test.png')}
          />
          <View style={styles.cardTopTextViewContainer}>
            <View >
              <StyledText style={[styles.cardImageText, { fontSize: 20 }]}>TO BE SUPPLIED BY eventName PROP</StyledText>
            </View>
          </View>
        </View>
        <View style={styles.membersContainer}>
          {/* members container */}
          <StyledText>Hey Hello</StyledText>
        </View>
        <View style={styles.balanceContainer}>
          {/* balance container */}
          <StyledText>Hey Hello again</StyledText>
        </View>
      </View>
      <View style={styles.expenseDetailContainer}>
        {/* Expense view */}
        <ScrollView>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
          <StyledText>Dummy info</StyledText>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  innerImage: {
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
  membersContainer: {
    justifyContent: 'center',
    height: 50,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  eventDetailContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#F2F2F2',
  },
  expenseDetailContainer: {
    flex: 4,
    borderColor: '#000000',
    borderWidth: 2,
  },
  topLevelContainer: {
    flex: 1,
    padding: 10,
  }
});