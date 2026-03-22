# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Search | [](imtexposurearray_sort.md "Sort") [](imtexposurearray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Search
Search in an array the array element that matches the search key.
int IMTExposureArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Sort function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of an asset record object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTExposureArray::Sort](imtexposurearray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Function of comparing exposure for sorting | //+---------------------------------+ int SortExposure(const void* left,const void* right) { IMTExposure* lft=*(IMTExposure**)left; IMTExposure* rgh=*(IMTExposure**)right; //--- Compare by client volume return CMTStr::Compare(lft->VolumeClients(), rgh->VolumeClients()); } //+---------------------------------+ // | Function of comparing exposure for searching | //+---------------------------------+ int SearchExposure(const void* left,const void* right) { double lft=(double)left; IMTExposure* rgh=*(IMTExposure**)right; //--- Compare by client volume retrun CMTStr::Compare(lft, rgh->VolumeClients()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTExposureArray* array; double VolumeClients; int index; ... //--- Initializing and filling the array of exposures ... //--- Sorting array->Sort(SortExposure); //--- Search index=array->Search(345,SearchExposure); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---