import { createBoard } from '@wixc3/react-board';
import { Contentarea3 } from '../../../components/contentarea-3/contentarea-3';

export default createBoard({
    name: 'Contentarea3',
    Board: () => <Contentarea3 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 916,
        canvasHeight: 520,
        windowWidth: 800,
    },
});
