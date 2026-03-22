# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Search | [](imtecnmatchingarray_sort.md "Sort") [](imtecnmatchingarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Search
Search in an array for the array element matching the search key.
int IMTECNMatchingArray::Search( const void* key, // sorting key MTSortFunctionPtr sort_function // a pointer to the search array ) const  
---  
Parameters
key
[in] A pointer to the sorting key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of the order object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must first be sorted by calling the [IMTECNMatchingArray::Sort](imtecnmatchingarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Matching order comparison function for sorting | //+---------------------------------+ int SortOrders(const void* left,const void* right) { IMTECNMatching* lft=*(IMTECNMatching**)left; IMTECNMatching* rgh=*(IMTECNMatching**)right; //--- compare by order identifier return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | Matching order comparison function for search | //+---------------------------------+ int SearchOrder(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTECNMatching* rgh=*(IMTECNMatching**)right; //--- compare by order identifier return; CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTECNMatchingArray* array; UINT64 recordid; int index; ... //--- initializing and filling the array of orders 'array' ... //--- sort array->Sort(SortOrders); //--- search index=array->Search(12345,SearchOrders); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---