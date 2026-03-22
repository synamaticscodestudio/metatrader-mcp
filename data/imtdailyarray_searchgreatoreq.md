# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ SearchGreatOrEq | [](imtdailyarray_search.md "Search") [](imtdailyarray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::SearchGreatOrEq
Search in an array the first element greater than or equal to the search key.
int IMTDailyArray::SearchGreatOrEq( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a daily report object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTDailyArray::Sort](imtdailyarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.