import React, {Component} from 'react';

import axios from 'axios';

import {View, Text, FlatList, StyleSheet} from 'react-native';

export default class main extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    axios
      .get('https://api.coronaanalytic.com/brazil/')
      .then(response => {
        this.setState({data: response.data.values});
        console.log(this.state.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>Estado: {item.state}</Text>
      <Text style={styles.productDescription}>Casos: {item.cases}</Text>
      <Text style={styles.productDescription}>Mortes: {item.deaths}</Text>
      <Text style={styles.productDescription}>Suspeitas: {item.suspects}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.data}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: '#DA552F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  productButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
