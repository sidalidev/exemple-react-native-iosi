import { Text } from 'react-native'

export default function Greeting(props) {
  return (
    <Text
      style={{ color: props.theme == 'light' ? 'black' : '#fff', fontSize: 20 }}
    >
      {props.message}
    </Text>
  )
}
