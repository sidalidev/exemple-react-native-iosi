import { View, Text, Image } from 'react-native'
export default function PlayerCard(props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: props.theme == 'light' ? '#ddd' : '#17172e',
        backgroundColor: props.theme == 'light' ? '#fff' : '#17172e',
        padding: 16,
        borderRadius: 8
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <Subtitle text="Invocateur"></Subtitle>
        <Text
          style={{
            fontSize: 18,
            color: props.theme == 'light' ? '#000' : '#fff',
            fontWeight: 'bold'
          }}
        >
          {props.username}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <Subtitle text="Champion"></Subtitle>
        <Text
          style={{
            fontSize: 16,
            color: props.theme == 'light' ? '#000' : '#fff',
            fontWeight: 'bold'
          }}
        >
          {props.champion.name}
        </Text>
      </View>
      <Image
        style={{
          height: 200,
          width: 200,
          marginVertical: 8,
          borderRadius: 8,
          resizeMode: 'cover'
        }}
        source={{ uri: props.champion.imageUrl }}
      ></Image>
    </View>
  )
}

function Subtitle(props) {
  return (
    <Text
      style={{
        fontSize: 12,
        color: '#ddd',
        fontWeight: 'bold',
        marginRight: 4
      }}
    >
      {props.text}
    </Text>
  )
}
