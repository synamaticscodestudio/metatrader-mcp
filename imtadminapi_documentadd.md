# DocumentAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentAdd | [](imtadminapi_documentcreatearray.md "DocumentCreateArray") [](imtadminapi_documentaddbatch.md "DocumentAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentAdd
Add a document to a client record.
C++
MTAPIRES IMTAdminAPI::DocumentAdd( IMTDocument* document // document object )  
---  
.NET
MTRetCode CIMTAdminAPI.DocumentAdd( CIMTDocument document // document object )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A document can only be added from the applications connected to the trading server, on which the client has been created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.