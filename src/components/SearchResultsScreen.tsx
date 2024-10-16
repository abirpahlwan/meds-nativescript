import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { MainStackParamList } from "../NavigationParamList";

type SearchResultsScreenProps = {
    route: RouteProp<MainStackParamList, "SearchResults">,
};

export function SearchResultsScreen({ route }: SearchResultsScreenProps) {
    const { query } = route.params;

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold">Search Results</label>
                <label>Showing results for: {query}</label>
                <label>Search results will be displayed here.</label>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
});