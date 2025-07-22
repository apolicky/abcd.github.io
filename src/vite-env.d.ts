/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SHOW_MISSING_LETTER: string;
    readonly VITE_NUMBER_OF_ELEMENTS: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
