# Add (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Add | [](cmtarraybase_resize.md "Resize") [](cmtarraybase_addrange.md "AddRange") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Add
Add an element to an array.
bool CMTArrayBase::Add( const void *elem // An element to be added )  
---  
Parameters
*elem
[in] A pointer to the element to be added.
Return Value
If successful, returns true, otherwise returns false.
Note
The size of the elements to be added must match the size of the array elements [CMTArrayBase::Width](cmtarraybase_width.md "Width").
CMTArrayBase::Add
Add an array of elements to an array.
bool CMTArrayBase::Add( const void *elem, // Array of elements const UINT total // Number of elements )  
---  
Parameters
*elem
[in] The array of elements that you want to add.
total
[in] The number of elements in the array to be added.
Return Value
If successful, returns true, otherwise returns false.
Note
The size of all elements to be added must match the size of the array elements [CMTArrayBase::Width](cmtarraybase_width.md "Width").
CMTArrayBase::Add
Add an array object to the current array object.
bool CMTArrayBase::Add( const CMTArrayBase& array // Array object )  
---  
Parameters
array
[in] An object of the array [CMTArrayBase](cmtarraybase.md "CMTArrayBase") that you want to add.
Return Value
If successful, returns true, otherwise returns false.
Note
Sizes of elements of the arrays ([CMTArrayBase::Width](cmtarraybase_width.md "Width")) must be the same.