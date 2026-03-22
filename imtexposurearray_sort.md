# Sort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Sort | [](imtexposurearray_next.md "Next") [](imtexposurearray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTExposureArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing exposure for sorting | //+---------------------------------+ int SortExposure(const void* left,const void* right) { IMTExposure* lft=*(IMTExposure**)left; IMTExposure* rgh=*(IMTExposure**)right; //--- Compare by client volume return CMTStr::Compare(lft->VolumeClients(), rgh->VolumeClients()); } //+---------------------------------+ // | Function of comparing exposure for searching | //+---------------------------------+ int SearchExposure(const void* left,const void* right) { double lft=(double)left; IMTExposure* rgh=*(IMTExposure**)right; //--- Compare by client volume retrun CMTStr::Compare(lft, rgh->VolumeClients()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTExposureArray* array; double VolumeClients; int index; ... //--- Initializing and filling the array of exposures ... //--- Sorting array->Sort(SortExposure); //--- Search index=array->Search(345,SearchExposure); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---