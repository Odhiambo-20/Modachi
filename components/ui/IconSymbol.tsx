import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Example using Material Icons

interface IconSymbolProps {
    name: string;
    size?: number;
    color?: string;
    label?: string;
}

const IconSymbol: React.FC<IconSymbolProps> = ({ name, size = 24, color = 'black', label }) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name={name} size={size} color={color} />
            {label && <Text style={[styles.label, { color }]}>{label}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default IconSymbol;
