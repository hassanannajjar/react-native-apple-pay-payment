import { NativeModules, Platform } from 'react-native';
import { APayPaymentStatusType, APayRequestDataType } from './types';

const LINKING_ERROR =
  `The package 'react-native-appay-mir' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({
    ios: "- You have run 'pod install'\n",
    android:
      "- you are add condition for ios only. Apple Pay is for iOS only, use Platform.OS === 'ios'",
    default: '',
  }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ApplePayModule =
  Platform.OS === 'ios' && NativeModules.AppayMir
    ? NativeModules.AppayMir
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

export class ApplePay {
  /** Success result constant */
  static SUCCESS: APayPaymentStatusType;
  /** Failure result constant */
  static FAILURE: APayPaymentStatusType;
  /**
   * Flag that indicates about physical possibility to call "Apple Pay" function.
   * e.g. on some old devices ApplePay is not available like a iPhone 5s, 6, 7 etc.
   */
  static canMakePayments: boolean;

  /**
   * Initialize payment mechanism through ApplePay
   * @param requestData - Payment payload object
   */
  static requestPayment(requestData: APayRequestDataType): Promise<string> {
    return ApplePayModule.requestPayment(requestData);
  }

  /**
   * Finalize payment procedure on ApplePay level.
   * @param status - result how to complete (in success or failure scenario).
   */
  static complete(status: APayPaymentStatusType): Promise<void> {
    return ApplePayModule.complete(status);
  }
}

export * from './types';
export default ApplePay;
