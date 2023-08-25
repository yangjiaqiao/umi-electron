/*
 * @Author: yangjiaqiao 343749277@qq.com
 * @Date: 2023-08-24 16:05:50
 * @LastEditors: yangjiaqiao 343749277@qq.com
 * @LastEditTime: 2023-08-25 10:04:34
 * @FilePath: \umi-electron\src\layouts\index.tsx
 * @Description: 主文件
 */
import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
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
