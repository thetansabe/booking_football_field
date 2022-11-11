import COLORS from "const/colors";
import { currencyFormat } from "helpers/helperFunction";
import { Text, View } from "react-native";
import { fieldBookingStatusStore } from "store/booking-state";

const ConfirmInfo = ({ fieldInfo }) => {
  const bookingStatus = fieldBookingStatusStore((state) => state.bookingStatus);

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <Text style={{ marginTop: 20, fontSize: 22, fontWeight: "bold" }}>
        Xác nhận thông tin
      </Text>
      <View style={{ borderTopWidth: 4, borderColor: COLORS.green }}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: COLORS.green }}>Tên sân</Text>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          {fieldInfo.name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: COLORS.green }}>Loại sân</Text>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          {fieldInfo.type}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: COLORS.green }}>Giá tiền/giờ</Text>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          {currencyFormat(fieldInfo.price, " đ")}
        </Text>
      </View>

      {bookingStatus && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, color: COLORS.green }}>
            Trạng thái đặt sân
          </Text>

          <View
            style={{
              alignItems: "center",
              backgroundColor: COLORS.yellow,
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 14, color: COLORS.fontDark }}>
              {bookingStatus}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ConfirmInfo;
