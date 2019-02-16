import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = event => {
    this.setState({ placeName: event });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    } else {
      this.props.onPlaceAdded(this.state.placeName);
    }
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
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
export default PlaceInput;
