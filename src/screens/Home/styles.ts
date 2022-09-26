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
    borderRadius: 6,
    marginTop: 40,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    paddingVertical: 16,
    paddingLeft: 16,
    fontSize: 16,
    color: "#f2f2f2",
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

  emptyContainer: {
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#808080",
    width: "100%",
    marginTop: 20,
  },
  clipboard: {
    width: 56,
    height: 56,
    marginTop: 48,
  },
  mainTextEmpty: {
    marginTop: 16,
    color: "#808080",
    fontWeight: "bold",
  },
  subTextEmpty: {
    color: "#808080",
  },
});
