import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Idade from './src/pages/Idade';
import Ateseis from './src/pages/Idade/Ateseis';
import MateriaisAteSeis from './src/pages/Idade/Ateseis/materiaisateseis';
import ComofazerAteSeis from './src/pages/Idade/Ateseis/comofazerateseis';
import SeisaDois from './src/pages/Idade/SeisaDois';
import MateriaisSeisaDois from './src/pages/Idade/SeisaDois/materiaisseisadois';
import ComofazerSeisaDois from './src/pages/Idade/SeisaDois/comofazerseisadois';
import Dois from './src/pages/Idade/Dois';
import MateriaisDois from './src/pages/Idade/Dois/materiaisdois';
import ComofazerDois from './src/pages/Idade/Dois/comofazerdois';
import Higienizardispositivo from './src/pages/Geral/higienizardispositivo';
import Solucaocaseira from './src/pages/Geral/solucaocaseira';
import Papelfisio from './src/pages/Geral/papelfisio';
import Referencias from './src/pages/Geral/referencias';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Idade"
          component={Idade}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ateseis"
          component={Ateseis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MateriaisAteSeis"
          component={MateriaisAteSeis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComofazerAteSeis"
          component={ComofazerAteSeis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeisaDois"
          component={SeisaDois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MateriaisSeisaDois"
          component={MateriaisSeisaDois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComofazerSeisaDois"
          component={ComofazerSeisaDois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dois"
          component={Dois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MateriaisDois"
          component={MateriaisDois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComofazerDois"
          component={ComofazerDois}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Higienizardispositivo"
          component={Higienizardispositivo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Solucaocaseira"
          component={Solucaocaseira}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Papelfisio"
          component={Papelfisio}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Referencias"
          component={Referencias}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
