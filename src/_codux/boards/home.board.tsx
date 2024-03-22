import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'home',
    Board: () => <div></div>,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#f6f6f6',
        windowWidth: 1400,
        canvasWidth: 1400,
    },
});
