'use client';
import StickerImage from '../atropos/StickerImage';
import ReactThreeCanvas from '../react-three/ReactThreeCanvas';

export default function ProductMainPreview() {
  return (
    <div>
      <div className="p-24">
        {/* <ReactThreeCanvas /> */}
        <StickerImage />
      </div>
    </div>
  );
}
