#  FormPicker Component

## Compatibility

| 🌏 Web                   | 🖥 Electron              | 📱 React Native    |
| :----------------------: | :----------------------: | :----------------: |
| :heavy_multiplication_x: | :heavy_multiplication_x: | :heavy_check_mark: |

## Screenshots

| 🌏 Web | 🖥 Electron | 📱 React Native                             |
| :----: | :---------: | :-----------------------------------------: |
| TBD    | TBD         | ![FormPicker](./Screenshots/FormPicker.png) |
|        |

## Props

| Name          | Type     | Default | Description                               |
| :------------ | :------- | :------ | :---------------------------------------- |
| label         | string   |         | It is used for adding label  in component |
| onValueChange | function |         | It is used for changing input value       |
| value         | string   |         | It is used for adding input values        |
| IconSize      | number   |         | It is used for adding Size of Icon        |
| IconName      | string   |         | It is used for adding Name of icon        |
| IconColor     | string   |         | It is used for adding Color of icon       |


## How to use

```react
import React from 'react';
<FormPicker
      label={'Name'}
      onValueChange={(e)=>e}
      IconColor={"blue"}
      IconSize={20}
      IconName={"arrow-left"}
      Items={[{label:'Name',value:'Name'}]}
      value={e.value}
    />
```

## Tests
