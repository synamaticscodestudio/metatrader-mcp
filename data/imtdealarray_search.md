# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Search | [](imtdealarray_sort.md "Sort") [](imtdealarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Search
Search in an array the array element that matches the search key.
int IMTDealArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a deal object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTDealArray::Sort](imtdealarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Function of comparing deals for sorting | //+---------------------------------+ int SortDeals(const void* left,const void* right) { IMTDeal* lft=*(IMTDeal**)left; IMTDeal* rgh=*(IMTDeal**)right; //--- Compare by ticket return CMTStr::Compare(lft->Deal(), rgh->Deal()); } //+---------------------------------+ // | Function of comparing deals for searching | //+---------------------------------+ int SearchDeals(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTDeal* rgh=*(IMTDeal**)right; //--- Compare by ticket return CMTStr::Compare(lft, rgh->Deal()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTDealArray* array; UINT64 ticket; int index; ... //--- Initializing and sorting the array of deals ... //--- Sorting array->Sort(SortDeals); //--- Search index=array->Search(12345,SearchDeals); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---