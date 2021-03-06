import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
} from 'react-native';

import EventCard from '../components/EventCard';
import { Divider } from 'react-native-elements';
import { whileStatement } from '@babel/types';

// each card needs image_uri, event_name, event_date
// TODO: rendering method for list of events with Divider

export default class EventsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </ScrollView>
      </View>
    )
  }
}
// export default function EventsScreen () {

//     return (
//       <View style={styles.container}>
//         {/* <ScrollView onPress={() => this.props.navigation.navigate('EventDetail')}> */}
//         <ScrollView >
//           <EventCard></EventCard>
//           <EventCard></EventCard>
//           <EventCard></EventCard>
//           <EventCard></EventCard>
//         </ScrollView>
//       </View>
//     )
  
// }

// original homescreen
// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>

//         <View style={styles.getStartedContainer}>
//           <DevelopmentModeNotice />

//           <Text style={styles.getStartedText}>Get started by opening</Text>

//           <View
//             style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//             <MonoText>screens/HomeScreen.js</MonoText>
//           </View>

//           <Text style={styles.getStartedText}>
//             does this work on reload?
//           </Text>
//         </View>

//         <View style={styles.helpContainer}>
//           <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
//             <Text style={styles.helpLinkText}>
//               Help, it didn’t automatically reload!
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <View style={styles.tabBarInfoContainer}>
//         <Text style={styles.tabBarInfoText}>
//           This is a tab bar. You can edit it in:
//         </Text>

//         <View
//           style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//           <MonoText style={styles.codeHighlightText}>
//             navigation/MainTabNavigator.js
//           </MonoText>
//         </View>
//       </View>
//     </View>
//   );
// }

EventsScreen.navigationOptions = {
  title: 'Events',
  headerRight: (
    <Button
      onPress={() => alert('this is a button')}
      title='Add'
      color = '#323ea8'
    />
  )
  // header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start'
  },

  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },
  // getStartedContainer: {
  //   alignItems: 'center',
  //   marginHorizontal: 50,
  // },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
