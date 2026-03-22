# SearchGreater (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ SearchGreater | [](imtsubscriptionarray_searchgreatoreq.md "SearchGreatOrEq") [](imtsubscriptionarray_searchlessoreq.md "SearchLessOrEq") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::SearchGreater
Search in an array for the first element greater than the search key.
int IMTECNMatchingArray::SearchGreater( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the subscription object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTSubscriptionArray::Sort](imtsubscriptionarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.