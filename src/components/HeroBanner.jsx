import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

function HeroBanner() {
  return (
    <div className="relative mt-16 overflow-hidden rounded-b-3xl bg-zinc-900 px-4 py-8">
      <div className="relative z-10">
        <h1 className="mb-2 text-4xl font-bold">
          <span className="text-red-600">THE</span>{" "}
          <span className="text-white">CANGRE</span>{" "}
          <span className="text-yellow-500">BURGER</span>
        </h1>
        <p className="mb-4 text-gray-300">Tenemos las mejores ofertas!</p>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="rounded-full bg-red-600 p-4 text-white">
            <p className="text-center text-sm font-bold">Nuevo</p>
            <p className="text-center text-sm font-bold">&</p>
            <p className="text-center text-sm font-bold">flamante</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Facebook className="h-6 w-6 text-white" />
          <Twitter className="h-6 w-6 text-white" />
          <Instagram className="h-6 w-6 text-white" />
          <Youtube className="h-6 w-6 text-white" />
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src="/background-5.avif"
          alt="Pizza background"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
    </div>
  );
}

export default HeroBanner;

