import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App 2',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1400,
        windowHeight: 768,
        canvasWidth: 1400,
        canvasHeight: 900,
        canvasBackgroundColor: '#e4eef3',
        canvasMargin: {
            top: 0,
        },
        windowBackgroundColor: '#e8f8f8',
    },
});
