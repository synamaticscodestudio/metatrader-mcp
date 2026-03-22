# IMTPositionArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions")/ IMTPositionArray | [](imtposition_actiongateway.md "ActionGateway") [](imtpositionarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray
The IMTPositionArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtpositionarray_release.md "Release") | Delete the current object. |
| [Assign](imtpositionarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtpositionarray_clear.md "Clear") | Clear an object. |
| [Add](imtpositionarray_add.md "Add") | Add an object of a position or array of positions at the end of an array. |
| [AddCopy](imtpositionarray_addcopy.md "AddCopy") | Add a copy of an object of a position or array of positions at the end of an array. |
| [Delete](imtpositionarray_delete.md "Delete") | Delete the object of a trade position by the index. |
| [Detach](imtpositionarray_detach.md "Detach") | Detach an object of a trade position from an array. |
| [Update](imtpositionarray_update.md "Update") | Change a trade position at the specified index of an array. |
| [UpdateCopy](imtpositionarray_updatecopy.md "UpdateCopy") | Change a trade position at the specified position of an array by copying the parameters of a passed object of a trade position. |
| [Shift](imtpositionarray_shift.md "Shift") | Shift a trade position in an array. |
| [Total](imtpositionarray_total.md "Total") | Get the number of objects of trade positions in an array. |
| [Next](imtpositionarray_next.md "Next") | Get an object of a trade position by the index. |
| [Sort](imtpositionarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtpositionarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtpositionarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtpositionarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtpositionarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtpositionarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtpositionarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtpositionarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtpositionarray_add.md "Add"), [updating](imtpositionarray_update.md "Update") and [removing](imtpositionarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtpositionarray_add.md "Add") or [updating](imtpositionarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
