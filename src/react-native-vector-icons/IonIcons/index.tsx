import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';


const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style: any = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);


export default Ionicons;
