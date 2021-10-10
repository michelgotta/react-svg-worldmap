import React, {useLayoutEffect} from 'react';
import {sizeMap, defaultSize} from './constants';
import type {SizeOption} from './types';

// calculate window width
export function useWindowWidth(): number {
  const [width, setWidth] = React.useState(sizeMap[defaultSize]);
  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

// adjust responsive size
export function responsify(
  sizeOption: SizeOption | 'responsive',
  windowWidth: number,
): number {
  if (sizeOption === 'responsive') {
    // Make component work in SSR
    if (typeof window === 'undefined') {
      return sizeMap[defaultSize];
    }
    return Math.min(window.innerHeight, window.innerWidth) * 0.75;
  }
  if (typeof window === 'undefined') {
    return sizeMap[sizeOption];
  }
  // First size that fits window size
  const fittingSize =
    Object.values(sizeMap)
      .reverse()
      .find((size) => size <= windowWidth) ?? sizeMap.sm;
  return Math.min(fittingSize, sizeMap[sizeOption]);
}