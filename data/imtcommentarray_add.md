# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Add | [](imtcommentarray_clear.md "Clear") [](imtcommentarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Add
Add a comment object to the end of an array.
C++
MTAPIRES IMTCommentArray::Add( IMTComment* comment // Comment to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Add( CIMTComment comment // Comment to be added )  
---  
Parameters
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the lifetime of the 'comment' object is passed to the array object. Thus, when deleting an array object (by a call of [IMTCommentArray::Release](imtcommentarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTCommentArray::Add
Add a comment array object to the end of an array.
C++
MTAPIRES IMTCommentArray::Add( IMTCommentArray* array // Array of comments to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Add( CIMTCommentArray array // Array of comments to be added )  
---  
Parameters
array
[in] Object of the comments array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the 'array' object, at the end of the current array and clears the 'array' object.
After a successful call of this method, control of objects that earlier belonged to the 'array' object is passed to the current array object. The 'array' object is cleared ([IMTCommentArray::Total](imtcommentarray_total.md "Total") call will return 0). When deleting the current array object ([IMTCommentArray::Release](imtcommentarray_release.md "Release") call), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash. Use [IMTCommentArray::Delete](imtcommentarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTCommentArray *array =api->CommentCreateArray();  IMTComment *comment=api->CommentCreate(); //--- array->Add(comment); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'comment' becomes invalid ('Release' was called) //--- Incorrect use example IMTCommentArray *array =api->CommentCreateArray();  IMTComment *comment=api->CommentCreate(); //--- array->Add(comment); array->Add(comment); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---