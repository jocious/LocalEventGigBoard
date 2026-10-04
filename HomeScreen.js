import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './globalStyles';


export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Local Event & Gig Board
      </Text>


      <Text style={styles.description}>
        Browse upcoming local events,
        view ticket details, and save
        dates to attend.
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Events')}
      >

        <Text style={styles.buttonText}>
          Browse Events
        </Text>

      </TouchableOpacity>

    </View>

  );

}