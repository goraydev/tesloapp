import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../routes/StackNavigator';
import React, {PropsWithChildren, useEffect} from 'react';
import {useAuthStore} from '../store/store/useAuthStore';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {status, checkStatus} = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'home'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'loading'}],
        });
      }
    }
  }, [status]);

  return <>{children}</>;
};
