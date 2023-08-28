/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-28 15:22:30
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-28 16:26:26
 * @FilePath: \umi-electron\src\app.ts
 * @Description: 运行时配置文件
 */
import { PageEnum } from '@/enums/pagesEnums';
import { getToken } from '@/utils/auth';
import { history } from 'umi';
/**
 * 初始化状态配置
 * @returns
 */
export async function getInitialState(): Promise<{
  //当前登录用户信息
  currentUser?: any;
  //当前登录用户数据权限
  dataPermissions?: any;
  //当前登录用户角色集合
  roles?: any;
}> {
  //获取token,如果token不存在，跳转到登录页面，如果存在，获取当前用户信息
  const isAuth = getToken();
  if (isAuth) {
    try {
      const response = await getCurrentUserInfo();
      const { code, permissions, roles, user } = response;
      if (code === 200) {
        return {
          currentUser: user,
          dataPermissions: permissions,
          roles: roles,
        };
      } else {
        history.push(PageEnum.LOGIN);
        return {};
      }
    } catch (error) {
      //@ts-ignore
      history.push(PageEnum.LOGIN);
      return {};
    }
  } else {
    history.push(PageEnum.LOGIN);
    return {};
  }
}
