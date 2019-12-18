import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

class App extends React.Component {
  state = {
    searchText: null
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainPan}>
          <Text style={styles.h1}>Hi, Stecy</Text>
          <Text style={styles.p}>
            Welcome back to your workspace, we missed you!
          </Text>
          <TextInput
            style={styles.inptStyles}
            placeholder={"Search Task or Project..."}
            onChangeText={() => {}}
            value={this.state.searchText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    backgroundColor: "#06070f",
    flex: 1,
    flexDirection: "row"
  },
  mainPan: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "red",
    flex: 1,
    borderWidth: 1
  },
  h1: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fbfcfc",
    marginBottom: 20
  },
  h2: {
    fontWeight: "bold",
    fontSize: 30
  },
  p: {
    color: "#989aad"
  },
  inptStyles: {
    height: 40,
    backgroundColor: "#474c5f",
    color: "#fbfcfc",
    width: "30%",
    paddingHorizontal: 20,
    borderRadius: 10
  }
});

export default App;
