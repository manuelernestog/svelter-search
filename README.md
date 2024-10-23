# Svelter Search | Client first full-text search library

Svelter Search is a JavaScript library that synchronizes data from a search API into the browser's IndexedDB for offline and efficient **full-text searching**. By performing searches against the IndexedDB, it reduces the number of server requests, enhancing performance and user experience.

## Features

- Synchronizes data from a remote API to IndexedDB.
- Supports incremental and total data update methods.
- Configurable update intervals.
- **Full-text search capabilities** using IndexedDB.
- Easy integration and customization.

## Installation

Install via npm:

```bash
npm install svelter-search dexie
```

**Note:** `dexie` is a dependency required for IndexedDB operations.

## Usage

### Import the Library

```javascript
import svelterSearch from 'svelter-search';
```

### Create an Instance

```javascript
const searchInstance = new svelterSearch({
    db_id: 'mySearchDB', // Unique ID for the database
    update_interval: 3600000, // Update interval in milliseconds (e.g., 1 hour)
    updated_method: 'INCREMENTAL', // 'INCREMENTAL' or 'TOTAL'
    data_url: 'https://api.example.com/search-data', // URL to fetch data
    date_url: 'https://api.example.com/data-updated-at' // (Optional) URL to check last update date
});
```

### Methods

#### `pull(data_url)`

Fetches data from the specified `data_url` and updates the IndexedDB. This method can be used to manually trigger data synchronization with the remote API.

```javascript
await searchInstance.pull(); // Uses the data_url specified during initialization
```

- **Parameters**:
  - `data_url` (optional): A string representing the URL to fetch data from. If not provided, it uses the `data_url` specified when the instance was created.

- **Usage**:
  - **Manual Data Fetch**: Use this method when you want to manually control when data is fetched from the API, regardless of the `update_interval`.
  - **Custom Data URL**: You can provide a different `data_url` if needed.

#### `search(text)`

Performs a full-text search on the IndexedDB for items that match the provided text.

```javascript
const results = await searchInstance.search('search term');
console.log(results);
```

- **Note**: Before searching, the library checks if an update is needed based on `update_interval` and `last_update`. If an update is needed, it fetches new data before performing the search.

#### `update()`

Manually triggers a data update regardless of the `update_interval`.

```javascript
await searchInstance.update();
```

#### `purge()`

Clears the IndexedDB and removes the last update timestamp.

```javascript
await searchInstance.purge();
```

### Data Format

The data fetched from `data_url` should be an array of items with the following format:

```json
[
    {
        "id": "unique-item-id",
        "updated_at": "2023-10-15T12:34:56Z",
        "search_value": "Text to be searched",
        "data": { /* Additional data as needed */ }
    },
    // ... more items
]
```

### Example

```javascript
import svelterSearch from 'svelter-search';

const searchInstance = new svelterSearch({
    db_id: 'productsDB',
    update_interval: 60000, // Update every minute
    updated_method: 'INCREMENTAL',
    data_url: 'https://api.example.com/products',
    date_url: 'https://api.example.com/products-updated-at'
});

// Manually fetch data from the API
await searchInstance.pull();

// Perform a full-text search for products containing 'laptop' and 'gaming'
const results = await searchInstance.search('laptop gaming');
console.log(results);

// Purge the database
await searchInstance.purge();
```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.