import { View, Text } from 'react-native'
import React from 'react'

const OurService = () => {
  return (
    <View>
          <Text>On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:

              If you specify one button, it will be the 'positive' one (such as 'OK')
              Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')
              Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')
              Alerts on Android can be dismissed by tapping outside of the alert box. It is disabled by default and can be enabled by providing an optional Options parameter with the cancelable property set to true i.e.

              The cancel event can be handled by providing an onDismiss callback property inside the options parameter.</Text>
    </View>
  )
}

export default OurService