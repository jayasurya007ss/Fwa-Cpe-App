<<<<<<< HEAD
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  props,

  TouchableOpacity
} from 'react-native';


export function AdminZconnectScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Z-Connect</Text>

      <Text style={styles.lable}>Cloud Services</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Turn ON to enable :</Text>


      <Text style={styles.lable2}>Status</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Connection state:</Text>
      <Text style={styles.lable3}>Last reported:</Text>
      <Text style={styles.lable3}>Reporting interval:</Text>




      <Text style={styles.lable5}>Z-Connect Mobile App</Text>
      <Text style={styles.h4}></Text>
      <Text style={styles.lable4}>Download the Z-Connect Mobile App from your smart phone's App
      </Text>



    </View>
  );
}


const styles = StyleSheet.create({


  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  h1: {
    textDecorationLine: 'underline',
    left: 60,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },
  h2: {
    bottom: 10,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //                             CurrentSoftware
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                 Software Version
  lable1: {
    color: '#FFFFFF',
    fontSize: 13,
    top: 10,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },

  // Checking for Software Update
  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 30,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    top: 5,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },


  lable3: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 20,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },




  //    Software Updated,Applied,Description
  lable4: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 10,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  h4: {
    bottom: 10,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },



  //                  Last Software Update
  lable5: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 5,
    top: 10,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,

  },
});

export default AdminZconnectScreen;
=======
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  props,

  TouchableOpacity
} from 'react-native';


export function AdminZconnectScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Z-Connect</Text>

      <Text style={styles.lable}>Cloud Services</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Turn ON to enable :</Text>


      <Text style={styles.lable2}>Status</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Connection state:</Text>
      <Text style={styles.lable3}>Last reported:</Text>
      <Text style={styles.lable3}>Reporting interval:</Text>




      <Text style={styles.lable5}>Z-Connect Mobile App</Text>
      <Text style={styles.h4}></Text>
      <Text style={styles.lable4}>Download the Z-Connect Mobile App from your smart phone's App
      </Text>



    </View>
  );
}


const styles = StyleSheet.create({


  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  h1: {
    textDecorationLine: 'underline',
    left: 60,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },
  h2: {
    bottom: 10,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //                             CurrentSoftware
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                 Software Version
  lable1: {
    color: '#FFFFFF',
    fontSize: 13,
    top: 10,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },

  // Checking for Software Update
  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 30,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    top: 5,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },


  lable3: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 20,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },




  //    Software Updated,Applied,Description
  lable4: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 10,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  h4: {
    bottom: 10,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },



  //                  Last Software Update
  lable5: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 5,
    top: 10,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,

  },
});

export default AdminZconnectScreen;
>>>>>>> 48ee2789035b3187cf21e818b069ea362a47d3f4
