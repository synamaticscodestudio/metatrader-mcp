# Remove (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Remove | [](cmtarraybase_deleterange.md "DeleteRange") [](cmtarraybase_update.md "Update") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Remove
Delete an element taking into account sorting.
bool CMTArrayBase::Remove( const void *elem, // Sort key SMTSearch::SortFunctionPtr sort_function // Sort function )  
---  
Parameters
*elem
[in] A pointer to the sort key.
sort_function
[in] A pointer to the [sort function](smtsearch_sortfunction.md "Sort Function"). A pointer to the elem element to delete is passed as the first parameter in the sort function.
Return Value
If successful, returns true, otherwise returns false.
Note
The array must be sorted first using the the [CMTArrayBase::QuickSort](cmtarraybase_sort.md "Sort") method. The sort function in the sort and deletion methods must match.