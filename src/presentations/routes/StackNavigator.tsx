import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {
  HomeScreen,
  LoadingScreen,
  LoginScreen,
  ProductScreen,
  RegisterScreen,
} from '../screens';

export type RootStackParams = {
  loading: undefined;
  login: undefined;
  register: undefined;
  home: undefined;
  product: {productId: string};
};

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="loading">
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen name="product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
