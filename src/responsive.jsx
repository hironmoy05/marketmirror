import { Dimensions, PixelRatio } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)

export const pixelDeviceHeight =
      Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get(
            "REAL_WINDOW_HEIGHT"
          );

export const screenSizeOne = () => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const bottomTabHeight = useBottomTabBarHeight();

  const screenSize = Number(Math.round(SCREEN_HEIGHT)); 
  let screenSizeOne;

  if (screenSize >= 840) {
    screenSizeOne = {
        'max-height': `${SCREEN_HEIGHT}px`,
        'padding-bottom': `${bottomTabHeight*2.3}px`
    }
  } else if (screenSize >= 730) {
    screenSizeOne = { 
      'max-height': `${SCREEN_HEIGHT}px`,
      'padding-bottom': `${bottomTabHeight*2.4}px`
    }
  } else {
    screenSizeOne = {
      'max-height': `${SCREEN_HEIGHT}px`,
      'padding-bottom': `${bottomTabHeight*2}px`
    }
  }
  return screenSizeOne;
}

export const screenSizeTwo = () => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const bottomTabHeight = useBottomTabBarHeight();

  const screenSize = Number(Math.round(SCREEN_HEIGHT)); 
  let screenSizeTwo;
  
  if (screenSize >= 840) {
    screenSizeTwo = {
      'margin-top': `${calcHeight(6)}px`,
      'max-height': `${SCREEN_HEIGHT/1.4}px`,
      'padding-bottom': `${bottomTabHeight*2}px`
    }
  } else if (screenSize >= 730) {
    screenSizeTwo = {
      'margin-top': `${calcHeight(10)}px`,
      'max-height': `${SCREEN_HEIGHT/1.6}px`,
      'padding-bottom': `${bottomTabHeight*2}px`
    }
  } else {
    screenSizeTwo = {
        'max-height': `${SCREEN_HEIGHT}px`,
        'padding-bottom': `${bottomTabHeight*3.4}px`
    }
  }
  return screenSizeTwo;
}

export const screenSizeThree = () => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const bottomTabHeight = useBottomTabBarHeight();
  
  const screenSize = Number(Math.round(SCREEN_HEIGHT)); 
  let screenSizeThree;

  if (screenSize >= 840) {
    screenSizeThree = {
      'max-height': `${SCREEN_HEIGHT/1.8}px`,
      'padding-bottom': `${bottomTabHeight*2.1}px`
    }
  } else if (screenSize >= 730) {
    screenSizeThree = {
      'max-height': `${SCREEN_HEIGHT/1.8}px`,
      'padding-bottom': `${bottomTabHeight*2.2}px`,
      'margin-top': `${SCREEN_HEIGHT/3.5}px`,
    }
  } else {
    screenSizeThree = {
        'max-height': `${SCREEN_HEIGHT/1.8}px`,
        'padding-bottom': `${bottomTabHeight*1.4}px`
    }
  }
  return screenSizeThree;
}

export const screenSizeFour = () => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const bottomTabHeight = useBottomTabBarHeight();
  
  const screenSize = Number(Math.round(SCREEN_HEIGHT)); 
  let screenSizeFour;

  if (screenSize >= 840) {
    screenSizeFour = {
      'max-height': `${SCREEN_HEIGHT/1.8}px`,
      'padding-bottom': `${bottomTabHeight*2.1}px`
    }
  } else if (screenSize >= 730) {
    screenSizeFour = {
      'max-height': `${SCREEN_HEIGHT/1.45}px`,
      'padding-bottom': `${bottomTabHeight*.8}px`
    }
  } else {
    screenSizeFour = {
        'max-height': `${SCREEN_HEIGHT/1.8}px`,
        'padding-bottom': `${bottomTabHeight*1.4}px`
    }
  }

  return screenSizeFour;
}

