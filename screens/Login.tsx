import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [userName, setUserName] = React.useState('')
  const [password, setPasword] = React.useState('')

  const handleLogin = async () => {
    let param = {
      userName,
      password
    }
    
    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     userName: 'yourValue',
    //     password: 'yourOtherValue'
    //   })
    // });
    navigation.navigate("Home")
    // let result = await 
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>

      </View>
      <View style={styles.body}>

        <View style={styles.formLogin}>
          <View style={styles.coverTile}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginTextUnder}>Please login to continue</Text>
          </View>
          <View style={styles.coverInput}>

            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 3 }}
              placeholder="Phone"
              value={userName}
              keyboardType={'numeric'}
              onChangeText={value =>
                setUserName(value)
              }
            />

            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 3, marginTop: 5 }}
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={value =>
                setPasword(value)
              }
            />
          </View>

          <View style={styles.coverButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text
                style={styles.text_Button}>
                Login
                </Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1.5,
    // backgroundColor: "red",

  },
  body: {
    flex: 4,
    // backgroundColor: "blue"
  },
  footer: {
    flex: 1,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  formLogin: {
    // backgroundColor: "white",
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: "blue",
    borderRadius: 30,
    height: 48,
    width: 110
  },
  text_Button: {

    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: 'center'
  },
  coverButton: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  coverTile: {

  },
  loginText: {
    fontWeight: "bold",
    fontSize: 33,
    color: "#162947"
  },
  loginTextUnder: {
    fontSize: 15,
    color: "#666666"
  },
  touch_Footer: {
    justifyContent: 'center',
    backgroundColor: '#FFA200',
    borderRadius: 15,
    height: 47,
    width: 110
  },
  coverInput: {
    marginTop: 20,
    marginBottom: 15,

  },
  input: {
    fontSize: 15,
  },
  textFooter: {
    color: "#162947",
    fontSize: 15,
  },
  textRegister: {
    color: "blue",
    fontSize: 15,
    fontWeight: "bold"
  }
});
