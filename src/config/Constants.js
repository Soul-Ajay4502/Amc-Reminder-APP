import { Dimensions, Platform } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Constants {
  width = deviceWidth;
  height = deviceHeight;

  getHeight(percentage) {
    return deviceHeight * (percentage / 100);
  }
  getWidth(percentage) {
    return deviceWidth * (percentage / 100);
  }

}

export default new Constants();
