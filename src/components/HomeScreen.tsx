import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigation.navigate("SearchResults", { query: searchQuery.trim() });
        }
    };

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <searchBar
                    hint="Search medicines..."
                    text={searchQuery}
                    onTextChange={(args) => setSearchQuery(args.object.text)}
                    onSubmit={handleSearch}
                    style={styles.searchBar}
                />
                <button text="Search" onTap={handleSearch} style={styles.button} />
                <button text="Brands" onTap={() => navigation.navigate("Brands")} style={styles.button} />
                <button text="Generics" onTap={() => navigation.navigate("Generics")} style={styles.button} />
                <button text="Pharmas" onTap={() => navigation.navigate("Pharmas")} style={styles.button} />
                <button text="Drug Classes" onTap={() => navigation.navigate("DrugClasses")} style={styles.button} />
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
    searchBar: {
        marginBottom: 10,
    },
    button: {
        fontSize: 18,
        color: "#ffffff",
        backgroundColor: "#4CAF50",
        padding: 10,
        margin: 5,
        textTransform: "uppercase",
    },
});