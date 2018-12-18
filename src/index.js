import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { initializeIcons } from '@uifabric/icons';
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#008272',
    themeLighterAlt: '#f0faf9',
    themeLighter: '#c5ebe7',
    themeLight: '#98dad2',
    themeTertiary: '#48b4a7',
    themeSecondary: '#119182',
    themeDarkAlt: '#007567',
    themeDark: '#006357',
    themeDarker: '#004940',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff',
  }
});

// Register icons and pull the fonts from the default SharePoint CDN:
initializeIcons();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
