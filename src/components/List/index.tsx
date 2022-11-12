import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

const dataList = [
  {
    id: 'BXXX1',
    name: '3333',
    area: '浙江省',
  },
  {
    id: 'BXXX2',
    name: '3333',
    area: '浙江省',
  },
  {
    id: 'BXXX3',
    name: '3333',
    area: '浙江省',
  },
  {
    id: 'BXXX4',
    name: '3333',
    area: '浙江省',
  },
];
const List: React.FC = () => (
  <div>
    <div className={classNames(styles.line, styles.lineHeader)}>
      <div>指定渠道编码</div>
      <div>指定渠道名称</div>
      <div>所在省</div>
    </div>
    {dataList &&
      dataList.map((item) => (
        <div key={item.id} className={styles.line}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.area}</div>
        </div>
      ))}
  </div>
);

export default List;
