import { useState } from 'react';
import { useEffect } from 'react';

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {showButton && (
        <div className="scrollToTop">
          <button className="ButtonScrollToTop" onClick={handleScrollToTop}>
            retour
          </button>
        </div>
      )}
    </>
  );
};
export default ScrollTop;
