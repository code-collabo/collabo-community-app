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

    .page__menubar__nav {
        border-right: 1px solid var(--color-neutral-200);
    }

    .page__content-area {

    }

    // --- Assist styles
    .app__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .app__mobile-menu-btns {
        border-radius: 50%;
        padding: 16px;
    }


    // --- LARGE SCREENS
    @media screen and (min-width: 600px) {
        #__next {
            // --- spacing ontop & below page
            padding: 37px 0;
    
            // --- page structure
            display: grid;
            grid-template-columns: 360px 1fr;
            grid-template-rows: 1fr;
    
            // --- set height for structure to work
            height: inherit;
        }

        .app__header {
            justify-content: start;
        }

        .app__mobile-menu-btns {
            display: none;
        }
    }
`;