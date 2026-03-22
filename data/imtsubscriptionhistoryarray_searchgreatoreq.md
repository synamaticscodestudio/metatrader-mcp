# SearchGreatOrEq (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ SearchGreatOrEq | [](imtsubscriptionhistoryarray_search.md "Search") [](imtsubscriptionhistoryarray_searchgreater.md "SearchGreater") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::SearchGreatOrEq
Search in an array for the first element greater than or equal to the search key.
int IMTSubscriptionHistoryArray::SearchGreatOrEq( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
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