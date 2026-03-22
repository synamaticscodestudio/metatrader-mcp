# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Search | [](imtecnhistorymatchingarray_sort.md "Sort") [](imtecnhistorymatchingarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Search
Search in an array for the array element matching the search key.
int IMTECNHistoryMatchingArray::Search( const void* key, // sorting key MTSortFunctionPtr sort_function // a pointer to the search array ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the order object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTECNHistoryMatchingArray::Sort](imtecnhistorymatchingarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Matching order comparison function for sorting | //+---------------------------------+ int SortOrders(const void* left,const void* right) { IMTECNHistoryMatching* lft=*(IMTECNHistoryMatching**)left; IMTECNHistoryMatching* rgh=*(IMTECNHistoryMatching**)right; //--- compare by order identifier if(lft->RecordID()<rgh->RecordID()) return(-1); if(lft->RecordID()>rgh->RecordID()) return(1); //--- return(0); } //+---------------------------------+ // | Matching order comparison function for search | //+---------------------------------+ int SearchOrder(const void* left,const void* right) { UINT64 lft=*(UINT64*)left; IMTECNHistoryMatching* rgh=*(IMTECNHistoryMatching**)right; //--- compare by order identifier if(lft<rgh->RecordID()) return(-1); if(lft>rgh->RecordID()) return(1); //--- return(0); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTECNHistoryMatchingArray* array; UINT64 recordid; int index; ... //--- initializing and filling the array of orders 'array' ... //--- sort array->Sort(SortOrders); //--- search recordid=12345; index=array->Search(&recordid,SearchOrders); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---