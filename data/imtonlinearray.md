# IMTOnlineArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections")/ IMTOnlineArray | [](imtonline_computerid.md "ComputerID") [](imtonlinearray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray
The IMTOnlineArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtonlinearray_release.md "Release") | Delete the current object. |
| [Assign](imtonlinearray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtonlinearray_clear.md "Clear") | Clear an object. |
| [Add](imtonlinearray_add.md "Add") | Add an object or an array of objects of client records at the end of an array. |
| [AddCopy](imtonlinearray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of client records at the end of an array. |
| [Delete](imtonlinearray_delete.md "Delete") | Delete a client record object by its position. |
| [Detach](imtonlinearray_detach.md "Detach") | Detach a client record object from an array. |
| [Update](imtonlinearray_update.md "Update") | Change a client record at the specified position of an array. |
| [UpdateCopy](imtonlinearray_updatecopy.md "UpdateCopy") | Change a client record at the specified position of an array by copying the parameters of a passed object of a client record. |
| [Shift](imtonlinearray_shift.md "Shift") | Change the position of a client record in an array. |
| [Total](imtonlinearray_total.md "Total") | Get the number of client record objects in an array. |
| [Next](imtonlinearray_next.md "Next") | Get a client record object by its position. |
| [Sort](imtonlinearray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtonlinearray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtonlinearray_searchgreatoreq.md "SearchGreatOrEq") | Searches in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtonlinearray_searchgreater.md "SearchGreater") | Searches in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtonlinearray_searchlessoreq.md "SearchLessOrEq") | Searches in an array for the first element less than or equal to the search key. |
| [SearchLess](imtonlinearray_searchless.md "SearchLess") | Searches in an array for the first element less than the search key. |
| [SearchLeft](imtonlinearray_searchleft.md "SearchLeft") | Searches in an array for the first element equal to the search key. |
| [SearchRight](imtonlinearray_searchright.md "SearchRight") | Searches in an array for the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtonlinearray_add.md "Add"), [updating](imtonlinearray_update.md "Update") and [removing](imtonlinearray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtonlinearray_add.md "Add") or [updating](imtonlinearray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
