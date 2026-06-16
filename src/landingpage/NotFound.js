import react from "react";
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mb-4 mt-5">ERROR! path not found</h1>
      <Link to="/">
        <button className="btn btn-primary ">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
