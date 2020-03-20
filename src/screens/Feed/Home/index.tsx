import React, { Component, useState, useEffect } from 'react'
import { Text, View, FlatList, Image } from 'react-native';
import Server from '../../../services';
import Stories from '../../../containers/Stories'

export function Home(){

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        async function fetchFeed() {
            const r = await Server.getData();
            setFeed(r.feed);
        }
        fetchFeed()
    }, [])
    return (
        <View>
            <FlatList 
                data={feed}
                ListHeaderComponent={Stories}
                keyExtractor={(item: any) => String(item.id)}
                renderItem={({item}) => (
                    <View>
                        <Image source={item.src ? ({uri: item.image.uri}) : ({uri: item.image})} style={{aspectRatio: item.aspectRatio, width: '100%'}}/>
                    </View>
                )}
            />
        </View>
    )
}

export default Home
