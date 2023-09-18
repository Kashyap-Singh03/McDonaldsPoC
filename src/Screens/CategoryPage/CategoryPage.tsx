import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomCategoryDetails from '../../Components/CustomCategoryDetails/CustomCategoryDetails';
import {styles} from './style';
import CategoryDetails from '../../Constants/CategoryDetailsConstants';
const CategoryPage = (props: any) => {
  const {navigation, route} = props;

  const AddItems = () => {
    console.log('Added');
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
              onPressAdd={AddItems}
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
