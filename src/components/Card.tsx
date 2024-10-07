import "./Card.css";

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export default function Card(props: CardProps) {
    return (
        <div>
            <div className="img_container">
                <img src={props.imageSrc} alt="" />
            </div>
            <div className="card_bottom">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
