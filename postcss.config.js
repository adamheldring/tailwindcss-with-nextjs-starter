module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    [
      "@fullhuman/postcss-purgecss", 
      process.env.NODE_ENV === "production" 
        ? {
          content: [
            './src/**/*.html',
            './src/**/*.htm',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        } : false, 
    ]
  ]
}

// module.exports = {
//   plugins: [
//     "tailwindcss",
//     "postcss-preset-env",
//   ]
// }