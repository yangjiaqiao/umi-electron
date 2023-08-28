/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-24 16:05:50
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-28 15:43:44
 * @FilePath: \umi-electron\src\layouts\index.tsx
 * @Description: 主文件
 */
import { Link, Outlet, useModel } from 'umi';
import styles from './index.less';

export default function Layout() {
  //获取全局数据
  const { initialState } = useModel('@@initialState');
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
