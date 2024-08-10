import React, { useEffect, useState }  from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Balls from "../components/Balls";
import { styled } from "nativewind";
import data from "../datasets/games.json";
const StyledView = styled(View);

export default function Games(name ) {
   const [balls, setBalls] = useState(data.games);
   const [values, setValues] = useState([]);
   const bg_img = require("../assets/lotto-online-1.png");

   const getRandomInt = (max)=> Math.floor(Math.random() * (max - 1 + 1)) + 1;

   //    useEffect(()=> { 
   //      setValues( Math.floor(Math.random() * (max - 1 + 1)) + 1);
   // },[])

   return (
     <ScrollView>
       {data.games.map((game) => {
         max = game.max_ball
         const values1 = [] 
          Array.from(Array(game.balls)).map((value) => {
            value = getRandomInt(game.max_ball)
            values.push(value)
            setValues[values1]
         })
         return (
           <ImageBackground
             className={`${game.color} mb-2  flex-1`}
             source={bg_img}
           >
             <View className="flex-col">
               <View className="mt-3 h-10 flex-row justify-evenly">
                 <Text
                   className={`flex-1 ml-2  text-white font-bold ${game.color} rounded-full text-2xl`}
                 >
                   {game.name}
                 </Text>
                 <TouchableOpacity
                   className="bg-black rounded-full mr-2 p-2 h-8 w-110 flex-1"
                   onPress={() => getRandomInt(game.max_ball)}
                 >
                   <Text className="text-white text-center">Generate</Text>
                 </TouchableOpacity>
               </View>
               <StyledView className="bg-white shadow flex-row justify-center rounded-full ml-2 mr-2 p-5">
                 {Array.from(Array(game.balls)).map((x, index) => (
                   <Balls
                     values={values[index]}
                     color={game.color}
                     key={index}
                   />
                 ))}
                 {game.extra_ball ? (
                   <Balls color="bg-green-500" />
                 ) : (
                   <View></View>
                 )}
               </StyledView>
             </View>
             <TouchableOpacity className="bg-gray-400 mt-5 ml-2 mb-5 opacity-75 rounded-full mr-2 p-1.5 h-8 w-110 flex-1"></TouchableOpacity>
             <Text className="text-white relative -translate-y-11 text-center bg-opacity-50">
               Generate
             </Text>
           </ImageBackground>
         );
       })}
<View className="h-20 bg-transparent"></View>
     </ScrollView>
   );
}