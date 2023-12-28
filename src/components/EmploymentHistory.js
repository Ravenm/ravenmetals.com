import EmploymentCard from "./EmploymentCard";
import * as PropTypes from "prop-types";
import {EmployerCard} from "./EmployerCard";

EmployerCard.propTypes = {prop: PropTypes.func};

export function EmploymentHistory() {
    return (
        <ol className="list-none text-left max-w-[1024px] bg-slate-600 m-auto">
            <EmployerCard prop={el =>
                <EmploymentCard
                    logo={el.logo}
                    title={el.title}
                    hasChild={el.hasChild}
                    text={el.text}/>}/>
        </ol>
    );
}