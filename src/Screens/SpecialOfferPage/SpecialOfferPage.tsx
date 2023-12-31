import React, {useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import CustomSpecialOffer from '../../Components/CustomSpecialOffer/CustomSpecialOffer';
import {SpecialOfferPageData} from '../../Constants/HomePageConstants';
import {add_to_cart_request} from '../../Redux/Action';
import theme from '../../Theme/theme';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';

const SpecialOfferPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.reducer.currentUser.id);

  const [filteredOffer, setFilteredOffer] = useState(SpecialOfferPageData);
  const [searchQuery, setSearchQuery] = useState('');

  const addItems = (item: any) => {
    dispatch(add_to_cart_request(userId, item));
  };

  const filterOffer = (query: any) => {
    const filtered = SpecialOfferPageData.filter(offerName =>
      offerName.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredOffer(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={baseLocalEng.HomePage.search}
          placeholderTextColor={theme.colors.black}
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            filterOffer(text);
          }}
        />
        <IconButton icon="magnify" size={24} />
      </View>
      <FlatList
        data={filteredOffer}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.flatListItem}>
            <CustomSpecialOffer
              itemImage={item.image}
              itemName={item.title}
              itemPrice={item.price}
              onPress={() => addItems(item)}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SpecialOfferPage;
