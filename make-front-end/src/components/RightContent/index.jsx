import { Row,Col,Dropdown,Menu,Button } from 'antd';
import { DownOutlined} from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a target="_blank" href="https://tab.niaohan.top/">灰原键的导航页</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" href="https://www.niaohan.top/">灰原键的博客</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a target="_blank" href="https://jian.niaohan.top/">灰原键的论坛</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a target="_blank" href="https://github.com/haibara-jian">灰原键的github</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a target="_blank" href="https://space.bilibili.com/6175388">灰原键的哔哩哔哩</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Row style={{"height":"80%"}}>
      <Dropdown overlay={menu}>
        <Button>
         
            <b>友情链接</b>

        </Button>
      </Dropdown>
    </Row>
  );
};

export default GlobalHeaderRight;
