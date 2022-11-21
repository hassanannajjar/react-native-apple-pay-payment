require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name         = "RNApplePayMir"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']
  s.homepage     = 'https://github.com/mav10/react-native-applepay-mir'
  s.author       = package['author']
  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/mav10/react-native-applepay-mir.git", :tag => s.version }
  s.source_files  = "ios/**/*.{h,m, mm}"
  s.requires_arc = true

  s.dependency "React-Core"

end
