import FormAddSurvivor from './index';

export default {
    component: FormAddSurvivor,
    title: 'Form Add Survivor',
    tags: ['test'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Form Add Survivor',
            state: 'SHOW_FORM',
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

