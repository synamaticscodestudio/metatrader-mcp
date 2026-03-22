# Search (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Search | [](imtattachmentarray_sort.md "Sort") [](imtattachmentarray_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Search
Search in an array for the array element matching the search key.
int IMTAttachmentArray::Search( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
---  
Parameters
key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter (const void *left).
sort_function
[in] A pointer to the [Search function](reference_types.htm#mtsortfunctionptr).
Return Value
If successful, the method returns the position of a document object that meets the search criteria. Otherwise, it returns -1.
Note
For a successful search, an array must be sorted first by calling the [IMTAttachmentArray::Sort](imtattachmentarray_sort.md "Sort") method. The sorting function (algorithm) must correspond to the search function (algorithm) used.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example
| //+---------------------------------+ // | Function that compares attachments to sort them | //+---------------------------------+ int SortAttachments(const void* left,const void* right) { IMTAttachment* lft=*(IMTAttachment**)left; IMTAttachment* rgh=*(IMTAttachment**)right; //--- compare by attachment ID return CMTStr::Compare(lft->RecordID(), rgh->RecordID()); } //+---------------------------------+ // | Function that compares attachments to search | //+---------------------------------+ int SearchAttachments(const void* left,const void* right) { UINT64 lft=(UINT64)left; IMTAttachment* rgh=*(IMTAttachment**)right; //--- compare by attachment ID return CMTStr::Compare(lft, rgh->RecordID()); } //+---------------------------------+ // | Sorting and search method example | //+---------------------------------+ int Example() { IMTAttachmentArray* array; UINT64 recordid; int index; ... //--- initialize and fill the 'array' array of attachments ... //--- sorting array->Sort(SortAttachments); //--- search index=array->Search(12345,SearchAttachments); //--- return(0); } |
| --- | --- | --- | --- | --- | --- | --- |

---