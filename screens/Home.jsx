import {View, FlatList} from 'react-native';

import {data} from './lib/data';
const Home = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
