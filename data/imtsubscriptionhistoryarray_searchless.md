# SearchLess (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ SearchLess | [](imtsubscriptionhistoryarray_searchlessoreq.md "SearchLessOrEq") [](imtsubscriptionhistoryarray_searchleft.md "SearchLeft") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::SearchLess
Search in an array for the first element less than the search key.
int IMTSubscriptionHistoryArray::SearchLess( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the subscription object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTSubscriptionHistoryArray::Sort](imtsubscriptionhistoryarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.