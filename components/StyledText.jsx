import {Text} from 'react-native';
const StyledText = ({bold, color, variant, styles, children}) => {
  const generalStyle = {
    fontWeight: bold ? 'bold' : '400',
    color: color || '#000',
    fontSize: variant === 'title' ? 15 : variant === 'subtitle' ? 12 : 10,
    fontFamily: 'Quicksand-Bold',
  };

  const appliedStyles = {...generalStyle, ...styles};

  return <Text style={appliedStyles}>{children}</Text>;
};

export default StyledText;
