import {useEffect, useState} from "react";

function getWindowWidth(){
    return window.innerWidth;
}
function useWindowWidth(){
    const [width,setWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleResize() {
            setWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
}
export default (useWindowWidth);