import "./TopMiddleComponent.css";

export default function TopMiddleComponent() {
    return (
        <div className="topMiddleParentContainer">
            <h2>Snap photos and share like never before</h2>
            <div className="topMiddleContainer">
                <div className="container_child">
                    <h3>Sed ut perspiciatis</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button className="learn_more_btn">Learn More</button>
                </div>
                <div className="container_child">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    <button className="learn_more_btn">Learn More</button>
                </div>
                <div className="container_child">
                    <h3>Nemo enim ipsam</h3>
                    <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                    <button className="learn_more_btn">Learn More</button>
                </div>
                <div className="container_child">
                    <h3>Tempor incididunt</h3>
                    <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                    <button className="learn_more_btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}
