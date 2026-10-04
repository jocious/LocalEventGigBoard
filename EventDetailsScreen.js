import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './globalStyles';


export default function EventDetailsScreen({
  route,
  navigation
}) {

  const { event } = route.params;


  const [saved, setSaved] = useState(false);


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Event Details
      </Text>


      <Text style={styles.label}>
        Event:
      </Text>

      <Text style={styles.detail}>
        {event.title}
      </Text>


      <Text style={styles.label}>
        Date:
      </Text>

      <Text style={styles.detail}>
        {event.date}
      </Text>


      <Text style={styles.label}>
        Venue:
      </Text>

      <Text style={styles.detail}>
        {event.venue}
      </Text>


      <Text style={styles.label}>
        Ticket:
      </Text>

      <Text style={styles.detail}>
        {event.price}
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => setSaved(!saved)}
      >

        <Text style={styles.buttonText}>

          {saved
            ? 'Date Saved ✓'
            : 'Save Date'}

        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.buttonText}>
          Go Back
        </Text>

      </TouchableOpacity>

    </View>

  );

}