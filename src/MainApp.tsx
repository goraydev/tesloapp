import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StackNavigator} from './presentations/routes/StackNavigator';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AuthProvider} from './presentations/providers/AuthProvider';

export const MainApp = () => {
  const [isDarkTheme, setValueTheme] = useState(false);
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (colorScheme === 'light') {
      setValueTheme(false);
    } else {
      setValueTheme(true);
    }
  }, [colorScheme]);

  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backgroundColor =
    colorScheme === 'dark'
      ? theme['color-basic-800']
      : theme['color-basic-100'];

  const themeGeneral = {
    ...(isDarkTheme ? eva.dark : eva.light),

    ...((isDarkTheme ? eva.dark : eva.light) as any),
    dark: colorScheme === 'dark',
    colors: {
      primary: theme['color-primary-500'],
      backgroundColor: backgroundColor,
      card: theme['color-basic-100'],
      text: theme['text-basic-color'],
      border: theme['color-basic-800'],
      notificacion: theme['color-primary-500'],
    },

    fonts: {
      displaySmall: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 20,
      },

      displayMedium: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 24,
      },

      bodyLarge: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 16,
      },

      bodyMedium: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 14,
      },

      bodySmall: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 12,
      },

      labelLarge: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '500',
        fontSize: 14,
      },

      labelMedium: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 12,
      },

      labelSmall: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '400',
        fontSize: 10,
      },

      regular: {fontFamily: 'Nunito-Regular', fontWeight: '400'},

      medium: {fontFamily: 'Nunito-Medium', fontWeight: '500'},

      bold: {fontFamily: 'Nunito-Bold', fontWeight: '700'},

      heavy: {fontFamily: 'Nunito-Heavy', fontWeight: '900'},
    },
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer theme={themeGeneral}>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
