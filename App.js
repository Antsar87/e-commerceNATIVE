import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { colors } from './styles/styles';
import { Product } from './screens/Product';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';
import AdminPanel from './screens/Admin/AdminPanel';
import AddNewCategory from './screens/Admin/AddNewCategory';
import AddNewProduct from './screens/Admin/AddNewProduct';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setBarStyle('dark-content');

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(colors.color1_light);
    StatusBar.setBarStyle('light-content');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="confirmOrder" component={ConfirmOrder} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="verify" component={Verify} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="updateProfile" component={UpdateProfile} />
        <Stack.Screen name="changePassword" component={ChangePassword} />
        <Stack.Screen name="orders" component={Orders} />
        <Stack.Screen name="adminPanel" component={AdminPanel} />
        <Stack.Screen name="addNewCategory" component={AddNewCategory} />
        <Stack.Screen name="addNewProduct" component={AddNewProduct} />
        <Stack.Screen name="camera" component={CameraScreen} />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  );
}
