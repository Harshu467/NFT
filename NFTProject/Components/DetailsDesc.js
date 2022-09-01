import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
const DetailsDesc = ({ data }) => {
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice
          price={data.price}
        />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>Description</Text>
        <View style={{ marginVertical: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight:SIZES.large,
          }}>{data.description}</Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc