import TopNavbar from './TopNavbar';

export default {
    component: TopNavbar,
    title: 'Top Navbar',
    tags: ['test'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Top Navbar',
            state: 'LIST_DATA',
        },
    },
};

// export const Pinned = {
//     args: {
//         task: {
//             ...Default.args.task,
//             state: 'TASK_PINNED',
//         },
//     },
// };
//
// export const Archived = {
//     args: {
//         task: {
//             ...Default.args.task,
//             state: 'TASK_ARCHIVED',
//         },
//     },
// };

