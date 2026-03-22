# Range (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Range | [](cmtarraybase_position.md "Position") [](cmtarraybase_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Range
Get the range of elements from the array.
bool CMTArrayBase::Range( const UINT from, // Start of range const UINT to, // End of range void* data // The range of elements )  
---  
Parameters
from
[in] The position of the first element in the range. Numbering starts from 0.
to
[in] The position of the last element in the range. Numbering starts from 0.
data
[out] A pointer to the received range of elements.
Return Value
If successful, returns true, otherwise returns false.
Note
The received elements of size (from - to) * [CMTArrayBase::Width](cmtarraybase_width.md "Width"), are copied into data.