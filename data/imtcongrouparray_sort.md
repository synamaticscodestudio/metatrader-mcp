# Sort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Sort | [](imtcongrouparray_next.md "Next") [](imtcongrouparray_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Sort
Sort an array using the passed sort function.
MTAPIRES IMTConGroupArray::Sort( MTSortFunctionPtr sort_function // Sort function )  
---  
Parameters
sort_function
[in] A pointer to the [sort function](reference_types.htm#mtsortfunctionptr).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positioning of elements after sorting is determined by sort_function.
Example
| //+---------------------------------+ // | Function comparing elements for sorting | //+---------------------------------+ int SortParams(const void* left,const void* right) { IMTConGroup* lft=*(IMTConGroup**)left; IMTConGroup* rgh=*(IMTConGroup**)right; //--- compare by value return CMTStr::Compare(lft->Group(), rgh->Group()); } //+---------------------------------+ // | Parameter comparing function for search | //+---------------------------------+ int SearchParams(const void* left,const void* right) { LPCWSTR lft=(LPCWSTR)left; IMTConGroup* rgh=*(IMTConGroup**)right; //--- compare by value return CMTStr::Compare(lft, rgh->Group()); } //+---------------------------------+ // | Sort and search method example | //+---------------------------------+ int Example() { IMTConGroupArray* array; LPCWSTR group; int index; ... //--- initialize and fill the the 'array' array of parameters ... //--- sort array->Sort(SortParams); //--- search index=array->Search(L"demo",SearchParams); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---