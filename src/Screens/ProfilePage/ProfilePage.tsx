import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {baseLocalEng} from '../../Localization/BaseLocalization';
import theme from '../../Theme/theme';
import {logout_request} from './../../Redux/Action';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Modal,
  Portal,
  PaperProvider,
  Button,
  Provider,
} from 'react-native-paper';
import {style} from './style';
const ProfilePage = (props: any) => {
  const {navigation, route} = props;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout_request());
  };

  const userDetails = useSelector((state: any) => state.reducer.currentUser);
  const pastOrders = useSelector((state: any) => state.reducer.pastOrders);
  const [avatar, setAvatar] = useState(
    'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
  );
  const [isEmpty, setIsEmpty] = useState(true);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      hideModal();
      setAvatar(image.path);
    });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      hideModal();
      setAvatar(image.path);
    });
  };

  useEffect(() => {
    let count = 0;
    pastOrders.map((order: any, index: number) => {
      if (order[1].userId === userDetails.id) {
        count = 1;
        setIsEmpty(false);
      }
    });
    if (count === 0) {
      setIsEmpty(true);
    }
  }, [isFocused]);

  return (
    <Provider>
      <View style={style.mainContainer}>
        <View style={style.customHeader}>
          <Text style={style.headerText}>
            {baseLocalEng.profilePage.proflie}
          </Text>
          <View style={style.headerButtons}>
            <TouchableOpacity
              style={style.editButton}
              onPress={() => {
                navigation.navigate('UpdateProfileDetailsPage');
              }}>
              <Icon1
                name="square-edit-outline"
                size={30}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Icon1 name="logout" size={30} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={style.profileHeader}>
            <Image style={style.image} source={{uri: avatar}} />
          </View>
          <TouchableOpacity style={style.changeProfileBtn} onPress={showModal}>
            <Text style={style.changeProfileText}>
              {baseLocalEng.profilePage.changeProfilePicture}
            </Text>
          </TouchableOpacity>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={style.modalContainer}>
              <Text style={style.modalTitle}>
                {baseLocalEng.profilePage.chooseOption}
              </Text>
              <View style={style.modalView}>
                <TouchableOpacity
                  style={style.modalCamerabtn}
                  onPress={onCamera}>
                  <Text style={style.modalBtnText}>
                    {baseLocalEng.profilePage.camera}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.modalGallerybtn}
                  onPress={onGallery}>
                  <Text style={style.modalBtnText}>
                    {baseLocalEng.profilePage.gallery}
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>

          <View style={style.subContainer}>
            <View style={style.subContainer1}>
              <View style={style.profileBody}>
                <Icon name="user" size={30} color={theme.colors.iconColor} />
                <View style={style.profileSubBody}>
                  <Text style={style.profileText}>
                    {baseLocalEng.profilePage.name}
                  </Text>
                  <Text style={style.textColorStyle}>{userDetails.name}</Text>
                </View>
              </View>
            </View>

            <View style={style.profileBody}>
              <Icon name="envelope" size={20} color={theme.colors.iconColor} />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>
                  {baseLocalEng.profilePage.email}
                </Text>
                <Text style={style.textColorStyle}>{userDetails.email}</Text>
              </View>
            </View>

            <View style={style.profileBody}>
              <Icon
                name="venus-mars"
                size={20}
                color={theme.colors.iconColor}
              />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>
                  {baseLocalEng.profilePage.gender}
                </Text>
                <Text style={style.textColorStyle}>{userDetails.gender}</Text>
              </View>
            </View>

            <View style={style.profileBody}>
              <Icon name="phone" size={30} color={theme.colors.iconColor} />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>
                  {baseLocalEng.profilePage.phone}
                </Text>
                <Text style={style.textColorStyle}>
                  {userDetails.phoneNumber}
                </Text>
              </View>
            </View>

            <View style={style.horizontalLine}></View>
            <View>
              <Text style={style.previousOrderText}>
                {baseLocalEng.profilePage.previousOrders} :
              </Text>
              {isEmpty ? (
                <View style={style.noRideContainer}>
                  <Image
                    source={require('../../Assets/no_orders_available.png')}
                    style={style.noRideImage}
                  />
                </View>
              ) : (
                <>
                  {pastOrders.map((order: any, index: number) =>
                    order[1].userId === userDetails.id ? (
                      <View key={index} style={style.previousOrderStyle}>
                        <Text style={style.previousOrderInnerText}>
                          {baseLocalEng.profilePage.date}: {order[0].date}
                        </Text>
                        <Text style={style.previousOrderInnerText}>
                          {baseLocalEng.profilePage.time}: {order[0].time}
                        </Text>
                        <Text style={style.previousOrderInnerText}>
                          {baseLocalEng.profilePage.totalItems}:{' '}
                          {order[0].totalItems}
                        </Text>
                        <Text style={style.previousOrderInnerText}>
                          {baseLocalEng.profilePage.totalPrice}:{' '}
                          {order[0].totalPrice}
                        </Text>
                        <Text style={style.previousItemsOrderText}>
                          {baseLocalEng.profilePage.itemsOrdered} :
                        </Text>
                        <View>
                          {order
                            .slice(1)
                            .map((item: any, itemIndex: number) => (
                              <View key={itemIndex}>
                                <Text style={style.previousOrderInnerText}>
                                  - {item.title} * {item.qty}
                                </Text>
                              </View>
                            ))}
                        </View>
                      </View>
                    ) : null,
                  )}
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default ProfilePage;
