import Atropos from 'atropos/react';
import 'atropos/css';

export default function StickerImage() {
  return (
    <div className="border">
      <Atropos className="relative">
        <img
          src="/lightning.png"
          className="bg-transparent"
          data-atropos-offset="-10"
        />
      </Atropos>
    </div>
  );
}
