# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Search | [](imtdocumentarray_sort.md "Sort") [](imtdocumentarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Search
Search in an array for the array element matching the search key.
int IMTDocumentArray::Search( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a document object that meets the search criteria. Otherwise, -1 is returned.
Note
For a successful search, an array must be sorted first by calling the [IMTDocumentArray::Sort](imtdocumentarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Documents comparing function for sorting | //+---------------------------------+ int SortDocuments(const void* left,const void* right) { IMTDocument* lft=*(IMTDocument**)left; IMTDocument* rgh=*(IMTDocument**)right; //--- Compare by comment ID return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | Documents comparing function for search | //+---------------------------------+ int SearchDocuments(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTDocument* rgh=*(IMTDocument**)right; //--- Compare by document ID return CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTDocumentArray* array; UINT64 recordid; int index; ... //--- initialize and fill the documents array 'array' ... //--- sorting array->Sort(SortDocuments); //--- search index=array->Search(12345,SearchDocuments); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---