import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addToCart, removeToCart} from '../Redux/actions';

const Dummy = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.reducer.count);
  console.warn(count)
  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  const handleRemoveToCart = () => {
    dispatch(removeToCart());
  };
  return (
    <View>
      <TouchableOpacity onPress={() => {handleRemoveToCart()}}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          handleAddToCart();
        }}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dummy;
