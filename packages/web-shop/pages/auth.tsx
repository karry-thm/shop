import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Frame from "../util/shop/components/frame/Frame.component";

const AuthPage: NextPage = () => {
    const { data: session } = useSession();
    return <Frame>
        {session ? <>
            Signed in as {session?.user?.name} <br />
            {JSON.stringify(session)} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </> : <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>}
    </Frame>
}

export default AuthPage;