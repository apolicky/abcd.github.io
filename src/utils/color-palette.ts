import { getRandomNumber } from "./random";

export const colorPalettes = {
    graysAndEmerald: ["#272d2d", "#a39ba8", "#b8c5d6", "#edf5fc", "#23ce6b"],
    greens: ["#7cfef0", "#6bffb8", "#2ceaa3", "#28965a", "#2a6041"],
    purples: ["#170312", "#33032f", "#531253", "#a0acad", "#97d8b2"],
    redBlueYellow: ["#ee6352", "#59cd90", "#3fa7d6", "#fac05e", "#f79d84"],
    a: ["#251605", "#f6e27f", "#e2c391", "#a8b7ab", "#9bbec7"],
} as const;

export type ColorPaletteId = keyof typeof colorPalettes;

export const randomColorPaletteId = (): ColorPaletteId => {
    const keys = Object.keys(colorPalettes) as ColorPaletteId[];
    const index = Math.floor((getRandomNumber() * keys.length) % keys.length);
    console.log(index);
    return keys[index] ?? "graysAndEmerald";
};

export const getColorIndexBasedOnProbability = (): 0 | 1 | 2 | 3 | 4 => {
    const randomValue = getRandomNumber();
    if (randomValue <= 0.7) {
        return 0;
    } else if (randomValue <= 0.91) {
        return 1;
    } else if (randomValue <= 0.94) {
        return 2;
    } else if (randomValue <= 0.97) {
        return 3;
    } else {
        return 4;
    }
};
