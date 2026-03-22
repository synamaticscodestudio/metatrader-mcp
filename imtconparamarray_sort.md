# Sort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Sort | [](imtconparamarray_next.md "Next") [](imtconparamarray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Sort
Sort an array using the sort function passed.
MTAPIRES IMTConParamArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by the sort function sort_function.
Example
| //+---------------------------------+ // | Function of comparing parameters for sorting | //+---------------------------------+ int SortParams(const void* left,const void* right) { IMTConParam* lft=*(IMTConParam**)left; IMTConParam* rgh=*(IMTConParam**)right; //--- Compare by value return CMTStr::Compare(lft->ValueInt(), rgh->ValueInt()); } //+---------------------------------+ // | Function of comparing parameters for searching | //+---------------------------------+ int SearchParams(const void* left,const void* right) { INT64 lft=(INT64)left; IMTConParam* rgh=*(IMTConParam**)right; //--- Compare by value return CMTStr::Compare(lft, rgh->ValueInt()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTConParamArray* array; INT64 ValueInt; int index; ... //--- Initializing and filling of the array of parameters ... //--- Sorting array->Sort(SortParams); //--- Search index=array->Search(12345,SearchParams); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---