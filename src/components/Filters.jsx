import './Filters.css';

const Filters = ({lista, setLista, fontColor, setFilter}) => {
    const clear = () => {
    const remainingTodos = lista.filter(todo => !todo.complete);
    setLista(remainingTodos);
    }

    const remaining = () => {
        const count = lista.filter(todo => !todo.complete);
        return (count.length)
    }

    return (
        <div className={`filters ${fontColor}`}>
            <div className="remaing">
                <p>{remaining()} left</p>
                <button className={`${fontColor}`} onClick={() => clear()}>Clear Completed</button>
            </div>
            <div className="buttonsFilters">
                <button className={`${fontColor}`} onClick={() => setFilter("all")}>All</button>
                <button className={`${fontColor}`} onClick={() => setFilter("Active")}>Active</button>
                <button className={`${fontColor}`} onClick={() => setFilter("Completed")}>Completed</button>
            </div>
        </div>

    )     
}
export default Filters
