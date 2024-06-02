"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import React from "react";
import Rotate3dIcon from "@/components/ui/Rotate3dIcon";
import Dice2Icon from "@/components/ui/Dice2Icon";

export default function Home() {
  return (
      <main className="flex-1 bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-600">Design Your Dream Home</h1>
              <p className="text-gray-600">
                Unleash your creativity and transform your living space with our powerful 2D and 3D design tools.
              </p>
              {/*<div className="flex gap-4">
                <Button size="lg" onClick={() => console.log('Dice2Icon')}>
                  <Dice2Icon className="w-6 h-6 mr-2"/>
                  2D Design
                </Button>
                <Button size="lg" onClick={() => console.log('Rotate3dIcon')}>
                  <Rotate3dIcon className="w-6 h-6 mr-2"/>
                  3D Design
                </Button>
              </div>*/}
            </div>
            <div className="flex justify-center">
              <Button size="xl" className="px-8 py-6" onClick={() => console.log('Rotate3dIcon')}>
                Start Designing
              </Button>
            </div>
          </div>
        </div>
      </main>

  );
}

