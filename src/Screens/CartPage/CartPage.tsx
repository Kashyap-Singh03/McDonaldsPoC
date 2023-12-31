//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomCartEntity from '../../Components/CustomCartEntity/CustomCartEntity';
import {past_orders_request} from '../../Redux/Action';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';
const CartPage = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.reducer.cartItems);
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    let newTotalItems = 0;
    let newTotalPrice = 0;

    cartItems.forEach(item => {
      if (item.userId === userId) {
        newTotalItems += item.qty;
        newTotalPrice += item.qty * item.price;
      }
    });
    setTotalItems(newTotalItems);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    let count = 0;
    cartItems.forEach(item => {
      if (item.userId === userId) {
        count = 1;
        setIsEmpty(false);
      }
    });
    if (count == 0) {
      setIsEmpty(true);
    }
  }, [cartItems]);

  const handleSubmit = () => {
    const currentDate = new Date();
    const d1 = currentDate.toISOString().split('T');
    const d2 = d1[0].split('-');
    setSelectedDate(d2[2] + '/' + d2[1] + '/' + d2[0]);

    const currentTime = new Date();
    const t1 = currentTime.toLocaleTimeString();
    const t2 = t1.split(' ');
    const t3 = t2[0].split(':');
    setSelectedTime(t3[0] + ':' + t3[1] + ' ' + t2[1]);

    if (selectedDate !== '' && selectedTime !== '') {
      const data = {
        userId: userId,
        date: selectedDate,
        time: selectedTime,
        totalItems: totalItems,
        totalPrice: totalPrice,
      };
      dispatch(past_orders_request(data));
      navigation.navigate('Home');
    }
  };

  return !isEmpty ? (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.bottomContainer}>
          {baseLocalEng.cartPage.title}
        </Text>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        {cartItems.map(item =>
          item.userId == userId ? (
            <>
              <View style={styles.viewStyle}>
                <CustomCartEntity
                  itemImage={item.image}
                  itemName={item.title}
                  itemPrice={item.price * item.qty}
                  itemQty={item.qty}
                  itemId={item.id}
                />
              </View>
            </>
          ) : null,
        )}
        <View style={styles.totalItemViewStyle}>
          <View>
            <Text style={styles.totalItemTextStyle}>
              {baseLocalEng.cartPage.totalItem}
            </Text>
            <Text style={styles.gratisStyle}>
              {baseLocalEng.cartPage.biayaPengiriman}
            </Text>
            <Text style={styles.totalPriceText}>
              {baseLocalEng.cartPage.totalBiaya}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.totalItemTextStyle}>{totalItems}</Text>
            <Text style={styles.gratisStyle}>
              {baseLocalEng.cartPage.gratis}
            </Text>
            <Text style={styles.totalPriceText}>Rs {totalPrice}</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <CustomButton
            text={baseLocalEng.cartPage.btnText}
            disabled={false}
            onPress={() => {
              handleSubmit();
            }}></CustomButton>
        </View>
        <View style={styles.dummyView}></View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.topContainer1}>
        <Text style={styles.bottomContainer1}>
          {baseLocalEng.cartPage.title}
        </Text>
        <Text style={styles.bottomContainer2}>
          {baseLocalEng.cartPage.noItem}
        </Text>
      </View>
      <View style={styles.noRideContainer}>
        <Image
          source={require('../../Assets/Empty_Cart.png')}
          style={styles.noRideImage}
        />
      </View>
    </View>
  );
};

export default CartPage;
