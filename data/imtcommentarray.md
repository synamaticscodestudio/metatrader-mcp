# IMTCommentArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTCommentArray | [](imtcomment_attachmentsnext.md "AttachmentsNext") [](imtcommentarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray
The IMTCommentArray class is designed for operations with comment arrays. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcommentarray_release.md "Release") | Delete the current object. |
| [Assign](imtcommentarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcommentarray_clear.md "Clear") | Clear an object. |
| [Add](imtcommentarray_add.md "Add") | Add a comment object or an array of comment objects to the end of an array. |
| [AddCopy](imtcommentarray_addcopy.md "AddCopy") | Add a copy of a comment object or an array of comment objects to the end of an array. |
| [Delete](imtcommentarray_delete.md "Delete") | Delete a comment object by its position. |
| [Detach](imtcommentarray_detach.md "Detach") | Detach a comment object from an array. |
| [Update](imtcommentarray_update.md "Update") | Change a comment at the specified position of an array. |
| [UpdateCopy](imtcommentarray_updatecopy.md "UpdateCopy") | Change a comment at the specified position of an array by copying the parameters of a passed comment object. |
| [Shift](imtcommentarray_shift.md "Shift") | Change the position of a comment in an array. |
| [Total](imtcommentarray_total.md "Total") | Get the number of comment objects in an array. |
| [Next](imtcommentarray_next.md "Next") | Get a comment object by its position. |
| [Sort](imtcommentarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtcommentarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtcommentarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtcommentarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtcommentarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtcommentarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtcommentarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtcommentarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This sets some specific features when [adding](imtcommentarray_add.md "Add"), [updating](imtcommentarray_update.md "Update") and [deleting](imtcommentarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtcommentarray_add.md "Add") or [updating](imtcommentarray_update.md "Update") an element), because this will lead to a crash during memory release.
