# Append (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Append | [](cmtarraybase_addempty.md "AddEmpty") [](cmtarraybase_insert.md "Insert") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Append
Add an empty element to an array.
void* CMTArrayBase::Append()  
---  
Return Value
A pointer to the newly added element. If element adding failed, NULL is returned.
Note
After executing this method, the size of the current array object ([CMTArrayBase::Total](cmtarraybase_total.md "Total")) is increased by 1 element. The value of newly added element will be undefined.