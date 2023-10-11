import { removeTokenCookie } from "@/lib/cookie";
import { magic } from "@/lib/magic-client";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";

const UserDropDown = () => {
    const [dropdownVisible, setDropDownVisible] = useState(false);
    const [email, setEmail] = useState("defaut@mail.com")
    const router = useRouter();
    const toggleDropDown: MouseEventHandler<HTMLAnchorElement> = (event: MouseEvent) => {
        event.preventDefault();
        setDropDownVisible(current => !current);
    }

    useEffect(() => {
        async function getUserName() {
            if (!magic) return;
            const metadata = await magic.user.getMetadata();
            if (metadata.email)
                setEmail(metadata.email);
        }
        getUserName();
    });

    const signout = async () => {
        //remove cookie that is assuming we are logged 
        const result = await fetch("/api/logout");
        if (result.status === 200)
            router.push('/login');
    }
    return <div className="ms-auto text-white text-end">
        <a href="#" onClick={toggleDropDown} className="hidden sm:inline">{email}</a>
        <a href="#" onClick={toggleDropDown} className="inline sm:hidden">U</a>
        {dropdownVisible && <div className="p-1 bg-white text-gray-600 cursor-pointer text-center" onClick={signout}>Sing out</div>}
    </div>
}
export default UserDropDown;