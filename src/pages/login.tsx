import Logo from "@/components/logo/logo.svg.component";
import { magic } from "@/lib/magic-client";
import { checkInputForEmail } from "@/utils/input.validator";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";


//image used: https://unsplash.com/photos/a5RK_uk5Ej0

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const router = useRouter();

    const loginHandler = async () => {
        setLoading(true);
        if (email === '') {
            setLoading(false);
        }
        //check if it is email
        if (!checkInputForEmail(email)) {
            //set msg
            setMessage("Wrong input, it is not Email. Please provide correct email");
            setLoading(false);
            return;
        }
        if (!magic) {
            setMessage("Something went wrong. Please Try Again!");
            return
        };
        //if code is here meaning we can assume email provided is fine and magic is also fine so reset msg
        setMessage("");
        try {
            const didToken = await magic.auth.loginWithMagicLink({
                email
            });
            const response = await fetch('/api/login', {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${didToken}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                const meta = await response.json();
                router.push('/');
                setLoading(true);
            } else {
                setMessage("Something went wrong. Please Try Again!");
                setLoading(false);
            }
        } catch (err) {
            setMessage("Something went wrong. Please Try Again!");
            setLoading(false);
        }

    }

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    }

    return <div className="flex justify-center items-center h-screen p-2 md:p-4 fixed inset-0">
        <div className="absolute index-10 top-4 left-4"><Logo /></div>
        <Image fill={true}
            alt="bg image"
            src={"https://images.unsplash.com/photo-1588473158757-afdb399558d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"}
            className="fixed inset-0"
        />
        <div style={{ background: "rgba(0,0,0,0.5)" }}
            className=" relative w-full h-full md:w-3/5 md:h-3/5 text-center flex flex-col justify-center items-strech gap-6 p-4">
            <h1 className="text-white font-bold text-xl tracking-wider uppercase">Sign In</h1>
            <div>
                <input className="p-3 border-red-800 border-2 text-black w-full" name="email" type="email" onChange={emailChangeHandler} />
                <span className="text-red-500 text-sm py-2">{message}</span>
            </div>
            <button className={loading ? "p-3 bg-red-800 text-gray-300" : "p-3 bg-red-600 text-gray-100"} onClick={loginHandler} disabled={loading}>{loading ? "Loading..." : "Sign In"}</button>
        </div>
    </div>
}

export default Login;