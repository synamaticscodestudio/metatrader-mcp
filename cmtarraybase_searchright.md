# SearchRight (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ SearchRight | [](cmtarraybase_searchleft.md "SearchLeft") [](cmtstr.md "CMTStr") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::SearchRight
Search in an array the last element equal to the search key.
static void* CMTArrayBase::SearchRight( const void *key, // Search key SMTSearch::SortFunctionPtr sort_function // Sort function )  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter.
sort_function
[in] A pointer to the [Search function](smtsearch_sortfunction.md "Sort Function").
Return Value
If successful, it returns a pointer to the found item. Otherwise, it returns NULL.
Note
For a successful search, an array must be sorted first by calling the [CMTArrayBase::Sort](cmtarraybase_sort.md "Sort") method. The sort function in the sort and search methods must match.