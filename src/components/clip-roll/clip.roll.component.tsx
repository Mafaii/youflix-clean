import ClipImage, { ClipImageSize } from "@/components/clip-image/clip-image.component";
import { ClipData } from "@/utils/types";
import Link from "next/link";

interface ClipRollProps {
    size: ClipImageSize,
    items: ClipData[],
    title: string
}


const ClipRoll = ({ size, items, title, ...rest }: ClipRollProps) => {
    return (
        <div className="my-12">
            <h4 className="text-xl font-bold tracking-wider mb-3 ">{title}</h4>
            <div className="flex gap-1 width-100 overflow-x-auto overflow-y-hidden max-w-full py-4">
                {items && items.map((el, i) => (
                    <Link
                        href={`viewer/${el.id}`}
                        key={el.id}
                        className={`flex-1 transition relative hover:scale-125 hover:z-30  clip-image-container ${i === 0 || i === items.length - 1 ? "origin-bottom-left" : ""}`}>
                        <ClipImage size={size} url={el.imageUrl} alt={el.title} />
                        <div className="
                        absolute inset-0 flex text-white justify-center items-center 
                        p-4
                        bg-gradient-to-b from-transparent to-black 
                        clip-image-container-info">
                            {el.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default ClipRoll;