import Head from "next/head";
import dynamic from "next/dynamic";
const ShowCounter = dynamic(() => import("@components/ShowCounter"), { ssr: false });

export default function ComingSoon() {
    return <>
        <Head>
            <title>Coming Soon</title>
        </Head>
        <ShowCounter />
    </>
}
