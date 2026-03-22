# Swap (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Swap | [](cmtarraybase_assign.md "Assign") [](cmtarraybase_reserve.md "Reserve") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Swap
Swap the contents of the current array and the contents of the passed array object.
void CMTArrayBase::Swap( CMTArrayBase &arr // An array for exchanging contents )  
---  
Parameters
&arr
[in] The array, with which you want to swap contents.
Note
After executing this method, the current array will contain data from the passed array, and the passed array will contain data from the current one.
Sizes of elements of the arrays ([CMTArrayBase::Width](cmtarraybase_width.md "Width")) must be the same.