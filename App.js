import { useState } from 'react'
import { Button, View, Text, Image } from 'react-native'
import Greeting from './components/Greeting'
import PlayerCard from './components/PlayerCard'

let player1 = {
  username: 'Faker',
  champion: {
    name: 'Zed',
    imageUrl:
      'http://lol-stats.net/uploads/UT99YHJcAfQhdeBH5QxFvtQ7Ff6MV9BbGeE9CGpu.jpeg'
  }
}
let player2 = {
  username: 'Graves SNCF',
  champion: {
    name: 'Graves',
    imageUrl:
      'https://lol-skin.weblog.vc/img/wallpaper/splash/Graves_3.jpg?1642588647'
  }
}

export default function App() {
  let [theme, setTheme] = useState('light')

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme == 'light' ? 'white' : 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{ flexDirection: theme === 'light' ? 'row' : 'column' }}>
        <PlayerCard
          username={player1.username}
          champion={player1.champion}
          theme={theme}
        ></PlayerCard>
        <Text
          style={{ fontSize: 20, color: theme === 'light' ? 'black' : 'white' }}
        >
          VS
        </Text>
        <PlayerCard
          username={player2.username}
          champion={player2.champion}
          theme={theme}
        ></PlayerCard>
      </View>
      <Button title="🎛 Switch theme" onPress={switchTheme}></Button>
    </View>
  )
}
