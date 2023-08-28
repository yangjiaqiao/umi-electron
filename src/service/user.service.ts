/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-28 16:03:07
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-28 16:28:03
 * @FilePath: \umi-electron\src\service\user.service.ts
 * @Description: 用户API接口
 */

/**
 * 查询当前登陆用户信息
 * @returns
 */
export async function getCurrentUserInfo(): Promise<any> {
  return request(`/api/User/getCurrentUserInfo`);
}
