import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomCartEntity from '../../Components/CustomCartEntity/CustomCartEntity';
import {CartPageData} from '../../Constants/HomePageConstants';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';
const CartPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.bottomContainer}>
          {baseLocalEng.cartPage.title}
        </Text>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        {CartPageData.map(item => (
          <View style={styles.viewStyle}>
            <CustomCartEntity
              itemImage={item.image}
              itemName={item.name}
              itemPrice={item.price}
            />
          </View>
        ))}
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
