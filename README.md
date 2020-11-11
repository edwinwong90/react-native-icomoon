# react-native-icomoon
React Native Icommon

## Installation
React Native Icomoon is using react-native-svg to render icon. Make sure install it correctly [https://github.com/react-native-svg/react-native-svg#installation](https://github.com/react-native-svg/react-native-svg#installation)

```sh
npm install react-native-icomoon react-native-svg
```

or

```sh
yarn add react-native-icomoon react-native-svg
```

## Usage

#### Create re-useable component
```js
import Icomoon from "react-native-icomoon"
import type { IconMoonProps } from 'react-native-icomoon'
import json from './selection.json'

type IconProps = Omit<IconMoonProps, "iconSet">

export default function Icon({ name, ...restProps }: IconProps) {
  return <Icomoon iconSet={json} name={name} {...restProps} />
}
```

#### Use
```js
import Icon from './Icon'

<Icon name="firefox" color="tomato" size={50} />
```

#### iconList

You can use the iconList method to see a complete list of icons you can use.

```js
import { iconList } from "react-icomoon";
import json from './selection.json'

iconList(json);

// sample output
[
  "document",
  "camera",
  "genius",
  "chat",
  //...
]
```

## Props List
| Name              | Type          | Default   | Sample                        |
|-------------------|---------------|-----------|-------------------------------|
| iconSet           | Object        | undefined | "selection.json file content" |
| name              | String        | undefined | "home"                        |
| size              | Number,String | undefined | "1em", 10, "100px"            |
| color             | String        | undefined | "red", "#f00", "rgb(0,0,0)"   |




## License

MIT
