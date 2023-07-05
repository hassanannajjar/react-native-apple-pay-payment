@import PassKit;

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAppayMirSpec.h"

@interface AppayMir : NSObject <NativeAppayMirSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AppayMir : NSObject <RCTBridgeModuleб PKPaymentAuthorizationViewControllerDelegate>

@property (nonatomic, strong) PKPaymentAuthorizationViewController * _Nullable viewController;

@property (nonatomic, strong, nullable) RCTPromiseResolveBlock requestPaymentResolve;
@property (nonatomic, strong, nullable) RCTPromiseResolveBlock completeResolve;
@property (nonatomic, copy, nullable) void (^completion)(PKPaymentAuthorizationStatus);

#endif

@end
