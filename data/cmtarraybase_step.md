# Step (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Step | [](cmtarraybase_max.md "Max") [](cmtarraybase_compare.md "Compare") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Step
Get the step of array size change.
UINT CMTArrayBase::Step()  
---  
Return Value
The step of array size change in elements.
Note
The size change step allows to avoid too frequent reallocation of memory for the array. The step determines by how many elements the array size increases with reallocation of memory for it.