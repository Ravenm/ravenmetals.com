import {EmployerCard} from "./EmployerCard";
import employmentHistory from "../data/employment-history.json";
import {useEffect, useRef, useState} from "react";

export function EmploymentHistory() {
    const employmentWrapper = useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState();

    useEffect(() => {
        setWrapperHeight((employmentWrapper.current.offsetHeight * 1.5));
    }, []);

    function getWrapperStyle() {
        return wrapperHeight !== 0? {height: wrapperHeight} : {}
    }

    return (
        <div className={"text-left max-w-xl"} style={getWrapperStyle()} ref={employmentWrapper}>
            {employmentHistory.data.map((employer,index) =>
                <EmployerCard employer={employer} index={index} key={`employer-${index}`}/>
            )}
        </div>
    );
}