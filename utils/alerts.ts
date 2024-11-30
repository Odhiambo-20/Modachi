import { Alert } from 'react-native';

export const AlertService = {
  success: (title: string, message: string, onPress?: () => void) => {
    Alert.alert(title, message, [{ text: 'OK', onPress }]);
  },

  error: (title: string, error: any) => {
    Alert.alert(
      title,
      error?.message || 'An unexpected error occurred',
      [{ text: 'OK' }]
    );
  },

  confirm: (title: string, message: string, onConfirm: () => void) => {
    Alert.alert(title, message, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: onConfirm }
    ]);
  }
}; 