# DocumentUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ DocumentUpdate | [](imtadminapi_documentaddbatcharray.md "DocumentAddBatchArray") [](imtadminapi_documentupdatebatch.md "DocumentUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DocumentUpdate
Change a document in the client record.
C++
MTAPIRES IMTAdminAPI::DocumentUpdate( IMTDocument* document // document object )  
---  
.NET
MTRetCode CIMTAdminAPI.DocumentUpdate( CIMTDocument document // document object )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A document can only be changed from the applications connected to the trading server, on which the client has been created ([IMTDocument::RelatedClient](imtdocument_relatedclient.md "RelatedClient")). The [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code will be returned for all other applications. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.