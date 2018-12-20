import React, { Component } from 'react';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { PivotItem, Pivot, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import Skills from './Skills'
import { Experience, jobs } from './Experience'
import Info from './Info'
import './App.scss';

const tabKeys = {
  skills: 'skills',
  experience: 'experience'
}

const cardDetails = {
  imageUrl: '/profile.jpg',
  imageInitials: 'PS',
  text: 'Paul Sancer',
  secondaryText: '.NET Full-Stack Developer',
  // tertiaryText: 'In a meeting',
  // optionalText: 'Available at 4:00pm'
};

class App extends Component {
  state = {
    activeTab: tabKeys.experience
  }

  getTabContent = (tabKey) => {
    switch (tabKey) {
      case tabKeys.skills:
        return <Skills />
      case tabKeys.experience:
        return Experience(jobs)
      case tabKeys.info:
        return <Info />
      default: return ''
    }
  }

  handleLinkClick = (tab) => {
    this.setState({ activeTab: tab.props.itemKey })
  }

  render() {
    const { activeTab } = this.state
    return (
      <>
        <div className="bg-image"></div>
        <div className="App">
          <main>
            <div className="App-header">
              <div className="container">
                <div className="profile">
                  <Persona
                    {...cardDetails}
                    size={PersonaSize.size72}
                    presence={PersonaPresence.online}
                  />
                </div>
                <Pivot selectedKey={activeTab} linkSize={PivotLinkSize.normal} linkFormat={PivotLinkFormat.links} className="tabs" onLinkClick={this.handleLinkClick} headersOnly>
                  <PivotItem headerText="Skills" itemKey={tabKeys.skills} />
                  <PivotItem headerText="Experience" itemKey={tabKeys.experience} />
                  <PivotItem headerText="Personal Info" itemKey={tabKeys.info} />
                </Pivot>
              </div>
            </div>
            <div className="tab-content">
              {this.getTabContent(this.state.activeTab)}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App
