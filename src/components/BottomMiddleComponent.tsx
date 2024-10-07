import "./BottomMiddleComponent.css";
import Card from "./Card";

export default function BottomMiddleComponent() {
    return (
        <div>
            <div className="BottomMiddleComponentHeaderContainer">
                <h2>Make your photos more stylish</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
            </div>
            <div className="card_container">
                <Card key={1} title="Sed ut perspiciatis"
                    description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
                    imageSrc="https://s3-alpha-sig.figma.com/img/f027/ad3e/88d92a29093d425399c0373d28f59fe7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m4zXKQX9iDVKPe3tHv9pd-Y5fe1MwwYOHjOvRb0b-67FSaMbxRSs7txP7KG1d730tU93ttzDTwS1F2O7CbCU1t6ZLWMA9mLzaFxCF~FsvTV72KUYLLgbosWfmJI-hUyaIaEgKTErBAS~hUqlgDyNPh7HBLIr1jH~YIeHbjuRpqztou6h6Z3ctuIBeUg8DN~r6SjuNrXi08HOqDInM1U6qNOOzFzyaWxxnfJs3vYGOIo7bWF1qlPKG~lo0lAq6cPGIRPeFwirhofx9208TzkHnAwDkZ7FdQTXnH3tv-Osph4wf547LI4mpkop82IHoH8b9UWGVh8uPOEVNoVvrJQ~kw__" />
                <Card key={2} title="Lorem ipsum dolor"
                    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://s3-alpha-sig.figma.com/img/509b/2f7a/af199b94148f7bba6aa717e04de0ed97?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TFavjjR3CMpNiDfTYszHpivrNU7wmznRmUKTHo1xetTCGnq9KCKJs58aK6xaXam~XP7jUjJB3mjXKsz7cS8XVsCD96BWovaRSMYZbY332F6lJBwW-kbYyDrJeRGSj5qBQkGsuAMDtUQKS1o65G7W0kH7YypR1WYVrz10Q0tENAES4kIZ~WaVfSPSFu34iq74YmxCgOYxUI5vyVn8Roc9v0hzOqKx9~AjTMQk~LmvQhHb58zUdc6bBaIdsxlPJkhFj3fT6SNdTDHDGiLwHd1nEC~NF0IXsIYiclUqF0uwt2ma6A7k8WG6l9ZoiISGuioNWz2iKGG127XKm6tbg0lCyA__" />
                <Card key={3} title="Nemo enim ipsam"
                    description="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                    imageSrc="https://s3-alpha-sig.figma.com/img/be68/bf70/ecadfa1e925cc59d5e7bc0f2589560c7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhJaYGJlhA9DYCs8AnJYY80hFpC22cPTmsWVhxuwLTwrIT356Jv4kcog464D~LPfxx5YMnfXJ6uxvMMz2HdfzxPFPxR-qPk5RFw1xaOXC02eyU0cXhhWGPVRSK-YA8cQnuUcfW8RxzbzUwvQOA84gFoD8c0v5vX6yahe4PQ5zSl3DkGV9~hkPLSFWupp8AiXmaOupJCrKMVJuHkYXdS3rA-w4Uzh-HiY8ceGIr5THQaHumoUMkc84gxZx5YuAZUhL8evMGIQxQT03hRswaqjom4i0PeBIG5szBBrHdRL1NjCBzEOF00oJgfjcYXLDmvJI~CWMm8ZAD209MYDSeno-A__"
                />
            </div>
        </div>
    )
}
