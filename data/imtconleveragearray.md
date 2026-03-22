# IMTConLeverageArray (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin")/ IMTConLeverageArray | [](imtconleverage_ruleget.md "CountryNext") [](imtconleveragearray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray
The IMTConLeverageArray class contains methods for working with an array of floating margin configurations:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconleveragearray_release.md "Release") | Delete the current object. |
| [Assign](imtconleveragearray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconleveragearray_clear.md "Clear") | Clear an object. |
| [Add](imtconleveragearray_add.md "Add") | Add an object of a floating margin configuration or an array of configurations to the end the array. |
| [AddCopy](imtconleveragearray_addcopy.md "AddCopy") | Add a copy of the floating margin configuration object or an array of copies to the end of the array. |
| [Delete](imtconleveragearray_delete.md "Delete") | Delete a floating margin configuration object by position. |
| [Detach](imtconleveragearray_detach.md "Detach") | Detach a floating margin configuration object from the array. |
| [Update](imtconleveragearray_update.md "Update") | Update the floating margin configuration at the specified array position. |
| [UpdateCopy](imtconleveragearray_updatecopy.md "UpdateCopy") | Update the floating margin configuration at the specified array position by copying the passed configuration object. |
| [Shift](imtconleveragearray_shift.md "Shift") | Change the position of a floating margin configuration in the array. |
| [Total](imtconleveragearray_total.md "Total") | Get the number of floating margin configuration objects in the array. |
| [Next](imtconleveragearray_next.md "Next") | Get a floating margin configuration object by position. |
| [Sort](imtconleveragearray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtconleveragearray_search.md "Search") | Search an array for an element that matches the search key. |
| [SearchGreatOrEq](imtconleveragearray_searchgreatoreq.md "SearchGreatOrEq") | Search an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtconleveragearray_searchgreater.md "SearchGreater") | Search an array for the first element greater than the search key. |
| [SearchLessOrEq](imtconleveragearray_searchlessoreq.md "SearchLessOrEq") | Search an array for the first element less than or equal to the search key. |
| [SearchLess](imtconleveragearray_searchless.md "SearchLess") | Search an array for the first element less than the search key. |
| [SearchLeft](imtconleveragearray_searchleft.md "SearchLeft") | Search an array for the first element equal to the search key. |
| [SearchRight](imtconleveragearray_searchright.md "SearchRight") | Search an array for the last element equal to the search key. |

Specifics of Array Operations
Please mind the following points while working with arrays:
  * Arrays store pointers to the appropriate interfaces, not the data. This determines specific operation features when [adding](imtconleveragearray_add.md "Add"), [update](imtconleveragearray_update.md "Update"), and [deleting](imtconleveragearray_delete.md "Delete") array elements.
  * Never add a reference to the same object into an array (when [adding](imtconleveragearray_add.md "Add") or [updating](imtconleveragearray_update.md "Update") an element), as this will lead to a crash when freeing the memory.
