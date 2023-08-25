/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-24 16:05:50
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-25 14:46:14
 * @FilePath: \umi-electron\src\main\config.ts
 * @Description: 配置文件
 */
import { BrowserWindowConstructorOptions } from 'electron';
export default {
  //浏览器窗口配置
  browserWindow: {
    //窗口宽度
    width: 900,
    //窗口高度
    height: 500,
    //是否居中
    center: true,
    // fullscreen: true,
    // titleBarStyle: process.platform === 'win32' ? 'hidden' : 'hiddenInset',
    // maximizable: false,
  } as BrowserWindowConstructorOptions,
};
