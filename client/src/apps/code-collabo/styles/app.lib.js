/* CODE-COLLABO SUBCOMMUNITY only */
/* Global library-like styles */

import css from 'styled-jsx/css';

export default css.global`

    .lib__margin-auto {
        margin: 0 auto;
    }

    .lib_margin-auto__sides {
        margin-left: auto;
        margin-right: auto;
    }

   // ----------------------
    .lib__flex-space-btw {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .lib__flex-space-btw__sm {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // ----------------------
    .lib__flex-right {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .lib__flex-right__sm {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    // ----------------------
    .lib__flex-start {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .lib__flex-start__sm {
        display: flex;
        justify-content: start;
        align-items: center;
    }



    // --- MEDIUM SCREENS
    @media screen and (min-width: 600px) {
        // ----------------------
        .lib__flex-space-btw__md {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        // ---------------------- 
        .lib__flex-right__md {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__md {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }



    // --- LARGE SCREENS
    @media screen and (min-width: 1000px) {
        // ----------------------
        .lib__flex-space-btw__lg {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        // ----------------------
        .lib__flex-right__lg {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__lg {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    }



    // --- VERY LARGE SCREENS
    @media screen and (min-width: 1440px) {
        // ----------------------
        .lib__flex-space-btw__vlg {
            display: flex;
            justify-content: space-between;
            align-items: center;
        } 

        // ----------------------
        .lib__flex-right__vlg {
            display: flex;
            justify-content: right;
            align-items: center;
        }

        // ----------------------
        .lib__flex-start__vlg {
            display: flex;
            justify-content: start;
            align-items: center;
        }
    
    }
`;