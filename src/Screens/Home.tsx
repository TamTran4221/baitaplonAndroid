import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageSlider } from "react-native-image-slider-banner";

const Home = () => {

    return (
        <SafeAreaView style={style.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput style={style.input} placeholder="Search" />
                <Icon
                    name="filter"
                    color={'#EDEDED'}
                    size={20}
                    style={{
                        padding: 15,
                        backgroundColor: '#704F38',
                        borderRadius: 50,
                        width: 50,
                        height: 50,
                    }}
                />
            </View>
            <View >
                <ImageSlider
                    data={[
                        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                        { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                        { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' },
                        { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
                    ]}
                    autoPlay={true}
                    closeIconColor="#fff"
                />
            </View>
            <View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Category</Text>
                    <Text style={{ fontSize: 16, color: '#8A6F5C' }} >See All</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="tshirt" size={28} color={'#704F38'} style={style.icon} />
                        <Text>T-Shirt</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="tshirt" size={28} color={'#704F38'} style={style.icon} />
                        <Text>T-Shirt</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="tshirt" size={28} color={'#704F38'} style={style.icon} />
                        <Text>T-Shirt</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="tshirt" size={28} color={'#704F38'} style={style.icon} />
                        <Text>T-Shirt</Text>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FFFFFF'
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: '#797979',
        width: 290,
    },
    icon: {

        padding: 15,
        width: 60,
        height: 60,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: '#F7F2ED'
    }
});

export default Home;
