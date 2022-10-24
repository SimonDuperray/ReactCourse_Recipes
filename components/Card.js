const Card = (props) => {
    return (
        <div className="card">
            <h1 class="title">{props.title}</h1>
            <p class="description">{props.description}</p>
        </div>
    )
};

export default Card;