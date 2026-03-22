# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Sort | [](imtecnhistorydealarray_next.md "Next") [](imtecnhistorydealarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Sort
Sort an array using the passed sort function.
MTAPIRES IMTECNHistoryDealArray::Sort( MTSortFunctionPtr sort_function // sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Positioning of elements after sorting is determined by sort_function.
Example
| //+---------------------------------+ // | The function compares deals for sorting | //+---------------------------------+ int SortDeals(const void* left,const void* right) { IMTECNHistoryDeal* lft=*(IMTECNHistoryDeal**)left; IMTECNHistoryDeal* rgh=*(IMTECNHistoryDeal**)right; //--- compare by deal identifier return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | The function compares deals for search | //+---------------------------------+ int SearchDeal(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTECNHistoryDeal* rgh=*(IMTECNHistoryDeal**)right; //--- compare by deal identifier return CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTECNHistoryMatchingDeal* array; UINT64 recordid; int index; ... //--- initializing and filling the array of deals 'array' ... //--- sort array->Sort(SortDeals); //--- search index=array->Search(12345,SearchDeal); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---