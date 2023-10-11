import { ClipData } from "@/utils/types";
import ClipImage, { ClipImageSize } from "../clip-image/clip-image.component";
import Link from "next/link";

const Banner = ({ featured }: { featured?: ClipData[] }) => {
    return (
        <Link className="relative block" href={`viewer/${featured && featured[0].id || "none"}`}>
            <ClipImage alt="test" size={ClipImageSize.huge} url={featured && featured[0] && featured[0].imageUrl} />
            <div className="text-white z-10 absolute inset-0  p-12 flex items-center justify-start">
                <div className="max-w-md bg-gradient-to-r from-black to-transparent flex flex-col gap-2 items-start justify-center p-8">
                    <h2 className="text-3xl flex items-baseline">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.3231 3.70673L32.5018 1.5H30H25.5604H24.6314L24.2175 2.33175L18 14.8267L11.7825 2.33175L11.3686 1.5H10.4396H6H3.49299L4.67822 3.70915L14.522 22.057V33V34.5H16.022H20.022H21.522V33V22.0556L31.3231 3.70673Z" fill="black" stroke="#F12121" strokeWidth="3" />
                        </svg>
                        Series
                    </h2>
                    <h3>{featured && featured[0].title || "Series Title"}</h3>
                    <p>{featured && featured[0].description || "Exercitation magna sint reprehenderit laboris est reprehenderit aute tempor aliquip fugiat."}</p>
                </div>

            </div>
        </Link>
    );
}
export default Banner;