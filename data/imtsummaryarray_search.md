# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Search | [](imtsummaryarray_sort.md "Sort") [](imtsummaryarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Search
Search in an array the array element that matches the search key.
int IMTSummaryArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Sort function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a summary position record object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTSummaryArray::Sort](imtsummaryarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Function of comparing summary positions for sorting | //+---------------------------------+ int SortSummary(const void* left,const void* right) { IMTSummary* lft=*(IMTSummary**)left; IMTSummary* rgh=*(IMTSummary**)right; //--- Compare by buy volume return CMTStr::Compare(lft->VolumeBuyClients(), rgh->VolumeBuyClients()); } //+---------------------------------+ // | Function of comparing summary positions for searching | //+---------------------------------+ int SearchSummary(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTSummary* rgh=*(IMTSummary**)right; //--- Compare by buy volume return CMTStr::Compare(lft, rgh->VolumeBuyClients()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTSummaryArray* array; UINT64 VolumeBuyClients; int index; ... //--- Initializing and filling the array of summary positions ... //--- Sorting array->Sort(SortSummary); //--- Search index=array->Search(345,SearchSummary); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---