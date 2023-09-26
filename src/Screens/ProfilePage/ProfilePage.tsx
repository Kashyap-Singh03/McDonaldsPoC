import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {baseLocalEng} from '../../Localization/BaseLocalization';
import theme from '../../Theme/theme';
import {style} from './style';
import { useDispatch, useSelector } from 'react-redux';
const ProfilePage = (props: any) => {
  const {navigation, route} = props;

  const dispatch=useDispatch();
  const userDetails=useSelector((state:any)=>state.reducer.currentUser)
  const [avatar, setAvatar] = useState(
    'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
  );
  return (
    <View style={style.mainContainer}>
      <View style={style.profileHeader}>
        <Image style={style.image} source={{uri: avatar}} />
      </View>
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
          <Icon name="venus-mars" size={20} color={theme.colors.iconColor} />
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
            <Text style={style.textColorStyle}>{userDetails.phoneNumber}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={style.profileBody}>
            <Icon1 name="logout" size={30} color={theme.colors.iconColor} />
            <View style={style.profileSubBody}>
              <Text style={style.profileText}>
                {baseLocalEng.profilePage.logout}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;
