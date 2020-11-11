import React, { useMemo } from 'react'
//@ts-ignore
import { Svg, Path } from 'react-native-svg'

export interface IconSet {
  icons: Array<any>
}

export interface IconMoonProps {
  iconSet: IconSet
  name: string
  color?: string
  size?: number
  strokeWidth?: number
  offset?: number // some icon might have different padding, use this to offset it
}

export interface IconMap {
  name: string
  paths: Array<string>
}

const IconMoon: React.FC<IconMoonProps> = ({
  iconSet,
  size = 32,
  color = '#222',
  name,
  offset = 0,
  strokeWidth = 1,
}) => {
  if (!iconSet || !name) {
    console.error('The "iconSet" and "name" props are required.')
    return null
  }

  const viewBoxMax = 1024
  const localOffset = (offset / 2) * -viewBoxMax
  const offsetedViewBox = viewBoxMax - localOffset

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentIcon: IconMap | undefined = useMemo(() => {
    return iconSet.icons
      .map((i: any) => {
        return {
          name: i.properties.name,
          paths: i.icon.paths,
        } as IconMap
      })
      .find((i: IconMap) => {
        return i.name === name
      })
  }, [iconSet, name])

  if (currentIcon === undefined) {
    console.error(`Icon "${name}" not found.`)
    return null
  }

  const paths = currentIcon.paths.map((p, i) => (
    <Path key={String(i)} d={p} strokeWidth={5 * strokeWidth} stroke={color} />
  ))

  return (
    <Svg
      width={String(size)}
      height={String(size)}
      fill={color}
      viewBox={`${localOffset} ${localOffset} ${offsetedViewBox} ${offsetedViewBox}`}
    >
      {paths}
    </Svg>
  )
}

export function iconList(iconSet: IconSet) {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name)
  }
  return null
}

export default IconMoon
