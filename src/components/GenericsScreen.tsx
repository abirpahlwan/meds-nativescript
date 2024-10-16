import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function GenericsScreen() {
    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl font-bold">Generics</label>
                <label>List of generic medicines will be displayed here.</label>
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