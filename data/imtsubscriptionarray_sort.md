# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Sort | [](imtsubscriptionarray_next.md "Next") [](imtsubscriptionarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Sort
Sort an array using the passed sort function.
MTAPIRES IMTSubscriptionArray::Sort( MTSortFunctionPtr sort_function // Sorting function )  
---  
Parameters
sort_function
[in] A pointer to the [sorting function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by sort_function.
Example
| //+---------------------------------+ // | Comparison function for sorting subscriptions | //+---------------------------------+ int SortSubscriptions(const void* left,const void* right) { IMTSubscription* lft=*(IMTSubscription**)left; IMTSubscription* rgh=*(IMTSubscription**)right; //--- Compare by subscription ID return CMTStr::Compare(lft->ID(), rgh->ID()); } //+---------------------------------+ // | Subscriptions comparing function for search | //+---------------------------------+ int SearchSubscriptions(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTSubscription* rgh=*(IMTSubscription**)right; //--- Compare by subscription ID return CMTStr::Compare(lft, rgh->ID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTSubscriptionArray* array; UINT64 recordid; int index; ... //--- Initialize and fill the 'array' array of subscriptions ... //--- Sorting array->Sort(SortSubscriptions); //--- Search index=array->Search(12345,SearchSubscriptions); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---