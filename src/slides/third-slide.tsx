import {Slide} from "../Slide";

export function ThirdSlide() {
    return <Slide>
        <h2>Code example</h2>
        <pre><code data-trim data-noescape>{`
function hello(name: string) {
  return \`Hello, \${name}!\`
}
        `.trim()}</code></pre>
    </Slide>;
}