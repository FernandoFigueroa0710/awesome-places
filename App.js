/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    } else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
      });
    }
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="An Awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.button}
            onPress={this.placeSubmitHandler}
          />
        </View>
        {placesOutput}
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
