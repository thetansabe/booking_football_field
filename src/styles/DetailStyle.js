import COLORS from "const/colors";

const DetailStyle = {
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },

  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },

  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: COLORS.green,
    top: -40,
    right: 20,
    borderRadius: 50,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },

  priceTag: {
    height: 40,
    alignItems: "center",
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.green,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 0.8,
    flexDirection: "row",
  },

  btn: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: COLORS.green,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  clockIcon: {
    height: 36,
    width: 36,
    backgroundColor: COLORS.green,
    borderRadius: 50,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 4,
  },

  seperator: {
    width: 120,
    height: 1,
    borderStyle: 'solid',
    borderColor: COLORS.green,
    borderWidth: 1,
  },
};

export default DetailStyle;
