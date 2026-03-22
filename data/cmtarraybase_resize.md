# Resize (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Resize | [](cmtarraybase_reserve.md "Reserve") [](cmtarraybase_add.md "Add") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Resize
Change the size of the array to the specified number of elements.
bool CMTArrayBase::Resize( const UINT size // New size )  
---  
Parameters
size
[in] The target size of the array. It is specified as the number of elements.
Return Value
If successful, returns true, otherwise returns false.
Note
If the new size size is less than the current one, the number of elements in the array ([CMTArrayBase::Total](cmtarraybase_total.md "Total")) becomes equal to size. If the new size is greater than the current one, then (size - CMTArrayBase::Total) elements are added to the array. The value of newly added elements will be undefined.