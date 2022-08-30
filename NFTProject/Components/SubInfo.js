import { View, Text,Image } from 'react-native'
import { SIZES,assets,SHADOWS,COLORS,FONTS } from '../constants'

export const NFTTitle = ({title,subTitle,titleSize,subTitleSize}) => {
  return (
    <View>
      <Text style={{fontFamily:FONTS.semiBold,fontSize:titleSize,color:COLORS.primary}}>{title}</Text>
      <Text style={{fontFamily:FONTS.regular,fontSize:subTitleSize,color:COLORS.primary}}>{subTitle}</Text>
    </View>
  )
}
export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const ImageCmp = ({imageUrl,index}) => {
  return (
    <Image
    source={imageUrl}
    resizeModel="contain"
    style={{
        width:48,
        height:48,
        marginLeft: index===0 ? 0 : -SIZES.font
    }}
    />
  )
}
export const People = () => {
  return (
    <View style={{
        flexDirection:'row'
    }}>
        {[assets.person02,assets.person03,assets.person04].map((imageUrl,
            index)=>(
                <ImageCmp imageUrl={imageUrl} index={index} key={`People-${index}`}/>
            ))}
    </View>
  )
}
export const EndDate = () => {
  return (
    <View style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation:1,
        maxWidth:'50%'
    }}>
      <Text style={{
        fontFamily:FONTS.regular,
        fontSize:SIZES.small,
        color:COLORS.primary
    }}>
        Ending in 
        </Text>
      <Text style={{
        fontFamily:FONTS.regular,
        fontSize:SIZES.small,
        color:COLORS.primary
    }}>
        12h 29m
        </Text>
    </View>
  )
}
export const SubInfo = () => {
  return (
    <View style={{
        width:'100%',
        paddingHorizontal:SIZES.font,
        marginTop:-SIZES.extraLarge,
        flexDirection:'row',
        justifyContent:'space-between',
    }}>
      <People/>
      <EndDate/>
    </View>
  )
}
