import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Server from '../../services';

const Stories = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        async function loadContacts() {
            const r = await Server.getData();
            setContacts(r.authors);
        }
        loadContacts();
    }, []);
    return (
        <View>
            <FlatList 
                data={contacts}
                style={{paddingTop: 14, paddingBottom: 7, borderBottomColor: '#bbb', borderBottomWidth: 1}}
                contentContainerStyle={{ paddingLeft: 14, paddingRight: 14}}
                ItemSeparatorComponent={() => <View style={{width: 15}}/>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                    <View style={{width: 64}}>
                    <LinearGradient
                    colors={['#FFC107', '#F44336', '#9C27B0'].reverse()}
                    start={[1, 0.1]}
                    style={{borderRadius: 50, padding: 2.5, width: 64, height: 64}}
                    >
                        <Image source={{uri: item.avatar}} style={{width: '100%', height: '100%', borderRadius: 50, borderColor: 'white', borderWidth: 1}}/>
                    </LinearGradient>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{textAlign: 'center', fontFamily: 'Roboto', fontWeight: '500'}}>{item.name}</Text>
                    </View>
                    
                )}
                horizontal
            />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({})
