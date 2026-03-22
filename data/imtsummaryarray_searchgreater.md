# SearchGreater (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ SearchGreater | [](imtsummaryarray_searchgreatoreq.md "SearchGreatOrEq") [](imtsummaryarray_searchlessoreq.md "SearchLessOrEq") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::SearchGreater
Search in an array the first element greater than the search key.
int IMTSummaryArray::SearchGreater( const void *key, // Sort key MTSortFunctionPtr sort_function // Sort function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a summary position record object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTSummaryArray::Sort](imtsummaryarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.