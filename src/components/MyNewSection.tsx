export default function MyNewSection({ content, text }) {
    return (
        <div>
            <h1 data-sb-field-path=".content">{content}</h1>
            <p data-sb-field-path=".text">{text}</p>
        </div>
    )
}