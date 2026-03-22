# IMTOrderArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders")/ IMTOrderArray | [](imtorder_modificationflags.md "ModificationFlags") [](imtorderarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray
The IMTOrderArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtorderarray_release.md "Release") | Delete the current object. |
| [Assign](imtorderarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtorderarray_clear.md "Clear") | Clear an object. |
| [Add](imtorderarray_add.md "Add") | Adds an object or an array of objects of trade orders at the end of an array. |
| [AddCopy](imtorderarray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of trade orders at the end of an array. |
| [Delete](imtorderarray_delete.md "Delete") | Delete an object of a trade order by its position. |
| [Detach](imtorderarray_detach.md "Detach") | Detach an object of a trade order from an array. |
| [Update](imtorderarray_update.md "Update") | Changes an order at the specified position of an array. |
| [UpdateCopy](imtorderarray_updatecopy.md "UpdateCopy") | Change an order at the specified position of an array by copying the parameters of a passed object of an order. |
| [Shift](imtorderarray_shift.md "Shift") | Change the position of an order in an array. |
| [Total](imtorderarray_total.md "Total") | Get the number of objects of trade orders in an array. |
| [Next](imtorderarray_next.md "Next") | Get an object of a trade order by its position. |
| [Sort](imtorderarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtorderarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtorderarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtorderarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtorderarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtorderarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtorderarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtorderarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtorderarray_add.md "Add"), [updating](imtorderarray_update.md "Update") and [removing](imtorderarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtorderarray_add.md "Add") or [updating](imtorderarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
