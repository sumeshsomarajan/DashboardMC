import { createBoard } from '@wixc3/react-board';
import { Contentarea1 } from '../../../components/contentarea-1/contentarea-1';

export default createBoard({
    name: 'Contentarea1',
    Board: () => <Contentarea1 />,
    isSnippet: true,
});