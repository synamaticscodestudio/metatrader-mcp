# Trim (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Trim | [](cmtarraybase_shift.md "Shift") [](cmtarraybase_next.md "Next") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Trim
Delete elements from the beginning of the array.
bool CMTArrayBase::Trim( const UINT size // Number of elements )  
---  
Parameters
size
[in] The number of elements that you need to delete from the beginning of the array.
Return Value
If successful, returns true, otherwise returns false.
Note
The method deletes size elements from the beginning of the array.