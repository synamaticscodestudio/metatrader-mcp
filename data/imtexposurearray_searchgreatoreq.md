# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ SearchGreatOrEq | [](imtexposurearray_search.md "Search") [](imtexposurearray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::SearchGreatOrEq
Search in an array the first element greater than or equal to the search key.
int IMTExposureArray::SearchGreatOrEq( const void *key, // Sort key MTSortFunctionPtr sort_function // Sort function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of an asset record object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTExposureArray::Sort](imtexposurearray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.