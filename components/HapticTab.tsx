// Modachi/components/HapticTab.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HapticTab = ({ onPress, title }: { onPress: () => void; title: string }) => {
    return (
        <TouchableOpacity style={styles.tab} onPress={onPress}>
            <Text style={styles.tabText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        padding: 10,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
    },
});

export default HapticTab;