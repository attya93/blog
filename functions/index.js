const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello User Welecome back!");
});

//functio createNotification
const creatNotification = (Notif) => {
    return admin.firestore()
        .collection('notifications')
        .add(Notif)
        .then(doc => console.log('notification added', doc))
};


exports.postCreated = functions.firestore
    .document("posts/{postId}")
    .onCreate(doc => {
        const post = doc.data();
        const notification = {
            title: "Add a New Post",
            auth: `${post.AfName} ${post.AlName}`,
            time: admin.firestore.FieldValue.serverTimestamp() // get time from server directry
        }

        return creatNotification(notification); // add notification to db

    });

exports.userJoined = functions.auth
    .user()
    .onCreate(user => {

        return admin.firestore()
            .collection("users")
            .doc(user.uid)
            .get().then(doc => {
                const newUser = doc.data();//access date that creates
                //mido 3abeet
                const notification = {
                    title: 'User has login',
                    auth: `${newUser.fName} ${newUser.lName}`,
                    time: admin.firestore.FieldValue.serverTimestamp() // get time from server directry
                };
                return creatNotification(notification);
            }); //refrance to uid to the login user
    });
