import {useMemo, useRef} from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import StyledText from './StyledText';
import {theme} from '../lib/theme';
import CategoryTags from './CategoryTags';
import {SafeAreaView} from 'react-native-safe-area-context';

const Card = ({item}) => {
  const bookData = item.volumeInfo;
  const imgURL = item.volumeInfo.imageLinks.thumbnail.replace('http', 'https');

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = () => {
    bottomSheetModalRef.current.present();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.cover}
            source={{
              uri: imgURL,
            }}></Image>
        </View>
        <View style={styles.bookInfoContainer}>
          {bookData.categories && (
            <CategoryTags categories={bookData.categories} />
          )}
          <StyledText bold variant="title">
            {bookData.title}
          </StyledText>
          <StyledText variant="subtitle" styles={{marginTop: 5}}>
            {bookData.authors.join(' , ')}
          </StyledText>

          <TouchableOpacity activeOpacity={0.6} onPress={() => openModal()}>
            <View style={styles.button}>
              <StyledText
                bold
                color={theme.white}
                styles={{textAlign: 'center'}}>
                Select Book
              </StyledText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        backgroundStyle={styles.backgroundSheet}>
        <View style={styles.contentContainer}>
          <View style={styles.imgContainerDesc}>
            <Image
              style={styles.coverDesc}
              source={{
                uri: imgURL,
              }}></Image>
          </View>
          <StyledText variant="subtitle" styles={{color: '#fff'}}>
            Awesome 🎉
          </StyledText>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  imgContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cover: {
    width: 80,
    height: 120,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  imgContainerDesc: {
    justifyContent: 'center',
  },
  coverDesc: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
  bookInfoContainer: {
    margin: 10,
    flex: 1,
    height: '100%',
  },
  prop: {
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: '#fff',
    backgroundColor: theme.primary,
    width: 100,
    alignSelf: 'flex-start',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  bottomSheet: {
    borderRadius: 50,
    position: 'absolute',
  },
  backgroundSheet: {
    backgroundColor: theme.black,
  },
  contentContainer: {
    position: 'relative',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
