import React from 'react';
import { Page, Text, Image, StyleSheet, Document, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
  
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    qestion:{
fontWeight: "600px"

    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});


const ReactToPdf = () => {


    return (

        <Document >
            <Page style={styles.body}>
                <Text style={styles.title} fixed> Few Question Answer</Text>

                <Text style={styles.qestion}>
                1. Tell us the differences between uncontrolled and controlled components? </Text>
                <Text style={styles.text}>
Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </Text>


                <Text style={styles.qestion}>
                2. How to validate React props using PropTypes? </Text>
                <Text style={styles.text}>
                Ans: Import the PropTypes library in your component using import PropTypes from 'prop-types'; Then Define the expected data types for your props using the propTypes object inside your component. Specify the data type for each prop using PropTypes, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. Must be Assign the propTypes object to your component using the MyComponent.propTypes syntax.
                </Text>

                <Text style={styles.qestion}>
                3. Tell us the difference between nodejs and express js? </Text>
                <Text style={styles.text}>
                Ans: js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                </Text>
                 
                <Text style={styles.qestion}>
                4. What is a custom hook, and why will you create a custom hook?</Text>
                <Text style={styles.text}>
                Ans: Custom hooks allow you to extract and reuse stateful logic from components, reducing duplication and keeping your code more modular and easier to maintain.Custom hooks are created by defining a function that uses the built-in React hooks like useState, useEffect, useContext, etc., and returns some state or behavior that can be used by components.
 

               
                </Text>
                 

               
                
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>




    );
};

export default ReactToPdf;