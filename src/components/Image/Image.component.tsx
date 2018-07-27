import { Image } from 'react-native'
import React from 'react'



const ImageComponent = (props: any) => {

  return <Image style={[props.style]}  {...props} />;
}

export default ImageComponent;


