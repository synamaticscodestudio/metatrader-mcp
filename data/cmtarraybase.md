# CMTArrayBase (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ CMTArrayBase | [](smtsearch_searchright.md "SearchRight") [](cmtarraybase_constructor.md "Constructor") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase
CMTArrayBase is the base class for working with arrays. This class allows you to work with arrays containing any type of data.
In addition to the base class for working with arrays, the MT5APIStorage.h class contains the description of the additional class [TMTArray](cmtarraybase_templates.md "Templates"), which allows to work with typed data arrays. Methods similar to CMTArrayBase methods are used for working with such arrays.
To start working with the arrays using the methods of the CMTArrayBase class, call the [CMTArrayBase::CMTArrayBase()](cmtarraybase_constructor.md "Constructor") constructor and set the size of an element in the array and step of its size change. You can then use the following methods for working with it:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Total](cmtarraybase_total.md "Total") | Get the number of elements in the array. |
| [Width](cmtarraybase_width.md "Width") | Get the size of one entry in the array. |
| [Max](cmtarraybase_max.md "Max") | Get the maximum number of elements that can be placed in the array without memory reallocation. |
| [Step](cmtarraybase_step.md "Step") | Get the step of array size change. |
| [Compare](cmtarraybase_compare.md "Compare") | Comparison of the current object with the specified array. |
| [Clear](cmtarraybase_clear.md "Clear") | Clear an array. |
| [Zero](cmtarraybase_zero.md "Zero") | Fill the array with zeros. |
| [Shutdown](cmtarraybase_shutdown.md "Shutdown") | Free the memory allocated for the array. |
| [Compact](cmtarraybase_compact.md "Compact") | Reallocate an array in a smaller memory block. |
| [Assign](cmtarraybase_assign.md "Assign") | Copy data from the specified array to the current array object. |
| [Swap](cmtarraybase_swap.md "Swap") | Swap the contents of the current array and the contents of the passed array object. |
| [Reserve](cmtarraybase_reserve.md "Reserve") | Change the size of the array to the specified number of elements. |
| [Resize](cmtarraybase_resize.md "Resize") | Reserve memory for the specified number of elements in the array. |
| [Add](cmtarraybase_add.md "Add") | Add elements to an array. |
| [AddRange](cmtarraybase_addrange.md "AddRange") | Add a range of elements from the specified array object to the current array object. |
| [AddEmpty](cmtarraybase_addempty.md "AddEmpty") | Add empty elements to an array. |
| [Append](cmtarraybase_append.md "Append") | Add an empty element to an array. |
| [Insert](cmtarraybase_insert.md "Insert") | Insert elements to an array. |
| [InsertEmpty](cmtarraybase_insertempty.md "InsertEmpty") | insert empty elements at the specified array position. |
| [Delete](cmtarraybase_delete.md "Delete") | Delete elements from an array. |
| [DeleteRange](cmtarraybase_deleterange.md "DeleteRange") | Delete the range of elements from the array. |
| [Remove](cmtarraybase_remove.md "Remove") | Delete an element taking into account sorting. |
| [Update](cmtarraybase_update.md "Update") | Update the element at the specified position in the array. |
| [Shift](cmtarraybase_shift.md "Shift") | Shift an element in the array. |
| [Trim](cmtarraybase_trim.md "Trim") | Delete elements from the beginning of the array. |
| [Next](cmtarraybase_next.md "Next") | Get the array element or a pointer to the array element. |
| [Prev](cmtarraybase_prev.md "Prev") | Get a pointer to the previous array element based on the pointer to the element. |
| [At](cmtarraybase_at.md "At") | Get a pointer to the array element at the specified position. |
| [Position](cmtarraybase_position.md "Position") | Get the position of an element in the array based on the pointer to the element. |
| [Range](cmtarraybase_range.md "Range") | Get the range of elements from the array. |
| [Sort](cmtarraybase_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](cmtarraybase_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](cmtarraybase_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first (from the array beginning) element greater than or equal to the search key. |
| [SearchGreater](cmtarraybase_searchgreater.md "SearchGreater") | Search in an array the first (from the array beginning) element greater than the search key. |
| [SearchLessOrEq](cmtarraybase_searchlessoreq.md "SearchLessOrEq") | Search in an array the first (from the end) element less than or equal to the search key. |
| [SearchLess](cmtarraybase_searchless.md "SearchLess") | Search in an array the first (from the end) element less than the search key. |
| [SearchLeft](cmtarraybase_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](cmtarraybase_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |