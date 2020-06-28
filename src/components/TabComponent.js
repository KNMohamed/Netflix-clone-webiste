import React, { Component } from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabPrice from './tabs_nav/TabPrice';
import TabDevices from './tabs_nav/TabDevices';
import '../css/tabsnav.css'

export default class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <TabDoor/>
              <p><strong>No commitments.<br/> Cancel online at anytime.</strong></p>
            </Tab>
            <Tab>
              <TabDevices/>
              <p><strong>Watch anywhere.</strong></p>
            </Tab>
            <Tab>
              <TabPrice/>
              <p><strong>Pick your price.</strong></p>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    )
  }
}
