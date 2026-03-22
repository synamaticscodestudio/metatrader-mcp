# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Sort | [](imtsubscriptionhistoryarray_next.md "Next") [](imtsubscriptionhistoryarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Sort
Sort an array using the passed sort function.
MTAPIRES IMTSubscriptionHistoryArray::Sort( MTSortFunctionPtr sort_function // Sorting function )  
---  
Parameters
sort_function
[in] A pointer to the [sorting function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by sort_function.
Example
| //+---------------------------------+ // | Comparison function for sorting subscription actions | //+---------------------------------+ int SortSubscriptionHistory(const void* left,const void* right) { IMTSubscriptionHistory* lft=*(IMTSubscriptionHistory**)left; IMTSubscriptionHistory* rgh=*(IMTSubscriptionHistory**)right; //--- Compare by action ID return CMTStr::Compare(lft->ID(), rgh->ID()); } //+---------------------------------+ // | Subscription action comparison function for search | //+---------------------------------+ int SearchSubscriptionHistory(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTSubscriptionHistory* rgh=*(IMTSubscriptionHistory**)right; //--- Compare by action ID return CMTStr::Compare(lft, rgh->ID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTSubscriptionHistoryArray* array; UINT64 recordid; int index; ... //--- Initialize and fill the 'array' array of actions ... //--- Sorting array->Sort(SortSubscriptionHistory); //--- Search index=array->Search(12345,SearchSubscriptionHistory); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---