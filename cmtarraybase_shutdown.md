# Shutdown (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Shutdown | [](cmtarraybase_zero.md "Zero") [](cmtarraybase_compact.md "Compact") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Shutdown
Free the memory allocated for the array.
void CMTArrayBase::Shutdown()  
---  
Note
After executing this method, the number of elements in the array ([CMTArrayBase::Total](cmtarraybase_total.md "Total")) and the maximum allowed number of elements ([CMTArrayBase::Max](cmtarraybase_max.md "Max")) will be equal to zero.