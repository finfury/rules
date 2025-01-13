import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import tsParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';


export const react = () => {
    return {
        files: ["src/**/*.{jsx,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...typescriptEslintPlugin.configs.recommended.rules,
        },
    }
}
