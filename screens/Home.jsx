import {View, FlatList, Text} from 'react-native';
import Card from '../components/Card';

import {data} from '../lib/data';
const Home = () => {
  return (
    <View>
      <Text>Hello Human!</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
