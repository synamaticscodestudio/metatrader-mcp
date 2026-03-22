# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Search | [](imtsubscriptionhistoryarray_sort.md "Sort") [](imtsubscriptionhistoryarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Search
Search in an array for an element that matches the search key.
int IMTSubscriptionHistoryArray::Search( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
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
If an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Comparison function for sorting subscription actions | //+---------------------------------+ int SortSubscriptionHistory(const void* left,const void* right) { IMTSubscriptionHistory* lft=*(IMTSubscriptionHistory**)left; IMTSubscriptionHistory* rgh=*(IMTSubscriptionHistory**)right; //--- Compare by action ID if(lft->ID()<rgh->ID()) return(-1); if(lft->ID()>rgh->ID()) return(1); //--- return(0); } //+---------------------------------+ // | Subscription action comparison function for search | //+---------------------------------+ int SearchSubscriptionHistory(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTSubscriptionHistory* rgh=*(IMTSubscriptionHistory**)right; //--- Compare by action ID if(lft<rgh->ID()) return(-1); if(lft>rgh->ID()) return(1); //--- return(0); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTSubscriptionHistoryArray* array; UINT64 recordid; int index; ... //--- Initialize and fill the 'array' array of actions ... //--- Sorting array->Sort(SortSubscriptionHistory); //--- Search recordid=12345; index=array->Search(&recordid,SearchSubscriptionHistory); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---