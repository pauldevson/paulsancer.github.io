import React, { Component } from 'react'
// import { Label } from 'office-ui-fabric-react/lib/Label';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { PivotItem, Pivot, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import './App.scss'

const tabKeys = {
  skills: 'skills',
  experience: 'experience'
}

const cardDetails = {
  imageUrl: '/profile.jpg',
  imageInitials: 'PS',
  text: 'Paul Sanchez',
  secondaryText: '.NET Full-Stack Developer',
  // tertiaryText: 'In a meeting',
  // optionalText: 'Available at 4:00pm'
};

class App extends Component {
  state = {
    activeTab: 'skills'
  }

  getTabContent = (tabKey) => {
    switch (tabKey) {
      case tabKeys.skills:
        return (<>
          <p>
            .NET Full-Stack Developer with 3.5 years of experience, open to othertechnologies such as NodeJs.</p>
          <p>
            Passion for automation, manual effort reduction, DevOps methodologies and tools.
          </p>
          <p>
            Experience in ChatOps and using Artificial Inteligence services.
          </p>
          <p>
            Can work in small and large teams distributedin different locations and timezones.
          </p>
        </>)
      case tabKeys.experience:
        return <p>This is my experience lorem ipsum.</p>
      default: return ''
    }
  }

  handleLinkClick = (tab) => {
    this.setState({ activeTab: tab.props.itemKey });
  }

  render() {
    return (
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

              {/* <h1 className="ms-font-su name">Paul Sanchez</h1>
              <small className="title">.NET Full-Stack Developer</small> */}
              <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.links} className="tabs" onLinkClick={this.handleLinkClick}>
                <PivotItem headerText="Skills" itemKey={tabKeys.skills} />
                {/* <PivotItem headerText="Summary" itemKey={tabKeys.summary} /> */}
                <PivotItem headerText="Experience" itemKey={tabKeys.experience} />
                <PivotItem headerText="Personal Info" itemKey={tabKeys.info} />
              </Pivot>
            </div>
          </div>
          <div className="container">
            <div className="tab-content">
              {this.getTabContent(this.state.activeTab)}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
