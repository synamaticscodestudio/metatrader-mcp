# IMTDocument (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTDocument | [](imtcommentsink_oncommentdelete.md "OnCommentDelete") [](imtdocument_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDocument
The IMTDocument class is designed for working with [client](imtclient.md "IMTClient") documents. The interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdocument_release.md "Release") | Delete the current object. |
| [Assign](imtdocument_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdocument_clear.md "Clear") | Clear an object. |
| [RecordID](imtdocument_recordid.md "RecordID") | Get and set the document identifier. |
| [RelatedClient](imtdocument_relatedclient.md "RelatedClient") | Get and set the client ID with which the document is associated. |
| [ApprovedDate](imtdocument_approveddate.md "ApprovedDate") | Get and set the document approval date. |
| [ApprovedBy](imtdocument_approvedby.md "ApprovedBy") | Get and set the manager who approved/checked the document. |
| [DateIssue](imtdocument_dateissue.md "DateIssue") | Get and set the document issue date. |
| [DateExpiration](imtdocument_dateexpiration.md "DateExpiration") | Get and set the document expiry date. |
| [DocumentType](imtdocument_documenttype.md "DocumentType") | Get and set the document type. |
| [DocumentSubtype](imtdocument_documentsubtype.md "DocumentSubtype") | Get and set the document subtype. |
| [DocumentName](imtdocument_documentname.md "DocumentName") | Get and set the document name. |
| [DocumentComment](imtdocument_documentcomment.md "DocumentComment") | Get and set a comment to a document. |
| [DocumentStatus](imtdocument_documentstatus.md "DocumentStatus") | Get and set the document status. |
| [AttachmentsAdd](imtdocument_attachmentsadd.md "AttachmentsAdd") | Add a file to a document. |
| [AttachmentsClear](imtdocument_attachmentsclear.md "AttachmentsClear") | Clear the list of document files. |
| [AttachmentsTotal](imtdocument_attachmentstotal.md "AttachmentsTotal") | Get and set the number of files in a document. |
| [AttachmentsNext](imtdocument_attachmentsnext.md "AttachmentsNext") | Get and set the file ID from a document, by index. |

The IMTDocument class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnDocumentTypes](imtdocument_enum.htm#endocumenttypes) | Document types. |
| [EnDocumentSubtype](imtdocument_enum.htm#endocumenttypes) | Document subtypes. |
| [EnDocumentStatus](imtdocument_enum.htm#endocumentstatus) | Document statuses. |