import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Image
          source={require("../assets/images/arrow.png")}
          style={styles.back}
        />
      </TouchableOpacity>
      
      <Image
        source={require("../assets/images/logoAgricola.png")}
        style={styles.logo}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subheading}>Login to your existing account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Masukkan Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}
        >
          <Image
            source={require("../assets/images/eyePassword.png")}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'}}>
        <Text style={styles.signUpText}>
          Belum Punya Akun?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#fb6b2b",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fb6b2b",
    borderRadius: 25,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  toggleButton: {
    padding: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: "#fb6b2b",
  },
  back: {
    backgroundColor: "red",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#fb6b2b",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 16,
    color: "#6b6b6b",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpLink: {
    color: "#797E2A",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
