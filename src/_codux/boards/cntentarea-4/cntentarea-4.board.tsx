import { createBoard } from '@wixc3/react-board';
import { Cntentarea4 } from '../../../components/cntentarea-4/cntentarea-4';

export default createBoard({
    name: 'Cntentarea4',
    Board: () => <Cntentarea4 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
    },
});
