import React from 'react';
import { Divider } from 'antd';
import { Card, Button } from 'antd';
import Goods from '../Goods';
import Agreement from '../Agreement';
import Supplement from '../Supplement';
import styles from './index.less';

const Content: React.FC = () => (
  <>
    <Divider dashed>协议主题</Divider>
    <Goods />
    <Divider dashed>产品政策</Divider>
    <Agreement />
    <Divider dashed>补充协议</Divider>
    <Supplement />
    <Card className={styles.footer}>
      <Button>保存</Button>
    </Card>
  </>
);

export default Content;
