import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {Alert, ScrollView, useWindowDimensions} from 'react-native';
import {MyIcon} from '../../components/ui/MyIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useAuthStore} from '../../store/store/useAuthStore';
import {useState} from 'react';

export const LoginScreen = () => {
  const {login, user} = useAuthStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {height} = useWindowDimensions();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    if ([form.email, form.password].some(c => c === '')) return;
    const wasSuccesful = await login(form.email, form.password);
    if (wasSuccesful) return;

    Alert.alert('Erro', 'Usuario o contraseña incorrectos');
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout
          style={{
            paddingTop: height * 0.35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={form.password}
            onChangeText={password => setForm({...form, password})}
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        <Layout style={{marginTop: 10}}>
          <Button
            onPress={onLogin}
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
            Ingresar
          </Button>
        </Layout>

        <Layout
          style={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
          }}>
          <Text>¿No tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            style={{
              textDecorationLine: 'underline',
            }}
            onPress={() => navigation.navigate('register')}>
            Crea tu cuenta
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
