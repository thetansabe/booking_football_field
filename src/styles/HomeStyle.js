import { Dimensions, StyleSheet } from "react-native";
import COLORS from "const/colors";
const {width} = Dimensions.get('screen')
const cardWidth = width/1.8

const HomeStyle = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.floatBgDark,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },

  categoryText: {
    fontSize: 17,
    fontStyle: "bold",
  },

  fieldCard: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.floatBgDark
  },

  cardImg: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15, 
  },

  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.blue,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardDetail: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.floatBgDark,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '100%'
  },

  cardOverlay:{
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
    opacity: 0
  },
  
  nearestFieldCard: {
    height: 150,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginHorizontal: 10,
    borderRadius: 10
  },

  nearestFieldCardImg: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
});

export default HomeStyle;
