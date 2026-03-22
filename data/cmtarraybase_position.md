# Position (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Position | [](cmtarraybase_at.md "At") [](cmtarraybase_range.md "Range") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Position
Get the position of an element in the array based on the pointer to the element.
int CMTArrayBase::Position( const void* ptr // A pointer to the element )  
---  
Parameters
ptr
[in] A pointer to the element.
Return Value
The position of the element in the array. Numbering starts from 0.