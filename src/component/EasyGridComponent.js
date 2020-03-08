import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class EasyGridComponent extends Component {

    data = [
        { index: 1, img: require('../img/g1.jpg') },
        { index: 2, img: require('../img/g2.jpg') },
        { index: 3, img: require('../img/g3.jpg') },
        { index: 4, img: require('../img/g4.jpg') },
        { index: 5, img: require('../img/g5.jpg') },
        { index: 6, img: require('../img/g6.jpg') },
        { index: 7, img: require('../img/g7.jpg') },
        { index: 8, img: require('../img/g8.jpg') },
        { index: 9, img: require('../img/g9.jpg') },
    ]

    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../img/v1.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: require('../img/v2.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: require('../img/v3.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: require('../img/v4.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: require('../img/v5.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: require('../img/v6.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: require('../img/v7.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: require('../img/v8.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: require('../img/v9.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
    ];


    state = {
        url: require('../img/v1.png'),
        name: 'GUCCI G8850U',
        price: '30',
        desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. '
    }

    imgSelection = (index) => {
        this.setState({
            url: this.arrProduct[index].url,
            name: this.arrProduct[index].name,
            price: this.arrProduct[index].price,
            desc: this.arrProduct[index].desc
        })
    }

    renderIcon = () => {
        return this.data.map((icon, index) => {
            return (
                <Col key={index} style={{ width: widthDevice / 3, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { this.imgSelection(index) }} key={index} >
                        <Image source={icon.img} style={{ height: 60, width: 100, marginTop: 10 }} resizeMode='contain' />
                    </TouchableOpacity>
                </Col>
            )
        })
    }


    render() {
        return (
            <Grid>
                <Row style={{ justifyContent: 'center', flex: 3, backgroundColor: '#FAF9F0' }}>
                    <Image source={require('../img/model.jpg')} style={{ height: '100%' }} resizeMode='contain' />
                    <Image source={(this.state.url)} style={{ position: 'absolute', width: 200, marginTop: 65 }} resizeMode='contain' />
                    <View style={{ position: 'absolute', padding: 10, width: widthDevice, height: 200, backgroundColor: '#0a706B6A', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: (widthDevice * 3 / 2) - 350 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green', flex: 1, flexWrap: 'wrap' }}>{this.state.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'yellow', flex: 1, flexWrap: 'wrap' }}>{this.state.price}$</Text>
                        <View style={{ flex: 3, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>{this.state.desc}</Text>

                        </View>
                    </View>
                </Row>

                <Row style={{ flex: 2, flexWrap: 'wrap', backgroundColor: 'white' }}>
                    {this.renderIcon()}
                </Row>
            </Grid>
        )
    }
}