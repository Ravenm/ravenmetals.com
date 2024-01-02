import '../styles/firefly.sass'
export function FireFlies() {
    return (
        <>
            {[...Array(15)].map(()=> {
                return (
                    <div className="firefly"></div>
                )
            })}
        </>
    )
}