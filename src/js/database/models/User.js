import '../../utilities/firebaseConfig'


export function getAll() {
    var all_taxpayers = local_taxpayers.allDocs({include_docs: true, descending: true});
    return all_taxpayers;

}

export function addNew($user) {

    db.collection("users").add({
        first: $user.fname,
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })


}

