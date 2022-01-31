import { useState } from 'react'
import { Switch, Button, View, Text, Image } from 'react-native'
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
  let [theme, setTheme] = useState('dark')

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === 'light' ? 'white' : 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>🌞</Text>
        <Switch onChange={switchTheme} value={theme == 'dark'}></Switch>
        <Text style={{ fontSize: 24 }}>🌚</Text>
      </View>
      <View
        style={{
          marginTop: 8,
          alignItems: 'center'
        }}
      >
        <PlayerCard
          username={player1.username}
          champion={player1.champion}
          theme={theme}
        ></PlayerCard>
        <Image
          style={{
            height: 50,
            width: 50,
            marginVertical: 16
          }}
          source={{
            uri: 'https://www.nicepng.com/png/full/271-2712237_vs-rooster-teeth.png'
          }}
        ></Image>
        <PlayerCard
          username={player2.username}
          champion={player2.champion}
          theme={theme}
        ></PlayerCard>
      </View>
      {/* <Button title="🎛 Switch theme" onPress={switchTheme}></Button> */}
    </View>
  )
}
