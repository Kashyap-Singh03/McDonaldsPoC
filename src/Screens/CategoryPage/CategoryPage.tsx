import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCategoryDetails from '../../Components/CustomCategoryDetails/CustomCategoryDetails';
import {styles} from './style';
import CategoryDetails from '../../Constants/CategoryDetailsConstants';
import {useDispatch, useSelector} from 'react-redux';
import {add_to_cart_request} from './../../Redux/Action';
const CategoryPage = (props: any) => {
  const {navigation, route} = props;

  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const cartItems = useSelector((state: any) => state.reducer.cartItems);
  // useEffect(() => {
  //   //@ts-ignore
  //   CategoryDetails[route?.params?.title].map(item => {
  //     dispatch(add_to_cart_request(item));
  //   });
  // }, []);

  const AddItems = (item: any) => {
    dispatch(add_to_cart_request(userId, item));
  };

  useEffect(() => {
    console.log('cartItems in the store:', cartItems);
    // console.log("Is Login ",isLogin);
  }, [cartItems]);
  return (
    <View>
      <FlatList
        //@ts-ignore
        data={CategoryDetails[route?.params?.title]}
        renderItem={({item}) => (
          <View style={styles.flatlistContainer}>
            <CustomCategoryDetails
              itemImage={item.image}
              itemName={item.title}
              itemDescription={item.description}
              itemPrice={item.price}
              onPressAdd={() => {
                AddItems(item);
              }}
              onPress={() => {
                navigation.navigate('ItemDetailsPage', {
                  image: item.image,
                  name: item.title,
                  description: item.description,
                  price: item.price,
                });
              }}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryPage;
