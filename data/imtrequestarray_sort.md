# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Sort | [](imtrequestarray_next.md "Next") [](imtrequestarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTRequestArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing requests for sorting | //+---------------------------------+ int SortReuqests(const void* left,const void* right) { IMTRequest* lft=*(IMTRequest**)left; IMTRequest* rgh=*(IMTRequest**)right; //--- Compare by request id return CMTStr::Compare(lft->ID(), rgh->ID()); } //+---------------------------------+ // | Function of comparing requests for searching | //+---------------------------------+ int SearchRequests(const void* left,const void* right) { UINT lft=(UINT)left; IMTRequest* rgh=*(IMTRequest**)right; //--- Compare by request id return CMTStr::Compare(lft, rgh->ID()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTRequestArray* array; UINT ID; int index; ... //--- Initializing and filling the array of requests ... //--- Sorting array->Sort(SortRequests); //--- Search index=array->Search(12345,SearchRequests); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---