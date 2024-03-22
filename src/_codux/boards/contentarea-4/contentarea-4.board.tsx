import { createBoard } from '@wixc3/react-board';
import { Contentarea4 } from '../../../components/contentarea-4/contentarea-4';

export default createBoard({
    name: 'Contentarea4',
    Board: () => <Contentarea4 />,
    isSnippet: true,
});