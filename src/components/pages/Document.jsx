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
            </div>
        </Link>
    );
});

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>View all Forms:</h1>
            <div className="document-container">{documentLinks}</div>
            <div> 
                <form>
                    here is form 001
                </form>
            </div>
        </div>

    );
}