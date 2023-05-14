

function Cards(props) {
    return(
        <div className="bg-slate-400 rounded-xl flex justify-between">
            {props.children}
        </div>
    );
}
export default Cards;