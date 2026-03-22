# Search (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Search | [](imtconleveragearray_sort.md "Sort") [](imtconleveragearray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Search
Search an array for an element that matches the search key.
int IMTConLeverageArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] Pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] Pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
In case of success, the method returns the position of the configuration object that satisfies the search condition. Otherwise, -1 is returned.
Note
For successful searching, the array must be pre-sorted by calling the [IMTConLeverageArray::Sort](imtconleveragearray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
If the array contains multiple elements that satisfy the search condition, it is not defined which one will be found.
Example
| //+---------------------------------+ // | Function comparing elements for sorting | //+---------------------------------+ int SortParams(const void* left,const void* right) { IMTConLeverage* lft=*(IMTConLeverage**)left; IMTConLeverage* rgh=*(IMTConLeverage**)right; //--- compare by value return CMTStr::Name(lft->Symbol(), rgh->Name()); } //+---------------------------------+ // | Parameter comparing function for search | //+---------------------------------+ int SearchParams(const void* left,const void* right) { LPCWSTR lft=(LPCWSTR)left; IMTConLeverage* rgh=*(IMTConLeverage**)right; //--- compare by value return CMTStr::Compare(lft, rgh->Name()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTConLeverageArray* array; LPCWSTR name; int index; ... //--- initialize and fill the the 'array' array of parameters ... //--- sorting array->Sort(SortParams); //--- Search index=array->Search(L"Night Rule",SearchParams); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---