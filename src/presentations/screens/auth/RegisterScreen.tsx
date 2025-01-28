import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView, useWindowDimensions} from 'react-native';
import {MyIcon} from '../../components/ui/MyIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

export const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout
          style={{
            paddingTop: height * 0.30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text category="h1">Crear Cuenta</Text>
          <Text category="p2">
            Por favor, complete los campos para poder crear su cuenta
          </Text>
        </Layout>
        <Layout style={{marginTop: 10}}>
          <Input
            placeholder="Registre su nombre completo"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="person-outline" />}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Ingrese su correo"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Cree su password"
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
          />
        </Layout>

        <Layout style={{marginTop: 10}}>
          <Button onPress={() => console.log('Creando cuenta')}>
            Crear cuenta
          </Button>
        </Layout>
        <Layout
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            marginTop: 10,
          }}>
          <Text>¿Ya tienes cuenta?</Text>
          <Text
            category="s1"
            status="primary"
            style={{textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('login')}>
            Inicia sesión
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
