import Link from "next/link";
import { usePathname } from "next/navigation";

const Headers = () => {
    const pathname = usePathname()
    return (
        <>
            <div className="border bg-white flex items-center justify-between gap-5 pl-16 pr-20 py-10 border-solid border-slate-300 border-opacity-40 max-md:flex-wrap max-md:px-5">
                <div className="justify-center text-blue-600 text-3xl font-bold leading-10 tracking-tighter grow shrink basis-auto my-auto">
                    RoadFeeWizard
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <Link href="/" className={`${pathname === "/" ? "text-blue-600" : "text-black"} text-base font-bold leading-8 self-center whitespace-nowrap my-auto`}>
                        Home
                    </Link>
                    <Link href="/tollCalculator" className={`${pathname === "/tollCalculator" ? "text-blue-600" : "text-black"} text-base font-bold leading-8 self-center whitespace-nowrap my-auto`}>
                        Toll Calculator
                    </Link>
                    <Link href="/tollWiki" className={`${pathname === "/tollWiki" ? "text-blue-600" : "text-black"} text-base font-bold leading-8 self-center whitespace-nowrap my-auto`}>
                        TollWiki
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Headers;