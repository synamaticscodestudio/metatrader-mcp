# Insert (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Insert | [](cmtarraybase_append.md "Append") [](cmtarraybase_insertempty.md "InsertEmpty") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Insert
Insert an element at the specified position of the array.
bool CMTArrayBase::Insert( const UINT pos, // Position const void *elem // The element to be inserted )  
---  
Parameters
pos
[in] The position at which you want to insert an element. Numbering starts from 0.
*elem
[in] A pointer to the element.
Return Value
If successful, returns true, otherwise returns false.
Note
The size of the element to be inserted must match the size of the array elements [CMTArrayBase::Width](cmtarraybase_width.md "Width").
CMTArrayBase::Insert
Insert array elements at the specified position in the array.
bool CMTArrayBase::Insert( const UINT pos, // Position const void *elem, // Array of elements const UINT total // Number of elements )  
---  
Parameters
pos
[in] The position at which you want to insert the elements. Numbering starts from 0.
*elem
[in] A pointer to the array of elements.
total
[in] The number of elements to be added.
Return Value
If successful, returns true, otherwise returns false.
Note
The size of the elements to be inserted must match the size of the array elements [CMTArrayBase::Width](cmtarraybase_width.md "Width").
CMTArrayBase::Insert
Insert an element in a pre-sorted array without disturbing the sort order.
void* CMTArrayBase::Insert( const void *elem, // The element to be inserted SMTSearch::SortFunctionPtr sort_function // Sort function )  
---  
Parameters
*elem
[in] A pointer to an element, which you want to insert into an array.
sort_function
[in] A pointer to the [sort function](smtsearch_sortfunction.md "Sort Function"). A pointer to the inserted elem element is passed as the first parameter in the sort function.
Return Value
A pointer to a new element of the array. If inserting an element fails, or the inserted element already exists in the array, it returns NULL.
Note
After successful insertion the size of the array increases by one element.
The array must be sorted first using the the [CMTArrayBase::QuickSort](cmtarraybase_sort.md "Sort") method. The sort function in the sort methods and insertion methods must match.
The size of the elements to be inserted must match the size of the array elements [CMTArrayBase::Width](cmtarraybase_width.md "Width").