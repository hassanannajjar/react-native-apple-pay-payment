import { NativeModules, Platform } from 'react-native';
import { ApplePayModuleProps } from './types';

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

export * from './types';
export const ApplePay: ApplePayModuleProps = ApplePayModule;
