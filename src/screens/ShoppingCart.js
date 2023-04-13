import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const checkout = () => {
    console.warn("Item checked out");
  };

  const shoppingCartTotals = () => {
    const subtotal = useSelector(selectSubTotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{`$${subtotal}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>${deliveryFee}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>${total}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotals}
      />
      <Pressable onPress={checkout} style={styles.checkoutButon}>
        <Text style={styles.checkoutBtnText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    padding: 20,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  checkoutButon: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
  },
  checkoutBtnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
