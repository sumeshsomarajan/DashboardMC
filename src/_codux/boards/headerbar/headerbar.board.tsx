import { createBoard } from '@wixc3/react-board';
import { Headerbar } from '../../../components/headerbar/headerbar';

export default createBoard({
    name: 'Headerbar',
    Board: () => <Headerbar />,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#467ace',
        canvasWidth: 1400,
        canvasHeight: 50,
        canvasMargin: { top: 0 },
        windowHeight: 300,
        windowWidth: 1400,
    },
});
