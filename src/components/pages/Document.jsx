import { Link } from 'react-router-dom';
import {useState} from 'react'

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
    

    const onSubmit = e => {
        e.preventDefault()
    }
    const [text, setText] = useState ()
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>View all Forms:</h1>
            <div className="container">{documentLinks}</div>
            <div> 
                <form onSubmit={onSubmit}>
                    <div> 
                        <label htmlFor="text">This is form 001</label>
                        <input 
                        type="text" 
                        name='text' 
                        id='text'
                        value={text} onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div>
                        <button 
                        className='btn' type='submit'>
                            Add your information 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}