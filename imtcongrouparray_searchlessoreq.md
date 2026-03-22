# SearchLessOrEq (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ SearchLessOrEq | [](imtcongrouparray_searchgreater.md "SearchGreater") [](imtcongrouparray_searchless.md "SearchLess") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::SearchLessOrEq
Search an array for the first element less than or equal to the search key.
int IMTConGroupArray::SearchLessOrEq( const void *key,  MTSortFunctionPtr sort_function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, the array must be previously sorted by calling the [IMTConGroupArray::Sort](imtcongrouparray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.