# IMTSubscriptionArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions")/ IMTSubscriptionArray | [](imtsubscription_timeexpire.md "TimeExpire") [](imtsubscriptionarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray
The interface enables convenient operations with arrays of subscriptions. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtsubscriptionarray_release.md "Release") | Delete the current object. |
| [Assign](imtsubscriptionarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtsubscriptionarray_clear.md "Clear") | Clear an object. |
| [Add](imtsubscriptionarray_add.md "Add") | Add a subscription object or an array of subscription objects to the end of an array. |
| [AddCopy](imtsubscriptionarray_addcopy.md "AddCopy") | Add a copy of a subscription object or of an array of subscription objects to the end of an array. |
| [Delete](imtsubscriptionarray_delete.md "Delete") | Delete a subscription object by position. |
| [Detach](imtsubscriptionarray_detach.md "Detach") | Detach a subscription object from an array. |
| [Update](imtsubscriptionarray_update.md "Update") | Change a subscription at the specified position of an array. |
| [UpdateCopy](imtsubscriptionarray_updatecopy.md "UpdateCopy") | Change a subscription at the specified position of an array by copying the parameters of a passed subscription object. |
| [Shift](imtsubscriptionarray_shift.md "Shift") | Change the position of a subscription in an array. |
| [Total](imtsubscriptionarray_total.md "Total") | Get the number of subscription objects in an array. |
| [Next](imtsubscriptionarray_next.md "Next") | Get a subscription object by position. |
| [Sort](imtsubscriptionarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtsubscriptionarray_search.md "Search") | Search in an array for an element that matches the search key. |
| [SearchGreatOrEq](imtsubscriptionarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtsubscriptionarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtsubscriptionarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtsubscriptionarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtsubscriptionarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtsubscriptionarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the corresponding interfaces, not the data. This determines some specific features in operations when [adding](imtsubscriptionarray_add.md "Add"), [updating](imtsubscriptionarray_update.md "Update") and [deleting](imtsubscriptionarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtsubscriptionarray_add.md "Add") or [deleting](imtsubscriptionarray_update.md "Update") elements), because this will lead to a crash during memory release.
