import { useState } from "react";

import ClipRoll from "@/components/clip-roll/clip.roll.component";

import { ClipImageSize } from "../clip-image/clip-image.component";
import { VideoLib } from "@/pages";



const MainContent = ({ videoLib }: { videoLib: VideoLib }) => {
    const { featured, travel, disney, popular,watched } = videoLib;
    return (
        <section className="p-8  gap-5">
            {featured && <ClipRoll items={featured} title="Featured" size={ClipImageSize.large} />}
            {watched && <ClipRoll items={watched} title="Watch Again" size={ClipImageSize.small} />}
            {travel && <ClipRoll items={travel} title="Travel" size={ClipImageSize.small} />}
            {disney && <ClipRoll items={disney} title="Disney" size={ClipImageSize.medium} />}
            {popular && <ClipRoll items={popular} title="Popular" size={ClipImageSize.small} />}
        </section>
    );
}

export default MainContent;