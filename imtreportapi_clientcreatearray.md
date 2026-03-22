# ClientCreateArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientCreateArray | [](imtreportapi_clientcreate.md "ClientCreate") [](imtreportapi_clientget.md "ClientGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientCreateArray
Create an object of the client array.
IMTClientArray* IMTReportAPI::ClientCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTClientArray](imtclientarray.md "IMTClientArray") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTClientArray::Release](imtclientarray_release.md "Release") method of this object.