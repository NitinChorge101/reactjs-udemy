
import Button from './button';
import PlusIcon from './plusIcon';

export default function Wrapper() {

    return (
        <div id="app">
            <section>
                <h2>Filled Button (Default)</h2>
                <p>
                    <Button mode="filled" >Default</Button>
                </p>
                <p>
                    <Button mode="filled">Filled (Default)</Button>
                </p>
            </section>
            <section>
                <h2>Button with Outline</h2>
                <p>
                    <Button mode="outline">Outline</Button>
                </p>
            </section>
            <section>
                <h2>Text-only Button</h2>
                <p>
                    <Button mode="text">Text</Button>
                </p>
            </section>
            <section>
                <h2>Button with Icon</h2>
                <p>
                    <Button icon={PlusIcon} mode="filled">Home</Button>
                </p>
                <p>
                    <Button icon={PlusIcon} mode="text">
                        Add
                    </Button>
                </p>
            </section>
            <section>
                <h2>Buttons Should Support Any Props</h2>
                <p>
                    <Button mode="filled" disabled>
                        Disabled
                    </Button>
                </p>
                <p>
                    <Button onClick={() => alert('Clicked!')}>Click me</Button>
                </p>
            </section>
        </div>
    )

}