# Constructor (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Constructor | [](cmtarraybase.md "CMTArrayBase") [](cmtarraybase_templates.md "Templates") |
| --- | --- | --- |
| --- | --- |

Constructor
The size of elements in the array and the array change step for memory reallocation are specified in the CMTArrayBase class constructor.
CMTArrayBase::CMTArrayBase( const UINT width, // Element size const UINT step // Size change step )  
---  
Parameters
width
[in] The size of one array element in bytes.
step
[in] The array size change step for reallocation of memory for the array. The step is specified as a number of elements.