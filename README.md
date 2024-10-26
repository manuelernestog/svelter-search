# Svelter Search | Client First Full Text Search Library

Svelter Search is a JavaScript library that synchronizes data from a search API into the browser's IndexedDB for efficient and offline-capable **full-text searching**. By performing searches against the IndexedDB, it reduces the number of server requests, enhancing performance and user experience.

## Features

- Synchronizes data from a remote API to IndexedDB.
- Supports incremental or full data updates.
- Handles deletions using "soft deletes" with the `is_deleted` field.
- Configurable update intervals.
- Option to automatically update data before searching.
- **Full-text search capabilities** using IndexedDB.
- Easy integration and customization.

## Installation

Install via npm:

```bash
npm install svelter-search dexie
```
**Note:** `dexie` is a required dependency for IndexedDB operations.

## Usage

### Import the Library

```javascript
import SvelterSearch from 'svelter-search';
```

### Create an Instance

```javascript
const searchInstance = new SvelterSearch({
  search_id: 'mySearch', // Unique ID for the search (used as table name)
  update_interval: 3600000, // Update interval in milliseconds (e.g., 1 hour)
  data_url: 'https://api.example.com/search-data', // URL to fetch data
  date_url: 'https://api.example.com/data-updated-at', // (Optional) URL to check last update date
  auto_update: true, // Whether to automatically update data before searching
  incrementalUpdate: true, // Whether updates are incremental (true) or full (false)
  result_limit: 10, // Limit the number of results returned on the search (default 50)
});
```

### Options

- `search_id` (String): Unique identifier for the search. This is used as the table name within the `svelter_search` database.
- `update_interval` (Number): Interval in milliseconds to check if data synchronization is needed.
- `data_url` (String): URL to fetch data from.
- `date_url` (String): URL to check the last update date of the data.
- `auto_update` (Boolean): If `true`, the library will check if an update is needed before performing a search and update if necessary. Default is `false`.
- `incrementalUpdate` (Boolean): Indicates whether updates are incremental (`true`) or full (`false`). Default is `false`.

### Methods

#### `update(data_url)`

Triggers a data update. If `data_url` is provided as a parameter, it will use that URL; otherwise, it will use the `data_url` specified during initialization.

```javascript
await searchInstance.update(); // Uses the data_url specified during initialization

// Or with a custom data_url
await searchInstance.update('https://api.example.com/alternative-data');
```

- If `incrementalUpdate` is `false`, a full update is performed:
  - The corresponding table in IndexedDB is cleared.
  - All data is fetched from the endpoint.
- If `incrementalUpdate` is `true`, an incremental update is performed:
  - Only new and updated data since the last update is fetched.
  - Deletions are handled using "soft deletes" with the `is_deleted` field.

#### `search(text)`

Performs a full-text search in IndexedDB for items that match the provided text.

```javascript
const results = await searchInstance.search('search term');
console.log(results);
```

- If `auto_update` is `true`, the library checks if an update is needed based on the `update_interval` and the last update before performing the search.
- If an update is needed, it is performed before searching.

#### `clear()`

Clears all data from the IndexedDB table associated with the `search_id` and removes the last update timestamp.

```javascript
await searchInstance.clear();
```

### Data Format

The data fetched from `data_url` should be an array of items with the following format:

```json
[
  {
    "id": "unique-item-id",
    "updated_at": "2023-10-15T12:34:56Z",
    "search_value": "Text to be searched",
    "data": { /* Additional data as needed */ },
    "is_deleted": false // (Optional) Indicates if the item has been deleted
  },
  // ... more items
]
```

- **Note:** If `is_deleted` is `true`, the item will be deleted from IndexedDB during an incremental update.

#### `date_url` Response Format

When using the `date_url` option, the endpoint should return a JSON object containing an `updated_at` field, which is a date string in a format that can be parsed by JavaScript's `Date` constructor.

Example:

```json
{
  "updated_at": "2023-10-15T12:34:56Z"
}
```

- The `updated_at` field represents the last time the data at `data_url` was updated.
- The library uses this date to determine if it needs to fetch new data.
- If `date_url` is not provided, the library will assume that the data may have changed and will proceed with the update.

### Example

```javascript
import SvelterSearch from 'svelter-search';

const searchInstance = new SvelterSearch({
  search_id: 'products',
  update_interval: 60000, // Check for updates every minute
  data_url: 'https://api.example.com/products',
  date_url: 'https://api.example.com/products-updated-at',
  auto_update: true, // Automatically update before searching
  incrementalUpdate: true, // Use incremental updates
});

// Manually trigger an update
await searchInstance.update();

// Perform a full-text search for products containing 'laptop' and 'gaming'
const results = await searchInstance.search('laptop gaming');
console.log(results);

// Clear the database table for this search_id
await searchInstance.clear();
```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.