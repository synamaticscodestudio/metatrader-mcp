# Shift (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Shift | [](cmtarraybase_update.md "Update") [](cmtarraybase_trim.md "Trim") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Shift
Shift an element in the array.
bool CMTArrayBase::Shift( const UINT pos,  const int shift // Shift )  
---  
Parameters
pos
[in] The position of the element to shift. The numbering starts with zero.
shift
[in] Shift from its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
If successful, returns true, otherwise returns false.