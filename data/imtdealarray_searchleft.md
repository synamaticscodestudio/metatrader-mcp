# SearchLeft (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ SearchLeft | [](imtdealarray_searchless.md "SearchLess") [](imtdealarray_searchright.md "SearchRight") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::SearchLeft
Search in an array the first element equal to the search key.
int IMTDealArray::SearchLeft( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a deal object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTDealArray::Sort](imtdealarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.