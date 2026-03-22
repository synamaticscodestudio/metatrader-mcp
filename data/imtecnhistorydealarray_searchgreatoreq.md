# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ SearchGreatOrEq | [](imtecnhistorydealarray_search.md "Search") [](imtecnhistorydealarray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::SearchGreatOrEq
Search in an array for the first element greater than or equal to the search key.
int IMTECNHistoryDealArray::SearchGreatOrEq( const void* key, // sorting key MTSortFunctionPtr sort_function // a pointer to the search array ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the order object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTECNHistoryDealArray::Sort](imtecnhistorydealarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.