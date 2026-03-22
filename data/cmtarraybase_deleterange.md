# DeleteRange (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ DeleteRange | [](cmtarraybase_delete.md "Delete") [](cmtarraybase_remove.md "Remove") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::DeleteRange
Delete the range of elements from the array.
bool CMTArrayBase::DeleteRange( const UINT from, // Start of range const UINT to // End of range )  
---  
Parameters
from
[in] Position of the first element in the range of elements to delete. Numbering starts from 0.
to
[in] The position of the last element in the range of elements to remove. Numbering starts from 0.
Return Value
If successful, returns true, otherwise returns false.