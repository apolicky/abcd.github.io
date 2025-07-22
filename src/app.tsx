import { useEffect, useState } from "react";
import { useMissingLetter } from "./utils/missing-letter";

const showMissingLetter = import.meta.env.VITE_SHOW_MISSING_LETTER == "true";
const App = () => {
    const [infoBoxColor, setInfoBoxColor] = useState<string>("bg-black");
    const { missingLetter, correctLetterPressed, styledLetters } = useMissingLetter("e");

    useEffect(() => {
        if (correctLetterPressed) {
            setInfoBoxColor("bg-emerald-800");
        } else {
            setInfoBoxColor("bg-black");
        }
    }, [correctLetterPressed]);

    return (
        <div className="flex items-center justify-center h-screen overflow-hidden">
            <div
                className={`info-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${infoBoxColor} text-white p-6 text-center z-10 font-mono border-4 border-white`}
            >
                <h2 className="text-xl font-bold mb-4">Somthing is missing!</h2>
                <p className="">find the letter on your keyboard{showMissingLetter && <span>: {missingLetter}</span>}</p>
                <p className="text-sm text-gray-500 mt-4">
                    created by{" "}
                    <a href="https://apolicky.xyz" target="_blank" rel="noopener noreferrer" className="underline text-blue-800">
                        apolicky.xyz
                    </a>
                </p>
            </div>

            <div className="letter-container flex flex-wrap justify-center items-center w-full h-full p-4">{styledLetters}</div>
        </div>
    );
};

export default App;
