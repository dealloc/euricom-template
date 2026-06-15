import {Slide} from "../Slide.tsx";

export function SecondSlide() {
    return <Slide
        subSlides={[
            <><h2>Sub-slide A</h2><p>Vertical navigation example</p></>,
            <><h2>Sub-slide B</h2><p>Press <kbd>↓</kbd> to go down</p></>,
        ]}
    >
        <h2>Section with vertical slides</h2>
        <p>Press <kbd>↓</kbd> to dive in</p>
    </Slide>;
}