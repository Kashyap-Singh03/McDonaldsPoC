//@ts-nocheck
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomCartEntity from '../../Components/CustomCartEntity/CustomCartEntity';
import {CartPageData} from '../../Constants/HomePageConstants';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';
const CartPage = () => {
  const cartItems = useSelector((state: any) => state.reducer.cartItems);
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  return (
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
                  itemPrice={item.price}
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
            <Text style={styles.totalItemTextStyle}>Rp 182.000</Text>
            <Text style={styles.gratisStyle}>
              {baseLocalEng.cartPage.gratis}
            </Text>
            <Text style={styles.totalPriceText}>Rp 182.000</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <CustomButton
            text={baseLocalEng.cartPage.btnText}
            disabled={false}></CustomButton>
        </View>
        <View style={styles.dummyView}></View>
      </ScrollView>
    </View>
  );
};

export default CartPage;
