import React, { Component } from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabPrice from './tabs_nav/TabPrice';
import TabDevices from './tabs_nav/TabDevices';
import '../css/tabsnav.css'

export default class TabComponent extends Component {
  state = {
    tabIndex: 0
  }

  render() {
    return (
      <div>
        <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? 'active' : ''}`}>
              <TabDoor/>
              <p>
                <strong>No commitments.<br/> Cancel online at anytime.</strong>
              </p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? 'active' : ''}`}>
              <TabDevices/>
              <p style={{marginTop: '-5.3125rem'}}>
                <strong>Watch anywhere.</strong>
              </p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? 'active' : ''}`}>
              <TabPrice/>
              <p>
                <strong>Pick your price.</strong>
              </p>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    )
  }
}
