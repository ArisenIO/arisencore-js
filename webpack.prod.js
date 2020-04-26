const path = require('path');

module.exports = {
    entry: {
        rixjs_api: './src/rixjs-api.ts',
        rixjs_jsonrpc: './src/rpc-web.ts',
        rixjs_jssig: './src/rixjs-jssig.ts',
        rixjs_numeric: './src/rixjs-numeric.ts',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: x => x.chunk.name.replace('_', '-') + '.js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist-web'),
    }
};
