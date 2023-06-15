import { BuildPaths } from '../build/types/config';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoaders } from '../loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve!.modules!.unshift(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) =>
        /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
    );
    
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildCssLoaders(true));
    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
        })
    );

    return config;
};
