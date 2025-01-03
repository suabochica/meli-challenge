import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";

export default function Home() {
  const images = [
    "https://http2.mlstatic.com/D_NQ_904629-MLA81751729751_012025-OO.webp",
    "https://http2.mlstatic.com/D_NQ_862385-MLA81700438731_122024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_824737-MLA81751757459_012025-OO.webp",
    "https://http2.mlstatic.com/D_NQ_995753-MLA81751758697_012025-OO.webp",
  ];

  return (
    <div>
      <Carousel images={images} />
      <Gallery />
    </div>
  );
}
