import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from '@/components/ui/tooltip'

import React from 'react'

interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
}

export default function Hint({
    label,
    children,
    side = 'right',
    align = 'center',
    sideOffset = 0,
    alignOffset = 0,
}: HintProps ) {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent
                side={side}
                align={align}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                className='text-white bg-black border-black'
            >
                <p className='font-semibold capitalize'>
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
