import COLORS from "const/colors"

const CartStyle = {
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        
    },

    cartCard:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.floatBgDark,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.green,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
}

export default CartStyle