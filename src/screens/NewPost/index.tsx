import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Server from '../../services';

export default function NewPost(props) {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    let result = {...pickerResult};
     const data = {
         "id": 7 + result.uri,
         "image": result,
         "src": result,
         "small": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
         "aspectRatio": 0.834,
         "description": "Code, code and more code!",
         "authorId": 2
     }
     Server.saveData(data);
     return props.navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={{}}>
        <Text style={{fontSize: 38}}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})