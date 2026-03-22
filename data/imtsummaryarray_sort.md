# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Sort | [](imtsummaryarray_next.md "Next") [](imtsummaryarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTSummaryArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing summary positions for sorting | //+---------------------------------+ int SortSummary(const void* left,const void* right) { IMTSummary* lft=*(IMTSummary**)left; IMTSummary* rgh=*(IMTSummary**)right; //--- Compare by buy volume return CMTStr::Compare(lft->VolumeBuyClients(), rgh->VolumeBuyClients()); } //+---------------------------------+ // | Function of comparing summary positions for searching | //+---------------------------------+ int SearchSummary(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTSummary* rgh=*(IMTSummary**)right; //--- Compare by buy volume return CMTStr::Compare(lft, rgh->VolumeBuyClients()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTSummaryArray* array; UINT64 VolumeBuyClients; int index; ... //--- Initializing and filling the array of summary positions ... //--- Sorting array->Sort(SortSummary); //--- Search index=array->Search(345,SearchSummary); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---