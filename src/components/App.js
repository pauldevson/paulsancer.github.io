import React, { Component } from 'react'
import { Label } from 'office-ui-fabric-react/lib/Label';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PivotItem, Pivot, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <p>
            <code className="title">Paul Sanchez Resume</code>
          </p>
          <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.links} className="tabs">
            <PivotItem linkText="Summary" itemIcon="Emoji2">
              <p>.NET Full-Stack Developer with 3.5 years of experience creating custom solutions, open to other technologies such as NodeJs. Passion for automation, manual effort reduction, DevOps methodologies and tools. Experience in ChatOps and using Artificial Inteligence services. Can work in small and large teams distributed in different locations and timezones.</p>
            </PivotItem>
            <PivotItem itemIcon="Recent">
              <Label>Pivot #2</Label>
            </PivotItem>
            <PivotItem itemIcon="Globe">
              <Label>Pivot #3</Label>
            </PivotItem>
            <PivotItem linkText="Shared with me" itemIcon="Ringer" itemCount={1}>
              <Label>Pivot #4</Label>
            </PivotItem>
            <PivotItem linkText="Customized Rendering" itemIcon="Globe">
              <Label>Customized Rendering</Label>
            </PivotItem>
          </Pivot>
        </main>
      </div>
    );
  }
}

export default App
