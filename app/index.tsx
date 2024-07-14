import { Text, View } from "react-native";
import express from 'express';
import sequelize from '../routes/routes.js';
import router from 'utils/database'

const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((_, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(router);
sequelize.sync();
app.listen(5000);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
