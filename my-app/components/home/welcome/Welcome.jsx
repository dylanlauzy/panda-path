import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const [textInputValue1, setTextInputValue1] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');

  const handleTextInputChange1 = (text) => {
    setTextInputValue1(text);
  };

  const handleTextInputChange2 = (text) => {
    setTextInputValue2(text);
  };


  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hi User!</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainWrapper}>
          <View style={styles.savedPlacesContainer}>
            <View style={styles.savedPlacesWrapper}>
            <Text style={styles.savedPlacesText}>Saved Places</Text>
            </View>
            <Text style={styles.promptMessage}>Where would you like to go today?</Text>

            <View style={styles.destinationContainer}>

            <TextInput style={styles.input}
            onChangeText={handleTextInputChange1}
            value={textInputValue1}
            placeholder="Location"
            />
            
            <TextInput style={styles.input}
            onChangeText={handleTextInputChange2}
            value={textInputValue2}
            placeholder="Destination"
            />

            </View>

            
            
      </View>
      
          <TouchableOpacity style={styles.searchBtn} onPress={
            () => {
              router.push("./map")
            }
          } >
          
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />

        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;