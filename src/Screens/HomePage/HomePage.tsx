import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Searchbar} from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomCategory from '../../Components/CustomCategory/CustomCategory';
import CustomSpecialOffer from '../../Components/CustomSpecialOffer/CustomSpecialOffer';
import {
  banner,
  data,
  Kategori,
  SpecialOfferData,
} from '../../Constants/HomePageConstants';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import theme from './../../Theme/theme';
import {styles} from './style';

const HomePage = (props: any) => {
  const {navigation} = props;
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [filteredCategories, setFilteredCategories] = useState(Kategori);

  const filterCategories = (query: any) => {
    const filtered = Kategori.filter(category =>
      category.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredCategories(filtered);
  };

  const renderBannerItem = ({item}: any) => {
    return <Image source={item} style={styles.carouselStyle}></Image>;
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.redBackground}>
        <View style={styles.topRow}>
          <Image
            source={require('../../Assets/mcdonaldsIcon.png')}
            style={styles.logo}
          />
          <View style={{flex: 1}}>
            <View style={styles.dropdownContainer}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.listItemTextStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={baseLocalEng.HomePage.selectLocation}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  //@ts-ignore
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <Icon
                    color={theme.colors.white}
                    name="map-marker"
                    size={25}
                  />
                )}
                renderRightIcon={() => (
                  <Icon
                    color={theme.colors.white}
                    name="chevron-down"
                    size={25}
                  />
                )}
              />
            </View>
          </View>
        </View>
        <Searchbar
          placeholder={baseLocalEng.HomePage.search}
          onChangeText={text => {
            setSearchQuery(text);
            filterCategories(text);
          }}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>
      <ScrollView style={styles.whiteBackground}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={banner}
            renderItem={renderBannerItem}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={(index: any) => setActiveCarouselIndex(index)}
          />
          <Pagination
            dotsLength={banner.length}
            activeDotIndex={activeCarouselIndex}
            containerStyle={styles.dotContainerStyle}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inActiveDotStyle}
            inactiveDotOpacity={1}
            inactiveDotScale={0.5}
          />
        </View>
        <View>
          <Text style={styles.categoryTextStyle}>
            {baseLocalEng.HomePage.category}
          </Text>
          <FlatList
            data={filteredCategories}
            renderItem={({item}) => (
              <CustomCategory
                itemImage={item.image}
                itemTitle={item.title}
                onPress={() => {
                  navigation.navigate('CategoryPage',{title:item.title});
                }}></CustomCategory>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.specialOfferViewStyle}>
          <View style={styles.specialOfferStyle}>
            <Text style={styles.specialOfferTextStyle}>
              {baseLocalEng.HomePage.specialOffer}
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('SpecialOfferPage')}}>
              <Text style={{color: theme.colors.secondary}}>
                {baseLocalEng.HomePage.SpecialOfferBtn} &gt;
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={SpecialOfferData}
            renderItem={({item}) => (
              <View style={styles.specialOfferFlatlistStyle}>
                <CustomSpecialOffer
                  itemImage={item.image}
                  itemName={item.name}
                  itemPrice={item.price}
                />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomePage;
