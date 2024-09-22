import React from 'react';

export type SliderProps = {
    percents?: number;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseMove?: (event: React.MouseEvent) => void;
};
