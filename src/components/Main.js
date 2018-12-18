import React from 'react'
import { Label } from 'office-ui-fabric-react/lib/Label';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PivotItem, Pivot, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';

class NavBar extends React.Component{

  render(){
    return <>
      <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.links}>
          <PivotItem linkText="Summary" itemIcon="Emoji2">
            <Label>.NET Full-Stack Developer with 3.5 years of experience creating custom solutions, open to other technologies such as NodeJs. Passion for automation, manual effort reduction, DevOps methodologies and tools. Experience in ChatOps and using Artificial Inteligence services. Can work in small and large teams distributed in different locations and timezones.</Label>
          </PivotItem>
          <PivotItem itemCount={23} itemIcon="Recent">
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem itemIcon="Globe">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem linkText="Shared with me" itemIcon="Ringer" itemCount={1}>
            <Label>Pivot #4</Label>
          </PivotItem>
          <PivotItem linkText="Customized Rendering" itemIcon="Globe" itemCount={10} onRenderItemLink={this._customRenderer}>
            <Label>Customized Rendering</Label>
          </PivotItem>
        </Pivot>
    </>
  }
}

export default NavBar