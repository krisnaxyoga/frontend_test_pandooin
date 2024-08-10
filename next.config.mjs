/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000,
                    name: "[name].[ext]",
                    outputPath: "./",
                    publicPath: "/",
                },
            },
        });
        return config;
    },
};

export default nextConfig;

