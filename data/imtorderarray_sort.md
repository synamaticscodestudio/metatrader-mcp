# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Sort | [](imtorderarray_next.md "Next") [](imtorderarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTOrderArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing orders for sorting | //+---------------------------------+ int SortOrders(const void* left,const void* right) { IMTOrder* lft=*(IMTOrder**)left; IMTOrder* rgh=*(IMTOrder**)right; //--- Compare by ticket return CMTStr::Compare(lft->Order(), rgh->Order()); } //+---------------------------------+ // | Function of comparing orders for sorting | //+---------------------------------+ int SearchOrders(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTOrder* rgh=*(IMTOrder**)right; //--- Compare by ticket return CMTStr::Compare(lft, rgh->Order()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTOrderArray* array; UINT64 ticket; int index; ... //--- Initializing and filling the array of orders ... //--- Sorting array->Sort(SortOrders); //--- Search index=array->Search(12345,SearchOrders); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---