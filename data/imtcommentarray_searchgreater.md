# SearchGreater (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ SearchGreater | [](imtcommentarray_searchgreatoreq.md "SearchGreatOrEq") [](imtcommentarray_searchlessoreq.md "SearchLessOrEq") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::SearchGreater
Search in an array for the first element greater than the search key.
int IMTCommentArray::SearchGreater( const void* key, // Sorting key MTSortFunctionPtr sort_function // A pointer to the search function ) const  
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