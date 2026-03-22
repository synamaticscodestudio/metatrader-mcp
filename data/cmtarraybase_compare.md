# Compare (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Compare | [](cmtarraybase_step.md "Step") [](cmtarraybase_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Compare
Comparison of the current object with the specified array.
bool CMTArrayBase::Compare( const CMTArrayBase& array // An array to compare )  
---  
Parameters
array
[in] A reference to the [CMTArrayBase](cmtarraybase.md "CMTArrayBase") array object, with which you need to compare the current array object.
Return Value
Arrays are considered equal if their sizes ([CMTArrayBase::Width](cmtarraybase_width.md "Width")), the number of elements ([CMTArrayBase::Total](cmtarraybase_total.md "Total")) and contents are equal. In this case, it returns true. If the arrays are not equal, it returns false.