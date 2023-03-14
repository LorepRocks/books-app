import {FlatList, View, StyleSheet} from 'react-native';
import StyledText from './StyledText';
import {theme} from '../lib/theme';

const CategoryTags = ({categories}) => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <View style={styles.container}>
          <StyledText bold color={theme.white} styles={{fontSize: 10}}>
            {item}
          </StyledText>
        </View>
      )}
      keyExtractor={item => item}></FlatList>
  );
};

export default CategoryTags;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    paddingVertical: 1,
    paddingHorizontal: 4,
    backgroundColor: theme.tag,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
