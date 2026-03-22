# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ SearchGreatOrEq | [](imtclientarray_search.md "Search") [](imtclientarray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::SearchGreatOrEq
Search in an array for the first element greater than or equal to the search key.
int IMTClientArray::SearchGreatOrEq( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a client object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must be sorted first by calling the [IMTClientArray::Sort](imtclientarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.