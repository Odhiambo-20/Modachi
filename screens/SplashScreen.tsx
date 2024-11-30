import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CubeIllustration from '../components/ui/Illustration3D';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }: { navigation: any }) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const translateY = React.useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            })
        ]).start();

        setTimeout(async () => {
            try {
                const hasLaunched = await AsyncStorage.getItem('hasLaunched');
                if (hasLaunched === null) {
                    navigation.replace('Onboarding');
                } else {
                    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
                    navigation.replace(isLoggedIn ? 'MainApp' : 'Login');
                }
            } catch (error) {
                console.error('Error checking first launch:', error);
                navigation.replace('Login');
            }
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <LinearGradient
                colors={['#000000', '#1a1a1a']}
                style={styles.background}
            />
            
            <Animated.View style={[
                styles.content,
                {
                    opacity: fadeAnim,
                    transform: [{ translateY }]
                }
            ]}>
                <View style={styles.illustrationContainer}>
                    <CubeIllustration />
                </View>
                
                <Text style={styles.title}>Modachi</Text>
                <Text style={styles.subtitle}>Your Fashion Design Companion</Text>
                
                <TouchableOpacity 
                    style={styles.exploreButton}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    illustrationContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        marginBottom: 40,
        maxWidth: width * 0.8,
        lineHeight: 24,
    },
    exploreButton: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default SplashScreen;
