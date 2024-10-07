import "./HeaderImageComponent.css";

export default function HeaderImageComponent() {
    return (
        <div className="container">
            <img src="https://s3-alpha-sig.figma.com/img/9a0f/235b/083f8069df6b70482aa1c27088a8f0c5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRl05RlNAqtbF7wQZsnQfzzmYH0wZn1gU~qAfSzq~YNsQ6fpN4LG-Qpv0kQqaBeKlTMg~SzMeSLJeXYDimRhVWeOR-xHZBk9Utp4b~Op5ZtQm3x5xRk9tP-wwqhlDvFF4y3Azq~ybdOmGFyY~ZJpL1V8hq0OcwrXlftKr5ydI8GlBzqQsHAkxY~l2pDowE7eDXaaqdc6tSeg54FJWF9FDBGnEpbVCUEiue3jKsvVN3Nzcj2qXQBjKUD6iG3Px3ylEI5YNgcqnWM1WVkpHaFlK3I9i45hQo22tD~W7kpZJhFmBJsPoSEBdmrnh~suIvt1Mcclp2sg8h8czFhjU8-YSQ__"
                alt="header_image" className="header_image" />
            <div className="headingContainer">
                <h1>The largest community of photo enthusiasts</h1>
                <button className="join_btn">Join Now</button>
            </div>
        </div>
    )
}
