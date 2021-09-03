import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
 apiKey: "AIzaSyDd2Ccfn2szIMuPA-L44SfdPO9AIFyZKos",
 authDomain: "gastos-6022d.firebaseapp.com",
 databaseURL: "https://gastos-6022d-default-rtdb.firebaseio.com",
 projectId: "gastos-6022d",
 storageBucket: "gastos-6022d.appspot.com",
 messagingSenderId: "293245268877",
 appId: "1:293245268877:web:241051defbeaf2b70043c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
