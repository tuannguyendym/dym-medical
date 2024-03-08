"use client";
import ReactImageGallery from "react-image-gallery";

type Props = {
  images: {
    original: string;
    thumbnail: string;
  }[];
};

export default function GalleryComponent({ images }: Props) {
  return (
    <>
      <ReactImageGallery
        items={images}
        lazyLoad={true}
        showThumbnails={false}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay={true}
      />
    </>
  );
}
