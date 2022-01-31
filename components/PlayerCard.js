import { View, Text, Image } from 'react-native'
export default function PlayerCard(props) {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOpacity: 0.3,
        backgroundColor: props.theme == 'light' ? '#fff' : '#000',
        padding: 16,
        borderRadius: 8
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: props.theme == 'light' ? '#000' : '#fff'
        }}
      >
        {props.username}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 14,
            color: props.theme == 'light' ? '#fff' : '#ccc',
            marginRight: 4
          }}
        >
          Champion
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: props.theme == 'light' ? '#000' : '#fff'
          }}
        >
          {props.champion.name}
        </Text>
      </View>
      <Image
        style={{ height: 150, width: 150, marginVertical: 8, borderRadius: 8 }}
        source={{ uri: props.champion.imageUrl }}
      ></Image>
    </View>
  )
}
