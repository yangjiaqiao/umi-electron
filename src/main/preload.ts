/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-24 16:05:50
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-25 09:44:34
 * @FilePath: \umi-electron\src\main\preload.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('$api', {
  getPlatform: async () => {
    return await ipcRenderer.invoke('getPlatform');
  },
});
