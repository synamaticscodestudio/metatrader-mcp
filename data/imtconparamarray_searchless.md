# SearchLess (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ SearchLess | [](imtconparamarray_searchlessoreq.md "SearchLessOrEq") [](imtconparamarray_searchleft.md "SearchLeft") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::SearchLess
Search in an array the first element less than the search key.
int IMTConParamArray::SearchLess( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of the parameter object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTConParamArray::Sort](imtconparamarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.