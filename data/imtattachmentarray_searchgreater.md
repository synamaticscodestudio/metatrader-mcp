# SearchGreater (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ SearchGreater | [](imtattachmentarray_searchgreatoreq.md "SearchGreatOrEq") [](imtattachmentarray_searchlessoreq.md "SearchLessOrEq") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::SearchGreater
Search in an array for the first element greater than the search key.
int IMTAttachmentArray::SearchGreater( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a document object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTAttachmentArray::Sort](imtattachmentarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.