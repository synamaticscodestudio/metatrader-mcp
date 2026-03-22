# SearchRight (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolArray ](imtconsymbolarray.md "IMTConSymbolArray")/ SearchRight | [](imtconsymbolarray_searchleft.md "SearchLeft") [](imtconsymbolsink.md "IMTConSymbolSink") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray::SearchRight
Search an array for the last element equal to the search key.
int IMTConSymbolArray::SearchRight( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to search function ) const  
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