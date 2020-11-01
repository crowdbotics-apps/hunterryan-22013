import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2166441Navigator from '../features/BlankScreen2166441/navigator';
import BlankScreen1166440Navigator from '../features/BlankScreen1166440/navigator';
import BlankScreen0166439Navigator from '../features/BlankScreen0166439/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2166441: { screen: BlankScreen2166441Navigator },
BlankScreen1166440: { screen: BlankScreen1166440Navigator },
BlankScreen0166439: { screen: BlankScreen0166439Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
