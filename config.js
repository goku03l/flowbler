/*
  Live sharing settings.

  Leave this as null and the editor works fully for everyone, just without live sessions.
  To switch live sharing on, replace null with your Firebase web-app config
  (Firebase console → Project settings → Your apps → Web app → "firebaseConfig").
  These values are meant to be public; your database rules are what protect the data.

  Example:
  window.FLOWCHART_FIREBASE = {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "your-project",
    appId: "1:1234567890:web:abc123"
  };
*/
window.FLOWCHART_FIREBASE = null;
