# Compact (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Compact | [](cmtarraybase_shutdown.md "Shutdown") [](cmtarraybase_assign.md "Assign") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Compact
Reallocate an array in a smaller memory block.
void CMTArrayBase::Compact()  
---  
Note
This method allows to reduce the amount of memory allocated for the array. The condition for the implementation of this method is the availability of free space in the array of no less than the array change step ([CMTArrayBase::Max](cmtarraybase_max.md "Max") \- [CMTArrayBase::Total](cmtarraybase_total.md "Total") > [CMTArrayBase::Step](cmtarraybase_step.md "Step")).