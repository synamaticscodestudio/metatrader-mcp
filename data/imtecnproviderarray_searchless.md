# SearchLess (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ SearchLess | [](imtecnproviderarray_searchlessoreq.md "SearchLessOrEq") [](imtecnproviderarray_searchleft.md "SearchLeft") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::SearchLess
Search in an array the first element less than the search key.
int IMTECNProviderArray::SearchLess( const void* key, // sorting key MTSortFunctionPtr sort_function // a pointer to the search array ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the order object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTECNProviderArray::Sort](imtecnproviderarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.