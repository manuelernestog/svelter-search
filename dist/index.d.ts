import { SvelterSearchOptions, SearchItem } from './types';
declare class SvelterSearch {
    private search_id;
    private update_interval;
    private data_url;
    private date_url;
    private last_update;
    private auto_update;
    private incrementalUpdate;
    private result_limit;
    private db;
    private searchTable;
    constructor(options?: SvelterSearchOptions);
    private getAllWords;
    update(data_url?: string): Promise<void>;
    private isUpdateNeeded;
    private isRemoteChanged;
    private processData;
    clear(): Promise<void>;
    search(text: string): Promise<SearchItem[]>;
}
export default SvelterSearch;
