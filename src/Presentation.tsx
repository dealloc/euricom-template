import type {ReactNode} from 'react'
import {Deck} from '@revealjs/react'
import 'reveal.js/reveal.css'
import './theme/euricom.css'
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

interface PresentationProps {
    children: ReactNode
}

export function Presentation({children}: PresentationProps) {
    return (
        <>
            <Deck
                plugins={[RevealHighlight]}
                config={{
                    hash: true,
                    transition: 'slide',
                    controls: true,
                    progress: true,
                    center: true,
                    slideNumber: 'c/t',
                }}
            >
                {children}
            </Deck>
            <img
                src="/Euricom-Wordmark-TT-GreenWhite.png"
                alt="Euricom"
                style={{
                    position: 'fixed',
                    bottom: 16,
                    left: 24,
                    height: 70,
                    opacity: 0.9,
                    zIndex: 100,
                    pointerEvents: 'none',
                }}
            />
        </>
    )
}
