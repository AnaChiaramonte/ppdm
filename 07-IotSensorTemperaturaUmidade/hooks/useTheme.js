import { useColorScheme } from "react-native"
import { darkTheme } from "../themes/Dark"
import { lightTheme } from "../themes/Light"

export const useTheme = () => {
    const scheme = useColorScheme();
    return scheme === "dark" ? darkTheme : lightTheme;
}

