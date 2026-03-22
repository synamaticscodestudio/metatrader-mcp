# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ SearchGreatOrEq | [](imtconsymbolarray_search.md "Search") [](imtconsymbolarray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::SearchGreatOrEq
Search an array for the first element greater than or equal to the search key.
int IMTConSymbolArray::SearchGreatOrEq( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, the array must be previously sorted by calling the [IMTConSymbolArray::Sort](imtconsymbolarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.