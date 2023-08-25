/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-24 16:05:50
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-25 14:42:38
 * @FilePath: \umi-electron\src\main\ipc\platform.ts
 * @Description: 主进程通信文件
 */
import { ipcMain } from 'electron';
ipcMain.handle('getPlatform', () => {
  return `hi, i'm from ${process.platform}`;
});
