import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  return (
   <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </Link>           
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
   
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          search
        
        </Link>
      </div>
   
     <div className="ml1">|</div>

    </div>
 
  );
};

export default Header;