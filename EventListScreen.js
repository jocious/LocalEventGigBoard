import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { styles } from './globalStyles';


const events = [

  {
    id: '1',
    title: 'Calbayog Music Night',
    date: 'October 10, 2026',
    venue: 'City Events Hall',
    price: 'PHP 250'
  },

  {
    id: '2',
    title: 'Campus Indie Gig',
    date: 'October 17, 2026',
    venue: 'University Activity Center',
    price: 'PHP 200'
  },

  {
    id: '3',
    title: 'Weekend Acoustic Night',
    date: 'October 24, 2026',
    venue: 'Downtown Music Hall',
    price: 'PHP 150'
  }

];


export default function EventListScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Upcoming Events
      </Text>


      <FlatList

        data={events}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity

            style={styles.eventItem}

            onPress={() =>
              navigation.navigate(
                'EventDetails',
                {
                  event: item
                }
              )
            }

          >

            <Text style={styles.eventTitle}>
              {item.title}
            </Text>


            <Text style={styles.eventText}>
              {item.date}
            </Text>


            <Text style={styles.eventText}>
              {item.venue}
            </Text>


            <Text style={styles.eventPrice}>
              {item.price}
            </Text>

          </TouchableOpacity>

        )}

      />

    </View>

  );

}