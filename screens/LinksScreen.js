import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

// export default function LinksScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       {/**
//        * Go ahead and delete ExpoLinksView and replace it with your content;
//        * we just wanted to provide you with some helpful links.
//        */}
//       <ExpoLinksView />
//       <Button title='click to pop to top' onPress={()=> this.props.navigation.popToTop()}/>
//     </ScrollView>
//   );
// }

export default class LinksScreen extends React.Component { 
  render() {
    return (
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        <ExpoLinksView />
        <Button title='click to pop to top' onPress={()=> this.props.navigation.popToTop()}/>
      </ScrollView>
    )
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
