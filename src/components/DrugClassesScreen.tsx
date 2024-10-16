import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function DrugClassesScreen() {
    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold">Drug Classes</label>
                <label>List of drug classes will be displayed here.</label>
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