import "./MIddleComponent.css";

export default function MiddleComponent() {
    return (
        <div>
            <div className="MiddleUpperContainer">
                <h2>Have you ever posted any photo on social media?</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
            </div>
            <div className="middleComponentGrid">
                <div>
                    <div>
                        <h4>Sed ut perspiciatis</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h4>Nemo enim ipsam</h4>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                </div>
                <div className="middleComponentImageContainer">
                    {/* Image div */}
                    <img src={"https://s3-alpha-sig.figma.com/img/a176/1b0f/cca829be2ec39306f4a3d85d585418f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YOAew77ue~AyDd0vtTO5JbBLUfxEkfg45ld43fHXTsCMTDrnGR2-am57keD11iFl1FWX6~Z~R-M-~DF~R0zKhCfHMDBfA-ekUXFgFJJyayWiN8fzxLgBOa77pTCx~eYpaJqsRRFbp6QrMJsX29Bdh2Q8zC81ph4RsPEvZCFzVZ7LvFoIw7u~p0C6HXOukrER9PcIrGwAIUg7DpRAHhAYq~TEkn7WR3jQNz6ol~onF8JiAajDmXGd6bJEqNwqAULKliN9L~TpCujJgH3deFFESydHh0x1dca2Co89bRgetMdr72t2VG-V9hrK9Jq9~FdKofiexyYYmM7HjHKjyC~dLQ__"}
                        alt="middle_image" className="middle_image" />
                </div>
            </div>
        </div>
    )
}
