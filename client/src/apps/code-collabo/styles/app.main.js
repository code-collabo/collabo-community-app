/* CODE-COLLABO SUBCOMMUNITY only */
/* Global styles */

import css from 'styled-jsx/css';

export default css.global`
    body {
        background: var(--color-shade-white);
        font-family: var(--font-family-open-sans);
    }

    #__next {
        // --- spacing ontop & below page
        padding: 37px 0;

        // --- page structure
        display: grid;
        grid-template-columns: 360px 1fr;
        grid-template-rows: 1fr;

        // --- set height
        height: inherit;
    }

    .page__menubar__nav {
        border-right: 1px solid var(--color-neutral-200);
    }

    .page__content-area {

    }
`;