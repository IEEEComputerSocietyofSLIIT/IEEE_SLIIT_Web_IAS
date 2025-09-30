import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const TOTAL_PAGES = 80;

const MFlipbook = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/magazine.pdf';
    link.download = 'IAS-magazine-2025.pdf';
    link.click();
  };

  const onFlip = (e) => {
    setCurrentPage(e.data + 1);
  };

  return (
    <div style={styles.container}>
      {/* Flipbook */}
      <div style={styles.flipbookContainer}>
        <button onClick={prevPage} style={styles.navButton('left')}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <HTMLFlipBook
          width={320}
          height={480}
          size="fixed"
          showCover={true}
          mobileScrollSupport={true}
          ref={bookRef}
          onFlip={onFlip}
          usePortrait={true}
          startPage={0}
          drawShadow={false}
          flippingTime={400}
          style={styles.flipbook}
        >
          {Array.from({ length: TOTAL_PAGES }, (_, i) => (
            <div key={i} style={styles.page}>
              <img
                src={`/pages/page${i + 1}.jpg`}
                alt={`Page ${i + 1}`}
                style={styles.image}
              />
            </div>
          ))}
        </HTMLFlipBook>

        <button onClick={nextPage} style={styles.navButton('right')}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <span style={styles.pageCounter}>
          Page {currentPage} / {TOTAL_PAGES}
        </span>
        <button onClick={handleDownload} style={styles.downloadButton}>
          <span className="material-symbols-outlined">download</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to bottom, #19110B, #181513)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  flipbookContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '1rem',
  },
  navButton: (position) => ({
    position: 'absolute',
    top: '50%',
    [position]: '0',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  }),
  flipbook: {
    borderRadius: '8px',
    overflow: 'hidden',
  },
  page: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  toolbar: {
    backgroundColor: '#3c1904ff',
    borderRadius: '8px',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    color: '#fff',
    fontSize: '0.95rem',
  },
  pageCounter: {
    flex: 1,
    textAlign: 'left',
  },
  downloadButton: {
    backgroundColor: '#230f02',
    border: 'none',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default MFlipbook;
