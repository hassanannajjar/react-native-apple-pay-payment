require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNApplePayMir"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']
  s.homepage     = 'https://github.com/mav10/react-native-applepay-mir'
  s.author       = package['author']
  s.platforms    = { :ios => "8.0", :tvos => "9.2" }
  s.source       = { :git => "https://github.com/mav10/react-native-applepay-mir.git", :tag => s.version }
  s.source_files  = "ios/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"

end
