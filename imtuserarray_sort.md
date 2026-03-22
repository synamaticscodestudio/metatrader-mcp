# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Sort | [](imtuserarray_next.md "Next") [](imtuserarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTUserArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing users for sorting | //+---------------------------------+ int SortUsers(const void* left,const void* right) { IMTUser* lft=*(IMTUser**)left; IMTUser* rgh=*(IMTUser**)right; //--- Compare by login return CMTStr::Compare(lft->Login(), rgh->Login()); } //+---------------------------------+ // | Function of comparing users for searching | //+---------------------------------+ int SearchUsers(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTUser* rgh=*(IMTUser**)right; //--- Compare by login return CMTStr::Compare(lft, rgh->Login()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTUserArray* array; UINT64 login; int index; ... //--- Initialization and filling of the array of users ... //--- Sorting array->Sort(SortUsers); //--- Search index=array->Search(12345,SearchUsers); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---