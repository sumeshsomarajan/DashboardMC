import { createBoard } from '@wixc3/react-board';
import { Contentarea5 } from '../../../components/contentarea-5/contentarea-5';

export default createBoard({
    name: 'Contentarea5',
    Board: () => <Contentarea5 />,
    isSnippet: true,
});