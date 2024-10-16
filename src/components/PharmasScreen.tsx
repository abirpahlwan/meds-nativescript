import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function PharmasScreen() {
    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold">Pharmaceutical Companies</label>
                <label>List of pharmaceutical companies will be displayed here.</label>
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