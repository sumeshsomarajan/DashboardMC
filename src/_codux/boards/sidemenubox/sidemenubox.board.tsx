import { createBoard } from '@wixc3/react-board';
import { Sidemenubox } from '../../../components/sidemenubox/sidemenubox';

export default createBoard({
    name: 'Sidemenubox',
    Board: () => <Sidemenubox />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 5,
        canvasBackgroundColor: '#f6f6f6',
    },
});
