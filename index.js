import { registerRootComponent } from 'expo';

import App from './App';
import AppFlexBox from './AppFlexBox';
import AppListView from './AppListView';
import AppInputs from './AppInputs';
import AppScrollView from './AppScrollView';
import AppImage from './AppImage';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppImage);
