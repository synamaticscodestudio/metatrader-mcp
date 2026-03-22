# Reserve (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Reserve | [](cmtarraybase_swap.md "Swap") [](cmtarraybase_resize.md "Resize") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Reserve
Reserve memory for the specified number of elements in the array.
bool CMTArrayBase::Reserve( const UINT size // Number of elements )  
---  
Parameters
size
[in] The number of elements, for which you need to reserve memory.
Return Value
If successful, returns true, otherwise returns false.
Note
The specified number of elements is normalized to the array size change step Step. If there is enough reserved memory for the specified number of elements, no action is performed.