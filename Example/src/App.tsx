import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ApplePay } from 'react-native-appay-mir';
import type {
  APayRequestDataType,
  APayPaymentStatusType,
} from 'react-native-appay-mir';

const requestData: APayRequestDataType = {
  merchantIdentifier: 'merchant.com.mav10.example',
  supportedNetworks: ['mastercard', 'visa', 'mir'],
  countryCode: 'RU',
  currencyCode: 'RUB',
  paymentSummaryItems: [
    {
      label: 'Item label',
      amount: '100.00',
    },
  ],
};

export const App = () => {
  const payWithApplePay = useCallback((status: APayPaymentStatusType) => {
    // Check if ApplePay is available
    if (ApplePay.canMakePayments) {
      ApplePay.requestPayment(requestData).then((paymentData) => {
        // In Sumilator always returns an empty string
        console.log({ paymentData });
        // Simulate a request to the gateway
        setTimeout(() => {
          // Show status to user ApplePay.SUCCESS || ApplePay.FAILURE
          ApplePay.complete(status).then(() => {
            console.log('completed');
            // do something
          });
        }, 1000);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to react-native-apay-mir!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => payWithApplePay(ApplePay.SUCCESS)}
      >
        <Text style={styles.buttonText}>Buy with Apple Pay (SUCCESS)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => payWithApplePay(ApplePay.FAILURE)}
      >
        <Text style={styles.buttonText}>Buy with Apple Pay (FAILURE)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 18,
    color: '#222',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#007aff',
    borderRadius: 14,
    height: 56,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
