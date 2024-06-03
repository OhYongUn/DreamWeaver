// components/DesignCanvas.tsx
import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const DesignCanvas: React.FC = () => {
    const canvasRef = useRef<fabric.Canvas | null>(null);

    useEffect(() => {
        const canvasElement = document.getElementById('designCanvas') as HTMLCanvasElement;
        if (canvasElement) {
            const canvas = new fabric.Canvas(canvasElement);
            canvasRef.current = canvas;

            // 배경 설정
            canvas.setBackgroundColor('#fff', canvas.renderAll.bind(canvas));

            // 그리드 그리기 함수
            const drawGrid = () => {
                const gridSize = 50; // 그리드 간격
                const width = canvas.getWidth();
                const height = canvas.getHeight();

                for (let i = 0; i <= width; i += gridSize) {
                    const lineV = new fabric.Line([i, 0, i, height], {
                        stroke: '#ccc',
                        selectable: false,
                        evented: false
                    });
                    canvas.add(lineV);
                }

                for (let j = 0; j <= height; j += gridSize) {
                    const lineH = new fabric.Line([0, j, width, j], {
                        stroke: '#ccc',
                        selectable: false,
                        evented: false
                    });
                    canvas.add(lineH);
                }
            };

            drawGrid();
        }

        return () => {
            if (canvasRef.current) {
                canvasRef.current.dispose();
            }
        };
    }, []);

    return (
        <canvas id="designCanvas" width="1450" height="600" className="border ">
            Your browser does not support the canvas element.
        </canvas>
    );
};

export default DesignCanvas;
