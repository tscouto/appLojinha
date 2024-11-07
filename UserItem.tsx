import { View, Text, StyleSheet } from 'react-native';

type Props = {
  id: number;
  nome: string;
  age: number;
};

export  const UserItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {props.nome} idade {props.age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  big: {
    fontSize: 28,
  },
});

