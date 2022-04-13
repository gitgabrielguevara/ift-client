import { Link } from 'react-router-dom';

export default function Document({ document }) {
    const documentLinks = document.map((document, i) => {
    return (
        <Link
            key={`link${i}`}
            to={`/document/${document._id}`}
            style={{ textDecoration: 'none' }}
        >
        <div className="document-div" key={`document-link${i}`}>
            <p style={{padding: 0}}key={`document-name-${i}`} className="document-text">
                {document.name}
            </p>
            <div key={`form-number-${i}`} className="document-text-small">
                {document.decks.length < 2 ? <p style={{padding: 0, margin: 0}}> {document.decks.length} deck</p> : <p style={{padding: 0, margin:0}}> {document.decks.length} decks</p>}
            </div>
        </div>
        </Link>
    );
});

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>View all Forms:</h1>
            <div className="document-container">{documentLinks}</div>
        </div>
    );
}