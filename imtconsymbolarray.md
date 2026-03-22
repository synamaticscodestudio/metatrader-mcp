# IMTConSymbolArray (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols")/ IMTConSymbolArray | [](imtconsymbolsession_closeminutes.md "CloseMinutes") [](imtconsymbolarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolArray
The IMTConSymbolArray class contains methods for working with an array of symbol settings:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconsymbolarray_release.md "Release") | Delete the current object. |
| [Assign](imtconsymbolarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconsymbolarray_clear.md "Clear") | Clear an object. |
| [Add](imtconsymbolarray_add.md "Add") | Add a symbol object or a symbol array object to the end of an array. |
| [AddCopy](imtconsymbolarray_addcopy.md "AddCopy") | Add a copy of a symbol object or of a symbol array object to the array end. |
| [Delete](imtconsymbolarray_delete.md "Delete") | Delete a symbol object by position. |
| [Detach](imtconsymbolarray_detach.md "Detach") | Detach a symbol object from an array. |
| [Update](imtconsymbolarray_update.md "Update") | Update a symbol at the specified position of an array. |
| [UpdateCopy](imtconsymbolarray_updatecopy.md "UpdateCopy") | Update a symbol at the specified position of an array by copying the parameters of a passed symbol object. |
| [Shift](imtconsymbolarray_shift.md "Shift") | Change the position of a symbol in an array. |
| [Total](imtconsymbolarray_total.md "Total") | Get the number of symbol objects in an array. |
| [Next](imtconsymbolarray_next.md "Next") | Get a symbol object by position. |
| [Sort](imtconsymbolarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtconsymbolarray_search.md "Search") | Search an array for an element that matches the search key. |
| [SearchGreatOrEq](imtconsymbolarray_searchgreatoreq.md "SearchGreatOrEq") | Search an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtconsymbolarray_searchgreater.md "SearchGreater") | Search an array for the first element greater than the search key. |
| [SearchLessOrEq](imtconsymbolarray_searchlessoreq.md "SearchLessOrEq") | Search an array for the first element less than or equal to the search key. |
| [SearchLess](imtconsymbolarray_searchless.md "SearchLess") | Search an array for the first element less than the search key. |
| [SearchLeft](imtconsymbolarray_searchleft.md "SearchLeft") | Search an array for the first element equal to the search key. |
| [SearchRight](imtconsymbolarray_searchright.md "SearchRight") | Search an array for the last element equal to the search key. |

Specific Array Operations
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the appropriate interfaces, not the data itself. This requires some specific behavior [adding](imtconsymbolarray_add.md "Add"), [updating](imtconsymbolarray_update.md "Update") and [deleting](imtconsymbolarray_delete.md "Delete") array elements.
  * Please be sure to never add a link to one and the same object within an array (when [adding](imtconsymbolarray_add.md "Add") or [updating](imtconsymbolarray_update.md "Update") an element), as this will lead to a crash during memory release.
