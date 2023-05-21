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

  const [textInputValue, setTextInputValue] = useState('');

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hi User!</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainWrapper}>
          <View style={styles.savedPlacesContainer}>
            <View style={styles.savedPlacesWrapper}></View>
            <Text style={styles.promptMessage}>Where would you like to go today?</Text>

            <View style={styles.destinationContainer}>

            <TextInput style={styles.input}
            onChangeText={handleTextInputChange}
            value={textInputValue}
            placeholder="Current Location"
            />
            
            <TextInput style={styles.input}
            onChangeText={handleTextInputChange}
            value={textInputValue}
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

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;