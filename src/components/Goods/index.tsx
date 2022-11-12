import React from 'react';
import { Card, Form, Select, Button, Row, Col, InputNumber, DatePicker } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { STATUS, SALES_TYPE, CHANNEL } from './constants';
import List from '../List';
import styles from './index.less';

const Goods: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Card>
      <Form form={form} name="advanced_search" className="ant-advanced-search-form">
        <Row className={styles.row}>
          {/* 协议客户 */}

          <Col span={8}>
            <Form.Item name="agent" label="协议客户" required>
              <Button>选择客户</Button>
              <span>上海正也医药有限公司</span>
            </Form.Item>
          </Col>
          {/* 协议状态 */}
          <Col span={8}>
            <Form.Item name="status" label="协议状态">
              <Select defaultValue="normal" style={{ width: 120 }} options={STATUS} />
            </Form.Item>
          </Col>
        </Row>

        <Row className={styles.row}>
          {/* 购进指标 */}
          <Col span={8}>
            <Form.Item name="inputNum" label="购进指标" className={styles.formItem}>
              <Select
                defaultValue="price"
                style={{ width: 80, marginRight: '12px' }}
                options={SALES_TYPE}
              />
              <InputNumber
                type="number"
                placeholder="输入金额/数量"
                maxLength={8}
                style={{ width: 200 }}
                disabled
              />
            </Form.Item>
          </Col>
          {/* 纯销指标 */}
          <Col span={8}>
            <Form.Item name="salesIndex" label="纯销指标" className={styles.formItem}>
              <Select
                defaultValue="price"
                style={{ width: 80, marginRight: '12px' }}
                options={SALES_TYPE}
              />
              <InputNumber
                type="number"
                placeholder="输入金额/数量"
                maxLength={8}
                style={{ width: 200 }}
                disabled
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className={styles.row}>
          {/* 销售区域 */}
          <Col span={8}>
            <Form.Item name="area" label="销售区域">
              <Button>选择区域</Button>
              <div className={styles.areaTag}>
                全国
                <CloseOutlined color="aqua" />
              </div>
            </Form.Item>
          </Col>
          {/* 签订时间 */}
          <Col span={8}>
            <Form.Item name="time" label="签订时间">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>

        {/* 购进渠道 */}
        <Form.Item name="channel" label="购进渠道">
          <div style={{ marginBottom: 8 }}>
            <Select
              defaultValue="assign"
              style={{ width: 200, marginRight: '12px' }}
              options={CHANNEL}
            />
            <Button>选择渠道</Button>
          </div>
          <List />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Goods;
