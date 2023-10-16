import {ActionListContextType} from '../../pages/home/ReportScreenContext';

type ReportScrollManagerData = {
    ref: ActionListContextType;
    scrollToIndex: (index: number, isEditing: boolean) => void;
    scrollToBottom: () => void;
};

// eslint-disable-next-line import/prefer-default-export
export type {ReportScrollManagerData};
