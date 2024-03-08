/* CODE-COLLABO SUBCOMMUNITY only */
/* Global styles */

import css from 'styled-jsx/css';

export default css.global`

    // --- Description: Styles that affect all Code Collabo sub-community pages
    
    // --- SMALL SCREENS
    body {
        background: var(--color-shade-white);
        font-family: var(--font-family-open-sans);
    }

    #__next {
        // --- spacing ontop & below page
        padding: 30px 0;
    }

    .app__menubar__nav {

    }

    app__page-title {

    }

    .app__content-area {
        margin: 0 auto;
        width: calc(100% - 30px);
    }

    .app__header {
        padding: 13px 0;
    }

    .app__mobile-menu-btns {
        border-radius: 50%;
        padding: 16px;
    }


    // --- LARGE SCREENS
    @media screen and (min-width: 600px) {
        #__next {
            // --- spacing ontop & below page
            padding: 50px 0 42px 0;
    
            // --- page structure
            display: grid;
            grid-template-columns: 360px 1fr;
            grid-template-rows: 1fr;
    
            // --- set height for structure to work
            height: inherit;
        }

        .app__header {

        }

        .app__mobile-menu-btns {
            display: none;
        }

        .app__menubar__nav {
            border-right: 1px solid var(--color-neutral-200);
        }

        .app__content-area {
            width: calc(100% - 100px);
        }
    }


    // --- VERY LARGE SCREENS
    @media screen and (min-width: 1440px) {
        .app__content-area {
            width: 978px;
        }
    }
`;