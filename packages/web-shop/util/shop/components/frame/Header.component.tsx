import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import LOGO from "../../../../public/THM_Logo_184x75.png";

const SessionButton = (props: { session: Session | null }) => {
    if (props.session) {
        return <button onClick={() => signOut()}>Logout</button>
    }
    return <button onClick={() => signIn()}>Login</button>
}

export default function Header() {
    const { data: session } = useSession();
    return <nav id="nav">
        <div id="logo"><Image height={40} alt="Logo" src={LOGO} /></div>
        <div id="icons">
            <SessionButton session={session} />
        </div>
    </nav>
}