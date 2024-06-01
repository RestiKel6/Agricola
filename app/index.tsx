import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContent}>
            <Text style={styles.headerText}>Selamat Datang{'\n'}Petani Modern!!</Text>
          </View>
          <Image source={require('../assets/images/usericon-up.png')} style={styles.icon}/>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.boxContainer}>
          <View style={styles.yellowBox}>
            <Image source={require('../assets/images/location-icon.png')} style={styles.locationIcon}/>
            <Text style={styles.yellowBoxText}>Jatinangor, Indonesia</Text>
          </View>
        </View>
        <View style={styles.lowerBody}>
          <Text style={styles.bodyText}>Kondisi Perkebunan</Text>
          <View style={styles.grayBoxSuhu}>
              <View style={styles.grayBoxSuhuContent}>
                <Image source={require('../assets/images/temp.png')}style={styles.conditionIcon}/>
                <View>
                  <Text style={styles.textSuhu}>Suhu Tanah</Text>
                  <Text style={styles.value}>21.33°C</Text>
                  <Text style={styles.status}>Baik!</Text>
                </View>
              </View>
          </View>
          <View style={styles.grayBoxHumid}>
            <View style={styles.grayBoxHumidContent}>
              <Image source={require('../assets/images/humidity.png')}style={styles.conditionIcon}/>
              <View>
                <Text style={styles.textHumid}>Kelembapan {'\n'}Udara</Text>
                <Text style={styles.valueLow}>10%</Text>
                <Text style={styles.statusLow}>Rendah!</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavContent}>
          <Image source={require('../assets/images/home2.png')} style={styles.homeIcon}/>
          <TouchableOpacity            
          onPress={() => router.push('/login')}>
              <Image source={require('../assets/images/profil.png')} style={styles.profileIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#797e2a',
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: 45,
  },
  headerTextContent:{
    alignItems:'center',
    marginLeft: 10,
    paddingLeft: 40,
    marginRight: 'auto',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#FFFFFF',
  },
  icon: {
    alignItems: 'center',
    width: 50,
    height: 50,
    paddingRight: 40,
    marginRight: 50,
    marginTop: 20,
  },
  body: {
    flex: 4,
    backgroundColor: '#EBE3D5',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  boxContainer: {
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  yellowBox: {
    width: 300,
    height: 50,
    backgroundColor: '#fec459',
    borderRadius: 8,
    marginBottom: 10, 
    //justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 13,
    paddingLeft: 10,
  },
  locationIcon: {
    // klo mulai ngaco gws
  },
  yellowBoxText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#000',
    //justifyContent: 'center'
  },
  lowerBody:{
    marginTop: 15,
    marginLeft: 50,
  },
  conditionIcon: {
    width: 50,
    height: 50,
    marginRight: 30,
  },
  grayBoxSuhu: {
    width: 300,
    height: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
    //paddingTop: 15,
    //paddingLeft: 15,
    justifyContent: 'center',
  },
  grayBoxSuhuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSuhu:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  value:{
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#797E2A',
  },
  valueLow:{
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#FB6B2B',
  },
  status:{
    fontSize: 16,
    marginLeft: 10,
    color: '#797E2A',
    fontWeight: 'bold',
  },
  statusLow:{
    fontSize: 16,
    marginLeft: 10,
    color: '#FB6B2B',
    fontWeight: 'bold',
  },
  grayBoxHumid: {
    width: 300,
    height: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grayBoxHumidContent:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHumid:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomNav:{
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  bottomNavContent:{
    //alignItems: 'center',
    marginTop: 55,
    flexDirection: 'row',
  },
  homeIcon:{
    marginLeft: 100,
    marginRight: 'auto',
  },
  profileIcon:{
    marginLeft: 'auto',
    marginRight: 50,
  },
});
