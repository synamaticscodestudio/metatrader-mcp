# Delete (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Delete | [](cmtarraybase_insertempty.md "InsertEmpty") [](cmtarraybase_deleterange.md "DeleteRange") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Delete
Delete an element from an array at the specified position.
bool CMTArrayBase::Delete( const UINT pos // Position )  
---  
Parameters
pos
[in] Position of the element to remove. Numbering starts from 0.
Return Value
If successful, returns true, otherwise returns false.
CMTArrayBase::Delete
Delete an element from an array at the address.
bool CMTArrayBase::Delete1( const void *elem // The element to delete )  
---  
Parameters
*elem
[in] The address of the element that you want to delete.
Return Value
If successful, returns true, otherwise returns false.
Note
The address must belong to the array.
Example:
CMTArrayBase arr(sizeof(int),16); int value1=1; arr.Add(&value1); // Add an element, its index is 0 int value2=2; arr.Add(&value2); // Add an element, its index is 1 void *ptr=arr.At(1); // receive a pointer to the element with the index 1 arr.Delete(ptr); // delete this element  
---