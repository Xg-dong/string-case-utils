import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production',
    entry: './src/umd.ts',
    output: {
        path: path.resolve(__dirname, 'dist/umd'),
        filename: 'string-case-utils.min.js',
        library: {
            name: 'StringCaseUtils',
            type: 'umd',
            export: 'default'
        },
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true
    }
};
