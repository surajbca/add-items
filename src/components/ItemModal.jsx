import React from "react";
import { Dialog } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ItemModal({ item, onClose }) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <Dialog.Panel className="bg-white max-w-2xl w-full rounded p-6 overflow-y-auto max-h-[90vh]">
        <Dialog.Title className="text-xl font-bold mb-2">
          {item.name}
        </Dialog.Title>
        <p className="mb-2 text-sm text-gray-500">Type: {item.type}</p>
        <p className="mb-4 text-gray-700">{item.description}</p>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          className="mb-4"
        >
          <div>
            <img src={item.cover} alt="Cover" />
          </div>
          {item.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Additional Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <button
          onClick={() => alert("Enquiry sent to admin@example.com")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enquire
        </button>
        <button
          onClick={onClose}
          className="ml-4 text-sm text-gray-600 hover:underline"
        >
          Close
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
