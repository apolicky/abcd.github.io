import { ColorPaletteId, colorPalettes, getColorIndexBasedOnProbability } from "./color-palette";
import { fonts } from "./fonts";
import { getRandomNumber } from "./random";

export const getRandomStyle = (colorPaletteId: ColorPaletteId) => {
    const translate = () => {
        return getRandomNumber() * (30 - 3) + 3;
    };

    const scale = getScaleBasedOnProbability();
    const randomFont = fonts[Math.floor(getRandomNumber() * fonts.length)];
    const palette = colorPalettes[colorPaletteId];
    const colorIndex = getColorIndexBasedOnProbability();
    const color = palette[colorIndex];
    const rotation = getRandomNumber();

    return {
        fontFamily: randomFont,
        color,
        transform: `rotate(${rotation}turn) scale(${scale}) translateX(${translate()}px) translateY(${translate()}px)`,
    } as React.CSSProperties;
};

export const getScaleBasedOnProbability = () => {
    const randomValue = getRandomNumber() * (1 - 0.8) + 0.8;
    if (randomValue <= 0.7) {
        return randomValue * 1;
    } else if (randomValue <= 0.91) {
        return randomValue * 2;
    } else if (randomValue <= 0.94) {
        return randomValue * 3;
    } else if (randomValue <= 0.97) {
        return randomValue * 5;
    } else {
        return randomValue * 8;
    }
};
