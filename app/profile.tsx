import { useRouter } from "expo-router";
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { auth, db } from '../config/firebase';
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setUserEmail(user.email || ''); // Provide a default empty string if user.email is null
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View style={styles.boxContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textWelcome}>Selamat Datang {"\n"}Petani Modern!</Text>
          </View>
          <View style={styles.boxLocation}>
            <View style={styles.boxContent}>
              <Image source={require("../assets/images/location-icon.png")} />
              <Text style={styles.locationText}>Jatinangor, Indonesia</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.middleContent}>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileNameText}>{userName}</Text>
          <Text style={styles.profileEmailText}>{userEmail}</Text>
        </View>
      </View>
      <View style={styles.profilePicContainer}>
        {/*<View style={styles.profilePic}>*/}
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavContent}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image
              source={require("../assets/images/home.png")}
              style={styles.homeIcon}
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/profil2.png")}
            style={styles.profileIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#797e2a",
  },
  upperContent: {
    flex: 1,
    backgroundColor: "#797e2a",
    alignItems: 'center',
  },
  boxContainer: {
    width: '70%',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 50,
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  textWelcome: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  boxLocation: {
    width: '100%',
    height: 50,
    backgroundColor: "#fec459",
    borderRadius: 20,
    justifyContent: 'center',
  },
  boxContent: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  middleContent: {
    backgroundColor: "#ffffff",
    width: '100%',
    height: 550,
    zIndex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileTextContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  profileNameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmailText: {
    fontSize: 15,
  },
  profilePicContainer: {
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute',
    transform: [{ translateX: -60 }, { translateY: -60 }],
    top: '30%',
    left: '46%',
  },
  profilePic: {
    backgroundColor: "#0f0f0f",
    width: 170,
    height: 170,
    borderRadius: 120,
  },
  bottomNav: {
    backgroundColor: "#d9d9d9",
    height: 70,
  },
  bottomNavContent: {
    flexDirection: 'row',
    marginTop: 15,
  },
  homeIcon: {
    marginRight: 'auto',
    marginLeft: 150,
  },
  profileIcon: {
    marginLeft: 'auto',
    marginRight: 130,
  },
});