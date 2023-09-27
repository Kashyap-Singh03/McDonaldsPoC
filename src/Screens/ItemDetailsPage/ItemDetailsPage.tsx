import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {baseLocalEng} from '../../Localization/BaseLocalization';
import {add_to_cart_request} from '../../Redux/Action';
import theme from '../../Theme/theme';
import {styles} from './style';

const ItemDetailsPage = (props: any) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);

  const addItems = () => {
    dispatch(add_to_cart_request(userId, route.params.itemDetails));
  };

  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" style={styles.animationContainer}>
        <View style={styles.topContainer}></View>
        <ScrollView
          style={styles.bottomContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.itemNameText}>{route.params.name}</Text>
          <Text style={styles.itemPriceText}>Rs {route.params.price}</Text>
          <Text style={styles.itemDescriptionText}>
            {route.params.description}
          </Text>
          <View style={styles.optionalView}>
            <Text style={styles.optionalText}>
              {baseLocalEng.itemDetails.optionalHeader}
            </Text>
            <Text style={styles.optionalTextMsg}>
              {baseLocalEng.itemDetails.optional}
            </Text>
          </View>
          <TextInput
            placeholder={baseLocalEng.itemDetails.textInputPlaceHolder}
            value={text}
            onChangeText={text => setText(text)}
            style={styles.textInputStyle}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.cartBtn}
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Icon
                name="cart-outline"
                size={40}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
            <CustomButton
              text={baseLocalEng.itemDetails.btnText}
              disabled={false}
              width="80%"
              onPress={addItems}></CustomButton>
          </View>
        </ScrollView>
        <Animatable.View animation="slideInUp" style={styles.animationView}>
          <Image source={route.params.image} style={styles.animationImage} />
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default ItemDetailsPage;
