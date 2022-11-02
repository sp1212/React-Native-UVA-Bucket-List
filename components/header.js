import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>UVA Bucket List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        height: 60,
        backgroundColor: '#E57200'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontsize: 20,
        fontWeight: 'bold'
    }
});

/***************************************************************************************
*  REFERENCES
*  Title: React Native Tutorial #9 - Todo App (part 1)
*  Author: The Net Ninja
*  Date: Dec 4, 2019
*  URL: https://www.youtube.com/watch?v=uLHFPt9B2Os
***************************************************************************************/