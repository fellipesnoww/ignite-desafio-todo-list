import {StyleSheet} from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 18,
        width: 52,
        height: 52,
        backgroundColor: theme.colors.product.blue_dark,
        borderRadius: 6
    }
})