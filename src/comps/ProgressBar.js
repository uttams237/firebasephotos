import React from "react";
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(`progress is :` + progress + ` and url is :` + url);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        // <div>ProgressBar</div>
        <motion.div className="progress-bar"
            initial={{width:0}}
            animate={{width:progress+"%"}}
        ></motion.div>
    );
};

export default ProgressBar;
