import {Presentation} from './Presentation'
import {Slide} from './Slide'
import {FirstSlide} from "./slides/first-slide.tsx";
import {SecondSlide} from "./slides/second-slide.tsx";
import {ThirdSlide} from "./slides/third-slide.tsx";

export default function App() {
    return (
        <Presentation>
            <FirstSlide/>
            <SecondSlide/>
            <ThirdSlide/>

            <Slide>
                <h2>The End</h2>
            </Slide>
        </Presentation>
    )
}
