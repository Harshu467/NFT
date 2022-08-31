import { View,Text,Image,StatusBar,FlatList,SafeAreaView } from "react-native"
import { COLORS, assets,SHADOWS,SIZES,FONTS } from "../../constants"

import { SubInfo, RectButton,CircleButton,FocusedStatusBar,DetailsDesc,DetailsBid } from '../../Components'
import DetailsBid from "../../Components";
import DetailsBid from "../../Components";
const Details = ({route,navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar 
      barStyle="dark-content"
      backgroundColor='transparent'
      translucent={true}
      />
      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.5)',
        zIndex:1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList 
      data={data.bids}
      renderItem={({item})=><DetailsBid bid={item}/>}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge*3}}
      />
    </SafeAreaView>
  )
}

export default Details