# SearchRight (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ SearchRight | [](imtconleveragearray_searchleft.md "SearchLeft") [](imtconleveragerule.md "IMTConLeverageRule") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::SearchRight
Search an array for the last element equal to the search key.
int IMTConLeverageArray::SearchRight( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] Pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] Pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
In case of success, the method returns the position of the configuration object that satisfies the search condition. Otherwise, -1 is returned.
Note
For successful searching, the array must be pre-sorted by calling the [IMTConLeverageArray::Sort](imtconleveragearray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.