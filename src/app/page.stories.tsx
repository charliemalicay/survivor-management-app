import page from './page';

export default {
    component: page,
    title: 'Page - Dashboard',
    tags: ['test'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Page - Dashboard',
            state: 'SHOW_DATA',
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

