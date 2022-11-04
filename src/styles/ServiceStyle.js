import COLORS from "const/colors"
import { Dimensions, StyleSheet } from "react-native"
const {width} = Dimensions.get("screen")
const cardWidth = width/2 - 20

const ServiceStyle = StyleSheet.create({
    serviceContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    serviceTag: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    tagIcon: {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    serviceCard: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white
    },

    addCartBtn: {
        height: 36,
        width: 36,
        borderRadius: 20,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default ServiceStyle