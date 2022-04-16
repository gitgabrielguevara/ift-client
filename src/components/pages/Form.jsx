// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
// import fs from 'fs'


// const PDFDocument = require('pdfkit');
// const doc = new PDFDocument();

// doc.pipe(fs.createWriteStream('/pdfoutput')); // write to PDF
// // doc.pipe(res);                                       // HTTP response

// // add stuff to PDF here using methods described below...
// const Form = () => (
//     <div>
//         <form> 
//             <label>THIS IS FORM 002</label>
//         </form>
//     </div>
// )

// // finalize the PDF and end the stream
// doc.end();

// export default Form




// export default function Form () {
// // Create styles
// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//         section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });

// // Create Document Component
// const MyDocument = () => (
//     <Document>
//         <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//             <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//             <Text>Section #2</Text>
//         </View>
//     </Page>
//     </Document>
// );

// const App = () => (
//     <PDFViewer>
//         <MyDocument />
//     </PDFViewer>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

// }