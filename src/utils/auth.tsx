/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-04-26 16:35:13
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-28 15:58:42
 * @FilePath: \honeybee-main-ui\src\utils\auth.ts
 * @Description: 认证工具类
 */
const TOKEN_KEY = 'UMI_TOKEN';

//获取Token
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

//本地存储Token
export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

//删除Token
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
