import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icomoon from 'react-native-icomoon'
import type { IconMoonProps } from 'react-native-icomoon'
import json from './selection.json'

type IconProps = Omit<IconMoonProps, 'iconSet'>

function Icon({ name, ...restProps }: IconProps) {
  return <Icomoon iconSet={json} name={name} {...restProps} />
}

const paddingStyles = { padding: 10 }
export default function App() {
  return (
    <View style={styles.container}>
      <View style={paddingStyles}>
        <Icon name="firefox" color="tomato" size={50} />
      </View>

      <View style={paddingStyles}>
        <Icon name="chrome" />
      </View>

      <View style={paddingStyles}>
        <Icon name="edge" />
      </View>

      <View style={paddingStyles}>
        <Icon name="safari" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
