import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import flipSoundFile from './resouses/flip.mp3';
import ArrowCursor from './extras/ArrowCurser';

const TOTAL_PAGES = 39;

const Flipbook = () => {
    const bookRef = useRef(null);
    const audioRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!bookRef.current) return;
            if (e.key === 'ArrowRight') {
                nextPage();
            }
            if (e.key === 'ArrowLeft') {
                prevPage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const playFlipSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    };

    const nextPage = () => {
        bookRef.current.pageFlip().flipNext();
        playFlipSound();
    };

    const prevPage = () => {
        bookRef.current.pageFlip().flipPrev();
        playFlipSound();
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/magazine.pdf';
        link.download = 'IAS-magazine-2025.pdf';
        link.click();
    };

    const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
    const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

    const onFlip = (e) => {
        setCurrentPage(e.data + 1); // data is 0-indexed
    };

    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #19110B, #181513)',
                minHeight: '100vh',
                color: '#f8fafc',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                boxSizing: 'border-box',
            }}
        >

            {/* Flipbook Container */}
            <div style={bookWrapper}>
                <button onClick={prevPage} style={sideNavButton('left')}>
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>

                <div
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                        transition: 'transform 0.2s ease',
                    }}
                >
                    <HTMLFlipBook
                        width={400}
                        height={570}
                        size="fixed"
                        showCover={true}
                        mobileScrollSupport={true}
                        ref={bookRef}
                        onFlip={onFlip}
                        usePortrait={false}     
                        startPage={0}            
                        drawShadow={true}
                    >
                        {Array.from({ length: TOTAL_PAGES }, (_, i) => (
                            <div key={i} className="page" style={pageStyle}>
                                <img
                                    src={`/pages/page${i + 1}.jpg`}
                                    alt={`Page ${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover',marginTop:"20px" }}
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>

                </div>

                <button onClick={nextPage} style={sideNavButton('right')}>
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>
            <div style={toolbarStyle}>
                <div style={toolbarGroup}>
                    <button onClick={zoomOut} style={iconButton}><span class="material-symbols-outlined">
                        zoom_out
                    </span></button>
                    <button onClick={zoomIn} style={iconButton}><span class="material-symbols-outlined">
                        zoom_in
                    </span></button>
                    <span style={{ margin: '0 10px' }}> Page {currentPage} / {TOTAL_PAGES}</span>
                    <button onClick={handleDownload} style={iconButton}><span class="material-symbols-outlined">
                        download
                    </span></button>

                </div>
            </div>

            <audio ref={audioRef} src={flipSoundFile} preload="auto" />
        </div>
    );
};


const toolbarStyle = {
    backgroundColor: '#3c1904ff',
    width: '30%',
    maxWidth: '960px',
    padding: '10px 10px',
    borderRadius: '8px',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center', // center the buttons horizontally
    alignItems: 'center',
    flexWrap: 'wrap',          // allow wrapping on small screens
    gap: '1rem',               // spacing between items
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex:10,
};

const toolbarGroup = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.75rem',
};


const iconButton = {
    background: '#230f02ff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
};

const bookWrapper = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
};

const sideNavButton = (position) => ({
    position: 'absolute',
    top: '50%',
    [position]: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    outline: 'none',                // ✨ removes the outline
    padding: '0',
});


const pageStyle = {
    backgroundColor: '#f8fafc',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '8px',
};

export default Flipbook;
