import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#fff', // Change to your desired background color
        borderTopWidth: 1,
        borderTopColor: '#ccc', // Change to your desired border color
        paddingBottom: 10, // Adjust padding as needed
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
        tintColor: 'gray', // Default icon color
    },
    tabIconFocused: {
        tintColor: '#FFA500', // Change to your desired focused icon color
    },
    tabLabel: {
        fontSize: 12,
        color: 'gray', // Default label color
    },
    tabLabelFocused: {
        color: '#FFA500', // Change to your desired focused label color
    },
});

export default styles; 