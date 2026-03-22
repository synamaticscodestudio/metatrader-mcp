# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Search | [](imtcommentarray_sort.md "Sort") [](imtcommentarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Search
Search in an array for the array element matching the search key.
int IMTCommentArray::Search( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a comment object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must be sorted first by calling the [IMTCommentArray::Sort](imtcommentarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Comments comparing function for sorting | //+---------------------------------+ int SortComments(const void* left,const void* right) { IMTComment* lft=*(IMTComment**)left; IMTComment* rgh=*(IMTComment**)right; //--- Compare by comment ID return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | Comments comparing function for search | //+---------------------------------+ int SearchComments(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTComment* rgh=*(IMTComment**)right; //--- Compare by comment ID return CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTCommentArray* array; UINT64 recordid; int index; ... //--- initialize and fill the comments array 'array' ... //--- sorting array->Sort(SortComments); //--- search index=array->Search(12345,SearchComments); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---