# AddEmpty (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ AddEmpty | [](cmtarraybase_addrange.md "AddRange") [](cmtarraybase_append.md "Append") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::AddEmpty
Add empty elements to an array.
bool CMTArrayBase::AddEmpty( const UINT total // Number of elements )  
---  
Parameters
total
[in] The number of empty elements to be added.
Return Value
If successful, returns true, otherwise returns false.
Note
After executing this method, the number of elements in the current array ([CMTArrayBase::Total](cmtarraybase_total.md "Total")) will be increased by total elements. The value of newly added elements will be undefined.