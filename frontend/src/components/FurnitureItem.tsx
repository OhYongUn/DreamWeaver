// components/FurnitureItem.tsx
import React from 'react';

interface FurnitureItemProps {
    imgSrc: string;
    label: string;
}

const FurnitureItem: React.FC<FurnitureItemProps> = ({ imgSrc, label }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow">
            <img src={imgSrc} alt={label} width={150} height={150} className="rounded-lg"/>
            <div className="text-center text-sm font-medium mt-2">{label}</div>
        </div>
    );
};

export default FurnitureItem;
