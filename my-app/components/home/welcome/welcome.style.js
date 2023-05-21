import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: 'left',
    paddingHorizontal: 40,
  },

  savedPlacesWrapper: {
    marginRight: SIZES.small,
    height: 300,
    width: 300,
    backgroundColor: COLORS.green,
    borderRadius: SIZES.medium,
    marginLeft: 13,
    marginRight: 13,

  },

  savedPlacesContainer: {
    height: 350,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  mainContainer: {
    height: 600,
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    paddingHorizontal: 20,
    
  },
  
  mainWrapper: {
    flex: 1,
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    backgroundColor: COLORS.lightGreen,
  },

  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },

  searchBtn: {
    width: "60%",
    length: "90%",
    height: 50,
    backgroundColor: COLORS.darkGreen,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    marginTop: "75%",

    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "5%",

    alignItems: "center",

  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
