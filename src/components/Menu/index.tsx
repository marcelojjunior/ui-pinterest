import { forwardRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
    return (
        <BottomSheet
            ref={ref}
            index={0}
            snapPoints={[0.01, 240]}
            backgroundStyle={styles.container}
            handleComponent={() => null}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <FontAwesome name="close" color={theme.colors.white} size={24} onPress={onClose} />
                    <Text style={styles.title}>Comece a criar agora</Text>
                </View>

                <View style={styles.options}>
                    <MenuButton title="Pin" icon="home" />
                    <MenuButton title="Colagem" icon="paste" />
                    <MenuButton title="Pasta" icon="folder" />
                </View>
            </View>
        </BottomSheet>
    )
})