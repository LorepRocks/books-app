import {Text} from 'react-native';
const StyledText = ({bold, color, variant, styles, children}) => {
  const generalStyle = {
    fontWeight: bold ? 'bold' : '400',
    color: '#000',
    fontSize: variant === 'title' ? 16 : variant === 'subtitle' ? 14 : 12,
  };

  const appliedStyles = {...generalStyle, ...styles};

  return <Text style={appliedStyles}>{children}</Text>;
};

export default StyledText;
