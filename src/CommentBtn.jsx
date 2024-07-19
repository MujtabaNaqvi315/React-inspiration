export default function CommentBtn ({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}