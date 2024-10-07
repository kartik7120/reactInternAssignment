import { FormEvent, useState } from "react";
import "./BottomContainer.css";

export default function BottomContainer() {

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Form validation

        const nameRegex = /^[A-Za-z0-9]+$/;
        if (!nameRegex.test(firstname)) {
            alert("First name should contain only alphabets or digits")
            return
        }

        if (!nameRegex.test(lastname)) {
            alert("Last name should contain only alphabets or digits")
            return
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Enter a valid email")
            return
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Enter a valid phone number")
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password should contain at least one uppercase, one lowercase, one number and one special character")
            return
        }

        console.log("Form submitted")

        console.log(`First name: ${firstname}`)
        console.log(`Last name: ${lastname}`)
        console.log(`Email: ${email}`)
        console.log(`Phone number: ${phone}`)
        console.log(`Password: ${password}`)
    }

    return (
        <div className="BottomContainer">
            <div className="BottomContainerHeader">
                <h2>Ready to take a free trial?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="form_container">
                {/* Form */}
                <h3>Sign up for a free account</h3>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="flex_container">
                        <input type="text" required={true} name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Enter your first name" />
                        <input type="text" required={true} name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Enter your last name" />
                    </div>
                    <div className="flex_container">
                        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        <input type="number" value={phone} name="phone_number" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
                    </div>
                    <input type="password" minLength={8} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    <button className="register" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}
