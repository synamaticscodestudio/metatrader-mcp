# IMTComment (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTComment | [](imtclientsink_onclientdelete.md "OnClientDelete") [](imtcomment_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTComment
The IMTComment class is designed for working with comments on [clients](imtclient.md "IMTClient") and their [documents](imtdocument.md "IMTDocument"). The interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcomment_release.md "Release") | Delete the current object. |
| [Assign](imtcomment_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcomment_clear.md "Clear") | Clear an object. |
| [RecordID](imtcomment_recordid.md "RecordID") | Get the comment identifier. |
| [RelatedClient](imtcomment_relatedclient.md "RelatedClient") | Get the ID of the client with which the comment is associated. |
| [RelatedDocument](imtcomment_relateddocument.md "RelatedDocument") | Get the ID of the document with which the comment is associated. |
| [Flags](imtcomment_flags.md "Flags") | Get comment flags. |
| [Extra](imtcomment_extra.md "Extra") | Get additional information about the comment. |
| [Text](imtcomment_text.md "Text") | Get the comment text. |
| [CommentType](imtcomment_commenttype.md "CommentType") | Get the comment type. |
| [CommentResult](imtcomment_commentresult.md "CommentResult") | Get a call result from a comment. |
| [AttachmentsAdd](imtcomment_attachmentsadd.md "AttachmentsAdd") | Add an attachment to a comment. |
| [AttachmentsClear](imtcomment_attachmentsclear.md "AttachmentsClear") | Clear the list of comment attachments. |
| [AttachmentsTotal](imtcomment_attachmentstotal.md "AttachmentsTotal") | Get the number of attachments in a comment. |
| [AttachmentsNext](imtcomment_attachmentsnext.md "AttachmentsNext") | Get the comment attachment identifier by index. |

The IMTComment class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnCommentFlags](imtcomment_enum.htm#encommentflags) | Comment flags. |
| [EnCommentType](imtcomment_enum.htm#encommenttype) | Comment types. |
| [EnCommentResult](imtcomment_enum.htm#encommentresult) | Call results. |