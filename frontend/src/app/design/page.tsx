"use client";
// pages/home.tsx 또는 app/page/home.tsx
import React from 'react';
import FurnitureItem from '@/components/FurnitureItem';
import DesignCanvas from '@/components/DesignCanvas';
import Button from "@/components/ui/button";
import Dice2Icon from "@/components/ui/Dice2Icon";
import Rotate3dIcon from "@/components/ui/Rotate3dIcon";

const Home: React.FC = () => {
    const items = [
        { imgSrc: "/placeholder.svg", label: "Sofa" },
        { imgSrc: "/placeholder.svg", label: "Chair" },
        { imgSrc: "/placeholder.svg", label: "Bed" },
        // 추가 아이템
    ];

    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 p-4 md:p-6">
            <div className="bg-white shadow-sm rounded-lg p-4 md:p-6">
                <h2 className="text-lg font-bold mb-4">Furniture & Decor</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map(item => <FurnitureItem key={item.label} imgSrc={item.imgSrc} label={item.label} />)}
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 relative">
                <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                    <Button variant="outline" className="hidden md:inline-flex" onClick={() => console.log('2D')}>
                        <Dice2Icon className="w-5 h-5 mr-2"/>
                        2D
                    </Button>
                    <Button variant="outline" className="hidden md:inline-flex" onClick={() => console.log('3D')}>
                        <Rotate3dIcon className="w-5 h-5 mr-2"/>
                        3D
                    </Button>
                </div>
                <DesignCanvas />
            </div>
        </div>
    );
};

export default Home;
