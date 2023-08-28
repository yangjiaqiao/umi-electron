/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-28 15:47:57
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-28 17:18:25
 * @FilePath: \umi-electron\config\config.ts
 * @Description: UMI配置
 */
import { Arch, Platform } from '@umijs/plugin-electron';
import { defineConfig } from 'umi';

export default defineConfig({
  //NPM客户端使用：yarn
  npmClient: 'yarn',
  //配置额外的 Umi 插件
  plugins: [
    '@umijs/plugin-electron',
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  //electron配置
  electron: {
    builder: {
      targets: Platform.MAC.createTarget(['dmg'], Arch.arm64),
    },
  },
  /**
   * @name antd 插件
   * @description 内置了 babel import 插件
   * @doc https://umijs.org/import { request } from 'umi';
docs/max/antd#antd
   */
  antd: {},
  /**
   * 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建。
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  initialState: {},
  //数据流功能的插件
  model: {},
  //tailwindcss功能的插件
  tailwindcss: {},
});
