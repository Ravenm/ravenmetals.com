function EmploymentCard(props) {
    return (
        <div className="grid grid-cols-[50px_1fr_130px] items-center">
            <span className="w-[10px] h-[10px] p-1 ml-5 border rounded-full border-solid border-black block justify-self-center" />
            <h1>{props.title}</h1>
            <h3 className="col-start-2 text-xs pb-2">{props.start} - {props.end}</h3>
            {props.hasChild && <span className="mt-[-1.5rem] ml-5 border-solid border border-black w-0 col-start-1 justify-self-center h-[100%]"/> }
            <p className="col-start-2 col-end-13 text-pretty break-words">{props.text}</p>
        </div>
    )
}

export default EmploymentCard