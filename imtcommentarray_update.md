# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Update | [](imtcommentarray_detach.md "Detach") [](imtcommentarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Update
Change a comment at the specified position of an array.
C++
MTAPIRES IMTCommentArray::Update( const UINT pos, // Position IMTComment* comment // Comment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Update( uint pos, // Position CIMTComment comment // Comment object )  
---  
Parameters
pos
[in] Comment position in an array, starting with 0.
comment
[in] [Comment object](imtcomment.md "IMTComment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The IMTCommentArray::Update method deletes the previous element ([IMTComment::Release](imtcomment_release.md "Release") call) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (by a call of IMTCommentArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object causes the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause plugin and server crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTCommentArray *array =api->CommentCreateArray();  IMTComment *comment1=api->CommentCreate(); IMTComment *comment2=api->CommentCreate(); //--- array->Add(comment1); array->Update(0,comment2); // the first element (the comment1 object) is replaced by comment2 //--- after that the comment1 element will be released via Release, and the comment2 lifetime will be controlled by the array  
---