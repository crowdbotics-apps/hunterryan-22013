import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn48169276Navigator from '../features/SignIn48169276/navigator';
import SignIn49169275Navigator from '../features/SignIn49169275/navigator';
import SignIn58169274Navigator from '../features/SignIn58169274/navigator';
import BlankScreen7166447Navigator from '../features/BlankScreen7166447/navigator';
import SignIn18166445Navigator from '../features/SignIn18166445/navigator';
import BlankScreen5166444Navigator from '../features/BlankScreen5166444/navigator';
import BlankScreen4166443Navigator from '../features/BlankScreen4166443/navigator';
import BlankScreen3166442Navigator from '../features/BlankScreen3166442/navigator';
import BlankScreen2166441Navigator from '../features/BlankScreen2166441/navigator';
import BlankScreen1166440Navigator from '../features/BlankScreen1166440/navigator';
import BlankScreen0166439Navigator from '../features/BlankScreen0166439/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn48169276: { screen: SignIn48169276Navigator },
SignIn49169275: { screen: SignIn49169275Navigator },
SignIn58169274: { screen: SignIn58169274Navigator },
BlankScreen7166447: { screen: BlankScreen7166447Navigator },
SignIn18166445: { screen: SignIn18166445Navigator },
BlankScreen5166444: { screen: BlankScreen5166444Navigator },
BlankScreen4166443: { screen: BlankScreen4166443Navigator },
BlankScreen3166442: { screen: BlankScreen3166442Navigator },
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
