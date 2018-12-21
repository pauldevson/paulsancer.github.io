import React, { Component } from 'react';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { PivotItem, Pivot, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import Profile from './Profile'
import { Experience, jobs } from './Experience'
import Info from './Info'
import './App.scss';

const tabKeys = {
  profile: 'profile',
  experience: 'experience'
}

const cardDetails = {
  imageUrl: '/profile.jpg',
  imageInitials: 'PS',
  text: 'Hi, my name is Paul Sancer',
  secondaryText: 'Looking for a developer? Welcome to my resume!',//'I am a .NET Full-Stack Developer',
  // tertiaryText: '',
  // optionalText: 'Available at 4:00pm'
};

class App extends Component {
  state = {
    activeTab: tabKeys.profile
  }

  getTabContent = (tabKey) => {
    switch (tabKey) {
      case tabKeys.profile:
        return Profile
      case tabKeys.experience:
        return Experience
      case tabKeys.info:
        return Info
      default: return null
    }
  }

  handleLinkClick = (tab) => {
    this.setState({ activeTab: tab.props.itemKey })
  }

  render() {
    const { activeTab } = this.state
    const content = this.getTabContent(activeTab)
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
              </div>
            </div>
            <div className="App-header stick">
              <div className="container">
                <Pivot selectedKey={activeTab} linkSize={PivotLinkSize.normal} linkFormat={PivotLinkFormat.links} className="tabs" onLinkClick={this.handleLinkClick} headersOnly>
                  <PivotItem headerText="Profile" itemKey={tabKeys.profile} />
                  <PivotItem headerText="Experience" itemKey={tabKeys.experience} />
                  <PivotItem headerText="Personal Info" itemKey={tabKeys.info} />
                </Pivot>
              </div>
            </div>
            {content && <div className="tab-content">{content(jobs)}</div>}
          </main>
        </div>
      </>
    );
  }
}

export default App
