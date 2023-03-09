import {Image, View, StyleSheet, Text} from 'react-native';
import StyledText from './StyledText';
const Card = ({item}) => {
  //console.log(item.volumeInfo.imageLinks.thumbnail);
  const bookData = item.volumeInfo;
  const imgURL = item.volumeInfo.imageLinks.thumbnail.replace('http', 'https');
  return (
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{
          uri: imgURL,
        }}></Image>
      <View style={styles.bookInfoContainer}>
        <StyledText bold variant="title">
          {bookData.title}
        </StyledText>
        <StyledText styles={{marginTop: 5}}>
          <Text style={styles.prop}>Author:</Text>{' '}
          {bookData.authors.join(' , ')}
        </StyledText>
        {bookData.categories && (
          <StyledText>
            <Text style={styles.prop}>Categories:</Text>{' '}
            {bookData.categories.join(' , ')}
          </StyledText>
        )}
        <StyledText>
          <Text style={styles.prop}>Page Count:</Text> {bookData.pageCount}
        </StyledText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  cover: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  bookInfoContainer: {
    margin: 10,
    flex: 1,
  },
  prop: {
    fontStyle: 'italic',
  },
});
