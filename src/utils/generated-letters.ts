import { alphabet } from "./alpha";
import { getRandomNumber } from "./random";

const defaultNumberOfElements = import.meta.env.VITE_NUMBER_OF_ELEMENTS;

export const generateLetters = (excludedLetter: string, numberOfElements = defaultNumberOfElements): string[] => {
    const generated: string[] = [];

    const availableLetters = alphabet.filter((letter) => letter !== excludedLetter);

    for (let i = 0; i < numberOfElements; i++) {
        const stringLength = randomLengthOfString();
        let str = "";
        for (let j = 0; j < stringLength; j++) {
            const randomIndex = Math.floor(getRandomNumber() * availableLetters.length);
            const capitalize = getRandomNumber() >= 0.5;
            if (capitalize) {
                str += availableLetters[randomIndex].toUpperCase();
            } else {
                str += availableLetters[randomIndex];
            }
        }
        generated.push(str);
    }
    return generated;
};

const randomLengthOfString = () => {
    const randomValue = getRandomNumber();
    if (randomValue <= 0.6) {
        return 1;
    } else if (randomValue <= 0.8) {
        return 2;
    } else if (randomValue <= 0.95) {
        return 3;
    } else {
        return 5;
    }
};

export const selectMissingLetter = () => {
    const randomIndex = Math.floor(getRandomNumber() * alphabet.length);
    return alphabet[randomIndex];
};
