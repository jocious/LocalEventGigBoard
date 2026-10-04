import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  description: {
    fontSize: 18,
    marginBottom: 30
  },

  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    marginBottom: 15
  },

  backButton: {
    backgroundColor: 'gray',
    padding: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 18
  },

  eventItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10
  },

  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },

  eventText: {
    fontSize: 16,
    marginBottom: 3
  },

  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },

  detail: {
    fontSize: 20,
    marginBottom: 10
  }

});