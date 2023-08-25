/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-25 09:58:24
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-25 15:10:40
 * @FilePath: \umi-electron\tailwind.config.js
 * @Description: tailwindcss 配置文件
 */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  corePlugins: {
    preflight: false,
  },
};
