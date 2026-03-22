# APIDataNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ APIDataNext | [](imtdeal_apidataset.md "ApiDataSet") [](imtdeal_apidataupdate.md "APIDataUpdate") |
| --- | --- | --- |
| --- | --- |

IMTDeal::APIDataNext
Gets the INT64-type custom parameter of a deal by a position.
C++
MTAPIRES IMTDeal::APIDataNext( const UINT pos, // Position of the parameter const USHORT& app_id, // Application ID const UCHAR& id, // Parameter ID INT64& value // A reference to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out long value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTDeal::APIDataNext
Gets the UINT64-type custom parameter of a deal by a position.
C++
MTAPIRES IMTDeal::APIDataNext( const UINT pos, // Position of the parameter const USHORT& app_id, // Application ID const UCHAR& id, // Parameter ID UINT64& value // A pointer to the valu ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out ulong value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTDeal::APIDataNext
Gets the double-type custom parameter of a deal by a position.
C++
MTAPIRES IMTDeal::APIDataNext( const UINT pos, // Position of the parameter const USHORT& app_id, // Application ID const UCHAR& id, // Parameter ID double& value // A pointer to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out double value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.