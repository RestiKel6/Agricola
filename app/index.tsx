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
            <Text style={styles.yellowBoxText}>Jatinangor, Indonesia</Text>
          </View>
          <View style={styles.grayBox} />
          <Text style={styles.bodyText}>Kondisi Perkebunan</Text>
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
    marginRight: 40,
    marginTop: 20,
  },
  body: {
    flex: 4,
    backgroundColor: '#EBE3D5',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  yellowBox: {
    width: 300,
    height: 50,
    backgroundColor: '#fec459',
    borderRadius: 8,
    marginBottom: 10, 
    justifyContent: 'center',
    paddingLeft: 10,
  },
  grayBox: {
    width: 300,
    height: 170,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginBottom: 20, 
  },
  bodyText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  yellowBoxText: {
    fontSize: 16,
    color: '#000',
  },
});
