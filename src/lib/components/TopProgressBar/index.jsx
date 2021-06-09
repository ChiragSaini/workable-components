import React,{useState, useEffect} from 'react'
import Progress from './TopProgressBar';
const ProgressContainer = () => {

    const [scrollPosition, setScrollPosition] = useState(0);


    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }



    useEffect(() => {

        const calculateScrollDistance = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = getDocHeight();
            const totalDocScrollLength = docHeight - windowHeight;
            const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
            setScrollPosition(scrollPostion);
        }

        const listenToScrollEvent = () => {
            document.addEventListener("scroll", () => {
                requestAnimationFrame(() => {
                    calculateScrollDistance();
                });
            });
        };
        listenToScrollEvent();
    }, [])
    return <Progress scroll={`${scrollPosition}%`} />
}

export default ProgressContainer;