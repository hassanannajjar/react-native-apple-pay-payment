
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAppayMirSpec.h"

@interface AppayMir : NSObject <NativeAppayMirSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AppayMir : NSObject <RCTBridgeModule>
#endif

@end
