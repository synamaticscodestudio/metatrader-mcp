# SearchLess (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ SearchLess | [](imtaccountarray_searchlessoreq.md "SearchLessOrEq") [](imtaccountarray_searchleft.md "SearchLeft") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::SearchLess
Search in an array the first element less than the search key.
int IMTAccountArray::SearchLess( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a trade order object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTAccountArray::Sort](imtaccountarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.