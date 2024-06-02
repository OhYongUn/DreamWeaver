// components/Button.jsx
import React from 'react';

// Button 컴포넌트 정의
const Button = ({ children, onClick, variant = 'default', size = 'md', className = '' }) => {
    const baseStyle = 'focus:outline-none transition ease-in-out duration-150';
    const sizeStyle = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-6 text-white'  // Start Designing 버튼의 크기와 텍스트 색상 조정
    };
    const variantStyle = {
        default: 'bg-black hover:bg-opacity-90 text-white', // 기본 검은 배경, 하얀 글씨
        outline: 'border border-gray-300 text-black hover:bg-gray-100', // 아웃라인 스타일 조정
        ghost: 'text-gray-500 hover:bg-gray-100' // ghost 스타일 유지
    };

    const finalClassName = `${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]} ${className}`;

    return (
        <button className={finalClassName} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

