// responsive.ts
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on iPhone 14
const guidelineBaseWidth = 390; // iPhone 14 width
const guidelineBaseHeight = 844; // iPhone 14 height

export const scaleWidth = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const scaleHeight = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleWidth(size) - size) * factor;

// For font scaling
export const normalizeFont = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(scaleWidth(size)));