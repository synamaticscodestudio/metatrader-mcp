# SearchRight (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ SearchRight | [](imtdocumentarray_searchleft.md "SearchLeft") [](imtdocumentsink.md "IMTDocumentSink") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::SearchRight
Search in an array for the last element equal to the search key.
int IMTDocumentArray::SearchRight( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a document object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must be sorted first by calling the [IMTDocumentArray::Sort](imtdocumentarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.