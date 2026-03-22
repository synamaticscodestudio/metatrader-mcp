# Reason (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Reason | [](imtrequest_positionbyexternalid.md "PositionByExternalID") [](imtrequest_apidataset.md "ApiDataSet") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Reason
Get the reason for creating the request.
C++
UINT IMTRequest::Reason() const  
---  
.NET (Gateway/Manager API)
uint CIMTRequest.Reason()  
---  
Return Value
A value from the [IMTOrder::EnOrderReason](imtorder_enum.htm#enorderreason) enumeration.
IMTRequest::ReasonSet
Set the reason for creating the request.
C++
MTAPIRES IMTRequest::Reason( const UINT reason // reason )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Reason( uint reason // reason )  
---  
Parameters
reason
[in] Reason for creating the request. The value is passed using the [IMTOrder::EnOrderReason](imtorder_enum.htm#enorderreason) enumeration.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.
Note
Do not change request setting reasons unless absolutely necessary as this may violate the data integrity.