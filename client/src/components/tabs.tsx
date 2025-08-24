import { ReactNode } from 'react';
import { Tabs } from 'rsuite';
type CaseType = 'civil' | 'criminal';

const TabsComponent = ({children,onSelectHandler}:{children:ReactNode,onSelectHandler:(e:CaseType)=>void}) => (
  <Tabs defaultActiveKey="1" onSelect={(e:CaseType)=>onSelectHandler(e as CaseType)  }>
    <Tabs.Tab eventKey="civil" title="حقوقی">
        {children}
    </Tabs.Tab>
    <Tabs.Tab eventKey="criminal" title="کیفری">
        {children}
    </Tabs.Tab>
  </Tabs>
);

export default TabsComponent