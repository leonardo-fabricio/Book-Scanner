import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import React, { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import { darkThemeColors } from "../../../theme";

interface CameraProps {
  setOpenCam: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Camera({ setOpenCam }: CameraProps) {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await captureRef(cameraRef.current, {
          format: "png",
          quality: 1,
        });
        setPhotoUri(photo);
      } catch (error) {
        console.error("Error capturing image: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image source={{ uri: photoUri }} style={styles.preview} />
        </>
      ) : (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Image
                style={styles.image}
                source={require("../../../assets/update.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image
                style={styles.image}
                source={require("../../../assets/camera.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenCam((prev) => !prev)}
            >
              <Image
                style={styles.image}
                source={require("../../../assets/close.png")}
              />
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que o contêiner ocupe 100% da tela
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1, // Permite que a câmera ocupe todo o espaço disponível
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    height: 30,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    flex: 1,
    width: "100%", // A imagem ocupa 100% da largura
    height: "100%", // A imagem ocupa 100% da altura
    resizeMode: "contain", // Ajusta a imagem para caber na tela
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    borderRadius: 60,
    width: 60,
    height: 60,
  },
  image: {
    width: 40,
    height: 40,
  },
});
