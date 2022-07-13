// import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { serverTimestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { projectStorage, projectFirestore } from "../firebase/config";
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storegeRef = ref(projectStorage, file.name);

        const uploadTask = uploadBytesResumable(storegeRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                console.log(`error` + error);
                setError(error);
            },
            () =>
                getDownloadURL(ref(projectStorage, file.name))
                    .then((url) => {
                        setUrl(url);
                        const createdAt= serverTimestamp()

                        async function addData(){
                            await addDoc(collection(projectFirestore, "images"), {url,createdAt})
                            // const docRef = await addDoc(collection(projectFirestore, "images"), {url,createdAt})
                            .catch((err)=>{
                                console.log(`error is ${err}`)
                            })
                        };
                        addData();

                    })
                    .catch((error) => {
                        console.log(`error is ${error}`);
                    })
        );
    }, [file]);

    return { progress, url, error };
};

export default useStorage;
