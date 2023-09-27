import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomCategoryDetails from '../../Components/CustomCategoryDetails/CustomCategoryDetails';
import CategoryDetails from '../../Constants/CategoryDetailsConstants';
import {add_to_cart_request} from './../../Redux/Action';
import {styles} from './style';
const CategoryPage = (props: any) => {
  const {navigation, route} = props;

  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);
  const cartItems = useSelector((state: any) => state.reducer.cartItems);
  const AddItems = (item: any) => {
    dispatch(add_to_cart_request(userId, item));
  };

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
                  itemDetails: item,
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
