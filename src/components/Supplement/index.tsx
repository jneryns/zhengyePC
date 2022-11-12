import React, { useState } from 'react';
import { Card, Button, Input, Tabs } from 'antd';
import styles from './index.less';

const { TextArea } = Input;

const Supplement: React.FC = () => {
  const [account, setAccount] = useState<number>(3);
  const Content = () => (
    <Card>
      <div className={styles.contentTilte}>
        <div>协议内容：</div>
        <Button style={{ color: 'red' }}>删除</Button>
      </div>
      <TextArea />
    </Card>
  );
  return (
    <>
      <Tabs
        type="card"
        tabBarExtraContent={
          <Button
            type="primary"
            onClick={() => {
              setAccount(account + 1);
            }}
          >
            新增
          </Button>
        }
        items={new Array(account).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `补充协议 ${id}`,
            key: id,
            children: <Content />,
          };
        })}
      />
    </>
  );
};

export default Supplement;
