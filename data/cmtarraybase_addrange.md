# AddRange (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ AddRange | [](cmtarraybase_add.md "Add") [](cmtarraybase_addempty.md "AddEmpty") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::AddRange
Add a range of elements from the specified array object to the current array object.
bool CMTArrayBase::AddRange( const CMTArrayBase& array, // Array object const UINT from, // Start of range const UINT to // End of range )  
---  
Parameters
array
[in] An array object [CMTArrayBase](cmtarraybase.md "CMTArrayBase"), from which a range of elements should be added.
from
[in] The index of the first element in the range. Numbering starts from 0.
to
[in] The index of the last element in the range. Numbering starts from 0.
Return Value
If successful, returns true, otherwise returns false.
Note
Sizes of elements of the arrays ([CMTArrayBase::Width](cmtarraybase_width.md "Width")) must be the same.