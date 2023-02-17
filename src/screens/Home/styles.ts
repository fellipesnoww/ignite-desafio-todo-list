import {StyleSheet} from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        width: "100%",
        height: 173,
        backgroundColor: theme.colors.base.gray_700,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContent:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30
    },
    todoContent: {
        flex: 1,
        backgroundColor: theme.colors.base.gray_600,
        paddingRight: 24,
        paddingLeft: 24
    },
    input: {
        height: 54,
        backgroundColor: theme.colors.base.gray_500,
        borderRadius: 5,
        borderColor: theme.colors.base.gray_700,
        padding: 16,
        flex: 1,
        marginRight: 4      
    },
    emptyContent: {
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        borderTopColor: theme.colors.base.gray_300
    },
    image: {
        marginTop: 48
    },
    emptyTextBold: {
        color: theme.colors.base.gray_300,
        fontFamily: theme.fonts.bold,
        fontSize: 14, 
        marginTop: 16,
        textAlign: "center"
    },
    emptyTextRegular: {
        color: theme.colors.base.gray_300,
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        textAlign: "center"

    }
})