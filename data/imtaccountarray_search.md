# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountArray ](imtaccountarray.md "IMTAccountArray")/ Search | [](imtaccountarray_sort.md "Sort") [](imtaccountarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray::Search
Search in an array the array element that matches the search key.
int IMTAccountArray::Search( const void *key, // Sort key MTSortFunctionPtr sort_function // Pointer to the search function ) const  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, it returns the position of a trade order object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTAccountArray::Sort](imtaccountarray_sort.md "Sort") method. The sorting function (algorithm) must correspond with the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Function of comparing accounts for sorting | //+---------------------------------+ int SortAccounts(const void* left,const void* right) { IMTAccount* lft=*(IMTAccount**)left; IMTAccount* rgh=*(IMTAccount**)right; //--- Compare by login return CMTStr::Compare(lft->Login(), rgh->Login()); } //+---------------------------------+ // | Function of comparing accounts for searching | //+---------------------------------+ int SearchAccounts(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTAccount* rgh=*(IMTAccount**)right; //--- Compare by login return CMTStr::Compare(lft, rgh->Login()); } //+---------------------------------+ // | Example of sorting and searching | //+---------------------------------+ int Example() { IMTAccountArray* array; UINT64 login; int index; ... //--- Initializing and filling the array of accounts ... //--- Sorting array->Sort(SortAccounts); //--- Search index=array->Search(12345,SearchAccounts); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---