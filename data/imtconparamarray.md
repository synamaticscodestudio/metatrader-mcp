# IMTConParamArray (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters")/ IMTConParamArray | [](imtconparam_valuecolor.md "ValueColor") [](imtconparamarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray
The IMTConParamArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconparamarray_release.md "Release") | Delete the current object. |
| [Assign](imtconparamarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconparamarray_clear.md "Clear") | Clear an object. |
| [Add](imtconparamarray_add.md "Add") | Adds an object of a parameter or array of parameters at the end of an array. |
| [AddCopy](imtconparamarray_addcopy.md "AddCopy") | Adds a copy of a parameter object of an array of copies at the end of an array. |
| [Delete](imtconparamarray_delete.md "Delete") | Deletes an object of a parameter at the specified position. |
| [Detach](imtconparamarray_detach.md "Detach") | Detaches an object of a parameter from an array. |
| [Update](imtconparamarray_update.md "Update") | Changes a parameter at the specified position of an array. |
| [UpdateCopy](imtconparamarray_updatecopy.md "UpdateCopy") | Changes a parameter at the specified position of an array by copying the passed parameter object. |
| [Shift](imtconparamarray_shift.md "Shift") | Changes the position of a parameter in an array. |
| [Total](imtconparamarray_total.md "Total") | Gets the number of objects of parameters in an array. |
| [Next](imtconparamarray_next.md "Next") | Gets an object of a parameter at the specified position. |
| [Sort](imtconparamarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtconparamarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtconparamarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtconparamarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtconparamarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtconparamarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtconparamarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtconparamarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtconparamarray_add.md "Add"), [updating](imtconparamarray_update.md "Update") and [removing](imtconparamarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtconparamarray_add.md "Add") or [updating](imtconparamarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
