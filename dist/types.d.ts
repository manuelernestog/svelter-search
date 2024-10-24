export interface SvelterSearchOptions {
    search_id?: string;
    update_interval?: number;
    data_url?: string;
    date_url?: string;
    auto_update?: boolean;
    incrementalUpdate?: boolean;
}
export interface SearchItem {
    id: string;
    updated_at: string;
    search_value: string;
    data?: any;
    is_deleted?: boolean;
    searchWords?: string[];
}
export interface RemoteDateResponse {
    updated_at: string;
}
