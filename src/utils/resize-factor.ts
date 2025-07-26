export type ResizeFactor = {
    max: number;
    min: number;
};

export const getResizeFactor = (): ResizeFactor => {
    const h = window.innerHeight;
    if (h < 800) {
        return { max: 0.93, min: 0.3 };
    } else if (h < 1000) {
        return { max: 0.95, min: 0.5 };
    } else {
        return { max: 1, min: 0.7 };
    }
};
