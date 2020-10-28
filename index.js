const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'src', 'pug');

// fs.readdirSync(dir)
//   .filter((file) => file.match(/\.pug$/))
//   .map((file) => {
//     const filename = file.substring(0, file.length - 4);
//     console.log({ filename });
//     return new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'src', `pug/${filename}.pug`),
//       filename: `${filename}.html`,
//     });
//   });

console.log(fs.readdirSync(dir).filter((file) => file.match(/\.pug/)));
