import { createBoard } from '@wixc3/react-board';
import { Sidearea } from '../../../components/sidearea/sidearea';

export default createBoard({
    name: 'Sidearea',
    Board: () => <Sidearea />,
    isSnippet: true,
});