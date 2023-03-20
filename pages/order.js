import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';

const Order = () => {
  return (
    <div>
      <Tabs defaultActiveKey="2" onChange={() => {}}>
        <TabPane tab="tab 1" key="1">
          first
        </TabPane>
        <TabPane tab="tab 2" key="2">
          second
        </TabPane>
        <TabPane tab="tab 3" key="3">
          third
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Order;