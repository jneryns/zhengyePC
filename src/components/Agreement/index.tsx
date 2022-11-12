import React from 'react';
import { Card, Select, Button, Input, Descriptions, DatePicker } from 'antd';
import styles from './index.less';

const priceList = [12.5, 12.5, 12.5, 12.5];

const Agreement: React.FC = () => (
  <>
    <div className={styles.head}>
      <Button type="primary" className={styles.button}>
        添加产品
      </Button>
      <span>购进总指标（万元）</span> <span className={styles.spanR}>¥152.36</span>
      <span>指标按季度分解（万元）</span>
      {priceList.map((item, index) => (
        <span key={`${index + 1}_${item}`}>
          【Q{index + 1}】 ¥ {item}
        </span>
      ))}
      <span className={styles.spanL}>纯销总指标（万元）</span> <span>¥152.36</span>
    </div>
    <Card>
      <div className={styles.cardHeader}>
        <div>
          产品：<Button>选择产品</Button> <span style={{ color: 'blue' }}>美复胶囊 24元/盒</span>
        </div>
        <div className={styles.time}>
          协议效期：
          <DatePicker />
        </div>
        <Button>删除</Button>
      </div>

      <div>
        <Descriptions
          bordered
          layout="vertical"
          column={8}
          className={styles.descriptions}
          size="small"
        >
          <Descriptions.Item label="协议价（元）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="票折（元）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="购进指标价（大单位）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="购进指标量（小单位）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="购进金额（万元）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="纯销指标量（小单位）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="纯销指标金额（万元）">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          bordered
          layout="vertical"
          column={8}
          className={styles.descriptions}
          size="small"
        >
          <Descriptions.Item label="分销奖励">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="费用科目">
            <Select
              defaultValue="single"
              style={{ width: 120 }}
              options={[
                {
                  value: 'single',
                  label: '单选项1',
                },
                {
                  value: 'Multiple',
                  label: '多选项1',
                },
              ]}
            />
          </Descriptions.Item>
          <Descriptions.Item label="零售配送">
            {' '}
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="费用科目">
            {' '}
            <Select
              defaultValue="single"
              style={{ width: 120 }}
              options={[
                {
                  value: 'single',
                  label: '单选项1',
                },
                {
                  value: 'Multiple',
                  label: '多选项1',
                },
              ]}
            />
          </Descriptions.Item>
          <Descriptions.Item label="医疗配送商">
            <Input disabled placeholder="请输入" />
          </Descriptions.Item>
          <Descriptions.Item label="费用科目">
            <Select
              defaultValue="single"
              style={{ width: 120 }}
              options={[
                {
                  value: 'single',
                  label: '单选项1',
                },
                {
                  value: 'Multiple',
                  label: '多选项1',
                },
              ]}
            />
          </Descriptions.Item>
          <Descriptions.Item label="自定义7">
            <DatePicker />
          </Descriptions.Item>
          <Descriptions.Item label="自定义8">
            <DatePicker />
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Card>
  </>
);

export default Agreement;
