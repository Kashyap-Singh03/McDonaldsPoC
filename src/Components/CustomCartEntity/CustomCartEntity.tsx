import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../Theme/theme';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  add_to_cart_request,
  delete_cart_item_request,
  remove_from_cart_request,
} from './../../Redux/Action';

type CustomCartEntityProps = {
  itemImage: any;
  itemName: string;
  itemPrice: number;
  itemQty: number;
  itemId: number;
};

const CustomCartEntity = ({
  itemImage,
  itemName,
  itemPrice,
  itemQty,
  itemId,
}: CustomCartEntityProps) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const increaseItem = () => {
    const item = {
      id: itemId,
    };
    dispatch(add_to_cart_request(userId, item));
  };

  const decreaseItem = () => {
    const item = {
      id: itemId,
    };
    if (itemQty > 1) {
      dispatch(remove_from_cart_request(userId, item));
    } else {
      dispatch(delete_cart_item_request(userId, item));
    }
  };

  const deleteItem = () => {
    const item = {
      id: itemId,
    };
    dispatch(delete_cart_item_request(userId, item));
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={itemImage} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.viewContainer1}>
        <Text style={styles.textHeaderStyle}>{itemName}</Text>
        <View style={styles.viewSubContainer1}>
          <TouchableOpacity style={styles.counterStyle} onPress={decreaseItem}>
            <Icon name="minus" size={20} color={theme.colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.textSubContainer1}>{itemQty}</Text>
          <TouchableOpacity style={styles.counterStyle} onPress={increaseItem}>
            <Icon name="plus" size={20} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewContainer2}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', marginBottom: 20}}
          onPress={deleteItem}>
          <Icon
            name="trash-can-outline"
            size={24}
            color={theme.colors.secondary}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.textPrice}>Rs {itemPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCartEntity;
