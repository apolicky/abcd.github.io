import { useEffect, useState } from "react";
import { generateLetters, selectMissingLetter } from "./generated-letters";
import { getRandomStyle } from "./generated-styles";
import { randomColorPaletteId } from "./color-palette";
import { getResizeFactor } from "./resize-factor";

export const useMissingLetter = (initialMissingLetter: string) => {
    const [missingLetter, setMissingLetter] = useState<string>(initialMissingLetter);
    const [correctLetterPressed, setCorrectLetterPressed] = useState<boolean>(false);
    const [styledLetters, setStyledLetters] = useState<JSX.Element[]>([]);

    const generateStyledLetters = (excludedLetter: string) => {
        const resizeFactor = getResizeFactor();
        const generated = generateLetters(excludedLetter);
        const colorPaletteId = randomColorPaletteId();
        return generated.map((letter, index) => (
            <span key={index} style={getRandomStyle(colorPaletteId, resizeFactor)}>
                {letter}
            </span>
        ));
    };

    useEffect(() => {
        setStyledLetters(generateStyledLetters(initialMissingLetter));
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [missingLetter]);

    const handleKeyPress = (event: KeyboardEvent) => {
        const pressedKey = event.key.toLowerCase();

        if (missingLetter && pressedKey === missingLetter && !correctLetterPressed) {
            setCorrectLetterPressed(true);
            const anotherMissingLetter = selectMissingLetter();
            const styled = generateStyledLetters(anotherMissingLetter);
            setTimeout(() => {
                setMissingLetter(anotherMissingLetter);
                setStyledLetters(styled);
                setCorrectLetterPressed(false);
            }, 2000); // 2-second delay before starting the next round
        }
    };

    return {
        missingLetter,
        correctLetterPressed,
        styledLetters,
    };
};
