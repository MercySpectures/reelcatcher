
import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-8 w-8 bg-insta-gradient rounded-md flex items-center justify-center">
        <Download className="h-5 w-5 text-white" />
      </div>
      <span className="font-bold text-2xl bg-clip-text text-transparent bg-insta-gradient">
        SaveClip
      </span>
    </Link>
  );
};

export default Logo;
