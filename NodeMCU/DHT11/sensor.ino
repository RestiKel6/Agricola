#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <DHT.h>

// Replace these with your network credentials
const char* ssid = "";
const char* password = "";

// Replace these with your Firebase project details
#define FIREBASE_HOST "agricola-aa38f-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_AUTH "AIzaSyDFLX87OpekA2XO-F5gX2LRhZ9bkzMOHwk"

// Define the DHT sensor
#define DHT_SENSOR_PIN D2
#define DHT_SENSOR_TYPE DHT11

DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

// Firebase objects
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

void setup() {
  Serial.begin(9600);
  delay(1000);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to Wi-Fi. IP Address: ");
  Serial.println(WiFi.localIP());

  // Configure Firebase
  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);

  // Initialize DHT sensor
  dht_sensor.begin();
}

void loop() {
  // Reading temperature and humidity from DHT sensor
  float humi = dht_sensor.readHumidity();
  float temperature_C = dht_sensor.readTemperature();
  float temperature_F = dht_sensor.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(humi) || isnan(temperature_C) || isnan(temperature_F)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Print values to the serial monitor
  Serial.print("Humidity: ");
  Serial.print(humi);
  Serial.print("%, Temperature: ");
  Serial.print(temperature_C);
  Serial.print("°C ");
  Serial.print(temperature_F);
  Serial.println("°F");

  // Push sensor readings to Firebase
  if (Firebase.setFloat(firebaseData, "/sensor/humidity", humi)) {
    Serial.println("Humidity data sent to Firebase");
  } else {
    Serial.println("Failed to send humidity data to Firebase");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.setFloat(firebaseData, "/sensor/temperature_C", temperature_C)) {
    Serial.println("Temperature (C) data sent to Firebase");
  } else {
    Serial.println("Failed to send temperature (C) data to Firebase");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.setFloat(firebaseData, "/sensor/temperature_F", temperature_F)) {
    Serial.println("Temperature (F) data sent to Firebase");
  } else {
    Serial.println("Failed to send temperature (F) data to Firebase");
    Serial.println(firebaseData.errorReason());
  }

  // Wait a few seconds before the next loop
  delay(2000);
}