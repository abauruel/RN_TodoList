import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  headerContent: {
    backgroundColor: "#0d0d0d",
    height: 173,
    width: "100%",
  },
  containerImage: {
    alignItems: "center",
  },
  image: {
    marginTop: 70,
  },
  containerInput: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 40,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    paddingVertical: 14,
    paddingLeft: 16,
    fontSize: 16,
    color: "#f2f2f2",
    borderRadius: 6,
    height: 54,
  },
  addButton: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    marginLeft: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  todoContent: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#1A1A1A",
  },
  headerTags: {
    marginTop: 32,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerTag: {
    flexDirection: "row",
    alignItems: "center",
  },
  TagText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  TagTextFinished: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  tag: {
    padding: 2,
    backgroundColor: "#333333",
    marginLeft: 8,
    borderRadius: 100,
  },
  numberTag: {
    color: "#fff",
  },
});
