# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Sort | [](imtecnmatchingarray_next.md "Next") [](imtecnmatchingarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Sort
Sort an array using the passed sort function.
MTAPIRES IMTECNMatchingArray::Sort( MTSortFunctionPtr sort_function // sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Positioning of elements after sorting is determined by sort_function.
Example
| //+---------------------------------+ // | Matching order comparison function for sorting | //+---------------------------------+ int SortOrders(const void* left,const void* right) { IMTECNMatching* lft=*(IMTECNMatching**)left; IMTECNMatching* rgh=*(IMTECNMatching**)right; //--- compare by order identifier return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | Matching order comparison function for search | //+---------------------------------+ int SearchOrder(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTECNMatching* rgh=*(IMTECNMatching**)right; //--- compare by order identifier return; CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTECNMatchingArray* array; UINT64 recordid; int index; ... //--- initializing and filling the array of orders 'array' ... //--- sort array->Sort(SortOrders); //--- search index=array->Search(12345,SearchOrders); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---