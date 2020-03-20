import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Server from '../../../services'

export default function Cam(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePic = async() => {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync({quality: 1});
        const data = {
            "id": 7 + photo,
            "image": photo,
            "src": photo,
            "small": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
            "aspectRatio": 0.834,
            "description": "Code, code and more code!",
            "authorId": 2
        }
        await Server.saveData(data);
        return props.navigation.goBack();
    }
  }
  return (
    <View style={{ flex: 1}}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => this.camera = ref} ratio="0.834" pictureSize="600x500">
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: '100%'

          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={takePic} style={{
                alignItems: 'center'
            }}>
                <View style={{borderRadius: 50, borderColor: '#f5f5f5', padding: 5}}>
                <View style={{backgroundColor: '#f5f5f5', borderRadius: 50, margin: 4, width: 70, height: 70}}/>
                </View>
            </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}