import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes
const guidelineBaseWidth = 380;
const guidelineBaseHeight = 800;

// Safe scaling with fallback (default: 0)
export const scaleWidth = (size: number | undefined): number => 
  (SCREEN_WIDTH / guidelineBaseWidth) * (size ?? 0);

export const scaleHeight = (size: number | undefined): number => 
  (SCREEN_HEIGHT / guidelineBaseHeight) * (size ?? 0);

export const moderateScale = (
  size: number | undefined, 
  factor: number = 0.5, 
  basedOn: 'width' | 'height' = 'width'
): number => {
  const safeSize = size ?? 0;
  const scaledSize = basedOn === 'width' 
    ? scaleWidth(safeSize) 
    : scaleHeight(safeSize);
  return safeSize + (scaledSize - safeSize) * factor;
};

export const normalizeFont = (size: number | undefined): number => {
  const safeSize = size ?? 0;
  const scaledSize = scaleWidth(safeSize);
  
  const adjustedSize = Platform.select({
    android: scaledSize * 0.95,
    ios: scaledSize,
  }) ?? 0;
  return Math.round(PixelRatio.roundToNearestPixel(adjustedSize));
};

export const fullScreenScale = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};