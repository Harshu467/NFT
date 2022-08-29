import { Text } from "react-native"
import { useState } from "react"
import { View, SafeArea, FlatList } from "react-native"
import {COLORS,NFTData} from '../../constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../../Components";
const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={{flex:1}}>
        <View style={{zIndex:0}} >
          <FlatList 
          data={NFTData}
          renderItem={({item})=><Text>{item.name}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home