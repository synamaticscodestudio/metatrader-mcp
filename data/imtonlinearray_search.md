# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Search | [](imtonlinearray_sort.md "Sort") [](imtonlinearray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Search
Search in an array the array element that matches the search key.
int IMTOnlineArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a trade order object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTOnlineArray::Sort](imtonlinearray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | The function compares connection records for sorting | //+---------------------------------+ int SortOnline(const void* left,const void* right) { IMTOnline* lft=*(IMTOnline**)left; IMTOnline* rgh=*(IMTOnline**)right; //--- Comparing by login return CMTStr::Compare(lft->Login(), rgh->Login()); } //+---------------------------------+ // | The function compares connection records for search | //+---------------------------------+ int SearchOnline(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTOnline* rgh=*(IMTOnline**)right; //--- Comparing by login return CMTStr::Compare(lft, rgh->Login()); } //+---------------------------------+ // | Example of sort and search method | //+---------------------------------+ int Example() { IMTOnlineArray* array; UINT64 login; int index; ... //--- Initializing and filling the array of records 'array' ... //--- Sorting array->Sort(SortOnline); //--- Search index=array->Search(12345,SearchOnline); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---