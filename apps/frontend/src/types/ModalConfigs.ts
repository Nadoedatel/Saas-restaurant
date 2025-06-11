export interface ModalConfigs {
    bookTable: {
        payload: { initialTableId?: number; };
        result: { name: string; phone: string; date: string; time: string; };
    };
}
export type ModalName = keyof ModalConfigs | null;