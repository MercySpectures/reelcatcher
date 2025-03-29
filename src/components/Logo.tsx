
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-bold text-2xl bg-clip-text text-transparent bg-insta-gradient">
        SaveClip
      </span>
    </Link>
  );
};

export default Logo;
