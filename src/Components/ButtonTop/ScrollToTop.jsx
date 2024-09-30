import { useState } from "react";

export const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    // Show button when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        }
    }
    );
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        // Reemplazar la URL sin recargar la página
        window.history.replaceState(null, null, '/');
    }
    return (
        <>
            {showTopBtn && (
                <button onClick={scrollToTop}
                    id="scroll-to-top"
                    className="fixed bottom-4 right-4 "
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-arrow-up size-10 sm:size-14 text-white 2xl:text-titles hover:text-violet-800 duration-200">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12l-4 -4l-4 4" /><path d="M12 16v-8" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>

                </button>
            )}

        </>
    )
}
