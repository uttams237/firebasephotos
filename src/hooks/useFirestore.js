import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);
    // console.log(docs)

    useEffect(() => {
        const q= query(collection(projectFirestore,collectionName),orderBy("createdAt","desc"))

        const unsub= onSnapshot(q,(snap)=>{
            let documents= []
            snap.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            });
            setDocs(documents)
        })

        return ()=>unsub();
    }, [collectionName]);

    return { docs };
};

export default useFirestore;


// import { collection, query, where, onSnapshot } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });