import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_5: "" }

  render = () => (
    <View>
      <Button
        title="A-10"
        color="#ffa033"
        onPress={() => this.props.navigation.navigate("BlankScreen8183010")}
      />
      <Button
        title="F-15"
        color="#ffa033"
        onPress={() => this.props.navigation.navigate("BlankScreen9183011")}
      />
      <Button
        title="F-16"
        color="#ffa033"
        onPress={() => this.props.navigation.navigate("BlankScreen10183012")}
      />
      <TextInput
        placeholder="All quick reference lists by airframe"
        multiline={true}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  Button_3: {},
  Button_4: {},
  TextInput_5: {}
})
