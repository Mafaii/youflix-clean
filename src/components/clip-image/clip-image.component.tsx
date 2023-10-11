import Image from "next/image";
import { useState } from "react";


interface ClipImageProps {
    alt?: string,
    size?: ClipImageSize,
    url?: string

}
export enum ClipImageSize {
    huge = "clip-huge",
    large = "clip-large",
    medium = "clip-medium",
    small = "clip-small",
}

const ClipImage = ({ alt, size, url }: ClipImageProps) => {
    const [imgUrl, setImgUrl] = useState(url || "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80");

    const errorHandler = () => {
        setImgUrl((size === ClipImageSize.huge) ? "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80z" : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80"); //better lets move this to the static image if error occured but w/e for now
    }

    return <div className={`${size || ClipImageSize.medium} z-0 object-cover relative`}>
        <Image
            className="clip-image object-cover position-center"
            fill={true}
            onError={errorHandler}
            src={imgUrl}
            alt={alt || "cinema with red chairs"}
        />
    </div>
}

export default ClipImage;