import { createBoard } from '@wixc3/react-board';
import { Sidemenubox } from '../../../components/sidemenubox/sidemenubox';

export default createBoard({
    name: 'contentbox1',
    Board: () => <Sidemenubox />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 635,
        canvasBackgroundColor: '#f6f6f6',
    },
});
