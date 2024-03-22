import { createBoard } from '@wixc3/react-board';
import { Contentarea2 } from '../../../components/contentarea-2/contentarea-2';

export default createBoard({
    name: 'Contentarea2',
    Board: () => <Contentarea2 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 602,
    },
});
