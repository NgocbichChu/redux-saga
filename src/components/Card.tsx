const Card = ({ id, title, body }: { id: number, title: string, body: string }) => {
    return (
        <div>
            <div className="card mt-3" key={id}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card