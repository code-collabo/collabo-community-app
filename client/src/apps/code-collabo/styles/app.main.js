/* CODE-COLLABO SUBCOMMUNITY only */
/* Global styles */

import css from 'styled-jsx/css';

export default css.global`
    body {
        background: var(--color-shade-white);
        font-family: var(--font-family-open-sans);
    }

    .page-title {
        font: var(--type-bold-h3) var(--font-family-open-sans);
        margin-bottom: 13px;
    }

    .page-title-mobile {
        font: var(--type-bold-h6) var(--font-family-open-sans);
    }

    .dummy-module-text {
        font: var(--type-regular-body-text1);
        padding: var(--spacing-sm) 0px;
    }

    .page-structure {
        margin: 0;
        display: grid;
        grid-template-columns: 20% 80%;
        height: 100vh;
    }

    .page-structure-mobile {
        margin: 0;
        padding: 20px;
    }

    .sidebar {
        color: #fff;
        padding: 20px;
        border-right: 1px solid #ccc; 
        box-sizing: border-box; /* Include border in the width calculation */
        overflow-y: auto; 
    }
      
    .content {
        padding: 50px;
        overflow-y: hidden;
        box-sizing: border-box;
    }

    .icon-outline {
        width: 56px;
        height: 56px;
        border-radius: 35px;
        box-shadow: 5px 5px 15px 0px rgba(2, 117, 216, 0.10);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;