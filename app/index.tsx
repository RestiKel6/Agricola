import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContent}>
            <Text style={styles.headerText}>Selamat Datang{'\n'}Petani Modern!</Text>
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
          <View style={styles.grayBoxSuhu}></View>
          <View style={styles.grayBoxHumid}></View>
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
    fontSize: 30,
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
  grayBoxSuhu: {
    width: 300,
    height: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginTop: 15,
  },
  grayBoxHumid: {
    width: 300,
    height: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 50
  },
});
