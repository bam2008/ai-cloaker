import { useState } from 'react';

const Home: React.FC = () => {
    const [text, setText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }
    const cloak = () => {
        let chars = text.split('');
        let temp = [];
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== '\u034F') {
                temp.push(chars[i]);
            }
            if (Math.random() < 0.05) {
                temp.push('\u034F');
            }
        }
        setText(temp.join(''));
    };
    const decloak = () => {
        let chars = text.split('');
        let temp = [];
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== '\u034F') {
                temp.push(chars[i]);
            }
        }
        setText(temp.join(''));
    };
    const copy = () => {
        navigator.clipboard.writeText(text);
    };
    return (
        <div className="home">
            <div className="header">
                AI Cloaker
            </div>
            <textarea
                placeholder="Insert text you want to make undetectable here"
                value={text}
                onChange={handleChange}
                spellCheck={false}
            />
            <div className="actions">
                <button onClick={decloak}>Uncloak</button>
                <button onClick={cloak}>Cloak</button>
                <button onClick={copy}>Copy</button>
            </div>
        </div>
    );
};

export default Home;