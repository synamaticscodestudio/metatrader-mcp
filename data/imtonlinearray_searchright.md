# SearchRight (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ SearchRight | [](imtonlinearray_searchleft.md "SearchLeft") [](reference_certificate.md "Certificates") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::SearchRight
Searches in an array for the last element equal to the search key.
int IMTOnlineArray::SearchRight( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a trade order object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTOnlineArray::Sort](imtonlinearray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.