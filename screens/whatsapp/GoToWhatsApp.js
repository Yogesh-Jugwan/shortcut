import React, { useState } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input, Box, TextArea } from "native-base";
import data from './data.json'
const GoToWhatsApp = () => {
    const [contryCode, setContryCode] = useState(null);
    const [number, setNumber] = useState(null)
    const [text, setText] = useState(null)
    const [saveNumber, setSaveNumber] = useState([])
    const onSubmit = () => {
        if (number && number.length == 10 && contryCode != null) {
            Linking.openURL(`https://wa.me/${contryCode}${number}?text=${text}`)
            setSaveNumber([...saveNumber, contryCode + number])
        } else if (number && number.length < 10) {
            Alert.alert(`${"Please Enter Valid Number Length is " + number && number.length}`)
        } else if (contryCode == null) {
            Alert.alert(`${"Please Enter contry code is " + contryCode}`)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={contryCode}
                    onChange={item => {
                        setContryCode(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                />
                <Box alignItems="center">
                    <Input mx="100" placeholder="Input" w="100%" onChangeText={setNumber} value={number} keyboardType="numeric" maxLength={10} />
                </Box>
            </View>
            <TextArea
                shadow={2}
                h={20}
                w={200}
                placeholder="Text Area Placeholder"
                _light={{
                    placeholderTextColor: "trueGray.700",
                    bg: "coolGray.100",
                    _hover: {
                        bg: "coolGray.200"
                    },
                    _focus: {
                        bg: "coolGray.200:alpha.70"
                    }
                }} _dark={{
                    bg: "coolGray.800",
                    _hover: {
                        bg: "coolGray.900"
                    },
                    _focus: {
                        bg: "coolGray.900:alpha.70"
                    }
                }}
                value={text}
                onChangeText={setText}
            />
            <View style={styles.button}>

                <Button
                    title="Go To Chat"
                    onPress={onSubmit}
                />
            </View>
        </View>
    )
}

export default GoToWhatsApp

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 20

    },
    dropdown: {
        margin: 10,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 117
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    button: {
        marginTop: 20
    }
});