import {Button, Layout, Text} from '@ui-kitten/components';
import {MyIcon} from '../../components/ui/MyIcon';
import {useAuthStore} from '../../store/store/useAuthStore';

export const HomeScreen = () => {
  const {logout, user} = useAuthStore();
  const onLogout = () => {
    console.log('cerrando sesion');
    logout();
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HomeScreen</Text>
      <Button
        onPress={onLogout}
        accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
        Cerrar Sesión
      </Button>
      <Text>Hola</Text>
      <Text>{user?.fullName}</Text>
    </Layout>
  );
};
